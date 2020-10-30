import React, { Component } from  'react';
import '../assets/PantallaLogin.css';
import Image from 'react-bootstrap/Image';
import { Fade } from 'react-slideshow-image';



class Recomendacion extends Component
{
    
    source = "";
    
    render(){
        
        return(
        <div className="modalRecomenda">
            <div className="row">
                <p className="textoMediano">{this.props.titulo}</p>
            </div>
            <div className="row">
                <p className="textoPeque">(Recomendaciones)</p>
            </div>
            <div className="row">
                <p className="textoNormalReco">{this.props.descri}</p>
            </div>
            <div className="row">
                <Image className="imageRecomenda" src= {this.props.image} ></Image>
            </div>
        </div>  
        );
    }
    ponerDato = () =>
    {
        this.source = "'"+ this.props.image + "'";
    }
}
export default Recomendacion;