import { React, useState, useEffect} from "react";
import './TodoList.css';

function TodoList() {
    const [data, setData] = useState(null);       

    useEffect(() => {
        fetch("/api").then((res) => res.json())
        .then((data) => setData(data)).catch((error) => {
            console.log(error);
        });        
    }, [])  
    
    
    console.log(data)
    return (
        <div className="Todo">
            <h1>{data}</h1>
        </div>
    );
}
export default TodoList;