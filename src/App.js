import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './Components/calculator';
import Home from './Components/Home';
import Quote from './Components/Quote';
import Nav from './Navbar/Nav';

const App = () => (

  <div className="App">
    <div className="Navigation">
      <h1>Math Magicians</h1>
      <Nav />
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
