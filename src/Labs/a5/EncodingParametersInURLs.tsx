import React, { useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);
    const [welcome, setWelcome] = useState("");
    const API_BASE = process.env.REACT_APP_API_BASE;
    const fetchWelcome = async () => {
        const response = await axios.get(`${API_BASE}/a5/welcome`);
        setWelcome(response.data);
    };

    const [result, setResult] = useState(0);
    const fetchSum = async (a: number, b: number) => {
        const response = await
        axios.get(`${API_BASE}/a5/add/${a}/${b}`);
        setResult(response.data);
    };
    const fetchSubtraction = async (a: number, b: number) => {
        const response = await axios.get(
            `${API_BASE}/a5/subtract/${a}/${b}`);
        setResult(response.data);
    };

    useEffect(() => {
        fetchSum(a, b);
        fetchSubtraction(a, b);
    }, []);

    return (
        <div>
            <h3>Encoding Parameters In URLs</h3>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome</h5>
            <h6>{welcome}</h6>
            <h4>Calculator</h4>
            <input type="number" value={a}
                onChange={(e) => setA(parseInt(e.target.value))} />
            <input type="number"
                onChange={(e) => setB(parseInt(e.target.value))} value={b} />
            <br/>
            <input value={result} type="number" readOnly />
            <h3>Fetch Result</h3>
            <button onClick={() => fetchSum(a, b)} >
                Fetch Sum of {a} + {b}
            </button>
            <button onClick={() => fetchSubtraction(a, b)} >
                Fetch Substraction of {a} - {b}
            </button>


            <h3>Query Parameters</h3>
            <button className="btn btn-primary" style={{ width: '150px', height: '40px' }}
                onClick={() => { window.location.href = `${API_BASE}/a5/calculator?operation=add&a=${a}&b=${b}` }}>
                Add {a} + {b}
            </button>

            <button className="btn btn-danger" style={{ width: '150px', height: '40px' }}
                onClick={() => { window.location.href = `${API_BASE}/a5/calculator?operation=subtract&a=${a}&b=${b}` }}>
                Subtract {a} - {b}
            </button>

            <button className="btn btn-primary" style={{ width: '150px', height: '40px' }}
                onClick={() => { window.location.href = `${API_BASE}/a5/calculator?operation=multiply&a=${a}&b=${b}`}}>
                Multiply {a} * {b}
            </button>

            <button className="btn btn-danger" style={{ width: '150px', height: '40px' }}
                onClick={() => { window.location.href = `${API_BASE}/a5/calculator?operation=divide&a=${a}&b=${b}` }}>
                Divide {a} / {b}
            </button>


        </div>
    );
}
export default EncodingParametersInURLs;

