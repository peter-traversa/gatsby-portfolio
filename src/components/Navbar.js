import React from 'react';
import { Link } from 'gatsby';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <section id="navbar">
          <Link to="/">Home</Link>{"  "}
          <Link to="/blog">Blog</Link>
        </section>
      </>
    )
  }
}

export default Navbar