import { BrowserRouter, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar";
import Destinos from "./pages/Destinos";
import Login from "./pages/Login";
import Hoteis from "./pages/Hoteis";
import Pacotes from "./pages/Pacotes";
import Home from "./pages/Home";

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
        {/* <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
