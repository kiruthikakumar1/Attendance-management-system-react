import React, { useState } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const TrainerSign = () => {
    const [trainer, setTrainer] = useState(
        {
            trainername: "",
            email: "",
            password: "",
            contact: "",
            location: "",
            course1: "",
            course2: "",
            course3: ""
        }
    )
    const nav=useNavigate()
    const handleChange = (e) => {
        setTrainer((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async (e) => {
        e.preventDefault()
        if(trainer.trainername==="" || trainer.email==="" || trainer.password==="" || trainer.contact==="" || trainer.location==="" || trainer.course1==="" || trainer.course2==="" || trainer.course3===""){
            toast("All fields are required !!!")
        }
        else{
            try {
                const response = await axios.post("http://localhost:8080/trainer", trainer);
                console.log('Trainer created successfully:', response.data);
                nav('/')
            }
            catch (error) {
                console.error('Error creating trainer:', error);
                if (error.response) {
                    console.error('Error response data:', error.response.data);
                    console.error('Error status:', error.response.status);
                }
            }
        }
    }
    return (
        <>
            <div className='flex flex-col p-5 items-center'>
                <h1 className=' text-violet-700 text-xl text-center font-bold font-serif'>Trainer Registration</h1>
                <p className='font-bold font-serif'>An online trainer, or online personal trainer, provides fitness training to clients remotely through the internet. They can help clients set fitness goals, create customized workout plans, and offer advice on nutrition. Online trainers can also provide motivation and accountability, and help clients track their progress.
                    
                    <span className='italic text-violet-500'> A trainer can handle anyone programming languages,frameworks and databases.</span>
                </p>
                <div className='w-[600px] h-[520px] bg-violet-300 rounded flex flex-row justify-center my-3 pt-4 font-bold font-serif'>
                    <form action="">
                        <table className='tablereg'>
                                <thead>
                                <tr>
                                    <td><label htmlFor="trainername">Trainer Name</label></td>
                                    <td> <input type="text" placeholder='Enter name ...' name='trainername' onChange={handleChange} className='w-[250px] rounded border border-slate-500 p-2 mx-2' /></td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><label htmlFor="email">Email Id</label></td>
                                    <td><input type="email" placeholder='Enter email ...' name='email' onChange={handleChange} className='w-[250px] rounded border border-slate-500 p-2 mx-2' /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="password">Password</label></td>
                                    <td><input type="text" placeholder='Enter password ...' name='password' onChange={handleChange} className='w-[250px] rounded border border-slate-500 p-2  mx-2' /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="contact">Contact</label></td>
                                    <td><input type='number' placeholder='Enter contact ...' name='contact' onChange={handleChange} className='w-[250px] rounded border border-slate-500 p-2  mx-2' /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="location">Location</label></td>
                                    <td><input type="text" placeholder='Enter location ...' name='location' onChange={handleChange} className='w-[250px] rounded border border-slate-500 p-2  mx-2' /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="course1">Course1</label></td>
                                    <td>
                                        <input type="radio" name='course1' onChange={handleChange} className='mx-2' value="Java"/><label htmlFor="course1">Java</label>
                                        <input type="radio" name='course1' onChange={handleChange} className='mx-2' value="Python"/><label htmlFor="course1">Python</label>
                                        <input type="radio" name='course1' onChange={handleChange} className='mx-2' value="Javascript"/><label htmlFor="course1">Javascript</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="course2">Course2</label></td>
                                    <td>
                                        <input type="radio" name='course2' onChange={handleChange} className='mx-2' value="Springboot"/><label htmlFor="course2">Springboot</label>
                                        <input type="radio" name='course2' onChange={handleChange} className='mx-2' value="Django"/><label htmlFor="course2">Django</label>
                                        <input type="radio" name='course2' onChange={handleChange} className='mx-2' value="ReactJs"/><label htmlFor="course2">ReactJs</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="course3">Course3</label></td>
                                    <td>
                                        <input type="radio" name='course3' onChange={handleChange} className='mx-2' value="MySQL"/><label htmlFor="course3">MySQL</label>
                                        <input type="radio" name='course3' onChange={handleChange} className='mx-2' value="PostgreSQL"/><label htmlFor="course3">PostgreSQL</label>
                                        <input type="radio" name='course3' onChange={handleChange} className='mx-2' value="MongoDB"/><label htmlFor="course3">MongoDB</label>
                                    </td>
                                </tr>
                                </tbody>
                        </table>
                        <div className='text-green-900 my-2'>
                            <p> I have carefully read the terms and conditions of the Agreement.</p>
                        </div>
                        <div className='text-center my-5'>
                            <button onClick={handleClick} className='bg-green-500 p-2 text-white rounded'>Signup</button>
                            <button className='text-white bg-blue-500 p-2 mx-4 rounded'><Link to='/'> Cancel</Link></button>
                        </div>
                    </form>
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

export default TrainerSign