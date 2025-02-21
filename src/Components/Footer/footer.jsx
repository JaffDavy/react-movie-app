import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-list">
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Need Help</h3>
            <ul className="footer-list">
              <li>
                <Link to="/help" className="footer-link">Visit Help Center?</Link>
              </li>
              <li>
                <Link to="/feedback" className="footer-link">Share Feedback</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">View Website in</h3>
            <select className="footer-select">
              <option>English</option>
            </select>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Social Media</h3>
            <div className="footer-social">
              <Link to="#" className="footer-icon">
                <Instagram />
              </Link>
              <Link to="#" className="footer-icon">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-text">© 2023 STREAM X. All Rights Reserved.</p>
          <div className="footer-links">
            <Link to="/terms" className="footer-link">Terms Of Use</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/faq" className="footer-link">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
