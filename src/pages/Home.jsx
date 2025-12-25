import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  Calculator,
  BarChart2,
  Banknote,
  FileText,
  Shield,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Manage Money – Smart Financial Tools & Comparisons in India</title>
        <meta
          name="description"
          content="Compare credit cards, personal loans, check CIBIL score, and calculate EMI using simple financial tools in India."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">Manage Your Money Smartly</h1>
            <p className="hero-subtitle">
              The best Indian financial tools and comparisons at your fingertips.
              No clutter, just clear choices.
            </p>

            <div className="hero-cta-group">
              <Link to="/credit-cards">
                <Button variant="primary" className="hero-btn">
                  Find Credit Cards
                </Button>
              </Link>

              <Link to="/cibil-score">
                <Button variant="secondary" className="hero-btn">
                  Check CIBIL Score
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Quick Actions</h2>

          <div className="quick-actions-grid">
            <Link to="/credit-cards" className="card-link">
              <Card className="action-card text-center hover-card">
                <div className="icon-box bg-blue-100">
                  <CreditCard size={32} />
                </div>
                <h3>Credit Cards</h3>
                <p>Compare lifetime free & premium cards.</p>
                <span className="text-link">
                  Explore Cards <ArrowRight size={16} />
                </span>
              </Card>
            </Link>

            <Link to="/emi-calculator" className="card-link">
              <Card className="action-card text-center hover-card">
                <div className="icon-box bg-green-100">
                  <Calculator size={32} />
                </div>
                <h3>Calculators</h3>
                <p>EMI, SIP, FD and savings tools.</p>
                <span className="text-link">
                  Use Calculators <ArrowRight size={16} />
                </span>
              </Card>
            </Link>

            <Link to="/cibil-score" className="card-link">
              <Card className="action-card text-center hover-card">
                <div className="icon-box bg-purple-100">
                  <BarChart2 size={32} />
                </div>
                <h3>CIBIL Score</h3>
                <p>Check and improve your credit score.</p>
                <span className="text-link">
                  Check Score <ArrowRight size={16} />
                </span>
              </Card>
            </Link>

            <Link to="/personal-loans" className="card-link">
              <Card className="action-card text-center hover-card">
                <div className="icon-box bg-orange-100">
                  <Banknote size={32} />
                </div>
                <h3>Personal Loans</h3>
                <p>Compare rates & apply online.</p>
                <span className="text-link">
                  View Loans <ArrowRight size={16} />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPLORE FINANCE */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Explore Finance</h2>

          <div className="explore-grid">
            <Link to="/documents" className="card-link">
              <Card className="explore-card">
                <div className="flex-row-center">
                  <FileText size={40} className="mr-4" />
                  <div>
                    <h3>Documents Required</h3>
                    <p>Checklists for loans provided.</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/insurance" className="card-link">
              <Card className="explore-card">
                <div className="flex-row-center">
                  <Shield size={40} className="mr-4" />
                  <div>
                    <h3>Insurance</h3>
                    <p>Protect your health and assets.</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/investment" className="card-link">
              <Card className="explore-card">
                <div className="flex-row-center">
                  <TrendingUp size={40} className="mr-4" />
                  <div>
                    <h3>Investment</h3>
                    <p>Grow your wealth with SIP & FDs.</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
