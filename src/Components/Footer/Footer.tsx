import React from 'react';
import './Footer.scss';
import data from '../../Props/footerLinks.json';
const Footer:React.FC = () => {
    return (
        <>
            <div className="footer-container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <footer>
                <div className="links">
                    {data.links.map((media,i) => {
                        return(
                            <a href={media.link} key= {i} target="_blank" rel="noopener noreferrer" className={media.icon}> </a>
                        )
                    })}
                </div>
            </footer>
            </div>
        </>
    )
}

export default Footer;