import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from './update.module.scss';
import axios from "axios";
import { useForm } from "react-hook-form";
import Error from "../errorComp/error";


const baseURL = 'https://jsonplaceholder.typicode.com/posts'; 


const UpdateItem = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [clearTitle, setClearTitle] = useState<Boolean>(false);
    const [clearBody, setClearBody] = useState<Boolean>(false);
    const location:any = useLocation();
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    function updatePost(e: any) {
        axios.put(`${baseURL}/${location.state.id}`, {
            title: e.title,
            body: e.body
        }).then((response) => {
            console.log(response.data);
            alert("Updated Successfully")
            navigate('/crudApp/home');
        }).catch((err) => {
            setError(err.message);
 //           alert(`Error Occurred detailing: ${err.message}`)
        });
    }

    React.useEffect(() => {
        (errors.title) ? setClearTitle(true) : setClearTitle(false);
        (errors.body) ? setClearBody(true) : setClearBody(false);
    }, [errors.title, errors.body]);
   
    return (
        <>{ error !== null ? 
            <div>
                <Error errorMessage={error}/>
            </div> :
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
                        {!clearTitle ? <><span>Length of word must be greater than four</span><br></br></> : null}
                        {errors.title && <p className={styles['error-message']}>Title must have a length greater than four</p>}
                        <label htmlFor="body">Body: </label> <br />
                        <textarea  
                            id="body"  
                            rows={6} 
                            cols={60}
                            defaultValue={location.state.body}
                            {...register("body", { required: true, minLength: 5 })}></textarea> <br></br>
                        {!clearBody ? <><span>Length of word must be greater than four</span><br></br></> : null}
                        {errors.body && <p className={styles['error-message']}>Body must have a length greater than four</p>}
                        <br></br>
                        <button type="submit">Update</button>
                    </form>
                </div>
            </div>
        }</>
    );
}

export default UpdateItem;