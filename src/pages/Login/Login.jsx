import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import Google from '../../assets/images/google.svg';
import Github from "../../assets/images/github.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();


    const { userSignIn, googleSignIn, githubSignIn, user } = useContext(AuthContext);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);


    const handleLogin = e => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        userSignIn(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Logged in!',
                    text: 'You have successfully logged in to your account!',
                    icon: "success"
                })
                    .then(result => {
                        if (result.isConfirmed) {
                            location.state ? navigate(location.state) : navigate("/")
                        }
                    })
            })

            .catch(error => {
                Swal.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error"
                })
            })

    }



    //Register with google
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    title: 'Registered!',
                    text: 'You have successfully logged in to your account!',
                    icon: "success"
                })
                    .then(result => {
                        if (result.isConfirmed) {
                            location.state ? navigate(location.state) : navigate("/")
                        }
                    })
            })
            .catch(error => {
                Swal.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error"
                })
            })
    }



    //Register with github
    const handleGithubLogin = () => {
        githubSignIn()
            .then(() => {
                Swal.fire({
                    title: 'Registered!',
                    text: 'You have successfully logged in to your account!',
                    icon: "success"
                })
                    .then(result => {
                        if (result.isConfirmed) {
                            location.state ? navigate(location.state) : navigate("/")
                        }
                    })
            })
            .catch(error => {
                Swal.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error"
                })
            })
    }


    return <>


        <div className=' flex justify-center  my-10  p-2 container mx-auto'>

            <Helmet>
                <title>ByteX-user registration</title>
            </Helmet>



            <div className='w-full md:w-3/4  lg:w-2/5 border shadow-xl px-2 md:px-10 py-12 rounded-xl'>
                <h3 className='text-3xl md:text-5xl font-bold text-center'>Login</h3>
                <p className='text-center text-sm md:text-base  my-4 text-gray-500'>Enter your details to login to your account!</p>
                <form onSubmit={handleLogin}>

                    <div className='mt-6'>
                        <label className='font-bold text-xl' htmlFor="email">Email</label>
                        <input className='w-full border-2 p-4 outline-none rounded-lg font-bold mt-2' type="email" name="email" id="email" placeholder='Enter your email' required />
                    </div>

                    <div className='mt-6 relative'>
                        <label className='font-bold text-xl' htmlFor="email">Password</label>
                        <input className='w-full border-2 p-4 outline-none rounded-lg font-bold mt-2' type={isPasswordVisible ? "text" : "password"} name="password" id="password" placeholder='Enter password' required />
                        <span onClick={() => setIsPasswordVisible(!isPasswordVisible)} className='absolute bottom-5 right-3 text-xl text-gray-500 cursor-pointer'>{isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                    </div>

                    <div className='mt-6'>
                        <input className='w-full bg-blue-600 py-4 text-white font-lg font-bold rounded-lg cursor-pointer' type="submit" value="Login" />
                    </div>

                </form>

                <div className='mt-5'>
                    <p className='text-center font-semibold text-lg'>Or continue with</p>
                    <div className='flex items-center justify-center gap-7 mt-5'>
                        <button onClick={handleGoogleLogin} title='Google'>
                            <img className='w-[50px]' src={Google} alt="Google" />
                        </button>

                        <button onClick={handleGithubLogin} title='Github'>
                            <img className='w-[50px]' src={Github} alt="Github" />
                        </button>
                    </div>
                </div>
                <p className='mt-7 text-center font-semibold'>Need an account? <Link state={location.state} to="/register" className='text-blue-700 hover:underline'>Register</Link> </p>
            </div>


        </div>

    </>
}

export default Login