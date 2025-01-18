import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-600">About Us</h1>
      <div className="mt-6 text-gray-700 max-w-3xl mx-auto text-center space-y-6">
        <p>
          At <span className="font-semibold text-blue-600">HealthCare Hospital</span>, we are dedicated to providing exceptional medical care with 
          compassion and innovation. With a team of world-class doctors, state-of-the-art technology, 
          and patient-centric services, we ensure that you receive the best treatment in a safe and 
          caring environment.
        </p>
        <p>
          Our hospital is equipped with **cutting-edge medical facilities**, specialized departments, and 
          advanced diagnostic services. Whether it’s routine check-ups, emergency care, or specialized 
          treatments, we strive to offer **holistic healthcare solutions** tailored to your needs.
        </p>
        <p>
          With a legacy of trust and excellence, **HealthCare Hospital** continues to redefine healthcare 
          standards. Our commitment to **patient safety, innovation, and medical expertise** makes us 
          a preferred choice for individuals and families seeking high-quality healthcare services.
        </p>
      </div>
    </div>
  );
};

export default About;
