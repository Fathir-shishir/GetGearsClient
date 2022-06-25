import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register,watch, formState: { formErrors }, handleSubmit,reset} = useForm();
    const onSubmit =data =>{
            console.log(data)
            fetch("https://protected-hamlet-28459.herokuapp.com/myprofile",{
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
        <div class="hero min-h-screen bg-base-200">
       
        <div class="hero-content flex-col lg:flex-row-re verse lg:w-1/2">
         <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           <h1 className=' text-3xl text-center mt-3 text-bold'>My Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)} class="card-body">
            <div class="form-control">
                <label class="label">
                  <span class="label-text">User Name</span>
                </label>
                <input {...register("userName")} type="text" placeholder="name" class="input input-bordered" 
                value={user?.displayName}
                readOnly 
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
                  <span class="label-text">Education </span>
                </label>
                <input  {...register("education")} type="text" placeholder={`Education`} class="input input-bordered"  />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input {...register("address")} type="text" placeholder="Address" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone Number </span>
                </label>
                <input {...register("PhoneNo", { required: true })} type="number" placeholder="Phone Number" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">LinkedIn Profile</span>
                </label>
                <input {...register("linkedin", { required: true })} type="text" placeholder="LinkedIn" class="input input-bordered" />
              </div>
              <div class="form-control mt-6">
                <button type='submit' class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;