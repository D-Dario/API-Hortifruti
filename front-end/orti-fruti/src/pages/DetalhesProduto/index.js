import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { useParams, useHistory } from 'react-router-dom'
import './style.css'

import { Card, message, Button, Modal } from 'antd'
import {
  ExclamationCircleOutlined,
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons'

export default function DetalhesProduto() {
  const [produto, setProduto] = useState([])
  const history = useHistory()
  let { id } = useParams()

  const { confirm } = Modal

  function showConfirm(produto) {
    confirm({
      title: 'Confirma a exclusão do produto?',
      icon: <ExclamationCircleOutlined />,
      content: produto.name,
      onOk() {
        handleDelete(produto.id)
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }

  function handleDelete(id) {
    api
      .delete(`/item/${id}`)
      .then(response => {
        if (response.status === 200) {
          message.success('Produto foi excluído com sucesso')
          history.push('/produtos')
        }
      })
      .catch(err => {
        message.error('Aconteceu um erro inesperado')
      })
  }

  useEffect(() => {
    api
      .get(`/item/${id}`)
      .then(response => {
        setProduto(response.data)
      })
      .catch(err => {
        message.error('Aconteceu um erro inesperado')
      })
  }, [])

  return (
    <div className="produto__container">
      <h1>Detalhes de Produto</h1>

      <div className="produto__card__container__det">
        <Card key={produto.id} title={produto.name} bordered={false}>
          <p> Id: {produto.id}</p>
          <p>UpdatedAt: {produto.updateAt}</p>
          <p>Descrição: {produto.description}</p>
          <p>Quantidade: {produto.quantity}</p>
          <div className="produto__card--actions">
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => history.push(`/editar/${produto.id}`, produto)}
            >
              Editar
            </Button>
            <Button
              type="danger"
              icon={<DeleteOutlined />}
              onClick={() => showConfirm(produto)}
            >
              Excluir
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
