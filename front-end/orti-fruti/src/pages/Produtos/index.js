import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

import './styles.css'

import { Button, Card } from 'antd'

export default function Produtos() {
  const [produtos, setProdutos] = useState([])
  const history = useHistory()

  useEffect(() => {
    api
      .get('/item')
      .then(response => {
        setProdutos(response.data)
      })
      .catch(err => {
        console.log('Aconteceu um erro inesperado' + err)
      })
  }, [])

  return (
    <div className="produto__container__prod">
      <h1>Relação de todos os produtos</h1>

      <div className="produto__card__container__prod">
        {produtos.map(produto => (
          <Card
            className="Card"
            key={produto.id}
            title={produto.name}
            bordered={false}
          >
            <p>Descrição: {produto.description}</p>
            <p>Quantidade: {produto.quantity}</p>
            <Button
              type="primary"
              onClick={() => history.push(`/detalhes/${produto.id}`)}
            >
              Detalhes
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
