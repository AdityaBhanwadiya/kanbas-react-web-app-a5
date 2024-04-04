import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HiPencilSquare } from "react-icons/hi2";

import "./index.css"
function Dashboard(
  {
    courses, course, setCourse, addNewCourse, deleteCourse,updateCourse
  }:{
    courses: any []; course: any; setCourse:(course:any)=>void;
    addNewCourse: () =>void; deleteCourse: (course: any) => void;
    updateCourse:()=>void;
  }
) {

  return (
    <div className="p-4 ps-0">
      <h1>Dashboard</h1>              <hr />
      <div style={{width:400}} className="my-3">
        <h4>Add new Course</h4>

        <input value={course.name} className="form-control my-1" 
        onChange={(e)=>setCourse({...course, name: e.target.value } ) }/>

        <input value={course.number} className="form-control my-1" 
        onChange={(e)=>setCourse({...course, number: e.target.value } ) }/>

        <input value={course.title} className="form-control my-1" 
        onChange={(e)=>setCourse({...course, title: e.target.value } ) }/>

        <input value={course.description} className="form-control my-1" 
        onChange={(e)=>setCourse({...course, description: e.target.value } ) }/>

        <input value={course.startDate} className="form-control my-1" type="date" 
        onChange={(e)=>setCourse({...course, startDate: e.target.value } ) }/>

        <input value={course.endDate} className="form-control my-1" type="date" 
        onChange={(e)=>setCourse({...course, endDate: e.target.value } ) }/>

        <button className="btn btn-primary btn-sm me-1" onClick={addNewCourse}>
          Add
        </button>
        
        <button className="btn btn-primary btn-sm ms-1" onClick={updateCourse}>
          Update
        </button>
      </div>
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 ps-0 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img 
                  src={`/images/c7.jpg`}
                  alt="/images/c7.jpg" 
                  className="card-img-top"
                  style={{ height: 150 }}/>

                <div className="card-body">
                  <Link 
                    className="card-title" 
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                  </Link>
                  <p className="card-text fw-lighter course-description course-zero-margin">{course.title}</p>
                  <p className="card-text course-description"><small className="text-muted">{course.description}</small></p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="fs-2 text-dark">
                  <HiPencilSquare/>
                  
                  <button 
                    className="btn btn-sm btn-primary"
                    onClick={(event)=>{
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>

                  <button 
                    className="btn btn-sm btn-danger"
                    onClick={(event)=>{
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >Delete</button>
                  </Link>               
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;