import React from 'react';
import Carousel from './Carousel';

function AboutUs() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginTop: '20vh' }}>
        <h1 style={{ fontSize: '3em' }}>About Us</h1>
        <p>
          <strong>In-vest-ed in A Cappella</strong>
          <br />
          We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests!
          <br />
          Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20vh' }}>
        <div style={{ flex: 1 }}>
          <h2>Events</h2>
          <div style={{ position: 'relative', width: '100%', height: '600px' }}>
            <Carousel />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Hire Us</h2>
          <p>
            Please e-mail our business manager at noteworthy@ucchoral.berkeley.edu and fill out this <a href="https://docs.google.com/forms/d/e/1FAIpQLSexPGp4LpkvAaE66Kmh5EllvAaXQtPmGquz_1dDo9g2PZ01hg/viewform" style={{ color: 'blue' }}>form</a>.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Follow Us</h2>
          
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
