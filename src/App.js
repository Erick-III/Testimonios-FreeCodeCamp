/* import logo from './logo.svg'; */
import './App.css';
import Testimonio from './componentes/Testimonio'
import usuarios from './usuarios/Usuarios'

/**
 * utiliza la lista usuarios importada para generar una lista de Testimonios
 * @returns lista de componentes Testimonios con la info de usuarios
 */
function generarTestimonios(){
  let testimonios = [];
  for (let i = 0; i < usuarios.length; i++) {
        testimonios.push(
          <Testimonio
          nombre = {usuarios[i].nombre} 
          pais = {usuarios[i].pais} 
          imagen = {usuarios[i].imagen} 
          cargo = {usuarios[i].cargo} 
          empresa = {usuarios[i].empresa} 
          testimonio = {usuarios[i].testimonio} 
          testimonioNegrita = {usuarios[i].testimonioNegrita} 
        />
        );
  }
  return testimonios;
}

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>
          Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
        </h1>
        <div className='testimonios'>
          {generarTestimonios()}
        </div>
      </div>
    </div>
  );
}

export default App;
