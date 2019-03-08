import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg';
import BookYourHeartOut from '../assets/images/BookYourHeartOut.png';
import MemoryCardGame from '../assets/images/memorycardgame.png';
import StreetSeen from '../assets/images/StreetSeen.png';
import { DiReact, DiJavascript, DiHtml5, DiCss3, DiGithub, DiRuby } from 'react-icons/di'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Peter Traversa Portfolio";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon"><DiJavascript color={'green'} /></span></li>
                                <li><span className="icon"><DiReact color={'lightblue'} /></span></li>
                                <li><span className="icon"><DiHtml5 color={'red'} /></span></li>
                                <li><span className="icon"><DiCss3 color={'blue'} /></span></li>
                                <li><span className="icon"><DiRuby color={'red'} /></span></li>
                                <li><span className="icon"><DiGithub color={'black'} /></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
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
                                <li><a href="https://github.com/peter-traversa/street-seen" target="_blank" className="button">GitHub Link</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={MemoryCardGame} alt="" /></span>
                            <h3>Memory Card Game</h3>
                            <p>A Vanilla JavaScript application memory game with multiple card decks.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/Jessicalong627/herculesGameFrontend" target="_blank" className="button">GitHub Link</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={BookYourHeartOut} alt="Book Your Heart Out Cover Page" /></span>
                            <h3>Book Your Heart Out</h3>
                            <p>A Ruby on Rails Application for Actors and Bookers to create bookings and schedule appointments.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/peter-traversa/actors-roles-producers-market" target="_blank" className="button">GitHub Link</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;