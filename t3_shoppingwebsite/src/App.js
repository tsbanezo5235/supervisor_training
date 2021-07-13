import React from 'react';
import { Route } from "react-router-dom"
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Main from './components/Main'
import './App.css';

import About from './components/About'
import Sapling from './components/Sapling'
import Tree from './components/Tree'
import Fruit from './components/Fruit'
import Analyze from './components/Analyze'


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <React.Fragment>
      <Layout>
          <Main></Main>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center' }}>
            <h1>
              龍坤果園的後臺管理系統
            </h1>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
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
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>版權由陳龍坤所有 PS：2021/7/13開始的練習</Footer>
        </Layout>
      </Layout>
    </React.Fragment>
    
  );
}

export default App;
