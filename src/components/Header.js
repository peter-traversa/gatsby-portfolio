import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    {/* <span className="icon major fa-cloud"></span> */}
                    <h1>I'm <strong>Peter Traversa</strong>, a Full-Stack Web Developer based in New York City</h1>
                    <p>I'm an avid long-distance runner, reader, and lover of New York City<br />
                    and I bring that same level of passion to code.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Learn More</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
