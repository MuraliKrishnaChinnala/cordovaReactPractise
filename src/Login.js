import { useNavigate } from 'react-router-dom';
import './App.css';

export default function Login(){
  const navigate = useNavigate()

  return(
    <div className='login'>
      <h1>Login Page</h1>
      <button onClick={()=> navigate("/homePage")}>Go to Home Page</button>
    </div>
  )
}