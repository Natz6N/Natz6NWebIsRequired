import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from '../Icon';

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onToggle, className = '' }) => {
  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <button
        onClick={onToggle}
        className="w-full py-4 px-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

// Main FAQ Component
const FAQ = ({ 
  data = [], 
  title = "Frequently Asked Questions",
  allowMultiple = false,
  className = '',
  itemClassName = ''
}) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      
      if (allowMultiple) {
        // Mode multiple: toggle item yang diklik
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
      } else {
        // Mode single: hanya satu item yang bisa terbuka
        if (newSet.has(index)) {
          newSet.clear();
        } else {
          newSet.clear();
          newSet.add(index);
        }
      }
      
      return newSet;
    });
  };

  return (
    <div className={`max-w-5xl mx-auto ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {title}
        </h2>
      )}
      
      <div className="bg-white rounded-lg overflow-hidden">
        {data.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
            className={itemClassName}
          />
        ))}
      </div>
    </div>
  );
};



export default FAQ;