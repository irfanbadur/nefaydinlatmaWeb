import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Anasayfa from "./components/Anasayfa"
import Urunlerimiz from './components/Urunlerimiz';
import Hakkimizda from './components/Hakkimida';
import Iletisim from './components/Iletisim';
import Contact from './components/Contact';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
 
       <Nav/>

       <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/urunlerimiz" element={<Urunlerimiz />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/contact" element={<Contact/>} />
         
      </Routes> 
    </div>
  );
}

export default App;
