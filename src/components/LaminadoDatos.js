import React, {Component} from 'react';
import '../assets/PantallaLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatosAdicionales from './DatosAdicionales';
import DatosImportantes from './DatosImportantes';

class LaminadoDatos extends Component
{
    coefiFriccion = 0;
    espesorFinal=0;
    deformacion = 0;
    sigma = 0;
    lp = 0;
    q = 0;
    fuerza = 0;
    potencia = 0;
    torque = 0;


    state={
        showDatos : true,
        showResults : false

    }
    render()
    {
        if(this.state.showDatos)
        {
            return(
                <div className = "body">
                    <div className="otroBody">
                        <div className="container modalLaminadoDatos">
                            <p className="textoGrande">
                            Ingrese los datos
                            </p>
                            <input id="a" className="customInputs" type="number" step="any" placeholder="Espesor inicial (mm)"></input>
                            <input id="b" className="customInputs" type="number" step="any" placeholder="Reducción Necesitada (mm)"></input>
                            <input id="c" className="customInputs" type="number" step="any" placeholder="Ancho de la pieza (mm)"></input>
                            <input id="d" className="customInputs" type="number" step="any" placeholder="Diámetro del rodillo (mm)"></input>
                            <input id="e" className="customInputs" type="number" step="any" placeholder="Velocidad del rodillo"></input>
                            <input id="f" className="customInputs" type="number" step="any" placeholder="Esfuerzo de fluencia"></input>
                            <input id="g" className="customInputs" type="number" step="any" placeholder="Constante n"></input>
                            <button onClick= {this.calcular} className="botonesSiguiente">Siguiente</button>
                            <a href="/opciones"><button className="botonRegresarLaminado">Regresar</button></a>

                        
                        </div>
                    </div>
                </div>
            );
        }
        else if(this.state.showResults)
        {
            return(
                    <div className = "body">
                        <div className="otroBody">
                            <div className="container modalLaminadoResult">
                                <p className="textoGrandeResultados">
                                Resultados
                                </p>
                                <a href="/opciones"><button onClick= {this.calcular} className="botonesSiguienteResults">Regresar</button></a>
                                <div className="contenedorAdicionalesExtra">
                                
                                    <div className="row">
                                        <div className="col">
                                            <DatosAdicionales descrip = {"Coeficiente de fricción"} valor = { this.coefiFriccion.toFixed(3) + " (mm)"}/>
                                        </div>
                                        <div className="col">
                                            <DatosAdicionales descrip = {"Espesor Final"} valor = { this.espesorFinal.toFixed(3) + " (mm)"}/>
                                        </div>
                                        <div className="col">
                                            <DatosAdicionales descrip = {"Deformación total"} valor = { this.deformacion.toFixed(3) }/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <DatosAdicionales descrip = {"Sigma"} valor = { this.sigma.toFixed(3) + " (MPa)"}/>
                                        </div>
                                        <div className="col">
                                            <DatosAdicionales descrip = {"Lp"} valor = { this.lp.toFixed(3) + " (mm)"}/>
                                        </div>
                                        <div className="col">
                                            <DatosAdicionales descrip = {"Q"} valor = { this.q.toFixed(3) }/>
                                        </div>
                                    </div>
                                </div>

                                <hr></hr>
                                <div className="contenedorAdicionalesExtra">
                                
                                    <div className="row">
                                        <div className="col">
                                            <DatosImportantes descrip = {"Fuerza"} valor = { this.fuerza.toFixed(3) + " (N)"}/>
                                        </div>
                                        <div className="col">
                                            <DatosImportantes descrip = {"Potencia"} valor = { this.potencia.toFixed(3) + " (W)"}/>
                                        </div>
                                        <div className="col">
                                            <DatosImportantes descrip = {"Torque"} valor = { this.torque.toFixed(3) + " (Nm)" }/>
                                        </div>
                                    </div>


                                    
                                </div>
                                


                            
                            </div>
                        </div>
                    </div>
            );
        }
    }
    calcular = () =>
    {
        this.coefiFriccion = 0;
        this.espesorFinal=0;
        this.deformacion = 0;
        this.sigma = 0;
        this.lp = 0;
        this.q = 0;

        var texta = document.getElementById("a").value;
        var textb = document.getElementById("b").value;
        var textc = document.getElementById("c").value;
        var textd = document.getElementById("d").value;
        var texte = document.getElementById("e").value;
        var textf = document.getElementById("f").value;
        var textg = document.getElementById("g").value;

        if(texta === "" || textb === "" || textc === "" || textd === "" || texte === "" || textf === "" || textg === "")
        {
            alert("No se admiten espacios en blanco ni caracteres especiales");
        }
        else
        {
            var a = parseFloat(texta);
            var b = parseFloat(textb);
            var c = parseFloat(textc);
            var d = parseFloat(textd);
            var e = parseFloat(texte);
            var f = parseFloat(textf);
            var g = parseFloat(textg);

            this.coefiFriccion = Math.sqrt(b/(d/2));
            this.espesorFinal = (a-b);
            this.deformacion = (a-this.espesorFinal)/a;
            this.sigma = ((f)*(Math.pow(this.deformacion,g)))/(g+1);
            this.lp = Math.sqrt((d/2)*b);
            this.q = (this.coefiFriccion * this.lp) / ((a+this.espesorFinal)/2);



            console.log(this.coefiFriccion);
            console.log(this.espesorFinal);
            console.log(this.deformacion);
            console.log(this.sigma);
            console.log(this.lp);
            console.log(this.q);

            this.fuerza = (this.sigma) * ( ( (1/this.q) * (Math.exp(this.q)-1) ) * c * this.lp );

            this.potencia = ((2) * (Math.PI)) * e * (this.fuerza) * (this.lp * Math.pow(10,-3));

            this.torque = 0.5 * (this.fuerza) * (this.lp * Math.pow(10,-3));

            this.pasarPantallaDeDatosAResultados();
        }
    }
    pasarPantallaDeDatosAResultados()
    {
        this.setState(
            {
                showDatos : !this.state.showDatos,
                showResults : !this.state.showResults
            }   
        )
    }
}
export default LaminadoDatos;
