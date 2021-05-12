import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <section id='newsletter' className='p-5 bg-dark text-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 mb-4'>
              <h3 className='head'>ABOUT US</h3>
              <p className='mt-4'>
                TasalaHQ Hair and Beauty is the #1 premium hair salon in Lagos,
                Nigeria. We offer exclusive hair services as well as detailed
                consultation tailored to each client's unique need.
              </p>
              <div className='d-flex'>
                <div className='fabe'>
                  <img
                    src='https://img.icons8.com/fluent-systems-regular/25/000000/facebook-f.png'
                    alt='facebook icon'
                  />
                </div>
                <div className='fabe ml-3'>
                  <img
                    src='https://img.icons8.com/fluent-systems-regular/25/000000/twitter.png'
                    alt='facebook icon'
                  />
                </div>
                <div className='fabe ml-3'>
                  <img
                    src='https://img.icons8.com/fluent-systems-regular/25/000000/instagram-new.png'
                    alt='facebook icon'
                  />
                </div>
                <div className='fabe ml-3'>
                  <img
                    src='https://img.icons8.com/small/25/000000/youtube--v1.png'
                    alt='facebook icon'
                  />
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-4 '>
              <h3 className='head'>INFORMATION</h3>
              <div className='li'>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Delivery </p>
                <p>Terms of Use</p>
              </div>
            </div>
            <div className='col-md-3 mb-4 '>
              <h3 className='head'>WORKING HOURS</h3>
              <div className='li'>
                <p>Tues – Sat: 10am - 7pm</p>
                <p> Sunday: 12noon - 6pm</p>
                <p> Monday: Closed</p>
              </div>
            </div>
            <div className='col-md-3 mb-4 '>
              <h3 className='head'>CONTACT US</h3>
              <p className='mt-4'>
                1 Bank Rd Ikoyi, Lagos, Nigeria 08186652477
              </p>
              <p>info@tasalahq.com</p>
              <p>JOIN NEWSLETTER</p>
              <form className='form-inline'>
                <input
                  type='text'
                  className='form-control mb-2 mr-2'
                  placeholder='Email'
                />
                <button className='btn btn-warning mb-2'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer id='main-footer' className='text-center p-4'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p>
                Copyright ©<span>{year}</span> Tasala Hq
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
