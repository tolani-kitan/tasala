import React from 'react';

const Contact = () => {
  return (
    <div>
      <header id='page-header' classNameName='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-auto text-center'>
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </header>

      <section id='contact' className='py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card p-4'>
                <div className='card-body'>
                  <h3>Talk To Us</h3>

                  <h5 className=''>Address</h5>
                  <p>1 Bank Rd Ikoyi, Lagos, Nigeria</p>
                  <h5>Email</h5>
                  <p> info@tasalahq.com</p>
                  <h5>Phone</h5>
                  <p>08186652477</p>
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='card p-4'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='First Name'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Last Name'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Email'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Phone Number'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <textarea
                          className='form-control'
                          placeholder='Message'
                        ></textarea>
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <input
                          type='submit'
                          value='Submit'
                          className='btn btn-outline-warning btn-block'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
