import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Destinos from "./pages/Destinos";
import Login from "./pages/Login";
import Hoteis from "./pages/Hoteis";
import Pacotes from "./pages/Pacotes";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AdmDestino from "./pages/AdmDestino";
import AdmHotel from "./pages/AdmHotel";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/hoteis" element={<Hoteis />} />
        <Route path="/pacotes" element={<Pacotes />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/destinos" element={<AdmDestino />} />
        <Route path="/admin/hoteis" element={<AdmHotel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
