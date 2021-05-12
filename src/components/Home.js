/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import image from '../img/Rectangle.png';
import image1 from '../img/eric.jpg';
import HairImage from '../img/Rectangle4.png';
import PhotoGallery from './PhotoGallery';

const Home = () => {
  return (
    <div>
      <section id='showcase'>
        <Carousel>
          <Carousel.Item>
            <img className='d-block w-100' src={image} alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={image1} alt='Second slide' />

            <Carousel.Caption>
              <h3 className='text-left carousel-font'>BEAUTIFUL</h3>
              <h3 className='text-left carousel-font'>GLAMOROUS</h3>
              <h3 className='text-left carousel-font'>CONFIDENCE</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* HOME ICON SECTION  */}
      <section id='home-icons' className='py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-4 mb-4 text-center div-small'>
              <img
                src='https://img.icons8.com/ios-filled/80/000000/womans-hair.png'
                className='mb-2'
                alt='natural hair'
              />
              <h3>Natural Hair Care</h3>
              <p>
                We offer gentle and detailed haircare services specifically for
                natural hair. Out techniques and products are designed to
                promote the nurturing of healthy hair and put you on the path to
                getting the hair you desire.
              </p>
            </div>
            <div className='col-md-4 mb-4 text-center div-small'>
              <img
                src='https://img.icons8.com/color/80/000000/womans-hair.png'
                className='mb-2'
                alt='bridal hair'
              />
              <h3>Bridal Service</h3>
              <p>
                The wedding day is every woman’s dream. And the way she looks is
                definitely one of the most important factors of this special
                day. With this in mind, we offer a bridal service which is
                customised to each bride.
              </p>
            </div>
            <div className='col-md-4 mb-4 text-center div-small'>
              <img
                src='https://img.icons8.com/plasticine/80/000000/womans-hair.png'
                alt='wigs'
              />
              <h3>Wigs and Weaves</h3>
              <p>
                Our wigs have definitely made their mark as a leading brand in
                Nigeria. We give clients the option of making their wig dreams
                come true by building the exact look that they want.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* HOME HEADING SECTION  */}
      <section id='home-heading' className='p-5'>
        <div className=''>
          <div className='row'>
            <div className='col'>
              <div className='container pt-5'>
                <h1>Are You Ready To Look Like a Queen?</h1>
                <p className='d-none d-md-block'>
                  We provide the knowledge, tools and training you need on your
                  journey to achieving healthy hair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* INFO SECTION  */}
      <section id='info' className='py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 align-self-center'>
              <h3>Our Offers</h3>
              <p>
                We offer a range of premium hand selected virgin hairs in
                different textures. Suitable to be used for a sew in or clip ins
                or can be used in construction of custom wigs.
              </p>
              <Link to='/about' className='btn btn-outline-warning btn-lg'>
                Book Now
              </Link>
            </div>
            <div className='col-md-6'>
              <img
                src={HairImage}
                alt=''
                className='img-fluid float-right mr-4'
                height='250px'
                width='250px'
              />
            </div>
          </div>
        </div>
      </section>
      {/* VIDEO PLAY */}
      <section id='video-play'>
        <div className='dark-overlay'>
          <div className='row'>
            <div className='col'>
              <div className='container p-5'>
                <a
                  href='https://www.youtube.com/embed/eS64yozs10U'
                  className='video'
                  alt='hair making video'
                  target='_blank'
                >
                  <i className='fas fa-play fa-3x' />
                </a>
                <h1>See What We Do</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Photo Gallery */}
      <PhotoGallery />
    </div>
  );
};

export default Home;
