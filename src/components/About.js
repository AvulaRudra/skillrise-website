import React from 'react';
import bg from '../images/skillrisebg.PNG';
import success from '../images/success.png';

function About() {
  return (
    <section id="about" className="p-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-10 text-blue-600">Discover What We Offer</h2>
        <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-700">
          Skill Rise offers internship courses designed to help bachelor degree students gain practical experience and develop valuable skills. Our programs provide hands-on training and mentorship to prepare students for the workforce.
        </p>
        <img src={bg} alt="About us" className="mx-auto rounded-lg mb-16 shadow-lg transform hover:scale-105 transition-transform duration-300" />

        <div className="text-left max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-blue-600">Vision & Mission</h3>
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-blue-500">Our Vision:</h4>
              <p className="mb-6 text-gray-700 leading-relaxed">
                A future where learning is limitless and accessible to all, highlighting education as essential for unlocking potential. It's aspirational and aligns well with the mission of Skill Rise.
              </p>
              
            </div>
            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-2xl font-semibold mb-4 text-blue-500">Our Mission:</h4>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Skill Rise's mission is to provide a gateway to knowledge and opportunities, supporting personal and professional growth. Our vision is a future where learning is limitless and accessible to all, unlocking potential through quality education.
              </p>
              
            </div>
          </div>

          <h3 className="text-4xl font-bold mt-16 mb-8 text-blue-600">Why Choose Skill Rise</h3>
          <div className="mb-16">
            <h4 className="text-2xl font-semibold mb-4 text-blue-500">Proven Results</h4>
            <p className="mb-6 text-gray-700 leading-relaxed">
              At Skill Rise, we have a track record of success. Our students consistently achieve higher grades and test scores, and many go on to pursue higher education at top universities.
            </p>
            <img src={success} alt="Proven Results" className="mx-auto rounded-lg mb-16 shadow-lg transform hover:scale-105 transition-transform duration-300"  />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;