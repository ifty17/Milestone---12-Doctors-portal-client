import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
  const {register, handleSubmit,  formState: { errors }} = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');


const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if(token){
    navigate('/')
  }

    const handleSignUp = (data) => {
      setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          toast.success('User Created Successfully');

          const userInfo = {
            displayName: data.name
          };
          updateUser(userInfo)
          .then(() => { 
            saveUser(data.name, data.email);
          })
          .catch(error => console.error(error));
        })
        .catch(error => {
          console.error(error)
          setSignUpError(error.message)
        })
    }

    const saveUser = (name, email) =>{
      const user = {name, email};
      fetch("http://localhost:5000/users", {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
       setCreatedUserEmail(email);
        
      })
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
                {...register("name", {
                  required: "Name is required",
                })}
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
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
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
            {signUpError && <p className='text-red-600'>{signUpError}</p>}
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