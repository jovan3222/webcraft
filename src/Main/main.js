import React from 'react';
import './main.css';
import './mobile-main.css';

let MainObj = [
    {
        text:'Vjerujemo u Kreativnost'
    },
    {
        text:'Strastveni smo u pravljenju prelijepih web sajtova kako bismo vam pomogli da privučete i zadržite klijente za vaše preduzeće.'
    },
    {
        text:'Usluge'
    },
    {
        text:'Naruči websajt'
    }
]

const Main = () => (
    <main>
        <section className='hero-section'>
            <div className='hero-info-container'>
                <h2 className='hero-s-h2'>Vjerujemo u</h2>
                <h2 className='type-effect'>Kreativnost</h2>

                <p className='hero-s-p'>
                    {MainObj[1].text}
                </p>
                <div className='hero-btns-container'>
                <a href="www.smartdevpreneur.com"><button className='hero-s-btn1'>{MainObj[2].text}</button></a>
                <a href="www.smartdevpreneur.com"><button className='hero-s-btn2'>{MainObj[3].text}</button></a>
                </div>
            </div>
        </section>
        <section className='services-section'>
            <div>

            </div>
        </section>
    </main>
)

export default Main;