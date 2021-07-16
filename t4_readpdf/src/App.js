import React from 'react';
// import Readpdf from './components/Readpdf'
import SinglePagePDFViewer from './components/single-page'
import AllPagesPDFViewer from './components/all-pages';
import TAO from './sample.pdf'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={TAO} />

      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={TAO} />
      </div>

      <hr />
      {/* <Readpdf></Readpdf> */}
    </React.Fragment>
  );
}

export default App;
