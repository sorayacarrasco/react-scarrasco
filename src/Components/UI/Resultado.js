import React from 'react';
import Col from 'react-bootstrap/Col';

function Resultado(props) {

    let operandoA = props.operandoA;
    let operandoB = props.operandoB;
    let operador = props.operador;


  const getResultado = (operandoA, operandoB, operador) =>{
    if(operador==='-'){
      return(parseInt(operandoA)-parseInt(operandoB));  
    }
    else if(operador==='x'){
      return(parseInt(operandoA)*parseInt(operandoB)); 
    }
    else if(operador==='+'){
      return(parseInt(operandoA)+parseInt(operandoB)); 
    }
    else if(operador==='÷'){
      return (parseInt(operandoA)/parseInt(operandoB)); 
    }   
  }

    return (
        <Col className='resultado'>
            <p>Resultado:</p>
            <p >{getResultado(operandoA, operandoB, operador)}</p>
        </Col>
    )
}

export default Resultado;