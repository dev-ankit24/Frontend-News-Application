import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBIcon} from 'mdbreact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedin,faGithub,faTwitter,faInstagram ,faYoutube} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <>
     <hr />
    <MDBFooter  bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block '>
          <span className='span'>Get connected with us on social networks:</span>
        </div>

        <div className='social-icons'>
          <a href='https://www.facebook.com/ankitkumr.kumr.3?mibextid=ZbWKwL' target="--blank" className='me-4 text-reset'>
          <FontAwesomeIcon icon={faFacebook} size='2x'className='icon' style={{ color: 'blue' }}/>
          </a>
          <a href='https://www.linkedin.com/in/ankit-kumar-5195481a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="--blank" className='me-4 text-reset'>
           <FontAwesomeIcon icon={faLinkedin} size='2x' className='icon' style={{ color: '#0077b5' }}  />
          </a>
          
          <a href='https://x.com/EnAnkit2402' target="--blank" className='me-4 text-reset'>
          <FontAwesomeIcon icon={faTwitter} size='2x' style={{ color: 'blue' }} className='icon' />
          </a>
        
          <a href='https://www.instagram.com/dev__ankitkumar?igsh=OGQ5ZDc2ODk2ZA==' target="--blank"  className='me-4 text-reset'>

          <FontAwesomeIcon icon={faInstagram} size='2x' style={{ color: '#d6249f' }} className='icon' />
        
          </a>
          <a href='https://youtu.be/FWb91pt5qV0?si=4O6kFh7V9Pj-tII2' target="--blank" className='me-4 text-reset'>
          <FontAwesomeIcon icon={faYoutube} size='2x' style={{ color: 'red' }}  className='icon' />
          </a>
          <a href='' target="--blank" className='me-4 text-reset'>
          <FontAwesomeIcon icon={faGithub} size='2x' style={{ color: 'black' }} className='icon' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                NEWS APP
              </h6>
              <p>
                <i>NEWS APP </i> are provides all type news. and LESTEST and Live news proviede. Ex... Cricket, Politics , Education, Tchnology, World, Science ect..
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>News Types</h6>

            <p>
                <a href='#!' className='text-reset'>
                  Education News
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Politics News
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Crime News
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Jokes 
                </a>
              </p>

            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Reviews
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Comments
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FeedBack
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Rampur Chandiyana , aligarh, 202133, IND
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                akumarrai45@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 8392823395
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 copyright' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <div>
      © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          NEWSAPP.com
        </a>
        <p>CreateBy ~ <span>Ankit Kumar</span></p>
      </div>
      </div>
    </MDBFooter>
    </>
  );
}
