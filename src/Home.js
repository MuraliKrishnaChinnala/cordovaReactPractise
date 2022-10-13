import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';

export default function Home(){
  const navigate = useNavigate()

  return(
    <div className="home">
      <h1>Home Page</h1>
      <div className="header">
        <button onClick={() => navigate("dashboard")}>Dashboard</button>
        <button onClick={() => navigate("details")}>Details</button>
      </div>
      <div>
        <button onClick={()=>navigate("/")}>Logout</button>
      </div>
      <Outlet />
    </div>
  )
}
