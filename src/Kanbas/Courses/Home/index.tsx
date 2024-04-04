import React from "react";
import ModuleList from "../Modules/Modulelist";
import CourseStatus from "./CourseStatus";
import "./index.css"

const Home = () => {
    return (
        <div className="row">
            <div className="col">
                <ModuleList />
            </div>
            <div className="col-4">
                <CourseStatus />
            </div>

        </div>
    );
}
export default Home;