import React,{useEffect,useState} from 'react'
import StudentReg from './StudentReg'
import {Link,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MongoDB = () => {
  // str=trainername str1=coursename
  const {str,str1}=useParams()
  const [student, setStudent] = useState(0)
    const tableName='mongodb'
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/trainerdashboard/mongodb`, {
          params: { trainername: str, coursename: str1 ,tablename:tableName}
        });
        setStudent(result.data.total);
        console.log(result.data.total); 

      } catch (err) {
        console.log(err);
      }
    };

    fetchStudents();
  }, [str, str1]); 
  const navigate = useNavigate();

  const handleNavigate = () => {
    try {
      if (student > 0) {
        navigate(`/studentdetails/${str1}/${str}/days/${tableName}`)
      }
      else {
        toast("Add students")
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the table.');
    }
   
  };
  return (
    <>
      <div>
        <div className='h-[50px] p-2 flex flex-row relative bg-purple-500 text-white text-lg justify-center font-bold font-serif'>
          <h1>MongoDB</h1>
          <button className='bg-red-500 absolute left-3 p-1 text-white rounded'><Link to={`/studentdetails/${str1}/${str}/${tableName}`}>Student details</Link></button>
          <button className='bg-red-500 absolute right-3 p-1 text-white rounded'  onClick={handleNavigate}>Student attendance</button>
        </div>
        <div className='flex flex-row justify-center gap-6 p-5'>
          <img src="/mongo.jpg" className='w-[150px]' alt="" />
          <div>
          <div className=' flex flex-row text-black font-sans justify-evenly italic text-lg font-bold my-5'>
             <h1>Timing:<span className='text-pink-600 mx-2'>04PM-06PM </span></h1>
             <h1>Duration:<span className='text-pink-600 mx-2'>120 Days</span></h1>
              <h1>Total number of students:<span className='text-pink-600 mx-2'>{student}</span></h1>
            </div>
            <p className='font-serif'>MongoDB is a non-relational database management system (DBMS) that stores data in documents instead of tables and rows. It's a popular document database that's designed for ease of use and scalability:

              MongoDB's flexible data model is based on JSON-like documents that can store various types of data.

              MongoDB is built for high availability, horizontal scaling, and geographic distribution.

              MongoDB's document model is designed to be simple for developers to learn and use.

              MongoDB has features to help manage time series data, including native time series collections.</p>

          </div>
        </div>
        <div className='flex flex-row justify-evenly font-bold font-serif bg-violet-200 p-5'>
          <div>
            <h1 className='text-pink-600 italic font-bold'>Syllabus</h1>
            <ul className='my-3 lists'>
              <li>1. Introduction of MongoDB</li>
              <li>2. Installing MongoDB</li>
              <li>3. Query API </li>
              <li>4. Query operator in MongoDB</li>
              <li>5. Aggregations in MongoDB</li>
              <li>6. Indexing and search</li>
              <li>7. Validations in MongoDB</li>
              <li>8. Drivers in MongoDB</li>
              <li>9. Node.js in MongoDB</li>
              <li>10. Charts in MongoDB</li>
              <li>11. Assignments in MongoDB</li>
              <li>12. Projects in MongoDB</li>
              <li>13. Mock Interviews in MongoDB</li>
            </ul>


          </div>
          <div>
            <StudentReg str={str} str1={str1} tableName={tableName}/>
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

export default MongoDB