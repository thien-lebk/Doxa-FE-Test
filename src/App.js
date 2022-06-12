import './App.css';

import About from "./components/About";
import Home from "./components/Home";
import Topics from "./components/Topic";
// import listPost from "./component/test";
import RenderList from "./components/test";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App bg-gray-200">
     <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        <Routes>
          <Route exact path="/" element={Home()} />
          <Route path="/about" element={About()} />
          <Route path="/topics" element={Topics()} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
