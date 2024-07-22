import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Features = (props) => {
  useEffect(() => {
    AOS.init({ 
      once: false, // whether animation should only happen once - while scrolling down
      duration: 100 // duration of animation in milliseconds
    });
  }, []);
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 style={{color:'white'}}>Features</h2>
        </div>
        <div className="row">
      {props.data
        ? props.data.map((d, i) => (
            <div
              key={`${d.title}-${i}`}
              className="col-xs-6 col-md-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              <p style={{ color: 'white' }}>{d.text}</p>
            </div>
          ))
        : "Loading..."}
    </div>
      </div>
    </div>
  );
};
