import React, {Component} from 'react';
import '../assets/PantallaLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatosAdicionales from './DatosAdicionales';
import DatosImportantes from './DatosImportantes';

class ForjadoDatos extends Component
{
    deformacion = 0;
    volumen=0;
    areaTransv = 0;
    factorForma = 0;
    yf = 0;
    fuerza = 0;
   


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
                            <input id="o" className="customInputs" type="number" step="any" placeholder="Altura inicial (mm)"></input>
                            <input id="p" className="customInputs" type="number" step="any" placeholder="Altura final (mm)"></input>
                            <input id="q" className="customInputs" type="number" step="any" placeholder="Diámetro inicial (mm)"></input>
                            <input id="r" className="customInputs" type="number" step="any" placeholder="Coeficiente de fricción"></input>
                            <input id="s" className="customInputs" type="number" step="any" placeholder="K de fluendia (MPa)"></input>
                            <input id="t" className="customInputs" type="number" step="any" placeholder="Constante n"></input>
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
                                            <DatosAdicionales descrip = {"Deformación total"} valor = { this.deformacion.toFixed(3)}/>
                                        </div>
                                        <div className="col">
                                            <DatosAdicionales descrip = {"Volumen"} valor = { this.volumen.toFixed(3) + " (mm^3)"}/>
                                        </div>
                                        <div className="col">
                                            <DatosAdicionales descrip = {"Área transversal"} valor = { this.areaTransv.toFixed(3) + " (mm^2)" }/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <DatosAdicionales descrip = {"Factor de forma"} valor = { this.factorForma.toFixed(3) }/>
                                        </div>
                                        <div className="col">
                                            <DatosAdicionales descrip = {"Yf"} valor = { this.yf.toFixed(3) }/>
                                        </div>
                                        <div className="col">
                                            <DatosAdicionales descrip = {""} valor = {""}/>
                                        </div>

                                    </div>
                                </div>

                                <hr></hr>
                                <div className="contenedorAdicionalesExtra">
                                
                                    <div className="row">
                                        <div className="col">
                                            <DatosImportantes descrip = {"Fuerza"} valor = { this.fuerza.toFixed(3) + " (MN)"}/>
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
        this.deformacion = 0;
        this.volumen=0;
        this.areaTransv = 0;
        this.factorForma = 0;
        this.yf = 0;

        var texto = document.getElementById("o").value;
        var textp = document.getElementById("p").value;
        var textq = document.getElementById("q").value;
        var textr = document.getElementById("r").value;
        var texts = document.getElementById("s").value;
        var textt = document.getElementById("t").value;

        if(texto === "https://github.com/santiriva19/G-GManufacture" || textp === "https://github.com/santiriva19/G-GManufacture" || textq === "https://github.com/santiriva19/G-GManufacture" || textr === "https://github.com/santiriva19/G-GManufacture" || texts === "https://github.com/santiriva19/G-GManufacture" || textt === "https://github.com/santiriva19/G-GManufacture")
        {
            alert("No se admiten espacios en blanco ni caracteres especiales");
        }
        else
        {
            var o = parseFloat(texto);
            var p = parseFloat(textp);
            var q = parseFloat(textq);
            var r = parseFloat(textr);
            var s = parseFloat(texts);
            var t = parseFloat(textt);

           this.deformacion = (o-p)/o;
           this.volumen = (Math.PI* (Math.pow(q,2) * o))/4;
           this.areaTransv = this.volumen/p;
           this.factorForma = 1 + ( (0.4 * r * q)/p );
           this.yf = s * (Math.pow(this.deformacion,t));

           this.fuerza = this.factorForma * this.yf * this.areaTransv;


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
export default ForjadoDatos;
