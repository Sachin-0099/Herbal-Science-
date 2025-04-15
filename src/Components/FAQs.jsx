import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <button className="text-gray-600 focus:outline-none">
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && <div className="mt-2 text-gray-700">{answer}</div>}
    </div>
  );
};

const FAQsSection = () => {
  const faqsData = [
    {
      question: "There are no suitable jobs on Tradeling's job portal. Can I still send my CV?",
      answer: "While we encourage you to regularly check our job portal for the latest openings, you are welcome to send your CV to our careers email address. Our recruitment team will review your profile and keep it on file for future opportunities that align with your skills and experience."
    },
    {
      question: "What happens to my job application once I've applied?",
      answer: "Once you submit your application, our recruitment team will carefully review it. If your profile matches the requirements of the role, you will be contacted for the next steps in the recruitment process, which may include an initial screening call, interviews, and assessments. We strive to keep all applicants informed of their application status, although the volume of applications may sometimes cause delays."
    },
    {
      question: "What is the interview like?",
      answer: "Our interview process typically involves one or more stages, depending on the role. You can expect to meet with members of our recruitment team and the hiring manager. The interviews will focus on understanding your experience, skills, and cultural fit with Tradeling. We may also include technical questions or case studies relevant to the position you've applied for. We aim to create a comfortable and engaging environment for you to showcase your abilities."
    },
    // Add more FAQ items here if needed
  ];

  return (
    <div className="bg-white py-12 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">FAQ's</h2>
        <p className="text-gray-600 mb-8">A section dedicated to addressing common queries about the recruitment process, company benefits, and more.</p>
        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold py-3 mt-2 px-6 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300">
           Explore all 
          </button>
      </div>
    </div>
  );
};

export default FAQsSection;