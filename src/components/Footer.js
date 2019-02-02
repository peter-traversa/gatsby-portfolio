import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://twitter.com/thisisjustpete" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://linkedin.com/in/peter-traversa" className="icon alt fa-linkedin"><span className="label">Instagram</span></a></li>
                    <li><a href="https://github.com/peter-traversa" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="mailto:peter.traversa@gmail.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
