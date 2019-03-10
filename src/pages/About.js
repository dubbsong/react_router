import React from 'react';

const About = ({match}) => {
  return (
    <div>
      <h2>ABOUT</h2>
      <p>Ssup bro? I'm {match.params.name}</p>
    </div>
  )
}

export default About;