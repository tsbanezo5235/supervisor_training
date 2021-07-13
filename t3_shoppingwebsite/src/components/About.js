import React from "react"
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';

const About = () => {
  return (
    <React.Fragment>
      <h1>果園目前大致這樣</h1>
      <Descriptions title="龍坤的果園">
        <Descriptions.Item label="股東支持率">87%</Descriptions.Item>
        <Descriptions.Item label="本季營收">1810000000</Descriptions.Item>
        <Descriptions.Item label="總生廠良率">95%</Descriptions.Item>
        <Descriptions.Item label="員工管理狀況">尚可</Descriptions.Item>
        <Descriptions.Item label="總公司地點">
          桃園市 龍潭區 三林村 民族路
        </Descriptions.Item>
      </Descriptions>
    </React.Fragment>
  )
}

export default About;