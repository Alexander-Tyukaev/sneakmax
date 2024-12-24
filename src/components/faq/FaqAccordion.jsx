import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './FaqAccordion.css';
import { v4 as uuidv4 } from 'uuid';

const FaqAccordion = ({ faqs }) => {
    return (
        <div className="faq-accordion-container">
            <h1>Часто задаваемые вопросы</h1>
            <Accordion allowMultipleExpanded={true}>
                {faqs.map((faq) => (
                    <AccordionItem key={uuidv4()} uuid={uuidv4()}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {faq.title}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>{faq.content}</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FaqAccordion;