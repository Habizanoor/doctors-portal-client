import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updatError] = useUpdateProfile(auth);
      const [token] = useToken(gUser || user);
      const { register, formState: { errors }, handleSubmit } = useForm();
      const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name});
        console.log('update done');
        // navigate('/appointment');
    };
    let signUpErrorMessage;
    if (gUser || user) {
        console.log(user);
        // navigate('/appointment');//pore d c 
    }
    if (error || gError || updatError) {
        signUpErrorMessage = <p>{error?.message || gError?.message || updatError?.message}</p>
    }
    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if(token){
        navigate('/appointment');
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-bold text-center">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input  {...register("name",
                                {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    }
                                }
                            )} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt">{errors.name.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input  {...register("email",
                                {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        // change kore boshaice
                                        message: 'provide a valid email' // JS only: <p>error message</p> TS only support string
                                    }
                                }
                            )} type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input  {...register("password",
                                {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                    }
                                }
                            )} type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt">{errors.password.message}</span>}
                            </label>
                        </div>




                        {signUpErrorMessage}
                        <input className='btn w-full max-w-xs' type="submit" value="Sign Up" />
                    </form>
                    <p>Already have an account? <Link className='text-secondary' to="/login">Please Login</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;