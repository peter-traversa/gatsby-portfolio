import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Document, Page } from 'react-pdf';
import ResumePdf from '../../src/assets/images/petertraversatechresume.pdf';

const Resume = () => {
  const pagetitle = "Peter Traversa's Resume"
  return (
    <>
      <Helmet title={pagetitle} />
      <Navbar />
      <div align='center'>
        <Document file={ResumePdf} align='center'>
          <Page pageNumber={1} />
        </Document>
      </div>
      <Footer />
    </>
  );
}

export default Resume;