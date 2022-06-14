import './App.css';

import CategoryHeader from "./components/CategoryHeader/CategoryHeader";
import Header from "./components/Header/Header";
import Home from "./routes/Home";
import Topics from "./routes/Detail";
// import listPost from "./component/test";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
function App() {
  return (
    <div className="App bg-gray-200">
      {Header()}
      {CategoryHeader()}
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
