import React from "react";
import { jsPDF, jsPDFOptions } from "jspdf";
import "./styles.css";
import Survey from "./Survey";
import Pwc from "./Pwc";

const options: jsPDFOptions = {
  orientation: "portrait",
  format: [297, 210]
};

export default function App() {
  const htmlRef = React.useRef<HTMLDivElement>(null);

  const printHtmlToPdf = () => {
    if (!htmlRef.current) {
      return;
    }
    const doc = new jsPDF(options);
    doc.setFontSize(12);
    doc.html(htmlRef.current, {
      html2canvas: {
        scale: 0.2645
      },
      margin: 10,
      callback: function (doc) {
        doc.save("html-to-pdf.pdf");
      }
    });
  };

  return (
    <div className="App">
      <h1>jsPDF</h1>
      <h2>Print HTML to PDF</h2>
      <button onClick={printHtmlToPdf}>html to pdf</button>
      <br />
      <br />
      <br />
      <div id="html" ref={htmlRef}>
        {/* <Survey /> */}
        <Pwc />
      </div>
    </div>
  );
}
