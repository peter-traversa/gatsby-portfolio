import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

class BlogPage extends React.Component {
  render() {
    const pageTitle = "Peter Traversa Blog Posts"
    return (
      <>
        <Navbar />
        <section id="one" className="main style2">
          <h1>Hello from the blog page</h1>
        </section>
        <Footer />
      </>
    )
  }
}

export default BlogPage;