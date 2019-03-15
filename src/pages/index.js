import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg';
import BookYourHeartOut from '../assets/images/BookYourHeartOut.png';
import MemoryCardGame from '../assets/images/memorycardgame.png';
import StreetSeen from '../assets/images/StreetSeen.png';

class Homepage extends React.Component {
    render() {
        const siteTitle = "Peter Traversa Portfolio";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>A shorthand account of my journey into code</h2>
                            </header>
                            <p>I'd always gravitated toward client-facing roles over the course of my career. I enjoy working with people to find common solutions and thrive in a social environment. When I was working at a startup in an Operations role, I had the opportunity to work with our Software Engineering team on our client-side application. Helping to develop the application, albeit on the design side, inspired me to create simple, intuitive, and client-friendly software. I decided to begin my coding journey at the Flatiron School.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
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
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
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
                            <span className="image fit"><img src={MemoryCardGame} alt="" /></span>
                            <h3>Memory Card Game</h3>
                            <p>A Vanilla JavaScript application memory game with multiple card decks.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/Jessicalong627/herculesGameFrontend" target="_blank" rel="noopener noreferrer" className="button">GitHub Link</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={BookYourHeartOut} alt="Book Your Heart Out Cover Page" /></span>
                            <h3>Book Your Heart Out</h3>
                            <p>A Ruby on Rails Application for Actors and Bookers to create bookings and schedule appointments.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/peter-traversa/actors-roles-producers-market" target="_blank" rel="noopener noreferrer" className="button">GitHub Link</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;