import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faDownload, faRegistered, faUser } from '@fortawesome/free-solid-svg-icons'

const Summery = () => {
    return (
        <div class="stats stats-vertical lg:stats-horizontal shadow w-full">
  
  <div class="stat">
    <div class="stat-title">Downloads <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></div>
    <div class="stat-value">31K</div>
    <div class="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">New Users<FontAwesomeIcon icon={faUser}></FontAwesomeIcon></div>
    <div class="stat-value">4,200</div>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">New Registers <FontAwesomeIcon icon={faRegistered}></FontAwesomeIcon></div>
    <div class="stat-value">1,200</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    );
};

export default Summery;