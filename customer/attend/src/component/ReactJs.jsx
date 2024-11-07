import React,{useEffect,useState} from 'react'
import StudentReg from './StudentReg'
import {Link,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactJs = () => {
  // str=trainername str1=coursename
  const {str,str1}=useParams()
  const [student, setStudent] = useState(0)
   const tableName='reactjs'
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/trainerdashboard/reactjs`, {
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
          <h1>ReactJs</h1>
          <button className='bg-red-500 absolute left-3 p-1 text-white rounded'><Link to={`/studentdetails/${str1}/${str}/${tableName}`}>Student details</Link></button>
          <button className='bg-red-500 absolute right-3 p-1 text-white rounded'  onClick={handleNavigate}>Student attendance</button>
        </div>
        <div className='flex flex-row justify-center gap-6 p-5'>
          <img src="/react.png" className='w-[150px]' alt="" />
          <div>
          <div className=' flex flex-row text-black font-sans justify-evenly italic text-lg font-bold my-5'>
             <h1>Timing:<span className='text-pink-600 mx-2'>01PM-03PM </span></h1>
             <h1>Duration:<span className='text-pink-600 mx-2'>120 Days</span></h1>
              <h1>Total number of students:<span className='text-pink-600 mx-2'>{student}</span></h1>
            </div>
            <p className='font-serif'>React.js is a JavaScript library that helps developers build user interfaces (UIs) for web and mobile platforms:

              React's primary goal is to minimize the bugs that occur when developers are building UIs. It does this through the use of components, which are self-contained, logical pieces of code that describe a portion of the user interface.
              React components use JSX markup syntax, which is a JavaScript syntax extension. React uses Babel to convert JSX into JavaScript.</p>

          </div>
        </div>
        <div className='flex flex-row justify-evenly font-bold font-serif bg-violet-200 p-5'>
          <div>
            <h1 className='text-pink-600 italic font-bold'>Syllabus</h1>
            <ul className='my-3 lists'>
              <li>1. Introduction of ReactJs</li>
              <li>2. Installing ReactJs</li>
              <li>3. Tailwind Css in ReactJs</li>
              <li>4. ES6 modules in ReactJs</li>
              <li>5. Components in ReactJs</li>
              <li>6. Props in ReactJs</li>
              <li>7. Hooks in ReactJs</li>
              <li>8. Conditional rendering</li>
              <li>9. Events and forms in ReactJs</li>
              <li>10. Lists in ReactJs</li>
              <li>11. Assignments in ReactJs</li>
              <li>12. Projects in ReactJs</li>
              <li>13. Mock Interviews in ReactJs</li>
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

export default ReactJs