import { useState } from "react";
function Formulario() {
 const [nombre, setNombre] = useState("");
 const [correo, setCorreo] = useState("");
 const [mensaje, setMensaje] = useState("");
 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 alert(`Datos enviados:\nNombre: ${nombre}\nCorreo: ${correo}\nMensaje:
${mensaje}`);
 setNombre("");
 setCorreo("");
 setMensaje("");
 };
 return (
 <div style={{ margin: "2rem" }}>
 <h2>Formulario de Contacto</h2>
 <form onSubmit={handleSubmit}>
 <div>
 <label>Nombre:</label><br />
 <input
 type="text"
 value={nombre}
 onChange={(e) => setNombre(e.target.value)}
 required
 />
 </div>
 <div>
 <label>Correo:</label><br />
 <input
 type="email"
 value={correo}
 onChange={(e) => setCorreo(e.target.value)}
 required
 />
 </div>
 <div>
 <label>Mensaje:</label><br />
 <textarea
 value={mensaje}
 onChange={(e) => setMensaje(e.target.value)}
 required
 />
 </div>
 <button type="submit" style={{ marginTop: "1rem" }}>Enviar</button>
 </form>
 </div>
 );
}
export default Formulario;