import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">FinSecure AI</h2>
        <div className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/fraud">Fraud Detection</Link>
          <Link to="/emi">EMI Calculator</Link>
          <Link to="/chatbot">Chatbot</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-card">
        <h1 className="hero-title typewriter">
          AI Powered Financial Security Platform
        </h1>
        <p className="hero-subtitle">
          Detect credit card fraud, calculate EMIs, analyze financial data, and
          get instant customer support — all in one intelligent dashboard.
        </p>
        <Link to="/dashboard">
          <button className="cta-btn">Go to Dashboard</button>
        </Link>
      </header>

      {/* FEATURES SECTION */}
<div className="features-section">

  <div className="feature-card">
    <h3>🔍 Fraud Detection</h3>
    <p>Real-time machine learning model that identifies suspicious transactions.</p>
    <Link to="/fraud" className="card-btn">Try Now</Link>
  </div>

  <div className="feature-card">
    <h3>📐 EMI Calculator</h3>
    <p>Calculate EMI, total interest & total payable amount easily.</p>
    <Link to="/emi" className="card-btn">Calculate EMI</Link>
  </div>

  <div className="feature-card">
    <h3>🤖 Support Chatbot</h3>
    <p>24/7 AI-powered assistant to answer user queries instantly.</p>
    <Link to="/chatbot" className="card-btn">Chat Now</Link>
  </div>

  <div className="feature-card">
    <h3>📊 Admin Dashboard</h3>
    <p>Monitor fraud cases, financial logs, and analytics.</p>
    <Link to="/dashboard" className="card-btn">Open Dashboard</Link>
  </div>

  {/* NEW CARDS ADDED BELOW */}

  <div className="feature-card">
    <h3>📘 Foundations of Financial Management</h3>
    <p>Learn the basics of smart money handling and budgeting.</p>
    <Link to="/foundations" className="card-btn">Explore</Link>
  </div>

  <div className="feature-card">
    <h3>🧮 Planning Tools & Financial Calculators</h3>
    <p>Powerful calculators for planning loans, investments, and savings.</p>
    <Link to="/planning-tools" className="card-btn">Open Tools</Link>
  </div>

  <div className="feature-card">
    <h3>🛡️ Safeguarding Your Finances</h3>
    <p>Essential guides on how to protect your money from threats.</p>
    <Link to="/safeguard" className="card-btn">Learn More</Link>
  </div>

  <div className="feature-card">
    <h3>🧠 Fraud Analysis & Detection Systems</h3>
    <p>Deep dive into fraud analytics, ML systems, and risk scoring.</p>
    <Link to="/fraud-systems" className="card-btn">View Details</Link>
  </div>

  <div className="feature-card">
    <h3>📚 Knowledge Hub & Support Resources</h3>
    <p>Access guides, FAQs, documents, and helpful finance resources.</p>
    <Link to="/knowledge" className="card-btn">Visit Hub</Link>
  </div>

</div>


    </div>
  );
}
