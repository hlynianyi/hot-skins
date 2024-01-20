const Article1 = () => {
  return (
    <article className="main-content">
      <div className="api-page_title">Main information about API</div>
      <div className="api-page_text">
        CarPlay has been installed in most new cars for a long time. Many
        drivers are accustomed to this system, because it provides access to
        Apple Music and a convenient navigator on the car screen.
        <br />
        <br />
        Unfortunately, automakers often install a wired version of CarPlay, so
        users have to connect their iPhone to the car via a wire every time.
        Signature generation.
      </div>
      <div className="api-instructions">
        <h2>To start working with the SkinCash API, you need the following</h2>
        <ul className="api-steps">
          <li>
            <span className="step-number">1</span>
            <span className="step-description">
              Carlinkit is a compact adapter that allows you to get wireless
              CarPlay.
            </span>
          </li>
          <li>
            <span className="step-number">2</span>
            <span className="step-description">
              CarPlay is practical in any car. Among the supported brands is
              Audi.
            </span>
          </li>
          <li>
            <span className="step-number">3</span>
            <span className="step-description">
              The device connects to the standard USB-A output in the car. Then
              the iPhone connects to Carlinkit via Wi-Fi to launch CarPlay.
            </span>
          </li>
          <li>
            <span className="step-number">4</span>
            <span className="step-description">
              Important: wireless CarPlay will only work if the car supports
              wired CarPlay.
            </span>
          </li>
        </ul>
      </div>
      <div className="api-instructions">
        <h2>Principles of Interaction via SkinCash API</h2>
        <ul className="api-steps">
          <li>
            <span className="step-number">1</span>
            <span className="step-description">
              Carlinkit is a compact adapter that allows you to get wireless
              CarPlay.
            </span>
          </li>
          <li>
            <span className="step-number">2</span>
            <span className="step-description">
              When using wireless CarPlay, there may be a slight delay, which
              does not affect the operation.
            </span>
          </li>
          <li>
            <span className="step-number">3</span>
            <span className="step-description">
              At the same time, all applications work stably, including
              Yandex.Maps, 2GIS, Google Maps, Spotify, and Yandex.Music.
            </span>
          </li>
          <li>
            <span className="step-number">4</span>
            <span className="step-description">
              After the first connection, the iPhone will automatically connect
              to Carlinkit each time the car is started.
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Article1;
