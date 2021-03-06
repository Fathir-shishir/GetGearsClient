import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const{id} = useParams()
    const { register,watch, formState: { formErrors }, handleSubmit,reset} = useForm();
    const[purchasedetails,setpurchasedetailts]= useState([])
    useEffect(()=>{
        fetch(`https://protected-hamlet-28459.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(data=>setpurchasedetailts(data))
    },[id])
    if(loading){
        return <h1>loading</h1>
     }

     const quantity =(watch("quantity"))
     const totalPrice = quantity * purchasedetails.price
    const onSubmit = Udata => {
        const orderInfo= {
            orderId : purchasedetails._id,
            userName : user.displayName,
            productName : purchasedetails.name,
            email : user.email,
            quantity :quantity,
            totalPrice : totalPrice,
            PhoneNumber : Udata.PhoneNo
        }
      console.log(orderInfo)
      fetch("https://protected-hamlet-28459.herokuapp.com/orderDetails",{
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body:JSON.stringify(orderInfo)
      })
      .then(res=>res.json())
      .then(data =>{
        if(data.success){
            console.log("succcess")
        }
      })

      
      reset()
};
    return (
        <div class="hero min-h-screen bg-base-200">
       
        <div class="hero-content flex-col lg:flex-row-re verse w-1/2">
         <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           <h1 className=' text-3xl text-center mt-3 text-bold'>Place Order</h1>
            <form onSubmit={handleSubmit(onSubmit)} class="card-body">
            <div class="form-control">
                <label class="label">
                  <span class="label-text">User Name</span>
                </label>
                <input {...register("userName")} type="text" placeholder="name" class="input input-bordered" 
                value={user?.displayName} 
                />
              </div>
            <div class="form-control">
                <label class="label">
                  <span class="label-text">Product Name</span>
                </label>
                <input {...register("ProductName")} type="text" placeholder="name" class="input input-bordered" 
                value={purchasedetails.name} 
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input  {...register("email")} type="email" placeholder={`email : ${user?.email}`} class="input input-bordered" value={user?.email} readOnly />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">quantity (min:{purchasedetails.minimumOrderQuantity} max:{purchasedetails.availableQuantity})</span>
                </label>
                <input  {...register("quantity", { min:purchasedetails.minimumOrderQuantity,max:purchasedetails.availableQuantity })} type="number" placeholder={`quantity`} class="input input-bordered"  />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Total Price </span>
                </label>
                <input {...register("totalPrice", )} type="number" placeholder="Total price" class="input input-bordered" value={totalPrice} readOnly/>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone Number </span>
                </label>
                <input {...register("PhoneNo", { required: true })} type="number" placeholder="Phone Number" class="input input-bordered" />
              </div>
              <div class="form-control mt-6">
                <button type='submit' class="btn btn-primary">Place Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Purchase;