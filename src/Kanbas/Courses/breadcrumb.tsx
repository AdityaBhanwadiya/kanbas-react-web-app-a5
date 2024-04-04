import React from "react";
import { FaGlasses, FaBars, FaChevronDown } from 'react-icons/fa6';
import { Link } from "react-router-dom";

const Breadcrumb = ({ courseId , courseName, pageNames }) => {
    const courseBaseUrl = `/Kanbas/Courses/${courseId}`;
    return (
        <div>
            {/* <!-- Mobile Top Bar --> */}
            <div className="col-12 d-block d-sm-none">
                <div className="row fs-4 ps-0 pb-0 d-block d-lg-none">
                    <div className="text-center text-white bg-dark pt-4 pb-4 fs-4 align-middle">
                        <a href="/Kanbas/Courses/CourseNavigation/menu.html"
                            className="text-decoration-none float-end fs-3">
                            <FaChevronDown className="text-white" />
                        </a>
                        <a className="text-decoration-none text-danger fs-3"
                            href="/Kanbas/KanbasNavigation/menu.html">
                            <FaBars className="float-start mt-1 text-white" />
                        </a>
                        <a className="text-decoration-none" href="#">
                            <FaGlasses className="float-end mt-1 me-3 text-white" />
                        </a>
                        <div>
                            <Link to={courseBaseUrl} className="text-white text-decoration-none">
                                <u>
                                    {pageNames.length >= 2 ? (
                                        <>
                                            {courseName}
                                            <br />
                                            {pageNames[pageNames.length - 2]}
                                        </>
                                    ) : (
                                        <>
                                            {courseName}
                                            <br />
                                            {pageNames[0]}
                                        </>
                                    )}
                                </u>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Top bar --> */}
            <div className="d-flex flex-row align-items-center ps-5 ms-5 p-2" >
                <a href="#" className="link">
                    <FaBars className="breadcrumb-icon fa-lg d-none d-sm-block" />
                </a>
                <div className="p-2 d-none d-sm-block">
                    <nav aria-label="breadcrumb" className='breadcrumb-separator'>
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                                <Link to={`/Kanbas/Courses/${courseId}/Home`} className="link">
                                    <span className="course-name">{courseName}</span>
                                </Link>
                            </li>
                            {pageNames.map((pageName: string, index: React.Key | null | undefined) => (
                                <li key={index} className="breadcrumb-item">
                                    {index === pageNames.length - 1 ? (
                                        <span className="page-name">{decodeURIComponent(pageName)}</span>
                                    ) : (
                                        <Link to={`${courseBaseUrl}/${pageName}`} className="link">
                                            <span className="page-name">{decodeURIComponent(pageName)}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
                <div className="ms-auto d-none d-sm-block">
                    <button type="button" className="btn btn-secondary">
                        <FaGlasses className="me-2" />Student View
                    </button>
                </div>
            </div>
            <hr className="ms-3 mt-0 d-none d-sm-block" />
        </div>
    )
}
export default Breadcrumb;