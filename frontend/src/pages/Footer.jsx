import React from 'react'
import "../pages/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/listings">Listings</a>
          </li>
          <li>
            <a href="/podcasts">Podcasts</a>
          </li>
          <li>
            <a href="/videos">Videos</a>
          </li>
          <li>
            <a href="/tags">Tags</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <ul className="footer-links">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-use">Terms of Use</a>
          </li>
          <li>
            <a href="/code-of-conduct">Code of Conduct</a>
          </li>
        </ul>
        <p className="footer-info">
          DEV Community © {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  )
}

export default Footer
