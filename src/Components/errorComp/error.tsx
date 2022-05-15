import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./error.module.scss";

interface Props {
    errorMessage: string
}

const Error: React.FC<Props> = ({errorMessage}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/crudApp/home');
    }
    return (
        <div className={styles['container']}>
            <div className={styles['text']}>
                <h1>Oops.....something went wrong</h1>
                Error: <span>{errorMessage}</span>
            </div>
            <button onClick={handleClick}>Close</button>
        </div>
    );
}

export default Error;