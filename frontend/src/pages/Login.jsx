import axios from 'axios';
import React ,{useState}from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://college-social-backendasgfdh.onrender.com/dev/auth/login", { username, password });
      console.log(res.data);
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className="login" style={{margin:'50px'}}>
    <form onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <label htmlFor="">Username</label>
      <input
        name="email"
        type="email"
        placeholder="johndoe@gmail.com"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="">Password</label>
      <input
        name="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && error.message}
    </form>
  </div>
  )
}

export default Login
