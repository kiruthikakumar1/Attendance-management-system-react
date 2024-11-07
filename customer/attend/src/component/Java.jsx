import React,{useEffect,useState} from 'react'
import StudentReg from './StudentReg'
import {Link,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Java = () => {
  // str=trainername str1=coursename
  const {str,str1}=useParams()
  const [student, setStudent] = useState(0)
  const tableName='java'
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axios.get('http://localhost:8080/trainerdashboard/java', {
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
          <h1>Java</h1>
          <button className='bg-red-500 absolute left-3 p-1 text-white rounded'><Link to={`/studentdetails/${str1}/${str}/${tableName}`}>Student details</Link></button>
          <button className='bg-red-500 absolute right-3 p-1 text-white rounded'  onClick={handleNavigate}>Student attendance</button>
        </div>
        <div className='flex flex-row justify-center gap-6 p-5'>
          <img src="/java.png" className='w-[150px]' alt="" />
          <div>
          <div className=' flex flex-row text-black font-sans justify-evenly italic text-lg font-bold my-5'>
             <h1>Timing:<span className='text-pink-600 mx-2'>10AM-12PM </span></h1>
             <h1>Duration:<span className='text-pink-600 mx-2'>120 Days</span></h1>
              <h1>Total number of students:<span className='text-pink-600 mx-2'>{student}</span></h1>
            </div>
            <p className='font-serif'>Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today’s digital world, by providing the reliable platform upon which many services and applications are built. New, innovative products and digital services designed for the future continue to rely on Java, as well.

              While most modern Java applications combine the Java runtime and application together, there are still many applications. </p>

          </div>
        </div>
        <div className='flex flex-row justify-evenly font-bold font-serif bg-violet-200 p-5'>
          <div>
            <h1 className='text-pink-600 italic font-bold'>Syllabus</h1>
            <ul className='my-3 lists'>
             
              <li>1. Introduction of Java</li>
              <li>2. Syntax in Java</li>
              <li>3. Data-types Variables in Java</li>
              <li>4. Declaration and Use	Typecasting in Java</li>
              <li>5. Operators in Java</li>
              <li>6. Conditional Statements</li>
              <li>7. Loops in Java</li>
              <li>8. Types of Functions</li>
              <li>9. Arrays and OOPS</li>
              <li>10. Event handling</li>
              <li>11. Assignments in Java</li>
              <li>12. Projects in Java</li>
              <li>13. Mock Interviews in Java</li>
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

export default Java