import React, {Component} from 'react';
import '../assets/PantallaLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Opciones extends Component
{
    render()
    {
        return(
            <div className = "body">
                <div className="otroBody">
                    <div className="container cuerpoPagina">
                    <p className="textoGrandeResultados">
                    Seleccione una opción
                    </p>
                    <a href="/laminado"><button className="botonesOpciones">Laminado</button></a>
                    <a href="/forjado"><button className="botonesOpciones">Forjado</button></a>

                    <a href="/bienvenido"><button className="botonRegresar">Regresar</button></a>

                    </div>
                </div>
                
            </div>
        );
    }
}
export default Opciones;
