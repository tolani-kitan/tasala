import suad from '../img/jessica.jpg';
import terricks from '../img/terricks-noah.jpg';
import jessica from '../img/jessica-felicio.jpg';
import tammie from '../img/tammie.jpg';
import gift from '../img/gift.jpg';
import terrick from '../img/terricks-noah-.jpg';

const PhotoGallery = () => {
  return (
    <div>
      <section id='gallery' className='py-5'>
        <div className='container'>
          <h1 className='text-center'>Photo Gallery</h1>
          <p className='text-center'>Check out our photos</p>
          <div className='row mb-4'>
            <div className='col-md-4'>
              <img
                src={terricks}
                alt=''
                className='img-fluid'
                height='560'
                width='560'
              />
            </div>
            <div className='col-md-4'>
              <img
                src={jessica}
                alt=''
                className='img-fluid'
                height='560'
                width='560'
              />
            </div>
            <div className='col-md-4'>
              <img
                src={tammie}
                alt=''
                className='img-fluid'
                height='560'
                width='560'
              />
            </div>
            <div className='col-md-4'>
              <img
                src={suad}
                alt=''
                className='img-fluid'
                height='560'
                width='560'
              />
            </div>
            <div className='col-md-4'>
              <img
                src={gift}
                alt=''
                className='img-fluid'
                height='560'
                width='560'
              />
            </div>
            <div className='col-md-4'>
              <img
                src={terrick}
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

export default PhotoGallery;
