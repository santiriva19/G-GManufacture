import React, {Component} from 'react';
import '../assets/PantallaLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Bienvenido extends Component
{
    render()
    {
        return(
            <div className = "body">
                <div className="otroBody">
                    <div className="container cuerpoPagina">
                        <p className="textoGrande">
                            G&GManufacture
                        </p>
                        <div>
                        <p className="textoNormal">
                            ¡Hola! Bienvenido
                        </p>
                        
                        <br/>
                        <a href="/opciones"><button className="customButtons">Continuar</button></a>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Bienvenido;
