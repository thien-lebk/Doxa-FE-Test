import './App.css';

import About from "./routes/About";
import Home from "./routes/Home";
import Topics from "./routes/TopicDetailPage";
// import listPost from "./component/test";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App bg-gray-200">
     <BrowserRouter>
        <Routes>
          <Route exact path="/" element={Home()} />
          <Route path="/detail" element={<Topics></Topics>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
