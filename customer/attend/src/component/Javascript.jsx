import React,{useEffect,useState} from 'react'
import StudentReg from './StudentReg'
import {Link,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Javascript = () => {
  // str=trainername str1=coursename
  const {str,str1}=useParams()
  const [student, setStudent] = useState(0)
    const tableName='javascript'
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/trainerdashboard/javascript`, {
          params: { trainername: str, coursename: str1,tablename:tableName }
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
          <h1>Javascript</h1>
          <button className='bg-red-500 absolute left-3 p-1 text-white rounded'><Link to={`/studentdetails/${str1}/${str}/${tableName}`}>Student details</Link></button>
          <button className='bg-red-500 absolute right-3 p-1 text-white rounded'  onClick={handleNavigate}>Student attendance</button>
        </div>
        <div className='flex flex-row justify-center p-5'>
          <img src="/js.png" className='w-[150px]' alt="" />
          <div>
          <div className=' flex flex-row text-black font-sans justify-evenly italic text-lg font-bold my-5'>
             <h1>Timing:<span className='text-pink-600 mx-2'>10AM-12PM </span></h1>
             <h1>Duration:<span className='text-pink-600 mx-2'>120 Days</span></h1>
              <h1>Total number of students:<span className='text-pink-600 mx-2'>{student}</span></h1>
            </div>
            <p className='font-serif'>JavaScript is a programming language that allows you to create interactive and dynamic web pages:
              JavaScript enables you to add features like animated graphics, interactive maps, and content updates to web pages.JavaScript allows browsers to respond to user interactions and change the layout of a web page.JavaScript can be used for both client-side and server-side development.</p>

          </div>
        </div>
        <div className='flex flex-row justify-evenly font-bold font-serif bg-violet-200 p-5'>
          <div>
            <h1 className='text-pink-600 italic font-bold'>Syllabus</h1>
            <ul className='my-3 lists'>
              <li>1. Introduction of Javascript</li>
              <li>2. Syntax and datatypes</li>
              <li>3. Variables and output</li>
              <li>4. Operators in Javascript</li>
              <li>5. Control and looping Statements</li>
              <li>6. String methods</li>
              <li>7. Functions and objects</li>
              <li>8. Array methods</li>
              <li>9. Asynchronous and await in Javascript</li>
              <li>10. DOM in Javascript</li>
              <li>11. Assignments in Javascript</li>
              <li>12. Projects in Javascript</li>
              <li>13. Mock Interviews in Javascript</li>
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

export default Javascript