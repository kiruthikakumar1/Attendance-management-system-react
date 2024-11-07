import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios'

const StudentDetails = () => {
  //str1=java str=trainername
  const { str1, str ,tableName} = useParams()
  const [student, setStudent] = useState([])
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/studentdetails`, {
          params: { trainername: str,coursename: str1,tablename:tableName }
        });
        setStudent(result.data);

      } catch (err) {
        console.log(err);
      }
    };

    fetchStudents();
  });
  const navigate = useNavigate();

  const handleGoBack = () => {
      navigate(-1); 
  };
  return (
    <>
      <div>
        {/* <h1>{str1=java},{str=trainername}</h1> */}
        <div className='h-[50px] p-2 flex flex-row relative bg-purple-500 text-white text-lg justify-center font-bold font-serif'>
          <h1>Student details of {str1} course </h1>
          <h3 className='bg-red-500 absolute left-3 p-1 text-black rounded'>Trainer Name: <span className='text-white italic'> {str}</span> </h3>
          <button className='bg-red-500 absolute right-3 p-1 text-white rounded' onClick={handleGoBack}>Back</button>
        </div>
        <div>
          <div>
            {student.length > 0 ? (
              <div>
                <div className='flex flex-row flex-wrap justify-evenly bg-violet-200 p-10'>
                  {student.map((student) => (
                    <div key={student.id} className='w-[30%] p-5 flex flex-col font-serif my-5 font-bold items-center shadow-violet-600 shadow-lg border bg-white rounded'>
                      <div className='flex flex-col items-center'>
                        <div className='w-fit h-[70px] p-3 bg-orange-400 flex flex-col items-center my-3 rounded-lg'>
                          <h1><span className='text-white text-2xl italic '>{student.studentname}</span> </h1>
                          <h4><span className='text-violet-600 p-2'>{student.coursename}</span></h4>
                        </div>
                        
                        <h2>Father Name: <span className='text-pink-600 px-2 '>{student.fathername}</span></h2>
                        <h3>Email Id: <span className='text-pink-600 px-2'>{student.email}</span></h3>
                        <h4>Gender: <span className='text-pink-600 px-2'>{student.gender}</span></h4>
                        <h4>Contact: <span className='text-pink-600 px-2'>{student.contact}</span></h4>
                        <h4>Education: <span className='text-pink-600 px-2'>{student.education}</span></h4>
                        <h4>Location: <span className='text-pink-600 px-2'>{student.location}</span></h4>
                        <h4>Course Duration: <span className='text-pink-600 px-2'>{student.coursetime}</span></h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                  ) : (
              <p>No one enrolled here yet ...</p>
            )}
          </div>
        </div>
      </div>
    </>

  )
}

export default StudentDetails