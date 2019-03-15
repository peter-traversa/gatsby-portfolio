import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Helmet} from 'react-helmet'
const techResume = require('../../src/assets/images/petertraversatechresume.pdf')

const Resume = () => {
  const pagetitle = "Peter Traversa's Resume"
  return (
    <>
      <Helmet title={pagetitle} />
      <Navbar />
      <div className="resume">
        <h1>Technical Resume</h1>
      </div>
      <div className="iframe">
        <iframe scrolling="yes" title='resume' src={techResume} width="100%" height="100%"></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Resume;