import React, { useState } from 'react'
import { LuPlus } from "react-icons/lu";



const Questions = [
    {
        question: "What is this platform about?",
        answer: "Our platform connects you with reliable local laundry shops, making it easy to schedule pickups, drop-offs, and deliveries—all in one place."
    },
    {
        question: "How do I book a laundry service?",
        answer: "Simply sign up, choose a laundry shop near you, select the type of service you need, and schedule a pickup or drop-off time."
    },
    {
        question: "Are the laundry shops verified?",
        answer: "Yes, all shops on our platform go through a verification process to ensure reliability and quality service."
    },
    {
        question: "Is payment done online or in person?",
        answer: "You can pay securely online or opt to pay in person, depending on what the laundry shop accepts."
    },
    {
        question: "How can I list my laundry shop on the platform?",
        answer: "Click on “Get Started” and fill out the registration form. Once approved, you’ll be able to start receiving customer orders."
    },
    {
        question: "Is there a fee to join?",
        answer: "We offer flexible plans, including a free tier to get started. Premium features may come with a small commission or subscription fee."
    },
    {
        question: "How do I manage my orders?",
        answer: "You’ll have access to a vendor dashboard where you can accept orders, update statuses, manage pricing, and communicate with customers."
    },
    {
        question: "How are payments handled?",
        answer: "Payments from customers can be processed through the platform and will be deposited into your account based on the chosen payment method and schedule."
    },
]

// FAQ Item Component
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };
  
    // Create a unique ID for accessibility (use question as base, sanitized)
    const answerId = `faq-answer-${question.toLowerCase().replace(/\s+/g, '-')}`;
  
    return (
      <div className="bg-[#d6f8f3]/90 rounded-xl">
        <div className="p-3 md:p-5 xl:px-[50px] xl:py-[22px] flex justify-between items-center">
          <p className="text-[15px] md:text-[24px] font-semibold">{question}</p>
          <button
            onClick={toggleAnswer}
            className="bg-[#1fd9ba] w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-xl flex items-center justify-center cursor-pointer transition-transform duration-200"
            aria-expanded={isOpen}
            aria-controls={answerId}
            type="button"
          >
            <span
              className={`text-white text-xl md:text-2xl transition-transform duration-200 ${
                isOpen ? 'rotate-45' : 'rotate-0'
              }`}
            >
              <LuPlus />
            </span>
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          id={answerId}
        >
          <p className="py-1 px-3 md:p-5 xl:px-[50px] xl:py-[22px] text-[16px] md:text-[24px] font-medium">
            {answer}
          </p>
        </div>
      </div>
    );
  }
const FAQs = () => {
  return (
    <>
        <div className='px-[20px] py-[30px] md:px-[70px] md:py-[50px] xl:px-[200px] xl:py-[100px]'>
            <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-8 md:leading-14">
                Frequently Asked Question
            </h2>
            <div className="pt-[30px] flex flex-col gap-5 md:gap-8">
                {Questions.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div> 
        </div>
    </>
  )
}

export default FAQs