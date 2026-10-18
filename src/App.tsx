
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Portada from "./pages/Portada";
import Inicio from "./pages/Inicio";
import Proyectos from "./pages/Proyectos";
import SobreMi from "./pages/SobreMi";
import Contacto from "./pages/Contacto";

import CharcuteriaCo from "./pages/CharcuteriaCo";
import Luxol from "./pages/Luxol";
import FElectro from "./pages/FElectro";
import Veterinaria from "./pages/Veterinaria";
import Supermercado from "./pages/Supermercado";
import Montalban from "./pages/Montalban";
import SanLuisGonzaga from "./pages/SanLuisGonzaga";
import ZooMundo from "./pages/ZooMundo";

import "./App.css";

function ContenidoRutas() {
  const location = useLocation();
  const [animacion, setAnimacion] = useState(0);

  useEffect(() => {
    setAnimacion((anterior) => anterior + 1);
  }, [location.pathname]);

  return (
    <main
      key={animacion}
      className="contenido-principal page-transition"
    >
      <Routes>
        <Route path="/inicio" element={<Inicio />} />

        <Route path="/proyectos" element={<Proyectos />} />

        <Route
          path="/proyectos/charcuteria-co"
          element={<CharcuteriaCo />}
        />

        <Route path="/proyectos/luxol" element={<Luxol />} />

        <Route
          path="/proyectos/f-electro"
          element={<FElectro />}
        />

        <Route
          path="/proyectos/veterinaria"
          element={<Veterinaria />}
        />

        <Route
          path="/proyectos/supermercado"
          element={<Supermercado />}
        />

        <Route
          path="/proyectos/montalban"
          element={<Montalban />}
        />

        <Route
          path="/proyectos/san-luis-gonzaga"
          element={<SanLuisGonzaga />}
        />

        <Route
          path="/proyectos/zoomundo"
          element={<ZooMundo />}
        />

        <Route path="/sobre-mi" element={<SobreMi />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route
          path="*"
          element={<Navigate to="/inicio" replace />}
        />
      </Routes>
    </main>
  );
}

function SitioPrincipal() {
  return (
    <div className="app-hq">
      <Navbar />
      <ContenidoRutas />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portada />} />

        <Route path="/*" element={<SitioPrincipal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
