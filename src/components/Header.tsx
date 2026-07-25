import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  onNavigate?: (page: 'home' | 'article', topic?: string) => void;
  onBookCall?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onBookCall }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubOptionClick = (e: React.MouseEvent, topic: string = 'Term Insurance') => {
    e.preventDefault();
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    if (onNavigate) onNavigate('article', topic);
  };

  return (
    <>
      <header className="header" onMouseLeave={() => setActiveDropdown(null)}>
        <div className="container header-container" style={{position: 'relative'}}>
          <div className="header-left">
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
            <a href="/" className="logo" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); if(onNavigate) onNavigate('home'); }}>
              <span className="logo-text">
                <span className="logo-accent"></span>
                shiva insurance
              </span>
            </a>
            <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              <ul className="nav-links">
                <li 
                  onMouseEnter={() => setActiveDropdown('term')}
                  className={activeDropdown === 'term' ? 'active-nav-item' : ''}
                >
                  <a href="#term" onClick={(e) => { e.preventDefault(); setActiveDropdown(activeDropdown === 'term' ? null : 'term'); }}>Term <span className="dropdown-arrow"></span></a>
                  {activeDropdown === 'term' && (
                    <div className="mega-menu" style={{ width: '800px', left: '-50px' }}>
                      <div className="mega-menu-grid">
                        <div>
                          <h3 className="mega-menu-title">Start Your Journey</h3>
                          <div className="mega-menu-item" onClick={(e) => handleSubOptionClick(e, 'Term Insurance')} style={{cursor: 'pointer'}}>
                            <h4>Know Term Insurance</h4>
                            <p>Know term insurance like a pro. Avoid surprises.</p>
                          </div>
                          <div className="mega-menu-item" onClick={(e) => handleSubOptionClick(e, 'Term Insurance')} style={{cursor: 'pointer'}}>
                            <h4>Compare Term Insurance</h4>
                            <p>Top plans reviewed for benefits, T&Cs, service experience & claims.</p>
                          </div>
                          <div className="mega-menu-item" onClick={(e) => handleSubOptionClick(e, 'Term Insurance')} style={{cursor: 'pointer'}}>
                            <h4>Find Best Term Plans</h4>
                            <p>End of confusion. Find the term plan that matches your needs. In 3 min.</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="mega-menu-title">Resources & Guides</h3>
                          <ul className="mega-menu-links">
                            <li><a href="#articles" onClick={handleSubOptionClick}>Articles (50+)</a></li>
                            <li><a href="#videos" onClick={handleSubOptionClick}>Videos (50+)</a></li>
                            <li><a href="#video-guides" onClick={handleSubOptionClick}>Video Guides (50+)</a></li>
                            <li><a href="#ebook" onClick={handleSubOptionClick}>Download Term eBook</a></li>
                            <li><a href="#expert" onClick={handleSubOptionClick}>Ask an Expert (500+)</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                <li 
                  onMouseEnter={() => setActiveDropdown('health')}
                  className={activeDropdown === 'health' ? 'active-nav-item' : ''}
                >
                  <a href="#health" onClick={(e) => { e.preventDefault(); setActiveDropdown(activeDropdown === 'health' ? null : 'health'); }}>Health <span className="dropdown-arrow"></span></a>
                  {activeDropdown === 'health' && (
                    <div className="mega-menu" style={{ width: '800px', left: '-50px' }}>
                      <div className="mega-menu-grid">
                        <div>
                          <h3 className="mega-menu-title">Start Your Journey</h3>
                          <div className="mega-menu-item" onClick={(e) => handleSubOptionClick(e, 'Health Insurance')} style={{cursor: 'pointer'}}>
                            <h4>Know Health Insurance</h4>
                            <p>Know health insurance like a pro. Avoid surprises.</p>
                          </div>
                          <div className="mega-menu-item" onClick={(e) => handleSubOptionClick(e, 'Health Insurance')} style={{cursor: 'pointer'}}>
                            <h4>Compare Health Insurance</h4>
                            <p>Top plans reviewed for benefits, T&Cs, service experience & claims.</p>
                          </div>
                          <div className="mega-menu-item" onClick={(e) => handleSubOptionClick(e, 'Health Insurance')} style={{cursor: 'pointer'}}>
                            <h4>Find Best Health Plans</h4>
                            <p>End of confusion. Find health insurance that matches your needs. In 3 min.</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="mega-menu-title">Resources & Guides</h3>
                          <ul className="mega-menu-links">
                            <li><a href="#articles" onClick={handleSubOptionClick}>Articles (50+)</a></li>
                            <li><a href="#videos" onClick={handleSubOptionClick}>Videos (50+)</a></li>
                            <li><a href="#ebook" onClick={handleSubOptionClick}>Critical Illness eBook</a></li>
                            <li><a href="#expert" onClick={handleSubOptionClick}>Ask an Expert (500+)</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                
                <li><a href="#best-plans" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('article', 'Term Insurance'); }}>Best Plans</a></li>
                
                <li 
                  onMouseEnter={() => setActiveDropdown('decode')}
                  className={activeDropdown === 'decode' ? 'active-nav-item' : ''}
                  style={{ position: 'static' }}
                >
                  <a href="#decode-plans" onClick={(e) => { e.preventDefault(); setActiveDropdown(activeDropdown === 'decode' ? null : 'decode'); }}>Decode Plans <span className="dropdown-arrow"></span></a>
                  {activeDropdown === 'decode' && (
                    <div className="mega-menu" style={{ width: '900px', left: '50%', transform: 'translateX(-50%)' }}>
                      <div className="mega-menu-grid">
                        <div>
                          <h3 className="mega-menu-title">Health Insurance Decoder</h3>
                          <ul className="decoder-list">
                            <li><span className="brand-placeholder" style={{backgroundColor: '#eab308'}}>care</span> Care Insurance Ultimate Care + Key Add-ons</li>
                            <li><span className="brand-placeholder" style={{backgroundColor: '#dc2626', color: 'white'}}>HDFC ERGO</span> HDFC Ergo Optima Secure + Key Add-ons</li>
                            <li><span className="brand-placeholder" style={{backgroundColor: '#1d4ed8', color: 'white'}}>TATA AIG</span> Tata AIG MediCare Premier + Key Add-ons</li>
                            <li><span className="brand-placeholder" style={{backgroundColor: '#38bdf8'}}>niva</span> Niva Bupa Aspire (Titanium+) + Key Add-ons</li>
                            <li><span className="brand-placeholder" style={{backgroundColor: '#3b82f6', color: 'white'}}>STAR</span> Star Health Super Star + Key Add-ons</li>
                            <li><span className="brand-placeholder" style={{backgroundColor: '#2dd4bf'}}>zuno</span> Zuno Health Insurance (Gold)</li>
                          </ul>
                          <button className="btn-view-all" onClick={(e) => handleSubOptionClick(e, 'Health Insurance')}>View All <span style={{marginLeft: '4px'}}>→</span></button>
                        </div>
                        <div>
                          <h3 className="mega-menu-title">Savings Plan Decoder</h3>
                          <ul className="decoder-list">
                            <li><span className="brand-placeholder" style={{backgroundColor: '#eab308'}}>LIC</span> LIC Bima Jyoti</li>
                            <li><span className="brand-placeholder" style={{backgroundColor: '#dc2626', color: 'white'}}>HDFC Life</span> HDFC Life Sanchay Fixed Maturity</li>
                            <li><span className="brand-placeholder" style={{backgroundColor: '#1d4ed8', color: 'white'}}>BAJAJ</span> Bajaj Life Goal Suraksha</li>
                            <li><span className="brand-placeholder" style={{backgroundColor: '#38bdf8'}}>SBI Life</span> SBI Life Smart Platina Assure</li>
                            <li><span className="brand-placeholder" style={{backgroundColor: '#dc2626', color: 'white'}}>ABSLI</span> ABSLI Assured Savings</li>
                            <li><span className="brand-placeholder" style={{backgroundColor: '#1d4ed8', color: 'white'}}>TATA AIA</span> TATA AIA Diamond Savings Plan</li>
                          </ul>
                          <button className="btn-view-all" onClick={(e) => handleSubOptionClick(e, 'Savings Plan')}>View All <span style={{marginLeft: '4px'}}>→</span></button>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                <li 
                  onMouseEnter={() => setActiveDropdown('claims')}
                  className={activeDropdown === 'claims' ? 'active-nav-item' : ''}
                  style={{ position: 'relative' }}
                >
                  <a href="#claims" onClick={(e) => { e.preventDefault(); setActiveDropdown(activeDropdown === 'claims' ? null : 'claims'); }}>Claims <span className="dropdown-arrow"></span></a>
                  {activeDropdown === 'claims' && (
                    <div className="mega-menu small-dropdown" style={{ right: 0, left: 'auto', transform: 'none' }}>
                      <div className="dropdown-section">
                        <h4 className="dropdown-heading">New to Shiva Insurance?</h4>
                        <a href="#understand" className="dropdown-link-item" onClick={handleSubOptionClick}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="10" cy="13" r="2"></circle><path d="M10 15v1"></path></svg>
                          Understand the Claim Process
                        </a>
                      </div>
                      <div className="dropdown-divider"></div>
                      <div className="dropdown-section">
                        <h4 className="dropdown-heading">Existing User?</h4>
                        <a href="#intimate" className="dropdown-link-item" onClick={handleSubOptionClick}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                          Intimate a Claim
                        </a>
                        <a href="#support" className="dropdown-link-item" onClick={handleSubOptionClick}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                          Support/Escalations
                        </a>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-right">
            <div className="search-bar" onClick={() => setIsSearchOpen(true)} style={{cursor: 'pointer'}}>
              <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="Search..." readOnly style={{cursor: 'pointer'}} />
            </div>
            
            <div className="divider"></div>
            
            <a href="#help" className="help-link" onClick={(e) => { e.preventDefault(); if (onBookCall) onBookCall(); }}>Need Help <span className="dropdown-arrow"></span></a>
            <a href="#account" className="account-link" onClick={(e) => { e.preventDefault(); alert('My Account coming soon!'); }}>My Account</a>
            
            <button className="btn btn-purple book-call-btn" onClick={onBookCall}>
              <svg className="book-call-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
              <span className="book-call-text">Book Call with Expert</span>
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className="search-modal-overlay" onClick={() => setIsSearchOpen(false)}>
          <div className="search-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setIsSearchOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <h2 className="search-modal-title">Get instant answers to your insurance queries</h2>
            
            <div className="search-modal-input-wrapper">
              <svg className="search-modal-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="Get instant answers to your insurance queries" autoFocus />
            </div>
            
            <div className="search-modal-content">
              <div className="search-categories">
                <h3>Top Categories</h3>
                <ul>
                  <li><a href="#term-life" onClick={(e) => { setIsSearchOpen(false); handleSubOptionClick(e); }}># Term Life Insurance</a></li>
                  <li><a href="#health-insurance" onClick={(e) => { setIsSearchOpen(false); handleSubOptionClick(e); }}># Health Insurance</a></li>
                  <li><a href="#parents-health" onClick={(e) => { setIsSearchOpen(false); handleSubOptionClick(e); }}># Parent's Health</a></li>
                </ul>
              </div>
              <div className="search-illustration">
                <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Search Illustration" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
