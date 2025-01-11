import React from 'react';
import FaqAccordion from './FaqAccordion';
import "./faq.css"

const Faq = () => {
  const faqs = [
      {
        title: 'Вопрос 1',
        content:
          'А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми.',
      },
      {
        title: 'Вопрос 2',
        content:
          'А это ответ 2: в комплексе функционируют 6 школ с площадками, воспитателями и всякими другими людьми.',
      },
        {
          title: 'Вопрос 3',
          content:
            'А это ответ 3: в комплексе функционируют 6 технарей с площадками, воспитателями и всякими другими людьми.',
        },
       
    ];

  return (
    <div  className="faq-container">
      <FaqAccordion faqs={faqs} />
    </div>
  );
};

export default Faq;