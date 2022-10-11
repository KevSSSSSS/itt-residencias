import "./App.css";
import NavMain from "./components/NavMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Residents from "./screens/Residents";
import AddResident from "./screens/AddResident";
import Login from "./screens/Login";
import MainMenu from "./screens/MainMenu";
import Groups from "./screens/Groups";
import Resident from "./screens/Resident";

function App() {
  return (
    <Router>
      <div>
        <NavMain/>
        {/* 
          <Login width={width}/>
          */}
        <Routes>
          <Route path="/" exact element={<MainMenu/>}/>
          <Route path="/home" element={<Residents/>}/>
          <Route path="/groups" element={<Groups/>}/>
          <Route path="/add" element={<AddResident/>}/>
          <Route path="/resident" element={<Resident/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
