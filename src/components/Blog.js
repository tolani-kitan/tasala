import React from 'react';
import image from '../img/Rectangle61.png';

const Blog = () => {
  return (
    <div>
      <header id='page-header' className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-auto text-center'>
              <h1 className='mt-4'>Tasala HQ Blog</h1>
            </div>
          </div>
        </div>
      </header>

      <section id='gallery' className='py-5'>
        <div className='container div-about'>
          <div className='row text-center'>
            <h3>Latest Article</h3>
            <p className=''>
              TasalaHQ Hair and Beauty salon is located in Ikoyi, Lagos and was
              established in 2015 by Dupe Talabi, a trained hairstylist and
              educator with a speciality in bridal hair styling, wig-making and
              precision haircuts.
            </p>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='card-columns'>
                <div className='card'>
                  <img src={image} alt='' className='img-fluid card-img-top' />
                  <div className='card-body'>
                    <h4 className='card-title'>Let's Kiss and Make Up</h4>
                    <small className='text-muted'>
                      Written by Jeff on 05/20
                    </small>
                    <hr />
                    <p className='card-text'>
                      Say it with me: Having curly hair is an honor and
                      privilege. Then, repeat it one more time. Solange, who so
                      eloquently reminded us that our curls are our crown with
                      her heartfelt lyrics featured in 2016 single "Don't Touch
                      My Hair", further reaffirmed that we should be proud to
                      treat our hair like royalty.
                    </p>
                  </div>
                </div>

                <div className='card p-3'>
                  <blockquote className='card-blockquote card-body'>
                    <p>
                      I think that the most important thing a woman can have-
                      next to talent, of course- is her hairdresser.
                    </p>
                    <footer className='blockquote-footer'>
                      <small className='text-muted'>
                        Joan Crawford
                        <cite title='Source Title'></cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>

                <div className='card'>
                  <img
                    src='https://source.unsplash.com/random/301x200'
                    alt=''
                    className='img-fluid card-img-top'
                  />
                  <div className='card-body'>
                    <h4 className='card-title'>
                      The Dry Shampoos You Can Count On
                    </h4>
                    <small className='text-muted'>
                      Written by Karen on 12/20
                    </small>
                    <hr />
                    <p className='card-text'>
                      Look, I love the feeling of a shower-fresh, squeaky clean
                      scalp as much as the next person, but most days, I end up
                      throwing my hair in a messy bun on top of my head during
                      my daily shower. The extra effort of getting my hair wet,
                      shampooing twice, waiting for it to towel dry, then blow
                      drying it into submission just seems far too daunting when
                      I don't plan on leaving the house.
                    </p>
                  </div>
                </div>
                <div className='card p-3 bg-warning text-white'>
                  <blockquote className='card-blockquote card-body'>
                    <p>
                      A woman who cuts her hair is about to change her life.
                    </p>
                    <footer className='blockquote-footer'>
                      <small className='text-white'>
                        Coco Chanel
                        <cite title='Source Title'></cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>

                <div class='card'>
                  <img
                    src='https://source.unsplash.com/random/302x200'
                    alt=''
                    class='img-fluid card-img-top'
                  />
                  <div class='card-body'>
                    <h4 class='card-title'>
                      How To Care For Your Natural Hair
                    </h4>
                    <small class='text-muted'>
                      Written by Folarin on 08/20
                    </small>
                    <hr />
                    <p class='card-text'>
                      No natural hair journey is complete without these
                      aforementioned products, but there’s a laundry list of
                      strand-saving products your hair needs so it can flourish.
                    </p>
                  </div>
                </div>

                <div class='card p-3'>
                  <blockquote class='card-blockquote card-body'>
                    <p>
                      Life is more beautiful when you meet the right
                      hairdresser.
                    </p>
                    <footer class='blockquote-footer'>
                      <small class='text-muted'>
                        Peter Coppola
                        <cite title='Source Title'></cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
