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
