type SaludoProps = {
nombre: string;
};
function Saludo({ nombre }: SaludoProps) {
return <h2>Hola, {nombre}! Bienvenido a React de SENATI</h2>;
}
export default Saludo;