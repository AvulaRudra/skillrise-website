import React from 'react';
import carrer from '../images/carrer.png';
import cad from '../images/cad.png';
import online from '../images/online.jpg';
import machine from '../images/machine.JPG';
import web from '../images/web.JPG';
import finance from '../images/finance.jpg';

function Services() {
  const services = [
    { title: 'Career Counseling', 
      description: 'Guidance for your career path.', 
      moreInfo: 'Our career counseling service provides professional guidance to help you explore career options, set goals, and make informed decisions. Whether you are a student planning your future or a professional seeking a career change, our experienced counselors offer valuable insights and resources to empower you. From resume building to interview preparation, we equip you with the tools to thrive in your chosen field. Connect with us to turn your aspirations into reality.', 
      img: carrer },
    { title: 'Online Tutorials ', 
      description: 'Live and Recorded Sessions.', 
      moreInfo: 'Our online tutoring service offers interactive sessions tailored to your learning style. Whether you need help with homework, exam preparation, or understanding complex concepts, our tutors are here to support you every step of the way. With flexible scheduling and one-on-one attention, you can boost your academic performance and confidence in no time. Connect with us to unlock your full potential.', 
      img: online },
    { title: 'Machine Learning', 
      description: 'Learn about Machine Learning Algorithms and Models.', 
      moreInfo: 'Machine Learning (ML) is a subset of artificial intelligence (AI) that focuses on enabling machines to learn from data and improve their performance over time without being explicitly programmed. It involves developing algorithms and statistical models that allow computers to recognize patterns, make decisions, and predictions based on data.', 
      img: machine },
    { title: 'Web Development', 
      description: 'Full Stack Web Development Training.', 
      moreInfo: 'This course helps you understand common concepts related to full stack development. You’ll work with HTML, CSS, JavaScript, and the Django web framework. By the end of the course, you’ll be able to build a full stack application that stores data in a MySQL database and communicates via API endpoints', 
      img: web },
    { title: 'Finance', 
      description: 'Everything from managing personal budgets to making strategic decisions.', 
      moreInfo: 'finance is a dynamic field, so staying updated with industry trends and continuously learning is crucial. Whether you’re interested in corporate finance, investment management, or personal finance, there’s a course out there for you.', 
      img: finance },
    { title: 'AutoCAD', 
      description: 'These program is designed to help you master AutoCAD.', 
      moreInfo: 'AutoCAD courses for both beginners and professionals. These courses cover industrial design, engineering, and architecture. Whether you’re starting from scratch or want to deepen your knowledge.', 
      img: cad }
    
  ];

  return (
    <section id="services" className="p-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 text-blue-600">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 duration-300 ease-in-out flex flex-col"
              style={{ minHeight: '450px', position: 'relative' }}
            >
              <div className="flex-grow-0 flex-shrink-0" style={{ height: '60%' }}>
                <img src={service.img} alt={service.title} className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between relative">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                </div>
                <div className="relative group">
                  <button className="absolute bottom-4 right-4 text-blue-600 hover:text-blue-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600">
                    See More
                  </button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-72 bg-white shadow-xl rounded-lg p-4 hidden group-hover:block z-10">
                    <h4 className="text-xl font-bold mb-2 text-blue-500">{service.title}</h4>
                    <p className="text-gray-700">{service.moreInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;