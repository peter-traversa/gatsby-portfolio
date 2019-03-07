import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

class BlogPage extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
    }
  }

  componentDidMount() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@peter.traversa')
    .then(res => res.json())
    .then(blogs => this.setState({blogs}))
  }

  handleCardClick(e) {
    console.log(e.target)
  }

  render() {
    return (
      <>
        <Navbar />
          <div id="blog-title">
            <h1>Recent Blogs</h1>
          </div>
          <div id="blog-page">
            {this.state.blogs.items.map((blog, idx) =>
              <Card onClick={this.handleCardClick} >
                <CardHeader id={idx} title={blog.title} />
              </Card>
            )}
          </div>
        <Footer />
      </>
    )
  }
}

export default BlogPage;