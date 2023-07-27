import axios from 'axios';


const newRequest = axios.create({
    baseURL: "https://college-social-backendasgfdh.onrender.com/dev/",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default newRequest;