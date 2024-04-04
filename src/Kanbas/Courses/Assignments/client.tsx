import axios from "axios";
// const API_BASE = "http://localhost:4000"
const API_BASE = process.env.REACT_APP_API_BASE;
const ASSIGNMENT_API=`${API_BASE}/api/assignments`;
const COURSE_API=`${API_BASE}/api/courses`;

// Create, Read, Update, Delete

export const createAssignment= async (courseId:any, assignment:any)=>{
    const response=await axios.post(`${COURSE_API}/${courseId}/assignments`,assignment);
    return response.data;
};

export const fetchAssignment= async (courseId:any) => {
    const response= await axios.get(`${COURSE_API}/${courseId}/assignments`);
    return response.data;
}

export const updateAssignment= async (assignment:{_id:any;})=>{
    const response=await axios.put(`${ASSIGNMENT_API}/${assignment._id}`,assignment);
    return response.data;
};

export const deleteAssignment = async (assignId:any)=>{
    const response= await axios.delete(`${ASSIGNMENT_API}/${assignId}`);
    return response.data;
};
