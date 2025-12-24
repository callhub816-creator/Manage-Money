import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Coins, ChevronDown } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name) => setDropdownOpen(dropdownOpen === name ? '' : name);

  const navigation = [
    { name: 'Home', path: '/' },
    {
      name: 'Products',
      type: 'dropdown',
      items: [
        { name: 'Credit Cards', path: '/credit-cards' },
        { name: 'Personal Loans', path: '/personal-loans' },
        { name: 'CIBIL Score', path: '/cibil-score' },
        { name: 'Insurance', path: '/insurance' },
        { name: 'Investment', path: '/investment' },
      ]
    },
    {
      name: 'Tools',
      type: 'dropdown',
      items: [
        { name: 'EMI Calculator', path: '/emi-calculator' },
        { name: 'SIP Calculator', path: '/sip-calculator' },
        { name: 'FD Calculator', path: '/fd-calculator' },
        { name: 'Documents Required', path: '/documents' },
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about-us' },
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <Coins className="logo-icon" />
          <span>Manage Money</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navigation.map((item) => (
            item.type === 'dropdown' ? (
              <div key={item.name} className="nav-dropdown-container">
                <button className="nav-link dropdown-trigger">
                  {item.name} <ChevronDown size={14} />
                </button>
                <div className="dropdown-menu">
                  {item.items.map((subItem) => (
                    <NavLink key={subItem.name} to={subItem.path} className="dropdown-item">
                      {subItem.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.name}
              </NavLink>
            )
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          {navigation.map((item) => (
            item.type === 'dropdown' ? (
              <div key={item.name} className="mobile-dropdown-group">
                <button
                  className="mobile-nav-link dropdown-toggle"
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name} <ChevronDown size={16} className={`arrow ${dropdownOpen === item.name ? 'rotate' : ''}`} />
                </button>
                {dropdownOpen === item.name && (
                  <div className="mobile-dropdown-items">
                    {item.items.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.path}
                        className="mobile-sub-link"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            )
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
