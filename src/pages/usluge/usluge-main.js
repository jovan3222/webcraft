import React from 'react';
import './usluge.css';
import './usluge-main-mobile.css';
import { Link } from "react-router-dom";

const content = [
    {
        title: 'Usluge'
    }
]

const services = [
    {
        title: 'Savremeni dizajn',
        titleClass: 'services-service-title1',
        description: 'Pravimo savremen i privlačan dizajn koji će istaći vaš brend na najbolji mogući način.',
        descriptionClass: 'services-service-description1',
        iconClass: 'fa-solid fa-paint-roller'
    },
    {
        title: 'SEO optimizaciju',
        titleClass: 'services-service-title1',
        description: 'Radimo na tome da budete na prvoj stranici web pretraživača i imate što više posjeta sajtu.',
        descriptionClass: 'services-service-description1',
        iconClass: 'fa-solid fa-magnifying-glass-chart',
    },
    {
        title: 'Prilagođen dizajn',
        titleClass: 'services-service-title1',
        description: 'Dizajn sajta koji se prilagođava svim vrstama uređaja (telefon, tablet, laptop...).',
        descriptionClass: 'services-service-description1',
        iconClass: 'fa-solid fa-tablet-screen-button'
    },
    {
        title: 'Brzinu i sigurnost',
        titleClass: 'services-service-title1',
        description: 'Brzina učitavanja sajta jedan je od najvažnijih faktora rangiranja na Google-u..',
        descriptionClass: 'services-service-description1',
        iconClass: 'fa-solid fa-gauge-high'
    },
]

const naruci = {
    title: 'Naručite izradu web sajta',
    text: 'Obezbijedite moderan i profesionalan web sajt koji će pojačati vaš brend i putem kojeg vas kupci mogu lako i jednostavno pronaći na internet',
    buttonText: 'Kontaktiraj nas'
}

const servicesTitle = {
    title: 'Šta nudimo:',
}

const questionsTitle = {
    title: 'Često postavljana pitanja:'
}

const questions = [
    {
        question: 'Koliko košta izrada web sajta?',
        answer: 'Cijena izrade web sajta zavisi od nekoliko faktora. Svaki web sajt je drugačiji i zahtjeva različite komponente; dizajniramo i razvijamo jedinstvene web sajtove za vaše poslovanje. Postavljamo vam pitanja i prema njima ćemo procijeniti vaše potrebe i na osnovu te procijene dati ponudu. ',
        id: 'quest1'
    },
    {
        question: 'Koliko vremena je potrebno za pravljenje web sajta?',
        answer: 'Trajanje izrade sajta zavisi od složenosti projekta. Na primjer, najosnovniji web sajt se pravi za 15 do 20 dana.',
        id: 'quest1'
    },
    {
        question: 'Da li će se moj novonapravljeni web sajt gledati sa mobilnog telefona?',
        answer: 'Apsolutno! Imati web sajt koji je vidljiv na mobilnim telefonima je važniji nego ikad! Trudimo se da dizajn vašeg web sajta izgleda odlično na različitim uređajima.',
        id: 'quest1'
    },
    {
        question: 'Šta će nam trebati od vas prije nego što počnemo sa izradom web sajta?',
        answer: 'Prije nego što počnete da pravite web sajt potrebni su nam: tekstovi i objašnjenja o uslugama, tekst o kompaniji, slike i video zapisi koje želite da dodate na sajt.',
        id: 'quest1'
    }
]

const Usluge = () => {

    const [expandedAnswerIndex, setExpandedAnswerIndex] = React.useState();

    return (
        <main className='usluge-main'>
            <section className='usluge-hero-section'>
                <h1>{content[0].title}</h1>
            </section>
            <section className='services-services-section'>
                <h6>{servicesTitle.title}</h6>
                <div className='services-blue-line'></div>
                <div className='services-overall-services-container'>
                    {services.map((service, index) => (
                        <div key={index} id="services-services-container" className={service.className}>
                            <i className={service.iconClass} id="services-service-icon"></i>
                            <p className={service.titleClass}>{service.title}</p>
                            <p className={service.descriptionClass}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className='narucite-section'>
                <h1>{naruci.title}</h1>
                <p>{naruci.text}</p>
                <Link to="/kontakt"><button>{naruci.buttonText}</button></Link>
            </section>
            <section className='questions-section'>
                <h6 className='questions-title'>{questionsTitle.title}</h6>
                <div className='questions-container'>
                    <ul>
                        {questions.map((question, index) => (
                            <>
                                <li className='question' onClick={() => setExpandedAnswerIndex(index)}>
                                    <div className='circle'>
                                        <div className='circle-line1' style={expandedAnswerIndex === index ? { display: 'none' } : { display: 'flex' }}></div>
                                        <div className='circle-line2'></div>
                                    </div>
                                    {question.question}
                                </li>
                                <div className='answer-container'>
                                    <p className='answer' style={expandedAnswerIndex === index ? { marginTop: '0' } : { marginTop: '-100px' }}>{question.answer}</p>
                                </div>
                            </>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}
export default Usluge;