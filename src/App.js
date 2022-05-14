
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Components/Appointment/Appointment';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Navbar from './Components/Navbar/Navbar';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="appointment" element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
      <Route path="login" element={<Login></Login>}></Route>
      <Route path="register" element={<Register></Register>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
