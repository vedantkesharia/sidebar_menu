import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Information from './pages/Information';
import Guide from './pages/Guide';
import Contact from './pages/Contact';
import Setting from './pages/Setting';
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/information" element={<Information />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </Sidebar>
    </Router>
    </>
  );
}

export default App;
