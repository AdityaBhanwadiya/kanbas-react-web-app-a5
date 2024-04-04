import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
        updateTitle();
    }, []);


    const [module, setModule] = useState({
        id: "001",
        name: "Introduction to React",
        description: "A comprehensive introduction to React.js framework",
        course: "Web Development",
    });
    const MODULE_URL = "http://localhost:4000/a5/module"

    const handleScoreChange = (e: any) => {
        const newScore = parseInt(e.target.value);
        setAssignment({
            ...assignment,
            score: newScore >= 0 ? newScore : 0,
        });
    };

    const handleCompletedChange = (e: any) => {
        const newCompleted = e.target.checked;
        setAssignment({
            ...assignment,
            completed: newCompleted,
        });
    };

    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <input onChange={(e) => setAssignment({
                ...assignment, title: e.target.value
            })}
                value={assignment.title} type="text" />
            <button onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment} >
                Fetch Assignment
            </button>



            <h4>Modifying Properties</h4>
            <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input
                type="number"
                onChange={handleScoreChange}
                value={assignment.score}
            />

            <h4>Modifying Properties</h4>
            <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Update Completed
            </a>
            <input
                type="checkbox"
                onChange={handleCompletedChange}
            />

            <h4>Retrieving Objects</h4>
            <a href="http://localhost:4000/a5/assignment">
                Get Assignment
            </a>

            <h4>Retrieving Properties</h4>
            <a href="http://localhost:4000/a5/assignment/title">
                Get Title
            </a>

            <br />
            <h4>Get Module</h4>
            <a href="http://localhost:4000/a5/module">Get Module</a>


            <br />
            <h4>Get Module Name</h4>
            <a href="http://localhost:4000/a5/module/name">Get Module Name</a>


            <br />
            <h4>Modifying Module Properties</h4>
            <a href={`${MODULE_URL}/name/${module.name}`}>
                Update Name
            </a>
            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    name: e.target.value
                })}
                value={module.name} />
        </div>
    );
}
export default WorkingWithObjects;