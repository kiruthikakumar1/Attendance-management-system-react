import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Days = () => {
  // str=trainername str1=coursename
  const navigate = useNavigate();
  const { str, str1,tableName} = useParams()
  const handleGoBack = () => {
    navigate(-2);
  };
  const days = [];

  const handleNavigate = async (i) => {
    try {
      const newColumn=`day${i}`
      const response = await axios.put(`http://localhost:8080/${tableName}`,{newcolumn:newColumn});
      if (response.status === 200) {
        console.log('Status updated', response.data);
        navigate(`/studentdetails/${str1}/${str}/days/${tableName}/dayattend/${i}`);
      } else {
        console.error('Unexpected response status:', response.status);
      }
    }
    catch (error) {
      toast("This attendance has been closed")
     
      console.error('Error creating student:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error status:', error.response.status);
      }
    }
   
  };
  for (let i = 1; i <= 120; i++) {

    days.push(
      <button 
        key={i}
        className="w-[70px] h-[30px] rounded bg-blue-400 mx-2 font-bold italic shadow-md shadow-black text-white text-center"
        onClick={() => handleNavigate(i)}
      >
        Day {i}
      </button>
    );
  }
  return (
    <>
      <div>
        <div className='h-[50px] p-2 flex flex-row relative bg-purple-500 text-white text-lg justify-center font-bold font-serif'>
          <h1>{str1} Student Attendance Day Cards</h1>
          <button className='bg-red-500 absolute left-3 p-1 text-white rounded' onClick={handleGoBack}>My Dashboard</button>
        </div>
        <div className='h-screen flex flex-row flex-wrap justify-center items-center  '>{days}</div>

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

export default Days