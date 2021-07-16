import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
// import Readpdf from './components/Readpdf'
import SinglePagePDFViewer from './components/single-page'
import AllPagesPDFViewer from './components/all-pages';
import TAO from './sample.pdf'
import './App.css';

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
      <Modal title="PDF預覽" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h4>Single Page</h4>
        <SinglePagePDFViewer pdf={TAO} />

        <hr />

        <h4>All Pages</h4>
        <div className="all-page-container">
          <AllPagesPDFViewer pdf={TAO} />
        </div>

        <hr />
      </Modal>
      
      {/* <Readpdf></Readpdf> */}
    </React.Fragment>
  );
}

export default App;
