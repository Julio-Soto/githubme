import "./App.css";
import Input from "./pages/input.js";
import User from "./pages/user.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Input />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
