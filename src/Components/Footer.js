const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">
        Copyrights @ <span>Mohammed Shebli</span>
      </p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/mohammed-shebli-b54638243/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/mhamad.shebli" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://github.com/shebli91?tab=repositories" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
