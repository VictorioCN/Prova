import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import NavBarra from '../components/NavBarra';

import style from './Produtos.module.css'

// categoria

const url = "http://localhost:5000/produtos"

const Produtos = () => {

  const [produtos, setProdutos] = useState ([])

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch(url)
        const prod = await res.json()
        setProdutos(prod)
      }
      catch(error){
        console.log(error.message)
      }
    }
    fetchData()
  },[]);

  return (
    <div style={{backgroundColor: "pink"}}>
      <NavBarra />
      <Container className='Tudo'>
        <h1 className={style.Titulo} >Produtos</h1>
        <div className='d-grid col-2 gap-2'>  

        </div>
      </Container>

      <Table striped bordered hover variant="dark">
      <thead>
        <tr className={style.Dados}>
          <th style={{color: '#ec1a1a'}}>ID</th>
          <th style={{color: '#ec1a1a'}}>Nome</th>
          <th style={{color: '#ec1a1a'}}>TIPO</th>
          <th style={{color: '#ec1a1a'}}>PREÇO</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((prod)=> (
        <tr key={prod.id}>
          <td style={{color: '#ec1a1a'}}>{prod.id}</td>
          <td style={{color: '#ec1a1a'}}>{prod.nome}</td>
          <td style={{color: '#ec1a1a'}}>{prod.tipo}</td>
          <td style={{color: '#ec1a1a'}}>{prod.preco}</td>
          <td>
            <ButtonGroup size='sm'>
      <Button variant="warning"
       onClick={ async () => {
        const res = await fetch(`http://localhost:5000/produtos/${prod.id}`,
        {method:"DELETE",
          headers:{"Content-Type" : "application/json"},
        });

        const produtoRemovido = await res.json()
      alert(`Produto ${produtoRemovido.id} foi excluido`)
      }}
      style={{color: '#ec1a1a', fontSize: '16px'}}
      >
        Excluir</Button>
    </ButtonGroup>
    </td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default Produtos