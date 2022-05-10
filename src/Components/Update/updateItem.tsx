import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from './update.module.scss';
import axios from "axios";


const baseURL = 'https://jsonplaceholder.typicode.com/posts'; 


const UpdateItem = () => {
    const location:any = useLocation();
    const [title, setTitle] = useState(location.state.title);
    const [body, setBody] = useState(location.state.body);
    const navigate = useNavigate()

    function updatePost(e: any) {
        e.preventDefault();
        axios.put(`${baseURL}/${location.state.id}`, {
            title: e.target[0].value,
            body: e.target[1].value
        }).then((response) => {
            alert("update successfully")
            navigate('/home');
            console.log(response.data);
        });
    }
   
    return (
        <div className={styles['container']}>
            <h3>Update a document</h3>
            <div>
                <form onSubmit={updatePost}>
                    <label htmlFor="title">Title: </label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}></input> <br/>
                    <label htmlFor="body">Body: </label>
                    <input 
                        type="text" 
                        id="body" 
                        name="body" 
                        value={body}
                        onChange={(e) => setBody(e.target.value)}></input> <br></br>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateItem;