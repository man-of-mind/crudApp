import React, { useEffect, useState } from 'react';
import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import { getData } from '../../utils/serverCom';


const response:any = getData(); 
console.log(response)  

function Home() {
    
    return (
        <div className={styles["home"]}>
        <h3>CRUD APP</h3>
        <Link to='/item/new' style={{textDecoration: 'none'}}><div className={styles['button']}>Create</div></Link>
        <table>
        <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>Peace in our nation Nigeria</td>
            <td>Peace in the whole world because God wants it to be, Lord send your peace to the whole world, let us feel your impact</td>
            <td><div className={styles['button']}>Update</div></td>
            <td><div className={styles['button']}>Delete</div></td>
        </tr>
        </table>
        </div>
    );
}
export default Home;
