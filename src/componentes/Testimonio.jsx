//Definimos y creamos el componente
import '../style/Testimonio.css';
/* const React = require("react"); */
/* import React from "react";
 */
const TESTIMONIO_NEGRITA = "testimonioNegrita";

/**
 * separa el testimonio en 3 partes luego de detectar "TESTIMONIO_NEGRITA"
 * reemplazando la palabra clave por el texto correspondiente
 * @param {Object} props contiene info necesaria 
 * @returns el testimonio modificado correctamente
 */
function agregarTestimonioNegrita(props){
    let testimonioModificado = (props.testimonio).split(TESTIMONIO_NEGRITA);
    testimonioModificado.splice(1,0,<strong key={`testimonio-negrita-${props.imagen.toLowerCase()}`}>{props.testimonioNegrita}</strong>)
    /* console.log(testimonioModificado); */
    return testimonioModificado;
}

//componente funcional
function Testimonio(props) {
    //return elemento jsx
    /* let testimonioModificado = reactStringReplace(props.testimonio, "testimonioNegrita", (match, i) => (
        props.testimonioNegrita
      )); */
    return (
        //definiri convencion de comillas
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio'
                 src={require(`../img/testimonio-${props.imagen}.png`)}
                 alt={`Foto de ${props.imagen}`}
                 title={`Foto de ${props.imagen}`} />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className="cargo-testimonio">
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className="texto-testimonio">
                    {agregarTestimonioNegrita(props)}
                </p>
                
            </div>
        </div>
    );
}

export default Testimonio;