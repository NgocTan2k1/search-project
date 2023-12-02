import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import myPdf from './SRS.pdf';
// import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './style.css';

function ViewPdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(14);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div>
        <ul>
          <li>Keyword: srs document</li>
          <li>Filename: abc.pdf</li>
          <li>Author: quangkhanh</li>
          <li>Uploaded date: 20-10-23</li>
          <li>Title: no title</li>
          <li>Intro: no intro</li>
          <li>Views: 2023</li>
        </ul>
      </div>
      <div className="pdf-div">
        <Document file={myPdf} onLoadSuccess={onDocumentLoadSuccess} className="border-dashed border-2 border-indigo-600">
          {Array.apply(null, Array(numPages))
            // Array.apply(null, Array(1))
            .map((x, i) => i + 1)
            .map((page) => {
              return <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />;
            })}
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>

        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          className="border-solid border-2 border-indigo-600 "
        >
          Previous
        </button>
        <button onClick={() => setPageNumber(pageNumber + 1)} className="border-solid border-2 border-indigo-600">
          Next
        </button>
      </div>
    </>
  );
}

export default ViewPdf;
