import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API=`${API_BASE}/api/courses`;
const ASSIGNMENT_API=`${API_BASE}/api/assignments`;

export const updateAssignment = async (assignment) => {
    const response = await axios.
        put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return response.data;
};


export const deleteAssignment = async (assignmentId) => {
    const response = await axios
        .delete(`${ASSIGNMENT_API}/${assignmentId}`);
    return response.data;
};


export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};


export const fetchAssignment = async (courseId) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};