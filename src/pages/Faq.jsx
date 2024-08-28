import React from 'react';
import Accordion from '../components/Faq/FaqAccordion'

const Faq = () => {

  return (
    <>
    <div className='page-container'>
        <div className='Faqfont'>
          <h1>Things to Consider Before Adopting a Pet</h1>
          <div>
          Adopting a pet is a responsibility and commitment that shouldn't be taken lightly. Here are some things to consider before bringing a new furry friend home.
          </div>
        </div>
        <section className='page-container2'><Accordion /></section>
        <section className='page-container'>
          <h1 className='Faqfont'>
          Where to find us
          </h1>
        </section>
    </div> 
    
    </>
  );
};

export default Faq