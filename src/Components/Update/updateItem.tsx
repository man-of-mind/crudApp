import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from './update.module.scss';
import axios from "axios";
import { useForm } from "react-hook-form";


const baseURL = 'https://jsonplaceholder.typicode.com/posts'; 


const UpdateItem = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const location:any = useLocation();
    const navigate = useNavigate()

    function updatePost(e: any) {
        axios.put(`${baseURL}/${location.state.id}`, {
            title: e.title,
            body: e.body
        }).then((response) => {
            console.log(response.data);
            alert("Updated Successfully")
            navigate('/home');
        }).catch((err) => {
            alert(`Error Occurred detailing: ${err.message}`)
        });
    }
   
    return (
        <div className={styles['container']}>
            <h2>Update a document</h2>
            <div>
                <form onSubmit={handleSubmit(updatePost)}>
                    <label htmlFor="title">Title: </label> <br />
                    <textarea  
                        id="title"  
                        rows={4}
                        cols={40}
                        defaultValue={location.state.title}
                        {...register("title", { required: true, minLength: 5 })}></textarea> <br/>
                    {errors.title && <p className={styles['error-message']}>Please check the Title of the post</p>}
                    <label htmlFor="body">Body: </label> <br />
                    <textarea  
                        id="body"  
                        rows={6} 
                        cols={60}
                        defaultValue={location.state.body}
                        {...register("body", { required: true, minLength: 5 })}></textarea> <br></br>
                    {errors.body && <p className={styles['error-message']}>Please check the body of the post</p>}
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateItem;