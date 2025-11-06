import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Saludo from "./components/Saludo";
import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import Tareas from "./components/Tarea";

function App() {
 return (
 <BrowserRouter>
 <nav style={{ margin: "1rem" }}>
 <Link to="/">Inicio</Link> |{" "}
 <Link to="/contador">Contador</Link> |{" "}
 <Link to="/formulario">Formulario</Link> |{" "}
 <Link to="/Tareas">Tareas</Link>
 </nav>
 <Routes>
 <Route path="/" element={<Saludo nombre="Estudiante" />} />
 <Route path="/contador" element={<Contador />} />
 <Route path="/formulario" element={<Formulario />} />
  <Route path="/Tareas" element={<Tareas />} />
 </Routes>
 </BrowserRouter>
 );
}
export default App;
