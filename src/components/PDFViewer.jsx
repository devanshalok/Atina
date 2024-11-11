import React, { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

function PDFViewer({ file }) {
  const [textContent, setTextContent] = useState('');

  useEffect(() => {
    const readPDF = async () => {
      const fileReader = new FileReader();
      fileReader.onload = async function () {
        const typedarray = new Uint8Array(this.result);

        const pdf = await pdfjsLib.getDocument(typedarray).promise;
        let text = '';

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const content = await page.getTextContent();
          const strings = content.items.map((item) => item.str);
          text += strings.join(' ') + ' ';
        }

        setTextContent(text);
      };
      fileReader.readAsArrayBuffer(file);
    };

    if (file) {
      readPDF();
    }
  }, [file]);

  return (
    <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-darkgray">PDF Contents</h2>
      <p className="text-darkgray whitespace-pre-wrap">{textContent}</p>
    </div>
  );
}

export default PDFViewer;
