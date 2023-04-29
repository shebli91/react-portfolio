const MainSection = () => {
  return (
    <section className="main">
      <div>
        <h2>
          Hello, I'm Mohammed <br />
          <span>FrontEnd Developer</span>
        </h2>
        <h3>I build web apps</h3>
        <a href="#projects" className="main-btn">
          View my projects
        </a>
        <br />
        <a href="/src/Downloadable/Shebli_CV.pdf" download className="CV">
          <i className="fa-solid fa-download" id="cv"></i> Download my -CV-
        </a>
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
          <a
            href="https://github.com/shebli91?tab=repositories"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
