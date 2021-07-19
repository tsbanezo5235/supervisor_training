import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
// import Readpdf from './components/Readpdf'
import SinglePagePDFViewer from './components/single-page'
// import TAO from './sample.pdf'
import TPDF from './CY19 Mongoose HAS  SOP TILT.pdf';
import Style from './App.module.css';

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
        點擊閱讀pdf
      </Button>
      <Modal 
        // bodyStyle={{
        //   display: 'flex',
        //   flexWrap: 'wrap',
        //   alignItems: 'center',
        //   justifyContent: 'center'}}
        title="PDF預覽" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel} 
        width={'100%'}
        centered= {true}
        >
        <h4>Single Page</h4>
        <div className={Style.box}>
          <SinglePagePDFViewer pdf={TPDF} />
        </div>
        

        <hr />
      </Modal>
      
      {/* <Readpdf></Readpdf> */}
    </React.Fragment>
  );
}

export default App;
