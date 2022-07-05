import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faDownload, faRegistered, faUser } from '@fortawesome/free-solid-svg-icons'
  import CountUp from 'react-countup';
  import VisibilitySensor from "react-visibility-sensor";

const Summery = () => {
  const [focus, setFocus] = useState(false);
    return (
        <div class="stats stats-vertical lg:stats-horizontal shadow w-full">
  
  <div class="stat">
    <div class="stat-title mx-auto">Downloads <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></div>
    <div class="stat-value mx-auto text-primary">
    <CountUp start={focus ? 0 : null} end={50} duration={2} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                  <a>k</a>
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
    </div>
    <div class="stat-desc mx-auto">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="stat ">
    <div class="stat-title mx-auto">New Users<FontAwesomeIcon icon={faUser}></FontAwesomeIcon></div>
    <div class="stat-value mx-auto text-primary">
    <CountUp start={focus ? 0 : null} end={4200} duration={2} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                  
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
    </div>
    <div class="stat-desc mx-auto">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-title mx-auto">New Registers <FontAwesomeIcon icon={faRegistered}></FontAwesomeIcon></div>
    <div class="stat-value mx-auto text-primary">
    <CountUp start={focus ? 0 : null} end={400} duration={2} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                 
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
    </div>
    <div class="stat-desc mx-auto">↘︎ 90 (14%)</div>
  </div>
  
</div>
    );
};

export default Summery;