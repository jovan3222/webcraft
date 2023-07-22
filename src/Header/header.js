import React from 'react';
import './header.css';
import './mobile-header.css';
import { Link } from "react-router-dom";
import { Location } from 'react-router-dom';

const texts = [
    {
        text: 'WEB'
    },
    {
        text: 'CRAFT'
    },
    {
        text: 'Početna'
    },
    {
        text: 'Usluge'
    },
    {
        text: 'Portfolio'
    },
    {
        text: 'O nama'
    },
    {
        text: 'Kontakt'
    },
    {
        text: 'Radi sa nama',
        class: 'work-with-us'
    }
]

const Header = () => {
    var showWidth = () => {
        if (window.matchMedia("(max-width: 480px)").matches) {
            return true;
        }
    }

    var [boolean, setBoolean] = React.useState(() => showWidth());
    var expand = () => {
        if (boolean === false) {
            setBoolean(true);
        } else {
            setBoolean(false);
        }
    }

    return (
        <header>
            <div className='navbar'>
                <a className='logo'><span className='web-blue'><Link to="/">{texts[0].text}</Link></span> <span className='craft-black'><Link to="/">{texts[1].text}</Link></span></a>
                <div className='navbar-lines-container'
                    onClick={() => expand()}
                >
                    <div className='navbar-line line1' style={boolean === true ? {} : { transform: 'rotate(45deg)', marginTop: '20px' }}></div>
                    <div className='navbar-line line2' style={boolean === true ? {} : { transform: 'rotate(135deg)', marginTop: '-30px' }}></div>
                    <div className='navbar-line line3' style={boolean === true ? {} : { display: 'none' }}></div>
                </div>
                <ul style={boolean === true ? { opacity: '0', marginLeft: '-2000px' } : { opacity: '1' }}>
                    <li className={`${window.location.pathname === '/'}`}><Link to="/">{texts[2].text}</Link></li>
                    <li className={`${window.location.pathname === '/usluge'}`}><Link to="/usluge">{texts[3].text}</Link></li>
                    {/* <li><a href="www.smartdevpreneur.com">{texts[4].text}</a></li> */}
                    <li className={`${window.location.pathname === '/o-nama'}`}><Link to="/o-nama">{texts[5].text}</Link></li>
                    <li className={`${window.location.pathname === '/kontakt'}`}><Link to="/kontakt">{texts[6].text}</Link></li>
                </ul>
                <a className={texts[7].class} href="mailto: web.craft.me@gmail.com" id="arrow">{texts[7].text}<i class="fa-solid fa-arrow-pointer"></i></a>
            </div >
        </header >
    )
}

export default Header;