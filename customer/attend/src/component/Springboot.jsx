import React,{useEffect,useState} from 'react'
import StudentReg from './StudentReg'
import {Link,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Springboot = () => {
  // str=trainername str1=coursename
  const {str,str1}=useParams()
  const tableName='springboot'
  const [student, setStudent] = useState(0)
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axios.get('http://localhost:8080/trainerdashboard/springboot', {
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
          <h1>Springboot</h1>
          <button className='bg-red-500 absolute left-3 p-1 text-white rounded'><Link to={`/studentdetails/${str1}/${str}/${tableName}`}>Student details</Link></button>
          <button className='bg-red-500 absolute right-3 p-1 text-white rounded'  onClick={handleNavigate}>Student attendance</button>
        </div>
        
        <div className='flex flex-row justify-center gap-6 p-5'>
          <img src="/Spring.png" alt="" className='w-[150px]'/>
          <div>
          <div className=' flex flex-row text-black font-sans justify-evenly italic text-lg font-bold my-5'>
             <h1>Timing:<span className='text-pink-600 mx-2'>01PM-03PM </span></h1>
             <h1>Duration:<span className='text-pink-600 mx-2'>120 Days</span></h1>
              <h1>Total number of students:<span className='text-pink-600 mx-2'>{student}</span></h1>
            </div>
            <p className='font-serif'>Spring Boot is an open-source tool that helps developers create Java-based web applications and microservices more quickly and easily:

              Spring Boot is a convention-over-configuration extension of the Spring Java platform. It uses a preconfigured view of the best configuration to use with the Spring platform and third-party libraries. This helps developers get started quickly with minimal configuration and setup</p>

          </div>
        </div>
        <div className='flex flex-row justify-evenly font-bold font-serif bg-violet-200 p-5'>
          <div>
            <h1 className='text-pink-600 italic font-bold'>Syllabus</h1>
            <ul className='my-3 lists'>
              <li>1. Introduction of Springboot</li>
              <li>2. Installing Springboot</li>
              <li>3. Springboot core concepts</li>
              <li>4. Springboot RESTAPIs</li>
              <li>5. Springboot databases</li>
              <li>6. Annotations and architecture</li>
              <li>7. Springboot actuator</li>
              <li>8. Microservices in Springboot</li>
              <li>9. Springboot with Kafka</li>
              <li>10. Springboot with Aop and testing</li>
              <li>11. Assignments in Springboot</li>
              <li>12. Projects in Springboot</li>
              <li>13. Mock Interviews in Springboot</li>
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

export default Springboot