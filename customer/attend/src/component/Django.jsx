import React,{useEffect,useState} from 'react'
import StudentReg from './StudentReg'
import {Link,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios'
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Django = () => {
  // str=trainername str1=coursename
  const {str,str1}=useParams()
  const [student, setStudent] = useState(0)
  const tableName='django'
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/trainerdashboard/django`, {
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
          <h1>Django</h1>
          <button className='bg-red-500 absolute left-3 p-1 text-white rounded'><Link to={`/studentdetails/${str1}/${str}/${tableName}`}>Student details</Link></button>
          <button className='bg-red-500 absolute right-3 p-1 text-white rounded'  onClick={handleNavigate}>Student attendance</button>
        </div>
        <div className='flex flex-row justify-center gap-6 p-5'>
          <img src="/django.png" className='w-[150px]' alt="" />
          <div>
            <div className=' flex flex-row text-black font-sans justify-evenly italic text-lg font-bold my-5'>
             <h1>Timing:<span className='text-pink-600 mx-2'>01PM-03PM </span></h1>
             <h1>Duration:<span className='text-pink-600 mx-2'>120 Days</span></h1>
              <h1>Total number of students:<span className='text-pink-600 mx-2'>{student}</span></h1>
            </div>
            <p className='font-serif'>Django is a free, open-source Python web framework that helps developers build secure and maintainable web applications quickly:

              Django groups common web application functions into reusable modules, which helps developers write code more efficiently.

              Django includes features like user authentication, database management, and an admin panel to speed up development.

              Django provides a framework for creating and validating HTML forms.</p>

          </div>
        </div>
        <div className='flex flex-row justify-evenly font-bold font-serif bg-violet-200 p-5'>
          <div>
            <h1 className='text-pink-600 italic font-bold'>Syllabus</h1>
            <ul className='my-3 lists'>
              <li>1. Introduction of Django</li>
              <li>2. Installing Django project</li>
              <li>3. Django syntax</li>
              <li>4. Views and URLs in Django</li>
              <li>5. Templates and models in Django</li>
              <li>6. CRUD operation in Django</li>
              <li>7. Dispaly data and 404 template</li>
              <li>8. Admin creation in Django</li>
              <li>9. Class and forms in Django</li>
              <li>10. Deployment in Django</li>
              <li>11. Assignments in Django</li>
              <li>12. Projects in Django</li>
              <li>13. Mock Interviews in Django</li>
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

export default Django