import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

export function FormUpdate({modalClose, studentData}) {
  const [validated, setValidated] = useState(false);
  const [studentDataForm, setStudentDataForm] = useState({
    ID: studentData.ID,
    Nome: studentData.Nome,
    Email: studentData.Email,
    Cidade: studentData.Cidade,
    Celular: studentData.Celular
  })

  console.log(studentDataForm);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="2" controlId="ID">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="ID do aluno" required disabled name="ID" value={studentData.ID}/>
                    <Form.Control.Feedback type="invalid">Campo obrigatório!</Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group md="6" controlId="Nome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome do aluno" required name='Nome' value={studentData.Nome}/>
                    <Form.Control.Feedback type="invalid">Campo obrigatório!</Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group md="3" controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Digite seu email" required name='Email' value={studentData.Email}/>
                    <Form.Control.Feedback type="invalid">Campo obrigatório!</Form.Control.Feedback>
            </Form.Group>
        </Row>
        
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="Cidade">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="Informe sua cidade" required name='Cidade' value={studentData.Cidade}/>
                <Form.Control.Feedback type="invalid">Campo obrigatório!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="Celular">
                <Form.Label>Celular</Form.Label>
                <Form.Control type="tel" placeholder="(99) 9999-9999" required name='Celular' value={studentData.Celular}/>
                <Form.Control.Feedback type="invalid">Campo obrigatório!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Modal.Footer>
            <Button variant="danger" onClick={modalClose}>Deletar</Button>
            <Button type="submit" variant="success">Atualizar</Button>
        </Modal.Footer>
     
      
    </Form>
  );
}