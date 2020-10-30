import React, {Component} from 'react';
import '../assets/PantallaLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recomendacion from './Recomendacion';

class Bienvenido extends Component
{
    render()
    {
        return(
            <div className = "body">
                <div className="otroBody">
                    <div className="container cuerpoPagina1">
                        <p className="textoGrande">
                            G&GManufacture
                        </p>
                        <div>
                        <p className="textoNormal">
                            ¡Hola! Bienvenido
                        </p>
                        <div className="row">
                            <Recomendacion 
                                titulo = {"Laminado"} 
                                descri = {"En este caso intentaremos darte los datos para la reducción del espesor de la pieza con las dimensiones que desees, donde esta pasará por los rodillos que tu especifiques, nuestro trabajo se centrará en brindarte los resultados de fuerza, potencia y torque necesarios para llevar a cabo tu operación"} 
                                image =  { "https://i.ibb.co/ydZWRfy/Captura-de-Pantalla-2020-10-29-a-la-s-14-59-23.png"}
                            />
                            <Recomendacion 
                                titulo = {"Forjado"} 
                                descri = {"En este proceso disminuiremos la altura inicial de tu cilindro macizo, donde una prensa se encargará de aplicar la fuerza necesaria llevando a cabo la deformación que tu requieras, el contacto se dará sobre el área superficial de las caras transversales de tu pieza"} 
                                image =  { "https://i.ibb.co/1Gq79fb/Captura-de-Pantalla-2020-10-30-a-la-s-9-24-28.png"}
                            />
                        </div>
                        <br/>
                        <a href="/opciones"><button className="customButtons1">Continuar</button></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Bienvenido;
