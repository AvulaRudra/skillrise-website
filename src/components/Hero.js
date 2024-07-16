import React from 'react';
import bg from '../images/homebg.png';

function Hero() {
  return (
    <section id="home" className="bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage:`url(${bg})`  }}>
      <div className="text-center p-8 bg-black bg-opacity-50 rounded">
        <h1 className="text-4xl md:text-6xl font-bold">Unlock Your Potential with Online Learning</h1>
        <p className="mt-4 text-xl md:text-2xl">Explore a world of knowledge with Skill Rise's online courses.</p>
        {/* <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button> */}
      </div>
    </section>
  );
}

export default Hero;
