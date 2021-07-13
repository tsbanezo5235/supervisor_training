import React from "react"
import { Statistic, Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import './Analyze.css';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';


const Analyze = () => {
  return (
    <React.Fragment>
      <h1>果園的統計與分析走向</h1>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="三林村農果園" bordered={false}>
            <Statistic
              title="總收益指數"
              value={55.66}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="竹龍街農場" bordered={false}>
              <Statistic
                title="總收益指數"
                value={9.3}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="新莊農場" bordered={false}>
              <Statistic
                title="總收益指數"
                value={200}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Analyze;