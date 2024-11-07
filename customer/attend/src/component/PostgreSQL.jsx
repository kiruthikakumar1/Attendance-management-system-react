import React,{useEffect,useState} from 'react'
import StudentReg from './StudentReg'
import {Link,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostgreSQL = () => {
  // str=trainername str1=coursename
  const {str,str1}=useParams()
  const [student, setStudent] = useState(0)
  const tableName='postgresql'
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/trainerdashboard/postgresql`, {
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
          <h1>PostgreSQL</h1>
          <button className='bg-red-500 absolute left-3 p-1 text-white rounded'><Link to={`/studentdetails/${str1}/${str}/${tableName}`}>Student details</Link></button>
          <button className='bg-red-500 absolute right-3 p-1 text-white rounded'  onClick={handleNavigate}>Student attendance</button>
        </div>
        <div className='flex flex-row justify-center gap-6 p-5'>
          <img src="/postgre.png" className='w-[150px]' alt="" />
          <div>
          <div className=' flex flex-row text-black font-sans justify-evenly italic text-lg font-bold my-5'>
             <h1>Timing:<span className='text-pink-600 mx-2'>04PM-06PM </span></h1>
             <h1>Duration:<span className='text-pink-600 mx-2'>120 Days</span></h1>
              <h1>Total number of students:<span className='text-pink-600 mx-2'>{student}</span></h1>
            </div>
            <p className='font-serif'>PostgreSQL, also known as Postgres, is an open-source relational database management system (RDBMS) that's used for storing and managing data:

              PostgreSQL supports both SQL (relational) and JSON (non-relational) querying. It's known for its reliability, flexibility, and support of open technical standards.

              PostgreSQL is considered one of the best in terms of performance and scalability. It's also known for its robust feature set, extensibility, and data integrity.

              PostgreSQL was originally developed in 1986 by Michael Stonebraker, a computer science professor at the University of California, Berkeley. The project was originally named POSTGRES.</p>

          </div>
        </div>
        <div className='flex flex-row justify-evenly font-bold font-serif bg-violet-200 p-5'>
          <div>
            <h1 className='text-pink-600 italic font-bold'>Syllabus</h1>
            <ul className='my-3 lists'>
              <li>1. Introduction of PostgreSQL</li>
              <li>2. Installing PostgreSQL</li>
              <li>3. Fetch data in PostgreSQL</li>
              <li>4. Union and exists</li>
              <li>5. Database commands in PostgreSQL</li>
              <li>6. Syntax in PostgreSQL</li>
              <li>7. Min , max and count</li>
              <li>8. Between and like</li>
              <li>9. Joins in PostgreSQL</li>
              <li>10. All, Any and Case</li>
              <li>11. Assignments in PostgreSQL</li>
              <li>12. Projects in PostgreSQL</li>
              <li>13. Mock Interviews in PostgreSQL</li>
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

export default PostgreSQL