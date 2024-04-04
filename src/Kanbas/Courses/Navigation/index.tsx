import { Link, useParams, useLocation } from 'react-router-dom';
import { FaEyeSlash } from 'react-icons/fa';
import './index.css';
import React from 'react';

const CourseNavigation = () => {
    const links = [
        "Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes",
        "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages",
        "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings"
    ];

    const { courseId } = useParams();
    const { pathname } = useLocation();

    return (
        <div className="ps-0">
            <p className="cnav-small-text text-body-secondary">202410_1 Fall 2023 Semester</p>
            <ul className="course-nav">
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(encodeURIComponent(link)) ? 'course-nav-selected' : ''}>
                        <Link to={`/Kanbas/Courses/${courseId}/${encodeURIComponent(link)}`}>{link}</Link>
                        {link === 'Discussions' || link === 'Announcements' || link === 'Pages' || link === 'Files' || link === 'Rubrics' || link === 'Outcomes' || link === 'Collaborations' || link === 'Syllabus' ? (
                            <FaEyeSlash className="ms-1 fa-2x" />
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseNavigation;