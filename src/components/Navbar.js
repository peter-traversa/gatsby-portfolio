import React from 'react';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';

class Navbar extends React.Component {
  render() {
    const handleRecentProjects = () => {
      navigate('/');
      navigate('#three');
    }    
    return (
      <>
        <section id="navbar">
          <Link to="/" style={{ color: "white" }} activeStyle={{ color: "gray"}}>Home</Link>{"  "}
          <a onClick={handleRecentProjects} style={{ color: "white" }} >Recent Projects</a>{"  "}
          <Link to="/blog" style={{ color: "white" }} activeStyle={{ color: "gray"}}>Blog</Link>{"  "}
          <Link to="/resume" style={{ color: "white" }} activeStyle={{ color: "gray"}}>Resume</Link>
        </section>
      </>
    )
  }
}

export default Navbar