import FAQAccordionCard from './components/faqAccorionCard';
import FAQs from './utils/faq.json';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-hslSoftViolet to-hslSoftBlue">
      <FAQAccordionCard data={FAQs} />
    </div>
  );
}

export default App;