import React, { useState, useEffect } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DayAttend = () => {
    // str=trainername str1=coursename
    const navigate = useNavigate();
    const { str, str1,num,tableName } = useParams()
    const handleGoBack = () => {
        navigate(-3);
    };
    const handleBack = () => {
        navigate(-1);
      };
    const [student, setStudent] = useState([])
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/dayattend`, {
                    params: { trainername: str, coursename: str1 ,tablename:tableName}
                });
                setStudent(result.data);

            } catch (err) {
                console.log(err);
            }
        };

        fetchStudents();
    });

    
   
    const handleChange = async(e,id,num,tableName) => {
        const statusValue = e.target.value
        try {
            const response = await axios.put(`http://localhost:8080/${tableName}/${id}/${num}`,{ status: statusValue });
            console.log('status updated', response);
            toast("status updated !!!")
        }
        catch (error) {
            console.error('Error creating student:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error status:', error.response.status);
            }
        }
        console.log('Selected value:', statusValue)
       }
    
    return (
        <>
            <div>
                <div className='h-[50px] p-2 flex flex-row relative bg-purple-500 text-white text-lg justify-center font-bold font-serif'>
                    <h1>{str1} Student Attendance DAY <span className='font-sans'>{num} </span> </h1>
                    <button className='bg-red-500 absolute left-3 p-1 text-white rounded' onClick={handleGoBack}>My Dashboard</button>
                    <button className='bg-red-500 absolute right-3 p-1 text-white rounded' onClick={handleBack}>Back</button>
               
                </div>
                <div className='flex flex-row justify-center my-9 font-serif'>
                    <table className='border border-slate-400'>
                        <thead>
                            <tr>
                                <th className='border border-slate-400 px-5'>Student ID</th>
                                <th className='border border-slate-400 px-5'>Student Name</th>
                                <th className='border border-slate-400 px-5'>Student Father Name</th>
                                <th className='border border-slate-400 px-5'>Student Email</th>
                                <th className='border border-slate-400 px-5'>Student Phone</th>
                                <th className='border border-slate-400 px-5'>Present</th>
                                <th className='border border-slate-400 px-5'>Absent</th>
                                <th className='border border-slate-400 px-5'>Day{num}</th>
                            </tr>
                        </thead>
                        {student.length > 0 ? (
                            <tbody>
                                {student.map((student) => (
                                    <tr key={student.id} className=''>
                                        <td className='border border-slate-400 px-5'>{student.id}</td>
                                        <td className='border border-slate-400 px-5'>{student.studentname}</td>
                                        <td className='border border-slate-400 px-5'>{student.fathername}</td>
                                        <td className='border border-slate-400 px-5'>{student.email}</td>
                                        <td className='border border-slate-400 px-5 font-sans'>{student.contact}</td>
                                        <td className='border border-slate-400 px-5'><input type="radio" name='attend' value="Present" onChange={(e)=>handleChange(e,student.id,num,tableName)}/></td>
                                        <td className='border border-slate-400 px-5'><input type="radio" name='attend' value="Absent" onChange={(e)=>handleChange(e,student.id,num,tableName)}/></td>
                                        <td className='border border-slate-400 px-5'>{student[`day${num}`]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td>Loading...</td>
                                </tr>
                            </tbody>

                        )}


                    </table>
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

export default DayAttend