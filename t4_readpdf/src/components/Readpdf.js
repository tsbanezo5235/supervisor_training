import React from 'react';
import { PDFReader } from 'react-read-pdf';

import TAO from '../The Applications Of WiFi-based Wireless Sensor.pdf'

const Readpdf = () => {
  return (
    <React.Fragment>
      <PDFReader url={TAO} showAllPage={true} ></PDFReader>
    </React.Fragment>
  )
}

export default Readpdf;