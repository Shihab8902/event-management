import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import Google from '../../assets/images/google.svg';
import Github from "../../assets/images/github.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext);


    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordWrong, setIsPasswordWrong] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const photoURL = formData.get("photoURL");
        const email = formData.get("email");
        const password = formData.get("password");



        if (password.length < 6) {
            toast.error("Password must be 6 character or longer!");
            setIsPasswordWrong(true);
            return;
        }


        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/.test(password)) {
            toast.error("Password should be mixed of capital letters and special characters!");
            setIsPasswordWrong(true);
            return;
        }

        createUser(email, password)
            .then((result) => {
                updateProfile(result.user, {
                    displayName: name, photoURL: photoURL
                });

                Swal.fire({
                    title: 'Registered!',
                    text: 'Your account has been registered successfully!',
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


        //reset password error
        setIsPasswordWrong(false);

    }



    //Register with google
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    title: 'Registered!',
                    text: 'Your account has been registered successfully!',
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
                    text: 'Your account has been registered successfully!',
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

        <div className=' flex justify-center  my-10  p-2 '>

            <Helmet>
                <title>ByteX-user registration</title>
            </Helmet>



            <div className='w-full md:w-3/4  lg:w-2/5 border shadow-xl px-2 md:px-10 py-12 rounded-xl'>
                <h3 className='text-3xl md:text-5xl font-bold text-center'>Register</h3>
                <p className='text-center text-sm md:text-base  my-4 text-gray-500'>Enter your details to register your account!</p>
                <form onSubmit={handleRegister} >

                    <div className='mt-6'>
                        <label className='font-bold text-xl' htmlFor="name">Name</label>
                        <input className='w-full border-2 p-4 outline-none rounded-lg font-bold mt-2' type="text" name="name" id="name" placeholder='Enter your name' required />
                    </div>

                    <div className='mt-6'>
                        <label className='font-bold text-xl' htmlFor="name">Photo URL</label>
                        <input className='w-full border-2 p-4 outline-none rounded-lg font-bold mt-2' type="text" name="photoURL" id="photoURL" placeholder='Provide a photo URL (optional)' />
                    </div>

                    <div className='mt-6'>
                        <label className='font-bold text-xl' htmlFor="email">Email</label>
                        <input className='w-full border-2 p-4 outline-none rounded-lg font-bold mt-2' type="email" name="email" id="email" placeholder='Enter your email' required />
                    </div>

                    <div className='mt-6 relative'>
                        <label className='font-bold text-xl' htmlFor="password">Password</label>
                        <input className={`w-full ${isPasswordWrong ? "border-2 border-red-600" : "border-2"} p-4 outline-none rounded-lg font-bold mt-2`} type={isPasswordVisible ? "text" : "password"} name="password" id="password" placeholder='Enter password' required />
                        <span onClick={() => setIsPasswordVisible(!isPasswordVisible)} className='absolute bottom-5 right-3 text-xl text-gray-500 cursor-pointer'>{isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                    </div>

                    <div className='mt-6'>
                        <input className='w-full bg-blue-600 py-4 text-white font-lg font-bold rounded-lg cursor-pointer' type="submit" value="Register" />
                    </div>

                </form>

                <div className='mt-5'>
                    <p className='text-center font-semibold text-lg'>Or sign up with</p>
                    <div className='flex items-center justify-center gap-7 mt-5'>
                        <button onClick={handleGoogleLogin} title='Google'>
                            <img className='w-[50px]' src={Google} alt="Google" />
                        </button>

                        <button onClick={handleGithubLogin} title='Github'>
                            <img className='w-[50px]' src={Github} alt="Github" />
                        </button>
                    </div>
                </div>
                <p className='mt-7 text-center font-semibold'>Already have an account? <Link to="/login" className='text-blue-700 hover:underline'>Login</Link> </p>
            </div>


        </div>
        <ToastContainer />
    </>
}

export default Register