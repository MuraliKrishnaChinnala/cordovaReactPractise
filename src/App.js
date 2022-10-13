import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Details from './Details';
import Login from './Login';

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />}/>
        <Route path='homePage' element={<Home />}>
          <Route
            path="dashboard"
            element={<Dashboard />}
          />
          <Route
            path="details"
            element={<Details />}
          />
        </Route>
      </>
    )
  );

  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
    <RouterProvider router={routes} />
  );
}

export default App;
