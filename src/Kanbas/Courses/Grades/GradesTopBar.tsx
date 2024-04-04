import "./index.css"
import { FaFileImport, FaFileExport, FaGear, FaMagnifyingGlass } from "react-icons/fa6";
import React from "react";

const GradesTopBar = () => {
    return (
        <div>
            <div className="d-flex gap-2 align-items-center justify-content-end">
                <button type="button" className="btn btn-secondary">
                    <FaFileImport className="me-2" />Import
                </button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <FaFileExport className="me-2" />
                        Export
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Export option 1</a></li>
                        <li><a className="dropdown-item" href="#">Export option 2</a></li>
                        <li><a className="dropdown-item" href="#">Export option 3</a></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-secondary">
                    <FaGear />
                </button>
            </div>

            <div className="row mb-2">
                <div className="col-md-6">
                    <b>Student Names</b>
                </div>
                <div className="col-md-6">
                    <b>Assignment Names</b>
                </div>
            </div>
            <div className="row mb-2">

                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaMagnifyingGlass />
                        </span>
                        <input type="text" className="form-control" placeholder="Search Students" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaMagnifyingGlass />
                        </span>
                        <input type="text" className="form-control" placeholder="Search Assignments" />
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <button type="button" className="btn btn-secondary"><i
                        className="fa-solid fa-filter me-2"></i>Apply Filters</button>
                </div>
            </div>
        </div>
    )
}
export default GradesTopBar;