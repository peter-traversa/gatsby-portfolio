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
        <div id="blog-page">
          <div id="blog-title">
            <h1>Recent Blogs</h1>
          </div>

        </div>
        <Footer />
      </>
    )
  }
}

export default BlogPage;