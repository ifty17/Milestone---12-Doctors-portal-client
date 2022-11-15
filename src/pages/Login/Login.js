import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.form?.pathname || '/'


    const handleLogin = data =>{
        console.log(data);
        logIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            setLoginError('');
            console.log(user);
            navigate(form, {replace: true});
        })
        .catch(error => {
            console.error(error.message);
            setLoginError(error.message);
        });
    }
    
    return (
      <div className="flex justify-center items-center h-[800px] ">
        <div className="w-96 p-7 shadow-xl rounded-xl">
          <h2 className="text-xl text-center">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>{" "}
              </label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: "Email Address is required",
                })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", { 
                    required: "Password is required" ,
                    minLength: {value: 6, message:'Password must be 6 characters or longer'}
                })}
              />
              <span className="label-text-alt">Forget password?</span>
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            {/* <p>{data}</p> */}
            <input
              type="submit"
              className="btn btn-accent w-full"
              value="Login"
            />
            <div>
                {loginError && <p className='text-red-600'>{loginError}</p>}
            </div>
          </form>
          <p>
            New to doctors portal?{" "}
            <Link to="/signup" className="text-secondary">
              Create new account
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

export default Login;