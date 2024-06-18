import './App.css';
import Headere from './pages/head';
import Footer from './pages/footer';
import Main from './pages/Main';
import Mainpage from './pages/Main_page';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Reservation from './pages/Reservation';

function App() {
  return (
    <div className="App">
<Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/profile" element={<Main/>}/>
       <Route path="/reservation" element={<Reservation/>}/>
       
</Routes>

    </div>
  );
}

export default App;
