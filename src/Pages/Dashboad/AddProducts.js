import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProducts = () => {
    const { register,watch, formState: { formErrors }, handleSubmit,reset} = useForm();
    const onSubmit =data =>{
        console.log(data)
        fetch("https://protected-hamlet-28459.herokuapp.com/services",{
      method:"POST",
      headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(data =>{
    toast("successful");
    reset()
  })
}
    return (
        <div>
            <h1>add products</h1>
            <div class="hero min-h-screen bg-base-200">
       
       <div class="hero-content flex-col lg:flex-row-re verse lg:w-1/2">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className=' text-3xl text-center mt-3 text-bold'>Add Product</h1>
           <form onSubmit={handleSubmit(onSubmit)} class="card-body">
           <div class="form-control">
               <label class="label">
                 <span class="label-text">Product Name</span>
               </label>
               <input {...register("productName")} type="text" placeholder="Product Name" class="input input-bordered" 
                />
             </div>
             <div class="form-control">
               <label class="label">
                 <span class="label-text">Image URL</span>
               </label>
               <input  {...register("img")} type="text" placeholder="Image" class="input input-bordered"/>
             </div>
             <div class="form-control">
               <label class="label">
                 <span class="label-text">Discription </span>
               </label>
               <input  {...register("discription")} type="text" placeholder="Discription" class="input input-bordered"  />
             </div>
             <div class="form-control">
               <label class="label">
                 <span class="label-text">Minimun Order Quantity</span>
               </label>
               <input {...register("minimumOrderQuantity")} type="number" placeholder="Minimun Order Quantity" class="input input-bordered" />
             </div>
             <div class="form-control">
               <label class="label">
                 <span class="label-text">Available Quantity </span>
               </label>
               <input {...register("availableQuantity", { required: true })} type="number" placeholder="Available Quantity" class="input input-bordered" />
             </div>
             <div class="form-control">
               <label class="label">
                 <span class="label-text">Price</span>
               </label>
               <input {...register("price", { required: true })} type="number" placeholder="Price" class="input input-bordered" />
             </div>
             <div class="form-control mt-6">
               <button type='submit' class="btn btn-primary">Add product</button>
             </div>
           </form>
         </div>
       </div>
     </div>
        </div>
    );
};

export default AddProducts;