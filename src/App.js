import logo from './logo.jpg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./screens/navbar";
function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
