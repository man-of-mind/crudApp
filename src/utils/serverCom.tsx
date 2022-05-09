import axios from "axios";


const baseURL = 'https://jsonplaceholder.typicode.com/posts';
const client = axios.create({
    baseURL: baseURL
});

export async function getData() {
    const data = await client.get("/1");
    return data.data;
} 