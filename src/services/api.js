import axios from 'axios'


const apiBeer = axios.create({
    baseURL: "http://localhost:3001"
})

export default apiBeer