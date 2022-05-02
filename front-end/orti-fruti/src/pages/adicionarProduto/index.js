import './styles.css'

import React, { useState } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

import { message, Form, Input, Button, InputNumber } from 'antd'

export default function AdicionarProduto() {
  const [disabled, setDisable] = useState(false)
  const history = useHistory()

  async function handleSubmit(produto) {
    setDisable(true)
    api
      .post('/item', produto)
      .then(response => {
        if (response.status === 201) {
          message.success('Produto adicionado com sucesso!')
          history.push('/produtos')
        }
      })
      .catch(err => {
        message.error('Aconteceu um erro ao adicionar o produto')
      })
  }

  return (
    <div className="produto__container__titulo">
      <h1>Adicionar Produto</h1>
      <br />

      <div className="produto_container">
        <Form
          className="form"
          name="submitProduto"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Nome do item"
            name="name"
            rules={[
              { required: true, message: 'O nome do item não pode estar vazio' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Descrição"
            name="description"
            rules={[{ required: true, message: 'Insira a descrição do item' }]} // deixa o campo como obrigatório
          >
            <Input />
          </Form.Item>

          <Form.Item label="Quantidade" name="quantity">
            <InputNumber />
          </Form.Item>
          <Form.Item className="btn">
            <Button type="primary" htmlType="submit" disabled={disabled}>
              Adicionar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
