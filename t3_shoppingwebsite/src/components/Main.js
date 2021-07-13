import React, {useState} from "react"
import { Link } from "react-router-dom"
import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  ShopOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';


const { Sider } = Layout;

const Main = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
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
    </Layout>
  )

}

export default Main;