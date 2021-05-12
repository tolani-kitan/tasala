import bride from '../img/Rectangle6.png';
import bride1 from '../img/Rectangle7.png';
import bride2 from '../img/Rectangle8.png';
import bride3 from '../img/Rectangle9.png';
import bride4 from '../img/Rectangle1.png';
import bride5 from '../img/Rectangle11.png';

const Gallery = () => {
  return (
    <div>
      <section id='gallery' className='py-5'>
        <div className='container div-about'>
          <div className='row'>
            <div className='col-md-6'>
              <h3>Our Vision</h3>
              <p className=''>To be Africa’s number 1 haircare brand.</p>
            </div>

            <div className='col-md-6'>
              <h3>Our Mission</h3>
              <p className=''>
                At TasalaHQ we provide the knowledge, tools and training you
                need on your journey to achieving healthy hair.
              </p>
            </div>
          </div>
          <div className='row mb-4 marg'>
            <div className='col-md-4'>
              <img
                src={bride}
                alt=''
                className='img-fluid'
                height='560'
                width='560'
              />
            </div>
            <div className='col-md-4'>
              <img
                src={bride1}
                alt=''
                className='img-fluid'
                height='560'
                width='560'
              />
            </div>
            <div className='col-md-4'>
              <img
                src={bride2}
                alt=''
                className='img-fluid'
                height='560'
                width='560'
              />
            </div>
            <div className='col-md-4'>
              <img
                src={bride3}
                alt=''
                className='img-fluid'
                height='560'
                width='560'
              />
            </div>
            <div className='col-md-4'>
              <img
                src={bride4}
                alt=''
                className='img-fluid'
                height='560'
                width='560'
              />
            </div>
            <div className='col-md-4'>
              <img
                src={bride5}
                alt=''
                className='img-fluid'
                height='560'
                width='560'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
