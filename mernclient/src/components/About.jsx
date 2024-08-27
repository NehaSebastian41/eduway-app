import React from 'react';
import './About.css';  // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container my-12"  >
      <h1 className="about-title text bg-blue-200" >About EduWay</h1>
      <p className="about-description">
        Welcome  to  EduWay! Our platform is dedicated to helping students find, join, and manage study groups with ease. Whether you're looking for peers to collaborate on projects, prepare for exams, or share knowledge, Study Group Finder connects you with the right people.
      </p>
      
      <h2 className="about-subtitle text bg-blue-200" >Our Mission</h2>
      <p className="about-text">
        Our mission is to foster collaborative learning and peer support among students. We believe that studying together enhances understanding, boosts motivation, and leads to better academic outcomes.
      </p>
      
      <h2 className="about-subtitle text bg-blue-200">Features</h2>
      <ul className="about-list">
        <li className="about-list-item"><strong>Find Study Groups:</strong> Search and filter study groups based on subjects, topics, or interests.</li>
        <li className="about-list-item"><strong>Create Groups:</strong> Start your own study group and invite peers to join.</li>
        <li className="about-list-item"><strong>Join Groups:</strong> Join existing study groups that match your academic needs and interests.</li>
        <li className="about-list-item"><strong>Manage Groups:</strong> As a group admin, you can manage members, schedule meetings, and set study goals.</li>
        <li className="about-list-item"><strong>User and Admin Roles:</strong> Distinct functionalities for regular users and administrators to enhance the group management experience.</li>
        <li className="about-list-item"><strong>Notifications:</strong> Stay updated with group activities, meeting schedules, and announcements.</li>
      </ul>
      
      <h2 className="about-subtitle text bg-blue-200">Why Use Study Group Finder?</h2>
      <p className="about-text">
        Whether you're a student looking to connect with others for collaborative learning or a teacher aiming to facilitate group study sessions, Study Group Finder provides the tools and community you need to succeed. Our platform is designed to be intuitive and user-friendly, ensuring that you can focus on what matters most - learning and growing together.
      </p>

      <h2 className="about-subtitle text bg-blue-200 rounded">Get Started</h2>
      <p className="about-text">
        Ready to enhance your learning experience? Sign up today and find your perfect study group!
      </p>
    </div>
  );
};

export default About;
