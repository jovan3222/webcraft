import React from 'react';
import './main.css';
import './mobile-main.css';

const HeroContent = {
        title:'Vjerujemo u',
        title2: 'Kreativnost',
        description:'Strastveni smo u pravljenju prelijepih web sajtova kako bismo vam pomogli da privučete i zadržite klijente za vaše preduzeće.',
        button1:'Usluge',
        button2:'Naruči websajt'
}

const services = [
    {
        title: 'SEO optimizacija',
        titleClass: 'service-title1',
        description: 'Implementacija različitih strategija kako bi se poboljšala posjećenost i rangiranje vašeg web sajta. Ove strategije obuhvataju od optimizacije sadržaja na stranici, do izgradnje kvalitetnih linkova na istim.',
        descriptionClass: 'service-description1',
        className: 'service1',
        iconClass: 'fa-solid fa-magnifying-glass-chart'
    },
    {
        title: 'Web sajtovi',
        titleClass: 'service-title2',
        description: 'Izrada inovativnih, funkcionalnih i vizuelno dopadljivih web sajtova koji na najbolji način prezentuju Vaš posao. Jedinstven i prilagodljiv web dizajn kao imperativ.',
        descriptionClass: 'service-description2',
        className: 'service2',
        iconClass: 'fa-solid fa-globe',
    },
    {
        title: 'Redizajn web sajta',
        titleClass: 'service-title3',
        description: 'Pozitivno korisničko iskustvo i prilagodljivi web dizajn postali su imperativ koji zahtijeva drugačiji način pristupa izgledu, rasporedu elemenata i sadržaju web aplikacije odnosno web sajta.',
        descriptionClass: 'service-description3',
        className: 'service3',
        iconClass: 'fa-solid fa-pen-ruler'
    },
]

const testimonials = [
    {
        title: 'Marko Jovanoviic',
        titleClass: 'testimonial-title1',
        description: 'Implementacija različitih strategija kako bi se poboljšala posjećenost i rangiranje vašeg web sajta. Ove strategije obuhvataju od optimizacije sadržaja na stranici, do izgradnje kvalitetnih linkova na istim.',
        descriptionClass: 'testimonial-description1',
        className: 'testimonial1',
        iconClass: 'fa-solid fa-user',
        starsIcon: 'fa-solid fa-star'
    },
    {   
        title: 'Simona Pavkovic',
        titleClass: 'testimonial-title2',
        description: 'Rad sa ovim timom za sajtove promenio je moje poslovanje. Oni su pomogli da značajno povećam saobraćaj i konverzije na mojoj veb stranici. Preporučuje!',
        descriptionClass: 'testimonial-description2',
        className: 'testimonial2',
        iconClass: 'fa-solid fa-user',
        starsIcon: 'fa-solid fa-star'
    },
    {
        title: 'Enis Karaklic',
        titleClass: 'testimonial-title3',
        description: 'Implementacija različitih strategija kako bi se poboljšala posjećenost i rangiranje vašeg web sajta. Ove strategije obuhvataju od optimizacije sadržaja na stranici, do izgradnje kvalitetnih linkova na istim.',
        descriptionClass: 'testimonial-description3',
        className: 'testimonial3',
        iconClass: 'fa-solid fa-user',
        starsIcon: 'fa-solid fa-star'
    }
]

const Main = () => (
    <main>
        <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
        <section className='hero-section'>
            <div className='hero-info-container'>
                <h2 className='hero-s-h2'>{HeroContent.title}</h2>
                <h2 className='type-effect'>{HeroContent.title2}</h2>

                <p className='hero-s-p'>
                    {HeroContent.description}
                </p>
                <div className='hero-btns-container'>
                    <a href="www.smartdevpreneur.com"><button className='hero-s-btn1'>{HeroContent.button1}</button></a>
                    <a href="www.smartdevpreneur.com"><button className='hero-s-btn2'>{HeroContent.button2}</button></a>
                </div>
            </div>
        </section>
        <section className='services-section'>
            <h6>Šta nudimo:</h6>
            <div className='blue-line'></div>
            <div className='overall-services-container'>
                {services.map((service, index) => (
                    <div key={index} id="services-container" className={service.className}>
                        <i className={service.iconClass}></i>
                        <p className={service.titleClass}>{service.title}</p>
                        <p className={service.descriptionClass}>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
        <section className='why-us-section'> 
                <div className='why-us-content'>
                    <p className='why-us-title'>Zašto baš mi?</p>
                    <div className='why-us-decoration-line'></div>
                    <p className='why-us-text'>{services[0].description}</p>
                </div>
                <div className='why-us-img-container'>
                    <div className='why-us-img'></div>
                </div>
        </section>
        <section className='testimonial-section'>
            <h6>Recenzije klijenata</h6>
            <div className='blue-line2'></div>
            <div className='overall-testimonial-container'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} id="testimonial-container" className={testimonial.className}>
                        <i className={testimonial.iconClass}></i>
                        <p className={testimonial.titleClass}>{testimonial.title}</p>
                        <div className='stars'>
                            <i class={testimonial.starsIcon}></i>
                            <i class={testimonial.starsIcon}></i>
                            <i class={testimonial.starsIcon}></i>
                            <i class={testimonial.starsIcon}></i>
                            <i class={testimonial.starsIcon}></i>
                        </div>
                        <p className={testimonial.descriptionClass}>{testimonial.description}</p>
                    </div>
                ))}
            </div>
        </section>
        <section className='kontakt-section'>
            <h2 className='kontakt-title'>Kontakt</h2>
            <div className='kontant-content-container'>
                <div className='kontakt-content'>
                    <h6 className='content-title'>Iskoristite besplatnu konsultaciju sa nasim timom!</h6>
                    <p className='content-gmail'><a href="google.com">webcraft@gmail.com</a></p>
                    <p className='app-icons-title'>Zapratite nas na društvenim mrežama:</p>
                    <div className='app-icons'>
                        <a href="google.com"><i class="fa-brands fa-instagram"></i></a>
                        <a href="google.com"><i class="fa-brands fa-square-facebook"></i></a>
                        <a href="google.com"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="google.com"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
                <div className='kontakt-img-container'>
                    <img className='kontakt-img'/>
                </div>
            </div>
        </section>
    </main>
)

export default Main;