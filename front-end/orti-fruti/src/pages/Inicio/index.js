import { useHistory } from 'react-router-dom'
import './styles.css'

import Logo from '../assents/logo.png'
import { Button } from 'antd'

export default function Inicio() {
  const history = useHistory()

  async function listarProdutos(event) {
    event.prevent.Default()
    history.push('/produtos')
  }

  return (
    <div className="inicio__container">
      <section>
        <img src={Logo} alt="logo" className="center" />
        <br />

        <Button className="center" onClick={listarProdutos}>
          Ver produtos
        </Button>
      </section>
    </div>
  )
}
