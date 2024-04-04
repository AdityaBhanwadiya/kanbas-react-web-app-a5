import React from "react";
import { FaCircleCheck, FaEllipsisVertical } from "react-icons/fa6";

const AssignmentEditorTopBar = () => {
    return (
        <div>
            <div className="d-flex gap-3 align-items-center justify-content-end">
                <div>
                    <FaCircleCheck className="check-icon me-1" />
                    <span className="check-icon"><b>Published</b></span>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <FaEllipsisVertical />
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Option 1</a></li>
                        <li><a className="dropdown-item" href="#">Option 2</a></li>
                        <li><a className="dropdown-item" href="#">Option 3</a></li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    )
}
export default AssignmentEditorTopBar;