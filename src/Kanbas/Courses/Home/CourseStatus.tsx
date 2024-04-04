import './index.css'
import { FaBan, FaCircleCheck, FaFileImport, FaRightFromBracket, FaCrosshairs, FaChartSimple, FaBullhorn, FaBell, FaCalendar, FaCircleInfo, FaXmark } from "react-icons/fa6";
import React from 'react';

const CourseStatus = () => {
    return (
        <div>
            <h5>Course Status</h5>
            <div className="d-flex mb-2 gap-1">
                <button type="button" className="btn btn-secondary">
                    <FaBan className="me-2" />
                    Unpublish
                </button>
                <button type="button" className="btn btn-success" disabled>
                    <FaCircleCheck className="me-2" style={{ color: 'lightgreen' }} />
                    Published
                </button>
            </div>

            <div className="d-flex flex-column">
                <button className="btn btn-secondary mb-2 text-start">
                    <FaFileImport className="me-2" />
                    Import Existing Content
                </button>
                <button className="btn btn-secondary mb-2 text-start">
                    <FaRightFromBracket className="me-2" />
                    Import From Commons
                </button>
                <button className="btn btn-secondary mb-2 text-start">
                    <FaCrosshairs className="me-2" />
                    Choose Home Page
                </button>
                <button className="btn btn-secondary mb-2 text-start">
                    <FaChartSimple className="me-2" />
                    View Course Stream
                </button>
                <button className="btn btn-secondary mb-2 text-start">
                    <FaBullhorn className="me-2" />
                    New Announcement
                </button>
                <button className="btn btn-secondary mb-2 text-start">
                    <FaChartSimple className="me-2" />
                    New Analytics
                </button>
                <button className="btn btn-secondary mb-2 text-start">
                    <FaBell className="me-2" />
                    View Course Notifications
                </button>
            </div>

            <div className="mt-3 mb-3">
                <h6 className="m-0">To Do</h6>
                <hr className="mt-1" />
            </div>

            <div className="d-flex flex-row justify-content-between mb-3">
                <FaCircleInfo className='me-2' style={{ color: 'red' }} />
                <div className="d-flex flex-column mb-3">
                    <h6 className="todo-item">Grade A1 - ENV + HTML</h6>
                    <small className="text-body-secondary">100 points • Sep 18 at 11:59pm</small>
                </div>
                <FaXmark style={{ color: 'grey' }} />
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <h6 className="m-0">Coming Up</h6>
                <a className="link" href="#">
                    <FaCalendar className='me-1' />
                    View Calendar
                </a>
            </div>

            <hr className="mt-1" />

            <div className="d-flex flex-column gap-3">
                <div className="d-flex flex-row gap-2 align-items-stretch">
                    <FaCalendar />
                    <div className="d-flex flex-column">
                        <a className="link" href="#">Lecture</a>
                        <small className="text-body-secondary">CS4550.12631.202410</small>
                        <small className="text-body-secondary">Sep 7 at 11:45am</small>
                    </div>
                </div>

                <div className="d-flex flex-row gap-2 align-items-stretch">
                    <FaCalendar />
                    <div className="d-flex flex-column">
                        <a className="link" href="#">CS5610.06 SP23 Lecture</a>
                        <small className="text-body-secondary">CS4550.12631.202410</small>
                        <small className="text-body-secondary">Sep 11 at 11:45am</small>
                    </div>
                </div>

                <div className="d-flex flex-row gap-2 align-items-stretch">
                    <FaCalendar />
                    <div className="d-flex flex-column">
                        <a className="link" href="#">Lecture</a>
                        <small className="text-body-secondary">CS4550.12631.202410</small>
                        <small className="text-body-secondary">Sep 11 at 6pm</small>
                    </div>
                </div>

                <small><a className="link" href="#">12 more in the next week...</a></small>
            </div>
        </div>
    )
}
export default CourseStatus;