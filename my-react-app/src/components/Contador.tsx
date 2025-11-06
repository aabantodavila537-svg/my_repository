import { useState } from "react";
function Contador() {
 const [contador, setContador] = useState(0);
 const incrementar = () => setContador(contador + 1);
 const decrementar = () => setContador(contador - 1);
 return (
 <div style={{ margin: "1rem" }}>
 <h2>Contador: {contador}</h2>
 <button onClick={incrementar}> +Incrementar</button>
 <button onClick={decrementar}>-Decrementar</button>
 </div>
 );
}
export default Contador;
