import React from 'react'
import './App.css';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import Barchart from './components/Barchart';
import Linechart from './components/Linechart';
import Stackbarchart from './components/Stackbarchart';

function App() {
  return (
    <React.Fragment>
      <Card title="龍坤果園近況">
        <Card type="inner" title="2021年百香果每月銷量" >
          <Linechart></Linechart>
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="2021年第一和第二季整體水果銷量"
          
        >
          <Barchart></Barchart>
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="歷年銷量"
          
        >
          <Stackbarchart></Stackbarchart>
        </Card>
      </Card>
      
      
    </React.Fragment>
  );
}

export default App;
