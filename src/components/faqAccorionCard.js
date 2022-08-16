import iconDown from '../assets/icon-arrow-down.svg';
import womanOnlineDesktop from '../assets/illustration-woman-online-desktop.svg';
import womanOnlineMobile from '../assets/illustration-woman-online-mobile.svg';
import bgPatternDesktop from '../assets/bg-pattern-desktop.svg';
import bgPatternMobile from '../assets/bg-pattern-mobile.svg';

export default function FAQAccordionCard({ data }) {
  return (
    <section className="bg-white w-[375px] md:w-[500px] rounded-3xl px-6 mt-[125px] mb-2">
      
      <div className="bg-top bg-no-repeat md:hidden" style={{ backgroundImage: `url(${bgPatternMobile})` }}>
        <img className="relative -top-[115px] left-10 w-[250px]" src={womanOnlineMobile} alt="" />
      </div>
      

      
      <h1 className="text-4xl font-bold uppercase text-center">FAQ</h1>
      <div className="mb-12">
        {data.map((faq, index) => (
          <details className="border-b border-hslLightGrayishBlue py-3 open:font-bold" key={index}>
            <summary className="list-none flex justify-between items-center">
              <span className="block">{faq.question}</span>
              <img className="inline-block" src={iconDown} alt="open" />
            </summary>
            <span className="text-hslDarkGrayishBlue font-normal block pt-3">{faq.answer}</span>
          </details>
        ))}
        
      </div>
    </section>
  );
}