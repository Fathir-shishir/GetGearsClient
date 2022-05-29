import React from 'react';
import img from "../../shishir(HQ).png"
const About = () => {
    return (
        <div class="card card-compact mx-auto my-10 lg:w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">MD FATHIR AHMED SHISHIR</h2>
          <p>Email : mfa.shishir@gmail.com</p>
          <p>Education : Maters's in Information Technology</p>
          <ul> <h1 className='text-xl font-bold'>Skills</h1>
              <li>React JS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>GIT</li>
              <li>MongoDB</li>
              <li>Node JS</li>
          </ul>
          <h1 className='text-xl font-bold'>Projects</h1>
          <a className='link' href="https://frabjous-taffy-df42a6.netlify.app/"> https://frabjous-taffy-df42a6.netlify.app/</a>
          <a className='link' href=" https://jovial-jennings-d626dc.netlify.app/">  https://jovial-jennings-d626dc.netlify.app/</a>
          <a className='link' href="https://awesome-pasteur-806a7c.netlify.app/"> https://awesome-pasteur-806a7c.netlify.app/</a>
          
        </div>
      </div>
    );
};

export default About;