import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from "./HomePage";
import ReactQueryPage from "./ReactQueryPage";
import NormalPage from './NormalPage';


function App() {
  return (
    <div className="App">
      <nav style={{backgroundColor: "pink", padding:"20px"}}>
        <Link to ="/" style={{marginRight:"10px"}}>
          Home Page
        </Link>
        <Link to ="/normal-fetch" style={{marginRight:"10px"}}>
          Nomal Page
        </Link>
        <Link to="/react-query">
          React Query
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/normal-fetch" element={<NormalPage/>} />
        <Route path="/react-query" element={<ReactQueryPage/>} />
      </Routes>
    </div>
  );
}

export default App;

// const port = process.env.PORT
// Launch the server: json-server --watch db.json --port {PORT}
// http://localhost:3004/posts