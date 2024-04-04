import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCourse, setCourse } from '../Courses/courseReducer'
import { useNavigate } from 'react-router';

const EditCourse = ({ course, setEditMode, onClose }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [crs, courseFunc] = useState(course);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCourse(course));
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Edit Course</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input placeholder="Enter course name" value={crs.name} className="form-control mb-3" onChange={(e) => courseFunc({ ...crs, name: e.target.value })} />
                        <input placeholder="Enter course number" value={crs.number} className="form-control mb-3" onChange={(e) => courseFunc({ ...crs, number: e.target.value })} />
                        <input placeholder="Enter course start date" value={crs.startDate} className="form-control mb-3" type="date" onChange={(e) => courseFunc({ ...crs, startDate: e.target.value })} />
                        <input placeholder="Enter course end date" value={crs.endDate} className="form-control mb-3" type="date" onChange={(e) => courseFunc({ ...crs, endDate: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary me-2" onClick={() => {
                        dispatch(setCourse(crs));
                        dispatch(updateCourse(crs));
                        setEditMode(false);
                    }}>
                        Save Changes
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => setEditMode(false)}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditCourse;