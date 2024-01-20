import { TelegramSvg, MailSvg } from '../assets/contacts_page';

const Contacts = () => {
  return (
    <section className="subpage">
      <h1 className="subpage_title">Contacts</h1>
      <section className="contacts_links">
        <div className="info-block">
          <div className="info-block_img">
            <TelegramSvg />
          </div>
          <div className="info-block_text-container">
            <h4 className="info-block_link">@hotskins</h4>
            <h5 className="info-block_description">
              Technical announcements and news
            </h5>
          </div>
        </div>
        <div className="info-block">
          <div className="info-block_img">
            <TelegramSvg />
          </div>
          <div className="info-block_text-container">
            <h4 className="info-block_link">@hotskins-help</h4>
            <h5 className="info-block_description">User service support</h5>
          </div>
        </div>
        <div className="info-block">
          <div className="info-block_img">
            <MailSvg />
          </div>
          {/* <MailSvg /> */}
          <div className="info-block_text-container">
            <h4 className="info-block_link">hello@hotskins.com</h4>
            <h5 className="info-block_description">For all your questions</h5>
          </div>
        </div>
      </section>
      <section className="company_location">
        <div className="location-info">
          <h3 className="location-info_title">Beneficiary:</h3>
          <h3 className="location-info_description">
            Green Sequoia Square LTD
          </h3>
        </div>
        <div className="location-info">
          <h3 className="location-info_title">Reg. number:</h3>
          <h3 className="location-info_description">HE 405171</h3>
        </div>
        <div className="location-info">
          <h3 className="location-info_title">Beneficiary’s address:</h3>
          <h3 className="location-info_description">
            S35, Achaios Street, 5-th Floor, Office 17, P.C. 1101, Nicosia,
            Cyprus
          </h3>
        </div>
      </section>
    </section>
  );
};

export default Contacts;
