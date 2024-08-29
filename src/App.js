import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from "./HomePage";
import ReactQueryPage from "./ReactQueryPage";


function App() {
  return (
    <div className="App">
      <nav style={{backgroundColor: "pink", padding:"20px"}}>
        <Link to ="/" style={{marginRight:"10px"}}>
          HomePage
        </Link>
        <Link to="/react-query">
          React Query
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/react-query" element={<ReactQueryPage/>} />
      </Routes>
    </div>
  );
}

export default App;

// const port = process.env.PORT
// Launch the server: json-server --watch db.json --port {PORT}
// http://localhost:3004/posts