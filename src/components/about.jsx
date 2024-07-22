import React, { useRef } from 'react';
import { Bounce } from 'react-reveal';
import { useInView } from 'react-intersection-observer';


export const About = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });


  
  return (
    <div id="about">
      <div className="container">
      <div className="row">
      <div className="col-xs-12 col-md-6">
        <div ref={ref}>
          <Bounce when={inView} left>
            <img src="img/about.png" className="img-responsive" alt="" />
          </Bounce>
        </div>
      </div>
      <div className="col-xs-12 col-md-6">
        <div className="about-text">
          <Bounce when={inView} left>
            <h2>About Us</h2>
          </Bounce>
          <Bounce when={inView} left>
            <p style={{ color: 'black', fontSize: '18px' }}>
              {props.data ? props.data.paragraph : "loading..."}
            </p>
          </Bounce>
          <Bounce when={inView} left>
            <h3 style={{ color: 'rgb(9,84,121)' }}>Why Choose Us?</h3>
          </Bounce>
          <div className="list-style">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <Bounce when={inView} left>
                <ul style={{ color: 'black', fontSize: '16px' }}>
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : "loading"}
                </ul>
              </Bounce>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <Bounce when={inView} left>
                <ul style={{ color: 'black', fontSize: '16px' }}>
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                    : "loading"}
                </ul>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};
