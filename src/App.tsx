import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessFeatures from './components/ProcessFeatures';
import CtaBanner from './components/CtaBanner';
import Testimonials from './components/Testimonials';
import ProductCards from './components/ProductCards';
import TrustIndicators from './components/TrustIndicators';
import Footer from './components/Footer';
import MediaMentions from './components/MediaMentions';
import FAQ from './components/FAQ';
import ArticlePage from './components/article/ArticlePage';
import BookCallModal from './components/BookCallModal';
import QuoteModal from './components/QuoteModal';

// Templates and Data imports
import { infoPages, resourcePages, decoderPages, claimsPages } from './data/pageContent';
import InfoPage from './pages/InfoPage';
import ResourcePage from './pages/ResourcePage';
import DecoderPage from './pages/DecoderPage';
import ClaimsPage from './pages/ClaimsPage';
import BestPlansPage from './pages/BestPlansPage';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [articleTopic, setArticleTopic] = useState<string>('Term Insurance');
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleNavigate = (page: string, topic?: string) => {
    setCurrentPage(page);
    if (topic) setArticleTopic(topic);
    window.scrollTo(0, 0);
  };
  const handleBookCall = () => setIsBookCallOpen(true);
  const handleGetQuote = () => setIsQuoteOpen(true);

  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <main>
          <Hero onBookCall={handleBookCall} onGetQuote={handleGetQuote} />
          <TrustIndicators />
          <ProductCards onGetQuote={handleGetQuote} onLearnMore={() => handleNavigate('compare-health')} />
          <ProcessFeatures onNavigate={() => handleNavigate('expert')} />
          <Testimonials onNavigate={() => handleNavigate('expert')} />
          <CtaBanner onBookCall={handleBookCall} />
          <MediaMentions />
          <FAQ onBookCall={handleBookCall} />
        </main>
      );
    }

    if (currentPage === 'article') {
      return <ArticlePage onBookCall={handleBookCall} onGetQuote={handleGetQuote} topic={articleTopic} />;
    }

    if (currentPage === 'best-plans') {
      return <BestPlansPage onBookCall={handleBookCall} onGetQuote={handleGetQuote} />;
    }

    if (infoPages[currentPage]) {
      return <InfoPage data={infoPages[currentPage]} onBookCall={handleBookCall} onGetQuote={handleGetQuote} />;
    }

    if (resourcePages[currentPage]) {
      return <ResourcePage data={resourcePages[currentPage]} onBookCall={handleBookCall} />;
    }

    if (decoderPages[currentPage]) {
      return <DecoderPage data={decoderPages[currentPage]} onBookCall={handleBookCall} onGetQuote={handleGetQuote} />;
    }

    if (claimsPages[currentPage]) {
      return <ClaimsPage data={claimsPages[currentPage]} onBookCall={handleBookCall} />;
    }

    return (
      <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h2>Page Under Construction</h2>
        <p style={{ margin: '1rem 0 2rem', color: 'var(--text-gray)' }}>We are creating realistic content for this section.</p>
        <button className="btn btn-primary" onClick={() => handleNavigate('home')}>Back to Home</button>
      </div>
    );
  };

  return (
    <div className="app">
      <Header onNavigate={handleNavigate} onBookCall={handleBookCall} />
      
      {renderContent()}
      
      <Footer onBookCall={handleBookCall} />

      <BookCallModal isOpen={isBookCallOpen} onClose={() => setIsBookCallOpen(false)} />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

export default App;
