import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Send from './Send';
import Download from './Download';
import Donate from './Donate';
import Contact from './Contact';
import Share from './Share';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path="/" Component={Home} />
    <Route path="/Send" Component={Send}></Route>
    <Route path="/Download" Component={Download}></Route>
    <Route path="/Donate" Component={Donate}></Route>
    <Route path="/Contact" Component={Contact}></Route>
    <Route path="/Share" Component={Share}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
