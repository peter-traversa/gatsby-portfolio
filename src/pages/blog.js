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
          <div id="blog-page" className='grid-wrapper' >
            {!this.state.blogs ? <h1>Cannot display recent blogs</h1> : this.state.blogs.map((blog, idx) =>
              <div className='col-3 blog-card' key={idx} margin={'10px'} >
                <BlogCard key={idx} blog={blog} />
              </div>
            )}
          </div>
        <Footer />
      </>
    )
  }
}

export default BlogPage;