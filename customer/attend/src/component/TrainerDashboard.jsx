import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom';

const TrainerDashboard = () => {
  const { data } = useParams();
  let userData;
  try {
    userData = JSON.parse(decodeURIComponent(data));
  } catch (error) {
    console.error("Error parsing user data:", error);
    userData = [];
  }
 
  const trainer = Array.isArray(userData) && userData.length > 0 ? userData[0] : null;
  const nav=useNavigate()
  const handleDelete=async(id)=>{
    try{
      await axios.delete(`http://localhost:8080/trainer/${id}`)
      nav('/')
    }
    catch(err){
      console.log(err);
      
    }
  }
 const handlego=async (tableName) => {
  if (!tableName) {
    alert('Table name cannot be empty.');
    return;
}

try {
    const response = await axios.post('http://localhost:8080/create-table', {
        tableName: tableName
    });
    console.log(response.data.message);
    
     
} catch (error) {
    console.error('Error:', error);
    alert('An error occurred while creating the table.');
}

 }
  return (
    <>
      <div>
       
        <div className='h-[50px] p-2 flex flex-row relative bg-purple-500 text-white text-lg justify-center font-bold font-serif'>
          <h1>Trainer Dashboard</h1>
          <button className='bg-red-500 absolute right-6 p-1 text-white rounded' onClick={()=>{handleDelete(trainer.id)}}>Logout</button>
        </div>
        <div className='flex flex-row justify-around'>
          <div className='w-[20%] h-[180px] my-3 flex flex-col font-bold items-center rounded text-md justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black font-serif'>
            <p>Trainer Name: <span className='text-white font-bold text-lg'>{trainer.trainername}</span></p>
            <p>Email Id: <span className='text-white font-bold text-lg'>{trainer.email}</span></p>
            <p>Contact: <span className='text-white font-bold text-lg font-sans'>{trainer.contact}</span></p>
            <p>Location: <span className='text-white font-bold text-lg'>{trainer.location}</span></p>
          </div>
          <div className='w-[25%] my-3 flex flex-col items-center justify-center font-bold bg-gradient-to-r from-red-500 rounded from-10% via-orange-500 via-30% to-yellow-500 to-90% text-md text-black font-serif'>
            <p>Courses</p>
            <p>Morning: <span className='text-white font-bold text-lg'>{trainer.course1}</span></p>
            <p>Afternoon: <span className='text-white font-bold text-lg'>{trainer.course2}</span></p>
            <p>Evening: <span className='text-white font-bold text-lg'>{trainer.course3}</span></p>
          </div>
          <div className='w-[20%] my-3 flex flex-col font-bold items-center justify-center bg-gradient-to-r from-pink-500 rounded from-10% via-rose-500 via-30% to-fuchsia-500 to-90% text-black font-serif text-md'>
            <p>Course duration</p>
            <p>Morning Batch: <span className='text-white font-bold text-lg font-sans'>10AM-12PM</span></p>
            <p>Afternoon Batch: <span className='text-white font-bold text-lg font-sans'>1PM-3PM</span></p>
            <p>Evening Batch: <span className='text-white font-bold text-lg font-sans'>4PM-6PM</span></p>
          </div>
        </div>
        <div className='flex flex-row justify-center font-bold  font-serif'>
          <div className='w-[90%] p-2 bg-purple-200 text-black'>
            <h1 className='text-center bg-indigo-600 text-xl'>Courses Preview</h1>
            <div className='flex flex-row justify-around'>
              <div className='w-[300px] h-[180px] my-3 flex flex-col items-center  justify-center bg-pink-400 rounded-lg'>
                <h1>{trainer.course1}</h1>
                {trainer.course1 === "Java" ? (
                <button className='bg-green-500 p-2 my-4 text-white rounded' onClick={()=>handlego('java')}><Link to={`/trainerdashboard/java/${trainer.trainername}/Java`}> View Student Detail</Link></button>
              ) : null}
               {trainer.course1 === "Python" ? (
                <button className='bg-green-500 p-2 my-4 text-white rounded' onClick={()=>handlego('python')}><Link to={`/trainerdashboard/python/${trainer.trainername}/Python`}> View Student Detail</Link></button>
              ) : null}
               {trainer.course1 === "Javascript" ? (
                <button className='bg-green-500 p-2 my-4 text-white rounded' onClick={()=>handlego('javascript')}><Link to={`/trainerdashboard/javascript/${trainer.trainername}/Javascript`}> View Student Detail</Link></button>
              ) : null}
              </div>
              {trainer.course1 === "Python" ? (
                <p className='w-[800px]  my-3  h-[180px]'>Python is a high-level, general-purpose programming language that's used for many applications, including:
                  Web development, Software development, Data science, Machine learning, Mathematics, System scripting, and Rapid application development.
                  Python is known for being easy to learn, efficient, and running on many platforms. It's also free to download and integrates well with different systems.</p>
              ) : null}
              {trainer.course1 === "Javascript" ? (
                <p className='w-[800px]  my-3  h-[180px]'>JavaScript is a programming language that allows you to create interactive and dynamic web pages:
                  JavaScript enables you to add features like animated graphics, interactive maps, and content updates to web pages.JavaScript allows browsers to respond to user interactions and change the layout of a web page.JavaScript can be used for both client-side and server-side development.</p>
              ) : null}
              {trainer.course1 === "Java" ? (
                
                <p className='w-[800px]  my-3  h-[180px]'>Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today’s digital world, by providing the reliable platform upon which many services and applications are built. New, innovative products and digital services designed for the future continue to rely on Java, as well.

                  While most modern Java applications combine the Java runtime and application together, there are still many applications.  </p>
                 
              ) : null}

            </div>
            <div className='flex flex-row justify-around'>
              <div className='w-[300px] h-[180px] my-3 flex flex-col items-center justify-center bg-pink-400 rounded-lg'>
                <h1>{trainer.course2}</h1>
                {trainer.course2 === "Springboot" ? (
                <button className='bg-green-500 p-2 my-4 text-white rounded' onClick={()=>handlego('springboot')}><Link to={`/trainerdashboard/springboot/${trainer.trainername}/Springboot`}> View Student Detail</Link></button>
              ) : null}
               {trainer.course2 === "Django" ? (
                <button className='bg-green-500 p-2 my-4 text-white rounded' onClick={()=>handlego('django')}><Link to={`/trainerdashboard/django/${trainer.trainername}/Django`}> View Student Detail</Link></button>
              ) : null}
               {trainer.course2 === "ReactJs" ? (
                <button className='bg-green-500 p-2 my-4 text-white rounded' onClick={()=>handlego('reactjs')}><Link to={`/trainerdashboard/reactjs/${trainer.trainername}/ReactJs`}> View Student Detail</Link></button>
              ) : null}
              </div>
              {trainer.course2 === "Springboot" ? (
                <p className='w-[800px]  my-3  h-[180px]'>Spring Boot is an open-source tool that helps developers create Java-based web applications and microservices more quickly and easily:

                  Spring Boot is a convention-over-configuration extension of the Spring Java platform. It uses a preconfigured view of the best configuration to use with the Spring platform and third-party libraries. This helps developers get started quickly with minimal configuration and setup</p>
              ) : null}
              {trainer.course2 === "Django" ? (
                <p className='w-[800px]  my-3  h-[180px]'>Django is a free, open-source Python web framework that helps developers build secure and maintainable web applications quickly:

                  Django groups common web application functions into reusable modules, which helps developers write code more efficiently.

                  Django includes features like user authentication, database management, and an admin panel to speed up development.

                  Django provides a framework for creating and validating HTML forms.</p>
              ) : null}
              {trainer.course2 === "ReactJs" ? (
                <p className='w-[800px]  my-3  h-[180px]'>React.js is a JavaScript library that helps developers build user interfaces (UIs) for web and mobile platforms:

                  React's primary goal is to minimize the bugs that occur when developers are building UIs. It does this through the use of components, which are self-contained, logical pieces of code that describe a portion of the user interface.
                  React components use JSX markup syntax, which is a JavaScript syntax extension. React uses Babel to convert JSX into JavaScript.</p>
              ) : null}
            </div>
            <div className='flex flex-row justify-around'>
              <div className='w-[300px] h-[180px] my-3 flex flex-col items-center justify-center bg-pink-400 rounded-lg'>
                <h1>{trainer.course3}</h1>
                {trainer.course3 === "MySQL" ? (
                <button className='bg-green-500 p-2 my-4 text-white rounded' onClick={()=>handlego('mysql')}><Link to={`/trainerdashboard/mysql/${trainer.trainername}/MySQL`}> View Student Detail</Link></button>
              ) : null}
               {trainer.course3 === "PostgreSQL" ? (
                <button className='bg-green-500 p-2 my-4 text-white rounded' onClick={()=>handlego('postgresql')}><Link to={`/trainerdashboard/postgresql/${trainer.trainername}/PostgreSQL`}> View Student Detail</Link></button>
              ) : null}
               {trainer.course3 === "MongoDB" ? (
                <button className='bg-green-500 p-2 my-4 text-white rounded' onClick={()=>handlego('mongodb')}><Link to={`/trainerdashboard/mongodb/${trainer.trainername}/MongoDB`}> View Student Detail</Link></button>
              ) : null}
              </div>
              {trainer.course3 === "MySQL" ? (
                <p className='w-[800px]  my-3  h-[180px]'>MySQL is an open-source relational database management system (RDBMS) that stores data in separate tables:

                  MySQL stores data for websites, applications, and commercial products. It's used for a variety of purposes, including mission critical apps, dynamic websites, and as an embedded database for software, hardware, and appliances.

                  MySQL stores data in separate tables, and enforces rules that govern the relationships between different data fields. The database structure is organized into physical files optimized for speed.</p>
              ) : null}
              {trainer.course3 === "PostgreSQL" ? (
                <p className='w-[800px]  my-3  h-[180px]'>PostgreSQL, also known as Postgres, is an open-source relational database management system (RDBMS) that's used for storing and managing data:

                  PostgreSQL supports both SQL (relational) and JSON (non-relational) querying. It's known for its reliability, flexibility, and support of open technical standards.

                  PostgreSQL is considered one of the best in terms of performance and scalability. It's also known for its robust feature set, extensibility, and data integrity.

                  PostgreSQL was originally developed in 1986 by Michael Stonebraker, a computer science professor at the University of California, Berkeley. The project was originally named POSTGRES.</p>
              ) : null}
              {trainer.course3 === "MongoDB" ? (
                <p className='w-[800px]  my-3  h-[180px]'>MongoDB is a non-relational database management system (DBMS) that stores data in documents instead of tables and rows. It's a popular document database that's designed for ease of use and scalability:

                  MongoDB's flexible data model is based on JSON-like documents that can store various types of data.

                  MongoDB is built for high availability, horizontal scaling, and geographic distribution.

                  MongoDB's document model is designed to be simple for developers to learn and use.

                  MongoDB has features to help manage time series data, including native time series collections.</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default TrainerDashboard;