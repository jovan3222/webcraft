import React from 'react';
import './footer.css';
import './footer-mobile.css';

const appIcons = [
    {
        title: 'Zapratite nas:',
        icon1: 'fa-brands fa-instagram',
        icon2: 'fa-brands fa-square-facebook',
        icon3: 'fa-brands fa-linkedin'
    },
    {
        title: 'Kontaktirajte nas:',
        icon1: 'fa-brands fa-instagram',
        icon2: 'fa-brands fa-square-facebook',
        icon3: 'fa-brands fa-linkedin'
    },
    {
        title: 'Pišite nam:',
        icon1: 'fa-brands fa-instagram',
        icon2: 'fa-brands fa-square-facebook',
        icon3: 'fa-brands fa-linkedin'
    }
]

const Footer = () => (
    <>
        <svg className='vawe' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="black" fill-opacity="1" d="M0,64L120,74.7C240,85,480,107,720,106.7C960,107,1200,85,1320,74.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
        <footer>
            <div className='icons-container'>
                <a className='footer-logo' href='www.smartdevpreneur.com'><span className='footer-web-blue'>WEB</span> <span className='craft-black'>CRAFT</span></a>
                    <div className='all-icons-container'>
                        <p className='icons-title'>Zapratite nas:</p>
                        <div className='footer-icons-line'></div>
                        <div className='icons-container my-cont'>
                            <a href="www.google.com"><i class='fa-brands fa-instagram' id="insta2"></i></a>
                            <a href="www.google.com"><i class='fa-brands fa-square-facebook' id="facebook"></i></a>
                            <a href="www.google.com"><i class='fa-brands fa-linkedin' id="linkedin"></i></a>
                        </div>
                    </div>
                    <div>
                        <p className='icons-title'>Kontaktirajte nas:</p>
                        <div className='footer-icons-line' id="line2"></div>
                        <div className='icons-container my-cont' id="icons-2-container">
                            <a href="www.google.com"><i class="fa-solid fa-phone" id="phone"></i></a>
                            <a href="www.google.com"><i class="fa-regular fa-envelope" id="email"></i></a>
                        </div>
                    </div>
                    <div>
                        <p className='icons-title'>Pišite nam:</p>
                        <div className='footer-icons-line'></div>
                        <div className='icons-container my-cont'>
                            <a href="www.google.com"><i class="fa-brands fa-whatsapp" id="whatsapp"></i></a>
                            <a href="www.google.com"><i class="fa-brands fa-viber" id="viber"></i></a>
                            <a href="www.google.com"><i class='fa-brands fa-instagram' id="insta"></i></a>
                        </div>
                    </div>
            </div>
            <p className='privacy'>
                Copyright Web Craft 2023. - All Rights Reserved
            </p>
        </footer>
    </>
)

export default Footer;