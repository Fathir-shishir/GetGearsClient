import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register,watch, formState: { formErrors }, handleSubmit,reset} = useForm();
    const onSubmit =data =>{
        console.log(data)
        fetch("http://localhost:5000/reviews",{
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
           <h1 className=' text-3xl text-center mt-3 text-bold'>Add Review</h1>
            <form onSubmit={handleSubmit(onSubmit)} class="card-body">
            <div class="form-control">
                <label class="label">
                  <span class="label-text">User Name</span>
                </label>
                <input {...register("name")} type="text" placeholder="User Name" class="input input-bordered" 
                 />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Image URL</span>
                </label>
                <input  {...register("picture")} type="text" placeholder="Image" class="input input-bordered"/>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Rating </span>
                </label>
                <input  {...register("rating")} type="number" placeholder="Rating" class="input input-bordered"  />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Comment</span>
                </label>
                <textarea {...register("comment")} type="text" placeholder="Comment" class="input input-bordered" />
              </div>
              <div class="form-control mt-6">
                <button type='submit' class="btn btn-primary">Add Review</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddReview;