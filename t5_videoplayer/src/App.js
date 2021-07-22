import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import Player from './components/player';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <React.Fragment>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal 
        title="播放影片！！！" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        width={700}
        centered={true}
        >
        <Player></Player>
      </Modal>
    </React.Fragment>
  );
}

export default App;
