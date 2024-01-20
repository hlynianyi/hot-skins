const AboutProject = () => {
  return (
    <section className="about-container">
      <div className="about-container_grid">
        <h2 className="about-container_title">About this Project</h2>
        <div className="about-recources">
          <h3>Links:</h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hlynianyi"
          >
            GITHUB
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ByMykel/CSGO-API"
          >
            API
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.figma.com/file/277mb20wnx4dC94I3wmR0m/HotSkins-(Copy)-(Copy)?node-id=545%3A24291&mode=dev"
          >
            FIGMA
          </a>
        </div>
        <div className="about-description">
          The project is a database containing information on in-game items for
          the game Counter-Strike. The following stack was used: React,
          Redux/Toolkit, TypeScript, Axios. Based on a third-party Figma project
          found on the internet, the design was modified due to the absence of a
          backend and API limitations. The project features responsive design,
          with breakpoints for mobile devices, tablets, and desktop computers.
          The pages with categories and the library have filters by item
          name/quality.
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
