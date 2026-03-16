import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const PDF = () => {
  const printRef = useRef(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, { scale: 2 }); // Use scale for better quality
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4'); // Portrait, millimeters, A4 format
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('download.pdf');
  };

  return (
    <div>
      <button onClick={handleDownloadPdf}>Download as PDF</button>
      <div ref={printRef}>
        {/* Your HTML content goes here */}
        <h1>Content to be included in PDF</h1>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
        <p>This text will be part of the image in the PDF.</p>
      </div>
    </div>
  );
};

export default PDF;
