// import React from 'react';
import Pilar from '../../../Reusable/ComponentItems/Pilar/Pilar';
import AnnouncementCard from './Components/AnnouncementCard';
import "./Announcement.scss";
import File from "./File/pengumuman.pdf";
import React, { useState } from 'react';
import Sparkles from '../../../Reusable/Animation/Sparkle/Sparkle';
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
      {/* <Document file={'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjuyb70kpz9AhW7Z2wGHZ6rC1IQFnoECBIQAQ&url=http%3A%2F%2Feprints.umsida.ac.id%2F3295%2F1%2FTeknik%2520Penelusuran%2520Artikel%2520Ilmiah.pdf&usg=AOvVaw3r1OlGq1jP6iIOUsqKBTGi'}
        // onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page />
      </Document> */}
      {/* <DisplayPDF /> */}
    </div>
  )
}

function Announcement() {
  return (
    <div className='Announcement'>
      <Pilar />
      <Sparkles>
        <h1 className='Title'>
          Annoucement
        </h1>
      </Sparkles>
      <Content />
    </div>
  )
}

export default Announcement