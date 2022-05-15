import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./addItem.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Error from "../errorComp/error";

const AddItem = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const baseURL = 'https://jsonplaceholder.typicode.com/posts'; 
    const navigate = useNavigate();
    const [clearTitle, setClearTitle] = useState<Boolean>(false);
    const [clearBody, setClearBody] = useState<Boolean>(false);
    const [error, setError] = useState(null);

    function addPost(data:any) {
        axios.post(baseURL, {
            title: data.title,
            body: data.body
        }).then((res) => {
            console.log(res.data);
            alert("Added Post Successfully");
            navigate("/crudApp/home");
        }).catch((error) => {
            setError(error.message);
 //           alert(`Error Occurred detailing: ${error.message}`)
        });
    }

    React.useEffect(() => {
        (errors.title) ? setClearTitle(true) : setClearTitle(false);
        (errors.body) ? setClearBody(true) : setClearBody(false);
    }, [errors.title, errors.body]);

    return (<>
        { error !== null ? 
            <div>
                <Error errorMessage={error}/>
            </div> :
            <div className={styles['container']}>
                <h2>Create New Post...</h2>
                <form onSubmit={handleSubmit(addPost)}>
                    <label htmlFor="title">Title: </label>
                    <input 
                        type="text" 
                        id="title"  
                        {...register("title", { required: true, minLength: 5 })}/> <br></br>
                    {!clearTitle ? <><span><em>Length of word must be greater than four</em></span><br></br></> : null}
                    {errors.title && <p className={styles['error-message']}>Title must have a length greater than four</p>}
                    <label htmlFor="body">Body: </label><br></br>
                    <textarea 
                        id="body" 
                        rows={5} 
                        cols={50} 
                        {...register("body", { required: true, minLength: 5 })}></textarea> <br></br>
                    {!clearBody ? <><span><em>Length of word must be greater than four</em></span><br></br></> : null}
                    {errors.body && <p className={styles['error-message']}>Body must have a length greater than four</p>}
                    <br></br>
                    <button>Add Post</button>
                </form>
            </div>
        }</>
        
    );
}

export default AddItem;