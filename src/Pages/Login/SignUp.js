import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import useToken from '../Shared/Hooks/useToken'

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updatError] = useUpdateProfile(auth);
    const { register, formState: { formErrors }, handleSubmit } = useForm();
    const [token]  = useToken(user);
    const onSubmit = async  data => {
        await  createUserWithEmailAndPassword(data.email,data.password)
        await updateProfile({ displayName : data.name});
      
};
    return (
        <div class="hero min-h-screen bg-base-200">
       
  <div class="hero-content flex-col lg:flex-row-re verse w-1/2">
   <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <h1 className=' text-3xl text-center mt-3 text-bold'>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} class="card-body">
      <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input {...register("name", { required: true })} type="text" placeholder="name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input {...register("password", { required: true })} type="password" placeholder="password" class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
          <button type='submit' class="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;