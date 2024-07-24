import React from 'react';
import carrer from '../images/carrer.png';
import cad from '../images/cad.png';
import online from '../images/online.jpg';
import machine from '../images/machine.JPG';
import web from '../images/web.JPG';
import finance from '../images/finance.jpg';
import ds from '../images/ds.png';
import ai from '../images/ai.jpg';
import security from '../images/security.jpg';
import cloud from '../images/cloud.jpg';
import mongodb from '../images/mongodb.png';
import mongodbnode from '../images/mongodbnode.jpg';
import react from '../images/react.jpg';
import azure from '../images/azure.png';
import bigdata from '../images/bigdata.jpg';
import uiux from '../images/uiux.jpg';
import mysql from '../images/mysql.jpg';


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
      img: cad },
    
    { 
      title: 'Data Science', 
      description: 'Master data collection, preprocessing, and modeling techniques.', 
      moreInfo: `Our Data Science course covers everything from data collection and preprocessing to exploratory data analysis and modeling. You'll learn how to use tools like Pandas for data manipulation, create visualizations to identify patterns, and implement machine learning algorithms for predictive modeling. This course is designed to help you make data-driven decisions and effectively communicate your findings through visualizations and reports.`, 
      img: ds 
    },
    { 
      title: 'Artificial Intelligence', 
      description: 'Explore the world of AI, from machine learning to computer vision.', 
      moreInfo: `Our Artificial Intelligence course delves into the foundational concepts of AI, including machine learning, natural language processing, and computer vision. You'll learn about the history and evolution of AI, key algorithms, and their applications in various domains. This course also addresses the ethical implications of AI, ensuring you understand both the technical and societal impacts of this transformative technology.`, 
      img: ai 
    },
    { 
      title: 'Cybersecurity', 
      description: 'Protect systems and data from cyber threats.', 
      moreInfo: `Our Cybersecurity course covers the essentials of protecting networks, systems, and data from cyber attacks. You'll learn about common threats and vulnerabilities, security technologies, and best practices for securing applications and networks. This course is designed to help you develop the skills needed to identify, prevent, and respond to cybersecurity incidents effectively.`, 
      img: security 
    },
    { 
      title: 'Cloud Computing with AWS', 
      description: 'Learn cloud infrastructure and services with AWS.', 
      moreInfo: `Our Cloud Computing with AWS course provides an in-depth understanding of cloud infrastructure and services offered by Amazon Web Services. You'll learn how to deploy and manage applications in the cloud, understand various AWS services, and implement security best practices. This course is ideal for anyone looking to leverage cloud technologies for scalable and reliable applications.`, 
      img: cloud 
    },
    { 
      title: 'MongoDB with Django', 
      description: 'Integrate MongoDB with Django for powerful web applications.', 
      moreInfo: `Our MongoDB with Django course teaches you how to use MongoDB as a database for Django applications. You'll learn about setting up the environment, modeling data, and performing CRUD operations. This course emphasizes the benefits of using MongoDB with Django for building scalable and high-performance web applications.`, 
      img: mongodb 
    },
    { 
      title: 'MongoDB with Node.js', 
      description: 'Build modern applications with MongoDB and Node.js.', 
      moreInfo: `Our MongoDB with Node.js course covers the integration of MongoDB with Node.js for building modern web applications. You'll learn how to set up the environment, connect to MongoDB, and perform CRUD operations. This course also covers advanced features and best practices for optimizing performance and security.`, 
      img: mongodbnode
    },
    { 
      title: 'MySQL with Spring Boot', 
      description: 'Develop robust applications with MySQL and Spring Boot.', 
      moreInfo: `Our MySQL with Spring Boot course provides a comprehensive guide to developing applications using Spring Boot and MySQL. You'll learn how to set up the environment, create entities and repositories, and implement CRUD operations. This course emphasizes best practices for using MySQL with Spring Boot to build robust and scalable applications.`, 
      img: mysql 
    },
    { 
      title: 'ReactJS', 
      description: 'Create dynamic user interfaces with ReactJS.', 
      moreInfo: `Our ReactJS course teaches you how to build dynamic and interactive user interfaces using React. You'll learn about components, state management, and routing, as well as how to integrate React with other libraries and frameworks. This course is designed to help you create modern web applications with a strong focus on performance and usability.`, 
      img: react 
    },
    { 
      title: 'Microsoft Azure Cloud Computing', 
      description: 'Master cloud services and infrastructure with Azure.', 
      moreInfo: `Our Microsoft Azure Cloud Computing course provides an in-depth understanding of cloud services and infrastructure offered by Microsoft Azure. You'll learn about compute services, storage solutions, networking, and security best practices. This course is ideal for anyone looking to leverage Azure for deploying and managing cloud-based applications.`, 
      img: azure 
    },
    { 
      title: 'Big Data', 
      description: 'Harness the power of big data technologies.', 
      moreInfo: `Our Big Data course covers the essential technologies and tools for managing and analyzing large datasets. You'll learn about Hadoop, Spark, NoSQL databases, and data processing techniques. This course is designed to help you understand the challenges and best practices for implementing big data solutions in various industries.`, 
      img: bigdata 
    },
    { 
      title: 'UI/UX Design', 
      description: 'Create engaging user experiences with UI/UX design.', 
      moreInfo: `Our UI/UX Design course teaches you the principles of user research, information architecture, wireframing, and visual design. You'll learn how to create user personas, design prototypes, and conduct usability testing to improve the user experience. This course is ideal for anyone looking to create engaging and effective user interfaces.`, 
      img: uiux 
    }
    
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