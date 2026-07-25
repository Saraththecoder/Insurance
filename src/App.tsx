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

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'article'>('home');
  const [articleTopic, setArticleTopic] = useState<string>('Term Insurance');
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleNavigate = (page: 'home' | 'article', topic?: string) => {
    setCurrentPage(page);
    if (topic) setArticleTopic(topic);
  };
  const handleBookCall = () => setIsBookCallOpen(true);
  const handleGetQuote = () => setIsQuoteOpen(true);

  return (
    <div className="app">
      <Header onNavigate={handleNavigate} onBookCall={handleBookCall} />
      
      {currentPage === 'home' ? (
        <main>
          <Hero onBookCall={handleBookCall} onGetQuote={handleGetQuote} />
          <TrustIndicators />
          <ProductCards onGetQuote={handleGetQuote} onLearnMore={() => handleNavigate('article')} />
          <ProcessFeatures onNavigate={() => handleNavigate('article')} />
          <Testimonials onNavigate={() => handleNavigate('article')} />
          <CtaBanner onBookCall={handleBookCall} />
          <MediaMentions />
          <FAQ onBookCall={handleBookCall} />
        </main>
      ) : (
        <ArticlePage onBookCall={handleBookCall} onGetQuote={handleGetQuote} topic={articleTopic} />
      )}
      
      <Footer onBookCall={handleBookCall} />

      <BookCallModal isOpen={isBookCallOpen} onClose={() => setIsBookCallOpen(false)} />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

export default App;
