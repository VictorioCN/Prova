import React from 'react'
import Container from 'react-bootstrap/esm/Container';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Alert from 'react-bootstrap/Alert';

import Button from 'react-bootstrap/Button';

import Nav from "react-bootstrap/Nav"

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import style from './Login.module.css'



const url = "http://localhost:5000/usuarios"

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const [alertaClass, setAlertaClass] = useState("mb-3 d-none")
  const [alertaMensagem, setAlertaMensagem] = useState("")
  const [alertaVariant, setAlertaVariant] = useState("danger");

  const [usuarios, setUsuarios] = useState ([])

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch(url)
        const users = await res.json()
        setUsuarios(users)
      }
      catch(error){
        console.log(error.message)
      }
    }
    fetchData()

  },[]);

  const gravarLocalStorage = (usuario) => {
    localStorage.setItem("userName", usuario.nome)
    localStorage.setItem("userEmail", usuario.email)
  }

  const handleLogin = async (e)  => {
    e.preventDefault()

    const user = {email, senha}

    const userToFind = usuarios.find(
      (userFind) => userFind.email == user.email
    )

    if(email !=""){
      if(senha !=""){
        if(userToFind != undefined && userToFind.senha == senha){
          setAlertaClass("mb-3")
          gravarLocalStorage(userToFind)
          alert("Login efetuado com Sucesso")
          setAlertaMensagem("Login efetuado com Sucesso")
          setAlertaVariant("success")
          navigate("/Produtos")
        }
        else{
          setAlertaClass("mb-3")
      setAlertaMensagem("Usuarios ou senha inválidos")
        }
        
      }
      else{
        setAlertaClass("mb-3")
      setAlertaMensagem("O campo senha não pode ser vazio")
      }

    }
    else{
      setAlertaClass("mb-3")
      setAlertaMensagem("O campo email não pode ser vazio")
    }


  }

  return (
    <div className={style.Tudo}>
        <Container>

<span class={style.MyLogin}>
 Login
</span>


  <form onSubmit={handleLogin} className={style.Formulario}>
  {/* caixinha email */}
  <FloatingLabel
  controlId="floatingInputEmail"
  label="Email"
  className="mb-3"
>
  <Form.Control  type="email" placeholder="name@example.com" value={email} onChange={(e) =>{setEmail(e.target.value);}}/>
</FloatingLabel>
  
  {/* caixinha da senha */}
<FloatingLabel controlId="floatingPassword" label="Senha" className='mb-3'>

  <Form.Control type="password" placeholder="Password" value={senha} onChange={(e) =>{setSenha(e.target.value);}}/>
</FloatingLabel>

<Alert key="danger" variant={alertaVariant} className={alertaClass}>
    {alertaMensagem}
  </Alert>

  <Button variant="outline-primary" type='submit' style={{color: '#ec1a1a', fontSize: '25px'}}>-Login-</Button>{' '}

</form>
</Container>
    </div>
  )
}

export default Login