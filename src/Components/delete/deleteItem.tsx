import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import  styles from "./delete.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Error from "../errorComp/error";

const DeleteItem = () => {
    const baseURL = 'https://jsonplaceholder.typicode.com/posts'; 
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const location:any = useLocation();

    const handleNo = () => navigate("/crudApp/home");
    
    
    const handleYes = () => {
        axios.delete(`${baseURL}/${location.state.id}`).then((res) => {
            console.log(res)
            alert("Deleted Successfully");
            navigate('/crudApp/home');
        }).catch((error) => {
            setError(error.message);
//            alert(`Error Occurred detailing: ${error.message}`);
        });
    }


    return (
        <>{ error !== null ? 
            <div>
                <Error errorMessage={error}/>
            </div>  : 
            <div className={styles['delete']}>
                <h2>Delete <em>"{location.state.title}?"</em></h2> 
                <h3>Are you sure?</h3>
                <div className={styles['buttons']}>
                    <button onClick={handleYes}>Yes</button>
                    <button onClick={handleNo}>No</button>
                </div>
            </div>
            }
        </>
    );
}

export default DeleteItem;