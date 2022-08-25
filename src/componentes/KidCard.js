import React from 'react';
import '../hojas-de-estilo/KidCard.css'

function KidCard(props){
  return(
    <div className="contenedor-kid">
      <img 
        className='kid-image'
        src={require(`../imagenes/kid-${props.imagen}.jpg`)} 
        alt='imagen nino' />
        
      <div className='kid-text-container'>
        
        <p className='kid-name'>
        <strong>Nombre:</strong> {props.name}</p>
       

        <p className='kid-name'>
        <strong>Apellido:</strong> {props.lastName}</p>
        
        <p className='kid-name'>
        <strong>Nacimiento:</strong> {props.birthDate}</p>

        <p className='kid-name'>
        <strong>Ci:</strong> {props.ci}</p>

        
      </div>
    </div>
  );
}

export default KidCard;