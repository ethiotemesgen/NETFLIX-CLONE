import React from "react";
import "./Footer.css";

// MUI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer">
      {/* Social Icons */}
      <div className="footer-socials">
        <FacebookIcon className="social-icon" />
        <InstagramIcon className="social-icon" />
        <TwitterIcon className="social-icon" />
        <YouTubeIcon className="social-icon" />
      </div>

      <p className="footer-contact">Questions? Contact us.</p>

      <div className="footer-links">
        <ul>
          <li>Audio discription</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>

        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>

        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>

        <ul>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <p className="footer-country">
        © {new Date().getFullYear()} Netflix. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
