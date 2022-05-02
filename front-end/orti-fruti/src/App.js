import './App.css'
import { Menu } from 'antd'
import Routes from './routes'
import { useHistory } from 'react-router-dom'
import { PlusOutlined, UnorderedListOutlined } from '@ant-design/icons'

import { Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout

function App() {
  const history = useHistory()
  const handleClick = () => history.push('/adicionar')
  return (
    <div className="main">
      <Layout className="main__content">
        <Header className="header">Lista de produtos</Header>
        <Layout>
          <Sider className="menu">
            <Menu className="menu__section">
              <Menu.Item key={1} icon={<PlusOutlined />} onClick={handleClick}>
                Adicionar produto
              </Menu.Item>
              <Menu.Item
                key={2}
                icon={<UnorderedListOutlined />}
                onClick={() => history.push('/produtos')}
              >
                Listar Produtos
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Routes />
          </Content>
        </Layout>
        <Footer className="footer">Todos os direitos reservados</Footer>
      </Layout>
    </div>
  )
}

export default App
