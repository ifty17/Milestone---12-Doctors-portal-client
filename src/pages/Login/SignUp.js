import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const {register, handleSubmit,  formState: { errors }} = useForm();
    const handleSignUp = (data) => {
        console.log(data);
    }

    return (
      <div className="flex justify-center items-center h-[800px] ">
        <div className="w-96 p-7 shadow-xl rounded-xl">
          <h2 className="text-xl text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <span className="text-red-600">{errors.email?.message}</span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="input input-bordered w-full max-w-xs mb-2"
              />
              {errors.password && (
                <span className="text-red-600">{errors.password?.message}</span>
              )}
            </div>
            {/* <p>{data}</p> */}
            <input
              type="submit"
              className="btn btn-accent w-full"
              value="Sign Up"
            />
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-secondary">
              Login now.
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            Continue with google
          </button>
        </div>
      </div>
    );
};

export default SignUp;