import React from 'react'

import Container from 'react-bootstrap/esm/Container';

import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Form from 'react-bootstrap/Form';

import Alert from 'react-bootstrap/Alert';

import Button from 'react-bootstrap/Button';

import Nav from "react-bootstrap/Nav"

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import NavBarra from '../components/NavBarra';

import style from './Cadastros.module.css'




const url = "http://localhost:5000/produtos"

const Cadastros = () => {

  const [nome, setNome] = useState("")
  const [tipo, setTipo] = useState("")
  const [preco, setPreco] = useState("")

  const [alertaClass, setAlertaClass] = useState("mb-3 d-none")
  const [alertaMensagem, setAlertMensagem] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    if(!nome == ""){
      if(!tipo == ""){
        if(!preco == ""){
          const prod = {nome, tipo, preco}
          const res =await fetch(url, {
            method: "POST",
            headers: {"Comtent-Type": "application/json"},
            body: JSON.stringify(prod)
          })
          alert("Produto cadastrado com sucesso")
          setNome("")
          setTipo("")
          setPreco("")
          navigate("/produtos")
        }
        else{
          setAlertaClass("mb-3")
          setAlertMensagem("O campo nome não pode ser vazio")
        }
      }
      else{
        setAlertaClass("mb-3")
        setAlertMensagem("O campo tipo não pode ser vazio")
      }
    }
    else{
      setAlertaClass("mb-3")
      setAlertMensagem("O campo preco não pode ser vazio")
    }
  }

  return (
    <div className={style.Tudo}>
      <NavBarra />
      <Container className={style.Barra}>

        <form onSubmit={handleSubmit} className={style.Formulario}>

      <FloatingLabel
        controlId="floatingInputName"
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Digite seu nome..." value={nome} onChange={(e) =>{setNome(e.target.value);}}/>
        </FloatingLabel>

        <FloatingLabel
        controlId="floatingInputEmail"
        label="Tipo"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="frutas, verdeuras, ETC..." value={tipo} onChange={(e) =>{setTipo(e.target.value);}}/>
      </FloatingLabel>
        
      <FloatingLabel controlId="floatingPassword" label="Preço" className='mb-3'>

        <Form.Control type="text" placeholder="preço do produto" value={preco} onChange={(e) =>{setPreco(e.target.value);}}/>
      </FloatingLabel>

      <Alert key="danger" variant="danger" className={alertaClass}>
          {alertaMensagem}
        </Alert>

        <Button variant="outline-primary" type="submit" style={{color: '#ec1a1a', fontSize: '25px'}}>-Cadastrar-</Button>{' '}

      </form>
      </Container>
    </div>
  )
}

export default Cadastros