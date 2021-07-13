import React from "react"
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';

const Tree = () => {
  return (
    <React.Fragment>
      <h1>你的樹是賣多少啦！</h1>
      <Descriptions
        title="桂花木細項 2021年第2季"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="產品">桂花木</Descriptions.Item>
        <Descriptions.Item label="購買方式">預先付款</Descriptions.Item>
        <Descriptions.Item label="生長時間">5years</Descriptions.Item>
        <Descriptions.Item label="成本">$10.00</Descriptions.Item>
        <Descriptions.Item label="目前庫存">60棵</Descriptions.Item>
        <Descriptions.Item label="預計售價">$60.00</Descriptions.Item>
        <Descriptions.Item label="產品細項">
          顧客評價: 尚可
          <br />
          此季銷售銷售金額：200萬
          <br />
          銷售成長率：提升100%
          <br />
          顧客回購率：50%
          <br />
          新購顧客人數：8000人
          <br />
          產地良率：95%
        </Descriptions.Item>
      </Descriptions>
      <br></br>
      <Descriptions
        title="蘋果樹細項 2021年第2季"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="產品">蘋果樹</Descriptions.Item>
        <Descriptions.Item label="購買方式">預先付款</Descriptions.Item>
        <Descriptions.Item label="生長時間">5years</Descriptions.Item>
        <Descriptions.Item label="成本">$10.00</Descriptions.Item>
        <Descriptions.Item label="目前庫存">60棵</Descriptions.Item>
        <Descriptions.Item label="預計售價">$60.00</Descriptions.Item>
        <Descriptions.Item label="產品細項">
          顧客評價: 尚可
          <br />
          此季銷售銷售金額：200萬
          <br />
          銷售成長率：提升100%
          <br />
          顧客回購率：50%
          <br />
          新購顧客人數：8000人
          <br />
          產地良率：95%
        </Descriptions.Item>
      </Descriptions>
    </React.Fragment>
  )
}

export default Tree;