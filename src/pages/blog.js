import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

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
    .then(data => this.setState({blogs: data.items}));
  }

  render() {
    return (
      <>
        <Navbar />
          <div id="blog-title">
            <h1>Recent Blogs</h1>
          </div>
          <div id="blog-page">
            {this.state.blogs.map((blog, idx) =>
              <BlogCard key={idx} blog={blog} />
            )}
          </div>
        <Footer />
      </>
    )
  }
}

export default BlogPage;