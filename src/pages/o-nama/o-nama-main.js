import React from 'react';
import './o-nama.css';
import '../o-nama/o-nama-main-mobile.css';
import Image from './o-nama-image.jpg';
import ContactImage from '../../Main/home-kontakt.jpg';

const content = [
    {
        title: 'Ko smo mi?',
        text: 'Web craft na originalan i kreativan način predstavlja vaš brend čineći ga prepoznatljivijim u digitalnom okruženju. Bavimo se izradom web sajtova na inovativan način i pretvaramo vaše ideje u stvarnost.'
    },
    {
        title: 'O nama'
    },
    {
        title: 'Iskoristite besplatnu konsultaciju sa našim timom!'
    },
    {
        email: 'webcraft@gmail.com'
    },
    {
        text: 'Zapratite nas na društvenim mrežama:'
    },
    {
        text: 'Pišite nam:'
    }
]

const Onamamain = () => (
    <main className='o-nama-main'>
        <section className='o-nama-hero-section'>
            <h1>{content[1].title}</h1>
        </section>
        <section className='o-nama-content-section'>
            <div className='o-nama-content-container'>
                <h5>{content[0].title}</h5>
                <div className='decor-line'></div>
                <div className='onama-decor-title-div'></div>
                <div className='onama-decor-title-div2'></div>
                <p>{content[0].text}</p>
                <div className='onama-decor-text-div'></div>
                <div className='onama-decor-text-div2'></div>
            </div>
            <div className='o-nama-image-container'>
                <img src={Image} className='o-nama-img' alt="o-nama" />
                <div className='decor-div' id="decor-div"></div>
            </div>
        </section>
        <section className='onama-kontakt-section2'>
            <div className='onama-kontakt-content-container2'>
                <div className='onama-kontakt-content2'>
                    <h6 className='onama-content-title2'>{content[2].title}</h6>
                    <p className='onama-content-gmail2'><a href="mailto: web.craft.me@gmail.com">{content[3].email}</a></p>
                    <p className='onama-app-icons-title2'>{content[4].text}</p>
                    <div className='onama-app-icons2'>
                        <a href="https://www.instagram.com/webcraft.me/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100094819901333"><i class="fa-brands fa-square-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/web-craft-780b93283/"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                    <p className='onama-app-icons-title3'>{content[5].text}</p>
                    <div className='onama-app-icons3'>
                        <a href="tel:067-941-855"><i class="fa-solid fa-phone" id='onama-tel'></i></a>
                        <a href="mailto: web.craft.me@gmail.com"><i class="fa-regular fa-envelope" id='onama-mail'></i></a>
                        <a href="www.google.com"><i class="fa-brands fa-whatsapp" id='onama-wa'></i></a>
                        <a href="www.google.com"><i class="fa-brands fa-viber"></i></a>
                    </div>
                </div>
                <div className='onama-kontakt-img-container2'>
                    <img className='onama-kontakt-img2' src={ContactImage} alt="contact" />
                </div>
            </div>
        </section>
    </main>
)

export default Onamamain