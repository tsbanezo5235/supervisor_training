import React, {useState} from "react"
import { Route } from "react-router-dom"
import { Link } from "react-router-dom"
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarChartOutlined,
  ShopOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Main.css';
import About from './About'
import Sapling from './Sapling'
import Tree from './Tree'
import Fruit from './Fruit'
import Analyze from './Analyze'


const { Sider, Header, Content } = Layout;

const Main = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsedWidth={0} collapsed={collapsed}
      style={{
        height: '100vh',
        left: 0,
      }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>           
            <Link to='/About'>果園整體狀況</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to='/Sapling'>樹苗庫存</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to='/Tree'>樹木庫存</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            <Link to='/Fruit'>水果庫存</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<ShopOutlined />}>
            <Link to='/Analyze'>銷量分析</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout" onClick={ collapsed === false && onCollapse }>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed === true && React.createElement(MenuUnfoldOutlined,{
            className: 'trigger',
            onClick: onCollapse,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Route path='/About'>
            <About></About>
          </Route>
          <Route path='/Sapling'>
            <Sapling></Sapling>
          </Route>
          <Route path='/Tree'>
            <Tree></Tree>
          </Route>
          <Route path='/Fruit'>
            <Fruit></Fruit>
          </Route>
          <Route path='/Analyze'>
            <Analyze></Analyze>
          </Route>
        </Content>
      </Layout>
    </Layout>
  )

}

export default Main;