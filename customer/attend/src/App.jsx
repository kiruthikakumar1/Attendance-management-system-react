
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './component/Home'
import StudentReg from './component/StudentReg'
import TrainerSign from './component/TrainerSign'
import TrainerDashboard from './component/TrainerDashboard'
import Java from './component/Java'
import Python from './component/Python'
import Javascript from './component/Javascript'
import Springboot from './component/Springboot'
import Django from './component/Django'
import ReactJs from './component/ReactJs'
import MySQL from './component/MySQL'
import PostgreSQL from './component/PostgreSQL'
import MongoDB from './component/MongoDB'
import StudentDetails from './component/StudentDetails'
import Days from './component/Days'
import DayAttend from './component/DayAttend'



function App() {
  

  return (
    <>
     <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainersign" element={<TrainerSign />} />
        <Route path="/trainerdashboard/:data" element={<TrainerDashboard />} />
        <Route path="/student" element={<StudentReg />} />
        <Route path="/trainerdashboard/java/:str/:str1" element={<Java/>} />
        <Route path="/trainerdashboard/python/:str/:str1" element={<Python/>} />
        <Route path="/trainerdashboard/javascript/:str/:str1" element={<Javascript/>} />
        <Route path="/trainerdashboard/springboot/:str/:str1" element={<Springboot/>} />
        <Route path="/trainerdashboard/django/:str/:str1" element={<Django/>} />
        <Route path="/trainerdashboard/reactjs/:str/:str1" element={<ReactJs/>} />
        <Route path="/trainerdashboard/mysql/:str/:str1" element={<MySQL/>} />
        <Route path="/trainerdashboard/postgresql/:str/:str1" element={<PostgreSQL/>} />
        <Route path="/trainerdashboard/mongodb/:str/:str1" element={<MongoDB/>} />
        <Route path="/studentdetails/:str1/:str/:tableName" element={<StudentDetails/>} />
        <Route path="/studentdetails/:str1/:str/days/:tableName" element={<Days/>} />
        <Route path="/studentdetails/:str1/:str/days/:tableName/dayattend/:num" element={<DayAttend/>} />
       </Routes>
       <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
          theme="light"
      />
       </BrowserRouter>
       

      </div>
    </>
  )
}

export default App
