import React from 'react';
import './Footer.scss';

const Footer:React.FC = () => {
    return (
        <>
            <div className="footer-container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <footer>
                <b>Contact Me</b>
                <div className="links">
                <a href="https://www.linkedin.com/in/krishna-kumar-pandian/" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin fa-2x"> </a>
                <a href="https://www.facebook.com/krishna.pandian.35/" target="_blank" rel="noopener noreferrer" className="fa fa-facebook fa-2x"> </a>
                <a href="mailto:krishnakpandian@gmail.com" target="_blank" rel="noopener noreferrer" className="fa fa-mail-reply fa-2x"> </a>
                <a href="https://twitter.com/krishnakpandian"  target="_blank" rel="noopener noreferrer" className="fa fa-twitter fa-2x"> </a>
                <a href="https://github.com/krishnakpandian" target="_blank" rel="noopener noreferrer" className="fa fa-github fa-2x"> </a>
                </div>
            </footer>
            </div>
        </>
    )
}

export default Footer;