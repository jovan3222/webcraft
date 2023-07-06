import React from 'react';
import './header.css';
import './mobile-header.css';

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
                <a className='logo' href='www.smartdevpreneur.com'><span className='web-blue'>{texts[0].text}</span> <span className='craft-black'>{texts[1].text}</span></a>
                <div className='navbar-lines-container' 
                    onClick={() => expand()}
                >
                    <div className='navbar-line line1' style={boolean === true ? {} : {transform:'rotate(45deg)', marginTop:'20px'}}></div>
                    <div className='navbar-line line2' style={boolean === true ? {} : {transform:'rotate(135deg)', marginTop:'-30px'}}></div>
                    <div className='navbar-line line3' style={boolean === true ? {} : {display:'none'}}></div>
                </div>
                <ul style={boolean === true ? {display:'none'} : {display:'flex'}}>
                    <li><a href="www.smartdevpreneur.com">{texts[2].text}</a></li>
                    <li><a href="www.smartdevpreneur.com">{texts[3].text}</a></li>
                    <li><a href="www.smartdevpreneur.com">{texts[4].text}</a></li>
                    <li><a href="www.smartdevpreneur.com">{texts[5].text}</a></li>
                    <li><a href="www.smartdevpreneur.com">{texts[6].text}</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;