import React, { useState } from 'react';
import db from '../../Database';
import { useParams } from 'react-router-dom';
import GradesTopBar from './GradesTopBar';
import './index.css';

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

    const [editableGrades, setEditableGrades] = useState({});

    const handleGradeChange = (enrollmentId, assignmentId, value) => {
        setEditableGrades((prevGrades) => ({
            ...prevGrades,
            [`${enrollmentId}-${assignmentId}`]: value,
        }));
    };

    return (
        <div>
            <GradesTopBar />
            <div className="table-responsive">
                <table className="table table-striped table-bordered border-secondary text-center">
                    <thead className="table-secondary">
                        <tr>
                            <th>Student Name</th>
                            {assignments.map((assignment) => (
                                <th key={assignment._id}>
                                    {assignment.description}
                                    <br />
                                    Out of {assignment.points}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr key={enrollment.user}>
                                    <td>
                                        {user.firstName} {user.lastName}
                                    </td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) =>
                                                grade.student === enrollment.user && grade.assignment === assignment._id
                                        );
                                        const isEditable = true;
                                        const gradeKey = `${enrollment.user}-${assignment._id}`;
                                        const value = editableGrades[gradeKey] !== undefined ? editableGrades[gradeKey] : grade?.grade || '';

                                        return (
                                            <td key={assignment._id}>
                                                {isEditable ? (
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={value}
                                                            onChange={(e) => handleGradeChange(enrollment.user, assignment._id, e.target.value)}
                                                        />
                                                    </div>
                                                ) : (
                                                    grade?.grade != null ? `${grade.grade}%` : ''
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Grades;