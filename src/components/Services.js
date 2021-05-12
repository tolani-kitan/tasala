import React from 'react';
import image1 from '../img/jessica.jpg';
import image2 from '../img/jessica-felicio.jpg';
import image3 from '../img/Rectangle12.png';
import image4 from '../img/terricks-noah.jpg';

const Services = () => {
  return (
    <div>
      <header id='page-header' className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-auto text-center'>
              <h1>Our Services</h1>
              <p>
                TasalaHQ Hair and Beauty salon is located in Ikoyi, Lagos and
                was established in 2015 by Dupe Talabi, a trained hairstylist
                and educator with a speciality in bridal hair styling,
                wig-making and precision haircuts. With over 13 years of
                international experience in the hair industry,
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id='gallery' className='py-5'>
        <div className='container div-about'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={image1} alt='natural hair' width='350' height='450' />
            </div>
            <div className='col-md-6'>
              <h3>Natural Hair Care</h3>
              <p className=''>
                We offer gentle and detailed haircare services specifically for
                natural hair. Out techniques and products are designed to
                promote the nurturing of healthy hair and put you on the path to
                getting the hair you desire. We also offer a range of styling
                options and low manipulation protective styles to help clients
                maintain their hair better. Some of these include 2-strand
                twists, flat twists, goddess braids, corn rows, didi and crochet
                braids to name a few.
              </p>
              <button className='btn btn-warning mb-2'>Book Now</button>
            </div>
          </div>

          <div className='row marg-1'>
            <div className='col-md-6 mt-2'>
              <h3>Relaxed hair</h3>
              <p className=''>
                Our stylists are technically trained to understand the science
                of hair and the structural changes a relaxer can have on the
                hair. With this knowledge we can skilfully handle your relaxed
                hair in a way that minimises breakage and retains fullness of
                the hair. We offer services such as conditioning moisture and
                protein treatments, relaxers, texlax, and general hair
                maintenance for chemically processed hair.
              </p>
              <button className='btn btn-warning mb-2'>Book Now</button>
            </div>
            <div className='col-md-6'>
              <img src={image2} alt='natural hair' width='350' height='450' />
            </div>
          </div>

          <div className='row marg-1'>
            <div className='col-md-6'>
              <img src={image3} alt='natural hair' width='350' height='450' />
            </div>
            <div className='col-md-6 mt-2'>
              <h3>Bridal Service</h3>
              <p className=''>
                The wedding day is every woman’s dream. And the way she looks is
                definitely one of the most important factors of this special
                day. With this in mind, we offer a bridal service which is
                customised to each bride. Through a detailed consultation
                process the right look and style is designed for the bride to
                ensure she looks perfect on such a precious day.
              </p>
              <button className='btn btn-warning mb-2'>Book Now</button>
            </div>
          </div>

          <div className='row marg-1'>
            <div className='col-md-6 mt-2'>
              <h3>Wigs and Weaves</h3>
              <p className=''>
                Our wigs have definitely made their mark as a leading brand in
                Nigeria. We give clients the option of making their wig dreams
                come true by building the exact look that they want. Clients can
                also chose to recreate any style from our lookbook. Our wigs are
                comfortable, durable and secure.
              </p>
              <p>
                We offer a range of premium hand selected virgin hairs in
                different textures. Suitable to be used for a sew in or clip ins
                or can be used in construction of custom wigs.
              </p>
              <p>
                Our lace closures and lace frontals are made using high quality
                thin lace making them almost undetectable. They are hand knotted
                to give the illusion of a natural hairline. We also customise
                them and tint the lace to ensure that it blends perfectly with
                the clients skin tone.
              </p>
              <button className='btn btn-warning mb-2'>Book Now</button>
            </div>
            <div className='col-md-6'>
              <img src={image4} alt='natural hair' width='350' height='450' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
