import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux";
import { 
    addAssignment, 
    setAssignment, 
    updateAssignment,
    setAssignments
} from "../assignmentReducer";
import { AssignmentState } from "../../../Store";
import "./index.css";
import * as client from "../client";

function AssignmentEditor(){
    
    const {courseId} =useParams();
    const dispatch=useDispatch();

    const assignmentList=useSelector(
        (state: AssignmentState)=>state.assignmentReducer.assignments
    );

    const assignment=useSelector(
        (state: AssignmentState)=>state.assignmentReducer.assignment
    );

    const editAssign = assignmentList.findIndex(a=> a._id === assignment._id)!==-1;
    const navigate =useNavigate();
    
    console.log(courseId);
    // console.log(assignment._id);
    const handleSave =async() => {
        
        if(editAssign){
            const status = await client.updateAssignment(assignment);
            dispatch(updateAssignment(assignment));
        }
        else{
            client.createAssignment(courseId, assignment).then((assignment) => {
                dispatch(addAssignment({...assignment,course:courseId}));
            });
            // dispatch(addAssignment({...assignment,course:courseId}));
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    useEffect(()=>{
        client.fetchAssignment(courseId)
            .then(
                (assignments)=>
                    dispatch(setAssignments(assignments))
                );
    },[courseId]);
    

    return (
        <div className="d-flex flex-column w-100 px-5">
            
            <div className="d-flex justify-content-end align-items-center me-3 mt-2 pb-2">
                <div>
                    <FaCheckCircle className="text-success" aria-hidden="true"/>
                    <span className="fw-bold text-success">Published</span>
                </div>
                <button className="btn btn-light ms-3">
                    <FaEllipsisV aria-hidden="true"/>
                </button>
            </div>
            
            <hr />
            
            <div className="mb-5">
                <div className="mb-3">
                    <label 
                        htmlFor="assignment-name" 
                        className="form-label"
                    >
                        Assignment Name
                    </label>
                    <input 
                        
                        className="form-control" 
                        id="assignment-name"
                        value={assignment?.name} 
                        onChange={(e)=>dispatch(setAssignment({
                            ...assignment,
                            name: e.target.value
                        }))}
                        placeholder={assignment?.name}
                    />
                </div>
                <div className="mb-3">
                    <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    value={assignment.description}
                    onChange={(e)=>dispatch(setAssignment({
                        ...assignment,
                        description: e.target.value
                    }))}
                    rows={4}
                    >
This assignment describes how to install the development environment for creating and working with Web application we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.
                    </textarea>
                </div>
                <div className="container-fluid">
                    <div className="row my-3">
                        <div className="col-2">
                            <div className="d-flex w-100 justify-content-end">
                                <label htmlFor="assignment-points" className="form-label">Points</label>
                            </div>
                        </div>
                        <div className="col-5">
                            <input 
                                type="number" 
                                className="form-control" 
                                id="assignment-points" 
                                value={assignment.totalPoints}
                                onChange={(e)=> dispatch(
                                    setAssignment({
                                        ...assignment,
                                        totalPoints:e.target.value
                                }))}
                                placeholder="100"
                            />
                        </div>
                    </div>
                    
                    <div className="row my-3">
                        <div className="col-2">
                            <div className="d-flex w-100 justify-content-end">
                                <label htmlFor="assignment-groups" className="form-label">Assignment Groups</label>
                            </div>
                        </div>
                        <div className="col-5">
                            <select id="assignment-groups" className="form-select"
                                aria-label="Default select example">
                                <option selected>ASSIGNMENTS</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mt-3 mb-5">
                        <div className="col-2">
                            <div className="d-flex w-100 justify-content-end">
                                <label htmlFor="display-grade" className="form-label">Display Grade as</label>
                            </div>
                        </div>
                        <div className="col-5">
                            <select id="display-grade" className="form-select" aria-label="Default select example">
                                <option selected>Percentage</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <br />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="exclude-assignment"/>
                                <label className="form-check-label" htmlFor="exclude-assignment">
                                    Do not count this assignment towards the final grade
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2">
                            <div className="d-flex w-100 justify-content-end">
                                <label htmlFor="assignment-points" className="form-label">Assign</label>
                            </div>
                        </div>
                        <div className="col-5 border rounded-2">
                            <div className="d-flex flex-column w-100">
                                <div className="my-2">
                                    <label className="fw-bold">Assign to</label>
                                    <div
                                        className="d-flex flex-row p-2 align-items-center border border-top border-subtle rounded-2">
                                        <div
                                            className="d-flex flex-row fw-light justify-content-center align-items-center rounded-1 fs-12 h-30">
                                            <button type="button" className="btn btn-light m-0 pe-2">Everyone <i
                                                    className="fa fa-times"></i></button>

                                        </div>
                                    </div>
                                </div>

                                <div className="mt-1 mb-3">
                                    <label htmlFor="assignment-due" className="form-label fw-bold">Due</label>
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        placeholder={assignment?.dueDate}
                                        value={assignment?.dueDate??''}
                                        onChange={(e)=>{
                                            dispatch(
                                                setAssignment({
                                                    ...assignment,
                                                    dueDate:e.target.value,
                                            }))
                                        }}
                                        id="assignment-due"/>
                                </div>

                                <div className="row g-1 mb-3">
                                    <div className="col-6">
                                        <label htmlFor="assignment-available" className="form-label fw-bold">Available
                                            from</label>
                                        <input 
                                            type="date" 
                                            className="form-control"
                                            placeholder={assignment?.availableFromDate??''}
                                            value={assignment?.availableFromDate??''} 
                                            onChange={(e)=>
                                                dispatch(
                                                    setAssignment({
                                                        ...assignment,
                                                        availableFromDate: e.target.value,
                                                    })
                                            )}
                                            id="assignment-available"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="assignment-until" className="form-label fw-bold">Until</label>
                                        <input 
                                            type="date" 
                                            className="form-control"
                                            id="assignment-until"
                                            placeholder={assignment?.availableUntilDate??''} 
                                            value={assignment?.availableUntilDate??''} 
                                            onChange={(e)=>
                                                dispatch(
                                                    setAssignment({
                                                        ...assignment,
                                                        availableUntilDate: e.target.value,
                                                    })
                                            )}
                                            
                                        />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <button type="button" className="btn btn-light rounded-0"> + Add </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <div className="d-flex justify-content-between align-items-center m-3 pt-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="notify-users"/>
                    <label className="form-check-label" htmlFor="notify-users">
                        Notify users that this content has changed
                    </label>
                </div>
                <div>
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-light float-end">
                    Cancel
                    </Link>
                    <button onClick ={handleSave} type="button" className="btn btn-danger">
                        Save
                    </button>
                </div>
            </div>

        </div>
    );
}

export default AssignmentEditor;