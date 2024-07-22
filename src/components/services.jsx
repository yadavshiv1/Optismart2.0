import React from 'react';
import { Bounce } from 'react-reveal';
import { useInView } from 'react-intersection-observer';

export const Services = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it comes into view
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div  ref={ref}   className="row">
        <Bounce when={inView}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
            </Bounce>
        </div>
      </div>
    </div>
  );
};
