import React, {Component} from 'react';
import '../assets/PantallaLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recomendacion2 from './Recomendacion2';

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
                                <Recomendacion2
                                    titulo = {"Laminado"} 
                                    descri = {"Ten en cuenta que las propiedades mecánicas internas de tu material van a cambiar por lo que probablemente necesites un recocido para devolverle resistencia"} 
                                    image =  { "https://i.ibb.co/JcQxV1X/Captura-de-Pantalla-2020-10-30-a-la-s-12-43-39.png"}
                                    href =  { "./laminado"}
                                />
                                <Recomendacion2
                                    titulo = {"Forjado"} 
                                    descri = {"Para este proceso te haremos los cálculos de la fuerza que requiere la prensa hidráulica en la operación, Por lo tanto, será necesario que nos brindes las condiciones iniciales que te pediremos a continuación (Ten en cuenta las unidades):"} 
                                    image =  { "https://i.ibb.co/yWZ4JRz/Captura-de-Pantalla-2020-10-30-a-la-s-12-48-21.png"}
                                    href =  { "./forjado"}
                                />
                            </div>
                            <br/>

                            <a href="/bienvenido"><button className="botonRegresarRecomen">Regresar</button></a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Bienvenido;
