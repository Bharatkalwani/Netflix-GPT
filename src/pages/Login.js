import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux';
import * as yup from 'yup'
import { addUser } from '../store/userSlice';
import { EMAIL, TOKEN, NETFLIX_BACKGROUND_IMG } from '../utils/constants';

const signInSchema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email is required'),
    password: yup.string().required('Password is required'),
})

const signUpSchema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    fullName: yup.string().required('Full name is required'),
})


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isSignInForm, setIsSignInForm] = useState(true);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(isSignInForm ? signInSchema : signUpSchema),
        mode: 'all'
    })

    const onSubmit = async (data) => {
        try {
            if (isSignInForm) {
                // right now static
                // const result = await login(data)
                navigate('/browser')
                dispatch(addUser({ email: EMAIL, token: TOKEN }))
                //save token 
            }
            else {
                // const result = await register(data)
                console.log("registeration success")
                dispatch(addUser({ email: EMAIL, token: TOKEN }))
                navigate('/browser')
            }

        } catch (error) {
        }
    }
    const toggleButton = () => {
        setIsSignInForm(!isSignInForm)
        reset() // Clear form and errors when toggling
    }
    return (
        <div className="relative h-screen w-full bg-black text-white">
            {/* Background Image */}
            <img
                src={NETFLIX_BACKGROUND_IMG}
                alt="Netflix Background"
                className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 pointer-events-none"
            />

            {/* Header */}
            <Header />

            {/* Login Form */}
            <div className="flex justify-center items-center h-full">
                <div className="bg-black bg-opacity-80 p-8 rounded-md max-w-md w-full">
                    <h2 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        {!isSignInForm &&
                            <input
                                type="text"
                                placeholder="Full Name"
                                {...register('fullName')}
                                className="p-3 bg-gray-700 text-white placeholder-gray-100 border border-gray-700 focus:border-red-500 rounded focus:outline-none"
                            //     className="p-3 bg-gray-700 rounded text-white  focus:border-red-500"
                            />
                        }
                        <input
                            type="email"
                            placeholder="Email or phone number"
                            {...register('email')}
                            className="p-3 bg-gray-700 text-white placeholder-gray-100 border border-gray-700 focus:border-red-500 rounded focus:outline-none"

                        />
                        <p>{errors.email?.message}</p>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register('password')}
                            className="p-3 bg-gray-700 text-white placeholder-gray-100 border border-gray-700 focus:border-red-500 rounded focus:outline-none"

                        />
                        <p>{errors.password?.message}</p>
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 transition duration-300 text-white py-3 rounded font-semibold"
                        >
                            {isSignInForm ? "Sign In" : "Sign Up"}
                        </button>

                    </form>
                    <p className="text-gray-300 mt-6">
                        {isSignInForm ? "New to Netflix " : "Already Registered "}
                        <button type="button" onClick={toggleButton} className="text-white hover:underline ml-1">
                            {isSignInForm ? "Sign up now" : "Sign In"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

