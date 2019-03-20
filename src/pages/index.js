import React from "react";
import Helmet from "react-helmet";
import Header from '../components/Header';

import Layout from '../components/layout';

import Evolution from '../assets/images/coder-evolution.gif';
import WorkInProgress from '../assets/images/work-in-progress.jpg';
import MemoryCardGame from '../assets/images/memorycardgame.png';
import StreetSeen from '../assets/images/StreetSeen.png';

class Homepage extends React.Component {
    render() {
        const siteTitle = "Peter Traversa Portfolio";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
                <Header />
                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>A shorthand account of my journey into code</h2>
                            </header>
                            <p>I have always gravitated toward client-facing roles over the course of my career. I enjoy working with people to find common solutions and thrive in a social environment. When I was working at a startup in an Operations role, I had the opportunity to work with our Software Engineering team on our client-side application. Helping to develop the application, albeit on the design side, inspired me to create simple, intuitive, and client-friendly software. I began my coding journey at the Flatiron School.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={Evolution} alt="Hackers Get a Job" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className='col-6'>
                            <ul className='major-icons'>
                                <li><i className="devicon-javascript-plain colored devicons"></i></li>
                                <li><i className="devicon-react-original colored devicons"></i></li>
                                <li><i className="devicon-ruby-plain colored devicons"></i></li>
                                <li><i className="devicon-git-plain colored devicons"></i></li>
                                <li><i className="devicon-html5-plain colored devicons"></i></li>
                                <li><i className="devicon-css3-plain colored devicons"></i></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <header className="major">
                                <h2>My unending journey and<br />
                                the tech I'm using on the way</h2>
                            </header>
                            <p>I began my coding journey with Ruby and JavaScript. Ruby, because of its relative ease in readability, and the fact that it’s an OO language with a well-known framework (Rails) that makes setting up an application backend relatively painless, was the perfect beginner language for me. Working with Rails, I quickly became comfortable with ActiveRecord, SQL, MVC, and RESTful APIs.</p>
                            <p>After the relative peace and calm of Ruby, it was soon time to move out to the wild, wild west of JavaScript. JS is where I truly learned to appreciate the art of coding. Because of the </p>
                            <p></p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Recent Projects</h2>
                            </header>
                            <p>A small selection of projects I've recently worked on, both solo and team-built.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={StreetSeen} alt="" /></span>
                            <h3>Street Seen</h3>
                            <p>A React application with a Rails backend and Leaflet map for the collecting of street art photography.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/peter-traversa/street-seen" target="_blank" rel="noopener noreferrer" className="button">GitHub Link</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={WorkInProgress} alt="Book Your Heart Out Cover Page" /></span>
                            <h3>Unique Inventory</h3>
                            <p>A React application built from the ground up to store a simple inventory for a small store or collector. Webpack, babel, etc. configured from the ground up.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/peter-traversa/unique-inventory" target="_blank" rel="noopener noreferrer" className="button">GitHub Link</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={MemoryCardGame} alt="" /></span>
                            <h3>Memory Card Game</h3>
                            <p>A Vanilla JavaScript application memory game with multiple card decks.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/Jessicalong627/herculesGameFrontend" target="_blank" rel="noopener noreferrer" className="button">GitHub Link</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;