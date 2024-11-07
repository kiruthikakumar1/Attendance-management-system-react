import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
    const [trainer, setTrainer] = useState(
        {
            email: "",
            password: ""
        }
    )
    const nav = useNavigate()
    const handleChange = (e) => {
        setTrainer((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async (e) => {
        e.preventDefault()
        if (trainer.email === "" || trainer.password === "") {
            toast("All fields are required !!!")
        }
        else {
            await axios.post("http://localhost:8080", trainer)
                .then((response) => {
                    if (response.data.message) {
                        toast(response.data.message)
                    }
                    else {
                        console.log(response)
                        const dataToPass = encodeURIComponent(JSON.stringify(response.data));
                        nav(`/trainerdashboard/${dataToPass}`)
                    }
                })
        }
    }

    return (
        <>
            <div>
                <h1 className='h-[50px] p-2 bg-purple-500 text-white text-lg text-center font-bold font-serif'>Online Training Attendance Management System</h1>
                <p className='p-5 text-md text-center font-bold font-serif'>
                    An online attendance management system (AMS) is a digital tool that helps track and manage attendance for employees or students:
                    Employee attendance
                    AMS can help organizations track employee working hours, login times, breaks, and time off. Employees can check in using a web app, mobile app, or biometric device. AMS can also integrate with biometric systems to automatically sync attendance entries.
                    Student attendance
                    AMS can help schools track student attendance, generate reports, and maintain records. Students can clock in and out, and teachers can assess their location.
                </p>
                <div className='flex flex-row justify-evenly font-bold font-serif'>
                    <div>
                        <img src="attendimage.webp" alt="" className='h-[450px] w-[500px]' />
                    </div>
                    <div className='w-[500px] border bg-violet-200 border-violet-500 rounded flex flex-col  items-center'>
                        <h1 className='my-10 text-violet-700 text-xl text-center font-bold font-serif'>Trainer Login</h1>
                        <div>
                            <form action="">

                                <div className='flex flex-col'>
                                    <label htmlFor="email">Email Id:</label>
                                    <input type="email" placeholder='Enter email ...' name='email' onChange={handleChange} className='w-[300px] border border-slate-500 p-2 mx-2 rounded my-3' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="password">Password:</label>
                                    <input type="text" placeholder='Enter password ...' name='password' onChange={handleChange} className='w-[300px] border border-slate-500 p-2 rounded mx-2 my-3' />
                                </div>
                                <div className='text-center'>
                                    <button onClick={handleClick} className=' p-2 text-white my-2 rounded bg-violet-800'>Login</button>
                                    <div>
                                        <label htmlFor="">New here?</label>
                                        <button className='text-blue-800 underline mx-2'><Link to='/trainersign'> Signup</Link></button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                pauseOnFocusLoss
                theme="light"
            /> */}
        </>

    )
}

export default Home