import React, {Component} from 'react';
import '../assets/PantallaLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class DatosAdicionales extends Component
{
    render()
    {
        return(
            <div className = "contenedorModalDatoAdicional">
                <div className="row">
                    <div className="col-7">
                        <p className="textDescripcionDatos">{this.props.descrip}</p>
                    </div>
                    <div className="col-2">
                        <p className = "textDescripcionValores">{this.props.valor}</p>
                    </div>
                </div>                
            </div>
        );
    }
}
export default DatosAdicionales;
