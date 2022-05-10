import React, { useEffect, useState } from 'react';
import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/posts'; 
interface schema {
    id: number,
    userId: number,
    body: string,
    title: string
}

function Home() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            setLoading(false)
        });
    }, []);

    const data:schema[] = post.slice(0, 10);
    const tableData = data.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td><Link to={`/update_item/${item.id}`} 
                        style={{textDecoration: 'none'}} 
                        state={{title: `${item.title}`, body: `${item.body}`, id: `${item.id}`}}>
                            <div className={styles['button']}>Update</div>
                    </Link>
                </td>
                <td><Link to={`/delete_item/${item.id}`} 
                        style={{textDecoration: 'none'}} 
                        state={{title: `${item.title}`, id: `${item.id}`}}>
                            <div className={styles['button']}>Delete</div>
                    </Link>
                </td>
            </tr>
        );
    })
    return (
        <div className={styles["home"]}>
        <h3>CRUD APP</h3>
        <Link to='/item/new' style={{textDecoration: 'none'}}><div className={styles['button']}>Create</div></Link>
        <>{!loading ? (<table>
        <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
        {tableData}
        </table>) : (<div>Loading...</div>)}</>
        
        </div>
    );
}
export default Home;
