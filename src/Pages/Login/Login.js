import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = {

    };
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
         <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>Signed In User: {user.email}</p>
          </div>
        );
      }
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left w-1/2">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div  class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input {...register("password", { required: true })} type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        <button type="submit" class="btn btn-primary">Login</button> 
        <p className='mt-2'>New to Get Gear? <Link className='text-primary'  to="/Singup"> Create New Account</Link></p>
        </div>
         <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className='btn btn-primary'> Log In With Google</button>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;