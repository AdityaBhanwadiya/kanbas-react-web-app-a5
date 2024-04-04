import React, { useEffect, useState } from "react";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import {PiNotePencil} from "react-icons/pi";
import {Link, useNavigate, useParams} from "react-router-dom";
import { AssignmentState } from "../../Store";
import { useDispatch,useSelector } from "react-redux";
import { Assignment } from "../../../types";
import "./index.css"
import { 
    deleteAssignment, 
    setAssignment,
    setAssignments,
 } from "./assignmentReducer";

import * as client from "./client";
import { initialState } from "./assignmentReducer";
function Assignments(){
    const {courseId}= useParams();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        client.fetchAssignment(courseId)
            .then(
                (assignments)=>
                    dispatch(setAssignments(assignments))
                );
    },[courseId]);
    

    const assignmentList=useSelector((state:AssignmentState) => state.assignmentReducer.assignments); 

    const courseAssignment=assignmentList.filter(assignment => assignment.course === courseId);

    const [selectedAssignment, setSelectedAssignment] = useState<string>('');
    const [showDialog, setShowDialog]=useState(false);

    const handleShowDialog = () =>{
        setShowDialog(true);
    };

    const handleCloseDialog = () =>{
        setShowDialog(false);
    }

    const handleDeleteAssignment=()=>{
        client.deleteAssignment(selectedAssignment)
        .then((status)=>dispatch(deleteAssignment(selectedAssignment)));
        setShowDialog(false);
    }

    const navigateToAssignment=(assignment: Assignment)=> {
        dispatch(setAssignment(assignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
    };
    
    const handleAddAssignment = () => {
        dispatch(setAssignment(initialState.assignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments/000`);
    };
    
        return (
            <>
                <div className="d-flex w-100 px-2">
                    <div className="flex-fill">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-self-center w-25">
                                <input type="text"
                                    className="form-control d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2"
                                    placeholder="Search Assignments" aria-label="Username"
                                    aria-describedby="basic-addon1"/>
                            </div>
                            <div>
                                <button className="btn btn-light m-1">
                                    + Group
                                </button>
                                <button className="btn btn-danger m-1"
                                    onClick={handleAddAssignment}
                                >+ Assignment</button>
                                <button className="btn btn-light m-1"><FaEllipsisV className="fs-20"/></button>
                            </div>
                        </div>
                        <hr/>
                        <ul className="list-group wd-modules me-4 mt-4">
                            <li className="list-group-items">
                                <div className="module-header py-3">
                                    <span className="me-2 ms-1">
                                        <FaEllipsisV className="fs-20"/>
                                        <FaEllipsisV className="fs-20" style={{marginLeft:-13}}/>
                                    </span>
                                    <div className="d-inline-flex align-items-center justify-content-center">
                                        <button className="btn dropdown-toggle me-2"/>
                                        <span className="fw-bold cursor-pointer">Assignments</span>
                                    </div>
                                    <span className="float-end pe-3">
                                        <span className="border-dark-subtle rounded-pill fs-12 border p-2">
                                            40% of Total
                                        </span>
                                        <i className="me-2 ms-1 cursor-pointer"/>
                                        <FaEllipsisV className="fs-20 ms-2 cursor-pointer"/>
                                    </span>
                                </div>
                                <ul className="list-group">
                                    {courseAssignment.map( assignment=>{
                                        return (
                                            <li key={assignment._id} 
                                                className="list-group-items assignment-li"
                                            >
                                                <div className="module-content fw-bold d-flex justify-content-center align-itmes-center ms-1 py-2">
                                                    <FaEllipsisV className="fs-20"/>
                                                    <FaEllipsisV className="fs-20" style={{marginLeft:-13}}/>
                                                    <PiNotePencil className="text-success fs-24 mx-4"/>
                                                    <span className="w-300 me-auto">
                                                        <span 
                                                        onClick={()=>navigateToAssignment(assignment)}
                                                        className="text-decorattion-underline cursor-pointer">
                                                            {assignment.name}
                                                        </span>
                                                        <br/>
                                                        <span>
                                                            <Link 
                                                            to="#"
                                                            className="fw-normal fs-12 link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
                                                                Multiple Modules
                                                            </Link>
                                                            <span className="fw-normal fs-16"> | </span>
                                                            <span className="fw-normal fs-12">
                                                                {!! assignment.availableFromDate && (
                                                                    <span>
                                                                        <span className="fw-bold">Not available until</span> {" "}{assignment.availableFromDate}
                                                                        <span className="fw-normal fs-16"> | </span>

                                                                    </span>
                                                                )}
                                                                <span className="fw-bold">Due</span> {assignment.dueDate}
                                                                <span className="fw-normal fs-16"> | </span> Points: {assignment.totalPoints}
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="me-2">
                                                        <button
                                                        type="button"
                                                        onClick={()=>{
                                                            handleShowDialog();
                                                            setSelectedAssignment(assignment._id);
                                                        }}
                                                        className="btn btn-danger btn-sm rounded-2 p-1 me-2"
                                                        >
                                                            Delete
                                                        </button>

                                                        <span className="pe-3">
                                                            <FaCheckCircle className="text-success fs-20 me-3 cursor-pointer"/>
                                                            <FaEllipsisV className="fs-20 ms-2 cursor-pointer"/>
                                                        </span>
                                                    </span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {showDialog && (
                    <div className="modal show d-block" tabIndex={-1} role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Dialog Title</h4>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete the assignment?</p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleCloseDialog}
                                    >
                                    Cancel
                                    </button>
                                    <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={handleDeleteAssignment}
                                    >
                                    Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showDialog && <div className="modal-backdrop show"></div>}
            </>
        );
}

export default Assignments;
