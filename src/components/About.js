import React from 'react';
import image from '../img/Rectangle5.png';
import Gallery from './Gallery';

const About = () => {
  return (
    <div>
      <header id='page-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-auto text-center'>
              <h1>About Us</h1>
              <p>
                At TasalaHQ we provide the knowledge, tools and training you
                need on your journey to achieving healthy hair.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id='about' className='py-3'>
        <div className='container div-about'>
          <div className='row'>
            <div className=''>
              <h1>What We Do</h1>
              <p>
                TasalaHQ Hair and Beauty salon is located in Ikoyi, Lagos and
                was established in 2015 by Dupe Talabi, a trained hairstylist
                and educator with a speciality in bridal hair styling,
                wig-making and precision haircuts. With over 13 years of
                international experience in the hair industry, Dupe has a wealth
                of knowledge which has been garnered by working with some of the
                best salons, stylists and product companies such as Avlon and
                L’Oreal both in the UK and the US.
              </p>
              <p>
                After completing her university education, Dupe started her
                journey in Hairdressing by training at the University College
                Birmingham and gaining her NVQ qualifications in Cosmetology.
                Dupe is also a trained educator with a Postgraduate Degree from
                the world renowned University of London (Institute of
                Education). She is also an External Verifier for City and
                Guilds, West Africa and is committed to improve the level of
                hairdressing education in Nigeria.
              </p>
            </div>
            <div className='mt-3'>
              <img
                src={image}
                alt=''
                className='img-fluid d-none d-md-block about-img'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='about'>
        <div className='container div-about'>
          <div className='row'>
            <div className='col-md-6 text-white'>
              <p className='m-top'>
                Since inception, this full service salon has rapidly gained a
                cult following and recognition as being THE salon to go to in
                Lagos for quality haircare and services.
              </p>
              <p>
                TasalaHQ has been the choice option for quite a number of high
                profile clients and celebrity weddings both in Nigeria and
                abroad. Our work has graced the covers of magazines such as
                Forbes Africa, Genevieve magazine and TW magazine. We have also
                featured in newspapers such as ThisDay and Punch.
              </p>
            </div>

            <div className='col-md-6 text-white'>
              <p className='m-top'>
                We have a team of highly skilled stylists who are trained by
                some of the best artists in the hair industry in their areas of
                expertise. We always strive to keep up with emerging trends and
                techniques in the hair and fashion world and apply that to
                services offered in the salon.
              </p>
              <p>
                At TasalaHQ we believe in giving our clients a style that
                compliments and imbibes confidence. Our aim is to make every
                woman who sits in our chairs to fall in love with her hair
                regardless of what state it is in, whilst creating an enabling
                regimen to promote the growth and maintenance of healthy hair.
                We provide clients with a personalised service in a clean and
                comfortable environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
    </div>
  );
};

export default About;
