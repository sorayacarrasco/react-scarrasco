
import './App.css';
import * as React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import Resultado from './Components/UI/Resultado'

function App() {
  const [operandoA, setOperandoA] = useState(0);
  const [operandoB, setOperandoB] = useState(0);
  const [operador, setOperador] = useState('+');
  const [res, setResult] = useState(0);

  const operacionHandler = (event) =>{
    setOperador(event.target.value);
  }

  const operandoAHandler = (event) =>{
    setOperandoA(event.target.value);
  }

  const operandoBHandler = (event) =>{
    setOperandoB(event.target.value);
  }

  return (
    <div>
      <Header/>
      <Form>
        <Container>
          <Row>
            <Col>
              <Form.Label >Elemento A: </Form.Label>
              <Form.Control onChange={operandoAHandler} placeholder='A' type='number'/>
            </Col>
            <Col>
              <Form.Label>Elemento B: </Form.Label>
              <Form.Control onChange={operandoBHandler} placeholder='B'type='number'/>
            </Col>
          </Row>
        </Container>
        <br></br>

        <div>
          <Container>
            <Row>
              <Button onClick={operacionHandler} value='+'>+</Button>
              <Button onClick={operacionHandler} value='-'>-</Button>
              <Button onClick={operacionHandler} value='x'>x</Button>
              <Button onClick={operacionHandler} value='÷'>÷</Button>
            </Row>
          </Container>
        </div>
        <br></br>
        <div>
          <Container>
            <Row>
              <Col>
              </Col>
              <Col>
                <p>Operación:</p>
                <p> {operandoA} {operador} {operandoB} </p>
              </Col>
              <Resultado operandoA={operandoA} operandoB={operandoB} operador={operador}></Resultado>
              <Col>
              </Col>
            </Row>
          </Container>
        </div>
      </Form>
      <Footer/>
    </div>
  );
}

export default App;