import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CreditCard,
  CheckCircle,
  Gift,
  Briefcase,
  GraduationCap,
  Shield,
  ThumbsUp,
  Wallet,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/forms/Input';
import '../styles/CreditCards.css';

/* =========================
   AFFILIATE LINKS (FINAL)
========================= */

// SBI
const SBI_PRIMARY = 'https://bitli.in/4Jq0GyV';
const SBI_ELIGIBILITY = 'https://bitli.in/H8oN9r9';

// Axis
const AXIS_PRIMARY = 'https://bitli.in/epvbU3q';
const AXIS_ELIGIBILITY = 'https://bitli.in/kyj7B7A';

// HDFC
const HDFC_PRIMARY = 'https://bitli.in/9IgujoE';
const HDFC_ELIGIBILITY = 'https://bitli.in/hfnHkh0';

const CreditCards = () => {
  return (
    <>
      <Helmet>
        <title>Best Credit Cards in India (2026) | Compare & Apply</title>
        <meta
          name="description"
          content="Compare best credit cards in India. Apply for SBI, Axis & HDFC credit cards. Check eligibility, cashback benefits and rewards."
        />
      </Helmet>

      {/* SECTION 1: INTRO */}
      <section className="section bg-light pb-0">
        <div className="container text-center">
          <h1 className="page-title">
            <CreditCard className="inline-icon" /> Credit Cards – Compare & Apply
          </h1>
          <p className="page-subtitle">
            Compare the best credit cards in India based on cashback, rewards,
            eligibility and income. Apply online in minutes.
          </p>
        </div>
      </section>

      {/* SECTION 2: CATEGORIES (NO AFFILIATE) */}
      <section className="section pt-0">
        <div className="container">
          <h2 className="section-title text-center mb-8">Choose by Category</h2>
          <div className="cards-grid">
            <Card title="Best Credit Cards">
              <CheckCircle size={36} />
              <p>Top cashback & rewards credit cards.</p>
              <Button href="/credit-cards/best-credit-cards" fullWidth>
                View Cards
              </Button>
            </Card>

            <Card title="Lifetime Free Cards">
              <Gift size={36} />
              <p>No joining or annual fees.</p>
              <Button href="/credit-cards/lifetime-free-credit-cards" fullWidth>
                View Free Cards
              </Button>
            </Card>

            <Card title="Salary Based Cards">
              <Briefcase size={36} />
              <p>Cards based on monthly income.</p>
              <Button href="/credit-cards/salary-based-credit-cards" fullWidth>
                Check Eligibility
              </Button>
            </Card>

            <Card title="Student / Beginner">
              <GraduationCap size={36} />
              <p>Start building your credit score.</p>
              <Button href="/credit-cards/student-credit-cards" fullWidth>
                Explore Cards
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CREDIT CARD */}
      <section className="section bg-white">
        <div className="container">
          <Card>
            <h2 className="text-center mb-6">Why Choose a Credit Card?</h2>
            <div className="benefits-grid">
              <div><Wallet /> Cashless payments</div>
              <div><Gift /> Cashback & rewards</div>
              <div><ThumbsUp /> Builds CIBIL score</div>
              <div><Shield /> Emergency support</div>
            </div>
          </Card>
        </div>
      </section>

      {/* SECTION 4: ELIGIBILITY CHECKER (AFFILIATE ENTRY) */}
      <section className="section bg-light">
        <div className="container">
          <Card title="Check Credit Card Eligibility" className="text-center">
            <div className="form-grid">
              <Input label="Monthly Income (₹)" type="number" />
              <select className="input-field">
                <option>Salaried</option>
                <option>Self-Employed</option>
                <option>Student</option>
              </select>
              <Input label="City" />
            </div>

            <Button
              fullWidth
              external
              href={SBI_ELIGIBILITY}
              rel="nofollow sponsored"
              variant="secondary"
            >
              Check Eligibility (Top Cashback Cards)
            </Button>
          </Card>
        </div>
      </section>

      {/* SECTION 5: POPULAR CREDIT CARDS (MONEY SECTION) */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-8">
            Popular Credit Cards in India
          </h2>

          {/* SBI */}
          <Card className="horizontal-card">
            <h3>SBI Cashback Credit Card</h3>
            <ul>
              <li>5% cashback on online spends</li>
              <li>1% cashback on offline spends</li>
              <li>Best for online shopping</li>
            </ul>
            <Button
              href={SBI_PRIMARY}
              external
              rel="nofollow sponsored"
              className="mb-2"
            >
              Apply Now
            </Button>
            <Button
              href={SBI_ELIGIBILITY}
              external
              rel="nofollow sponsored"
              variant="outline"
            >
              Check Eligibility
            </Button>
          </Card>

          {/* Axis */}
          <Card className="horizontal-card">
            <h3>Axis Bank Credit Cards</h3>
            <ul>
              <li>High approval rate</li>
              <li>Good cashback & lifestyle offers</li>
              <li>Suitable for salaried users</li>
            </ul>
            <Button
              href={AXIS_PRIMARY}
              external
              rel="nofollow sponsored"
              className="mb-2"
            >
              Apply Now
            </Button>
            <Button
              href={AXIS_ELIGIBILITY}
              external
              rel="nofollow sponsored"
              variant="outline"
            >
              Check Eligibility
            </Button>
          </Card>

          {/* HDFC */}
          <Card className="horizontal-card">
            <h3>HDFC Bank Credit Cards</h3>
            <ul>
              <li>Trusted bank with wide acceptance</li>
              <li>Shopping & travel benefits</li>
              <li>Good for long-term usage</li>
            </ul>
            <Button
              href={HDFC_PRIMARY}
              external
              rel="nofollow sponsored"
              className="mb-2"
            >
              Apply Now
            </Button>
            <Button
              href={HDFC_ELIGIBILITY}
              external
              rel="nofollow sponsored"
              variant="outline"
            >
              Check Eligibility
            </Button>
          </Card>
        </div>
      </section>

      {/* SECTION 6: TIPS */}
      <section className="section bg-light">
        <div className="container">
          <h3>Tips Before Applying</h3>
          <ul>
            <li>Keep credit utilization below 30%</li>
            <li>Pay dues on time</li>
            <li>Avoid multiple applications together</li>
          </ul>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="section text-center">
        <div className="container">
          <Card>
            <h2>Ready to Apply?</h2>
            <Button
              href={SBI_PRIMARY}
              external
              rel="nofollow sponsored"
              variant="primary"
              className="btn-lg"
            >
              Apply for Best Cashback Credit Card
            </Button>
          </Card>
        </div>
      </section>
    </>
  );
};

export default CreditCards;
