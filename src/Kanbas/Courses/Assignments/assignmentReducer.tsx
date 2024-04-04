import {createSlice} from "@reduxjs/toolkit";
import {assignments}  from "../../Database";
import { Assignment } from "../../../types";

 export const initialState:{assignments; assignment:Assignment}={
    assignments,
    assignment:{
        _id:'A000',
        name:"New Assignment",
        description: 'New Assignment Description',
        course:"ABC",
        dueDate: "2024-10-02",
        totalPoints: 100,
        availableFromDate: null,
        availableUntilDate: null
    }
 };

const assignmentSlice= createSlice({
    name:"assignments",
    initialState,
    reducers:{
        addAssignment:(state,action)=>{
            state.assignments= [
                {
                    ...action.payload,
                    _id:new Date().getTime().toString()
                },
                ...state.assignments
            ];
        },
        deleteAssignment: (state,action)=>{
            state.assignments=state.assignments.filter(
                assignment => assignment._id!== action.payload
            );
        },
        updateAssignment: (state,action)=>{
            state.assignments=state.assignments.map(assignment => {
                if(assignment._id === action.payload._id){
                    return action.payload;
                }
                else{
                    return assignment;
                }
            });
        },
        setAssignment:(state, action) =>{
            state.assignment=action.payload;
            // console.log(state.assignment);
        },
        setAssignments:(state,action)=>{
            state.assignments = action.payload;
        }
    }
});

export const {addAssignment, deleteAssignment, updateAssignment, setAssignment, setAssignments}=assignmentSlice.actions;
export default assignmentSlice.reducer;