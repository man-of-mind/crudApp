import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./addItem.module.scss";
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const baseURL = 'https://jsonplaceholder.typicode.com/posts'; 
    const navigate = useNavigate();

    function addPost(data:any) {
        axios.post(baseURL, {
            title: data.title,
            body: data.body
        }).then((res) => {
            console.log(res.data);
            alert("Added Post Successfully");
            navigate("/crudApp/home");
        }).catch((error) => {
            alert(`Error Occurred detailing: ${error.message}`)
        });
    }

    return (
        <div className={styles['container']}>
            <h2>Create New Post...</h2>
            <form onSubmit={handleSubmit(addPost)}>
                <label htmlFor="title">Title: </label>
                <input 
                    type="text" 
                    id="title"  
                    {...register("title", { required: true, minLength: 5 })}/> <br></br>
                {errors.title && <p className={styles['error-message']}>Please check the Title of the post</p>}
                <label htmlFor="body">Body: </label><br></br>
                <textarea 
                    id="body" 
                    rows={5} 
                    cols={50} 
                    {...register("body", { required: true, minLength: 5 })}></textarea> <br></br>
                {errors.body && <p className={styles['error-message']}>Please check the body of the post</p>}
                <button>Add Post</button>
            </form>
        </div>
    );
}

export default AddItem;