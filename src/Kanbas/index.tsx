import store from "./Store";
import { Provider } from "react-redux";
import KanbsNavigation from "./Navigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard"
import Courses from "./Courses";
import { useState,useEffect } from "react";
import axios from "axios";

// const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas(){
    // const API_BASE = process.env.REACT_APP_API_BASE;
    const COURSE_API="https://kanbas-node-server-app-me7c.onrender.com/api/courses";
    const [courses, setCourses] = useState<any[]>([]);
    const [course,setCourse] = useState({
        _id:"0", name:"New Course", title: "New Course Title",
        description:"New course Description", number:"New Number",
        startDate:"2023-09-10", endDate:"2023-12-15",
        image:"/images/course.jpg"
    });
    const deleteCourse=async (courseId: string)=>{
        const response=await axios.delete(`${COURSE_API}/${courseId}`);
        setCourses(courses.filter((course)=>course._id!==courseId));
    }
    const addNewCourse=async ()=>{
        const response =await axios.post(COURSE_API,course);
        setCourses([...courses, response.data]);
    };
    const updatecourse=async()=>{
        const response= await axios.put(`${COURSE_API}/${course._id}`,course);
        setCourses(
        courses.map((c)=>{
            if(c._id=== course._id){
            return course;
            }
            else {
            return c;
            }
        })
        );
    };

    
    const findAllCourses= async ()=>{
        const response = await axios.get(COURSE_API);
        setCourses(response.data);
    }
    useEffect(() => {
        findAllCourses();
      }, []);
    
    return(
        <Provider store={store}>
            <div className="d-flex">
                <KanbsNavigation/>
                <div style={{flexGrow:1}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={<Dashboard 
                        course={course}
                        courses={courses}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updatecourse}/>} />
                        <Route path="Courses/*" element={<h1>Courses</h1>} />
                        <Route path="Courses/:courseId/*" element={<Courses/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;