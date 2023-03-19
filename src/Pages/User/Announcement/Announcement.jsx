// import React from 'react';
import Pilar from '../../../Reusable/ComponentItems/Pilar/Pilar';
import AnnouncementCard from './Components/AnnouncementCard';
import "./Announcement.scss";
import File from "./File/pengumuman.pdf";
import React, { useState } from 'react';
import Sparkles from '../../../Reusable/Animation/Sparkle/Sparkle';
import CoolTitle from '../../../Reusable/ComponentItems/CoolTitle/CoolTitle';
import CustomButton from '../../../Reusable/CustomComponent/CustomButton';
// import { Document, Page } from 'react-pdf';
// const reactPdf = require('react-pdf/dist/esm/entry.webpack5')
// const { Document, Page } = reactPdf
// pdfjs.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js';

// function DisplayPDF() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   // function onDocumentLoadSuccess({ numPages }) {
//   //   setNumPages(numPages);
//   // }
//   return (
//     <div>
//       <Document file={'./File/pengumuman.pdf'}
//         onLoadSuccess={onDocumentLoadSuccess}
//         onLoadError={console.error}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }



function Content() {
  return (
    <div className='Content'>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vQYKTpBkTMAoAwusT-RNKkXSiHWl8XU7oXoJT6q9VRGPxQiY9T6zXyazpFtUXJ3yENB8VteS0tyU8E9/pub?embedded=true"></iframe>
    </div>
  )
}

function Announcement() {
  return (
    <div className='Announcement'>
      <Pilar />
      <CoolTitle>
        Announcement!
      </CoolTitle>
      {/* <object className='object' data={File} type="application/pdf" width="50vw" height="500px">
      </object>
      <iframe src="">
      </iframe> */}
      <br />
      <a style={{
        textDecoration: 'none',
      }} href="https://drive.google.com/drive/folders/1lszNte3vX4iQA06Wn22usT9neYkJFwXT">
        <CustomButton style={{
          width: 'fit-content',
        }}>
          Check your name here!
        </CustomButton>
      </a>
    </div>
  )
}

export default Announcement