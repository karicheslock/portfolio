import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Blogpost1 from './components/blogposts/Blogpost1';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/blogpost1' element={<Blogpost1 />} />
      </Routes>
    </Router>
  )
}

export default App;
