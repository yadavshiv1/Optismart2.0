import React from "react";
import { Bounce } from 'react-reveal';
import { useInView } from 'react-intersection-observer';
// import Founder from '../img/team/founder.jpeg'
import Founder from '../../src/founder.jpeg'


export const Team = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it comes into view
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="row"> {/* Corrected 'row' id to className 'row' */}
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2 style={{ color: 'white' }}>Meet the Team</h2>
          </div>
        </div>
        <div className="row" ref={ref} style={{display:"flex",justifyContent:"center"}}> {/* Apply ref to the correct element */}
          <Bounce when={inView}>
          <div  className="col-md-3 col-sm-6 team">
          <div className="thumbnail">
          <img src={Founder} alt="..." className="team-img" />
          <div className="caption">
          <h4>Shiv Gupta</h4>
          <p>CEO</p>
          </div>
          </div>
          </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
};
