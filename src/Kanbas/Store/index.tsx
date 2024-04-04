import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/moduleReducer";
import coursesReducer from "../Courses/courseReducer";
import assignmentReducer from "../Courses/Assignments/assignmentReducer";

export interface ModulesState {
    modulesReducer: {
        modules: Module[];
        module: Module;    
    };
  }

export interface CourseState {
    coursesReducer: {
            courses: Course[];
            course: Course;
    };
}

export interface AssignmentState {
    assignmentReducer: {
        assignments : any[];
        assignment: any;
    }
}

export type Module = {
    name: string | number | readonly string[];
    description: string | number | readonly string[];
    lessons: any;
    _id: string;
    title: string;
    submodules: Submodule[];
    course: string;
  };
  
  // Define the Submodule type representing a single submodule
  export type Submodule = {
    subtitle: string;
    items: {
        url: string; title: string 
}[];
  };

export type Course = {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
  }


const store = configureStore({
    reducer: {
        modulesReducer,
        coursesReducer,
        assignmentReducer,
    }
});


export default store;