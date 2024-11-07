
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const StudentReg = ({ str ,str1,tableName}) => {
    const [student, setStudent] = useState(
        {
            trainername: str,
            studentname: "",
            fathername: "",
            email: "",
            gender: "",
            contact: "",
            education: "",
            coursename: str1,
            coursetime: "120 days",
            location: ""
        }
    )
    const handleChange = (e) => {
        setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async (e) => {
        e.preventDefault()
        if (student.trainername === "" || student.studentname === "" || student.email === "" || student.fathername === "" || student.gender === "" || student.contact === "" || student.location === "" || student.education === "" || student.coursename === "" || student.coursetime === "") {
            toast("All fields are required !!!")
        }
        else {
            try {
                const response = await axios.post(`http://localhost:8080/${tableName}`, student);
                console.log('student created successfully:', response.data);
                toast("Registered Successfully !!!")

            }
            catch (error) {
                console.error('Error creating student:', error);
                if (error.response) {
                    console.error('Error response data:', error.response.data);
                    console.error('Error status:', error.response.status);
                }
            }
        }
        setStudent({
            trainername: str,
            studentname: "",
            fathername: "",
            email: "",
            gender: "",
            contact: "",
            education: "",
            coursename: str1,
            coursetime: "120 days",
            location: ""
        });

    }
    return (
        <>
            <div>
                <h1 className='text-pink-600 italic font-bold mb-3'>New student registration</h1>
                <form action="">

                    <table className='tablereg'>
                        <thead>
                            <tr>
                                <td><label htmlFor="trainername">Trainer Name</label></td>
                                <td><input type="text" placeholder='Enter trainer name ...' name='trainername' value={student.trainername} className='w-[250px] border border-slate-500 p-2 mx-2 ' readOnly /></td>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td><label htmlFor="studentname">Student Name</label></td>
                                <td> <input type="text" placeholder='Enter name ...' name='studentname' value={student.studentname} onChange={handleChange} className='w-[250px] border border-slate-500 p-2 mx-2' /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="fathername">Father Name</label></td>
                                <td> <input type="text" placeholder='Enter father name ...' name='fathername' value={student.fathername} onChange={handleChange} className='w-[250px] border border-slate-500 p-2 mx-2' /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Email Id</label></td>
                                <td><input type="email" placeholder='Enter email ...' name='email' value={student.email} onChange={handleChange} className='w-[250px] rounded border border-slate-500 p-2 mx-2' /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="gender">Gender</label></td>
                                <td><input type="radio" name='gender' value="male" className='mx-2' onChange={handleChange} /><label htmlFor="male">Male</label>
                                    <input type="radio" name='gender' value="female" className='mx-2' onChange={handleChange} /><label htmlFor="female">Female</label></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="contact">Contact</label></td>
                                <td><input type='text' placeholder='Enter contact ...' name='contact' value={student.contact} onChange={handleChange} className='w-[250px] rounded border border-slate-500 p-2  mx-2' /></td>
                            </tr>

                            <tr>
                                <td><label htmlFor="education">Education</label></td>
                                <td><input type="text" placeholder='Enter education' name='education' value={student.education} onChange={handleChange} className='w-[250px] border border-slate-500 p-2  mx-2' />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="location">Location</label></td>
                                <td><input type="text" placeholder='Enter location ...' name='location' value={student.location} onChange={handleChange} className='w-[250px] rounded border border-slate-500 p-2  mx-2' /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="coursename">Course name</label></td>
                                <td> <input type="text" placeholder='Enter course name' name='coursename' value={student.coursename} readOnly className='w-[250px] border border-slate-500 p-2  mx-2' />
                                </td>
                            </tr>
                            <tr>
                                <td> <label htmlFor="coursetime">Course duration</label></td>
                                <td><input type="text" placeholder='Enter course duration' name='coursetime' value={student.coursetime} readOnly  className='w-[250px] border border-slate-500 p-2  mx-2' />
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <div>
                        <button onClick={handleClick} className='bg-green-500 p-2 text-white my-2'>Register</button>
                    </div>
                </form>
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

export default StudentReg