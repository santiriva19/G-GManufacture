import React, {Component} from 'react';
import '../assets/PantallaLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class DatosImportantes extends Component
{
    render()
    {
        return(
            <div className = "contenedorModalDatoImportante">
                <div className="row">
                    <div className="col-5">
                        <p className="textDescripcionImport">{this.props.descrip}</p>
                    </div>
                    <div className="col-4">
                        <p className = "textValorImport">{this.props.valor}</p>
                    </div>
                </div>                
            </div>
        );
    }
}
export default DatosImportantes;
