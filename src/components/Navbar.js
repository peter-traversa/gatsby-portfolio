import React from 'react';
import { Link } from 'gatsby';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <section id="navbar">
          <Link to="/" style={{ color: "white" }} activeStyle={{ color: "gray"}}>Home</Link>{"  "}
          <Link to="/blog" style={{ color: "white" }} activeStyle={{ color: "gray"}}>Blog</Link>{"  "}
          <Link to="/resume" style={{ color: "white" }} activeStyle={{ color: "gray"}}>Resume</Link>
        </section>
      </>
    )
  }
}

export default Navbar