import {
  AboutCompanySvg,
  TradeLinkSvg,
  DepositSvg,
  KeySvg,
  IssuesSvg,
  SecuritySvg,
  AnalystSvg,
} from '../assets/support_page';

const Support = () => {
  return (
    <section className="subpage">
      <h1 className="subpage_title">Support</h1>
      <section className="support">
        <div className="support-card">
          <AboutCompanySvg />
          <div className="support-card_text">
            <h4 className="suport-card_title">About HotSkins company</h4>
            <h5 className="support-card_article-count">3 articles</h5>
          </div>
        </div>
        <div className="support-card">
          <TradeLinkSvg />
          <div className="support-card_text">
            <h4 className="suport-card_title">Where to find trade-link</h4>
            <h5 className="support-card_article-count">3 articles</h5>
          </div>
        </div>
        <div className="support-card">
          <DepositSvg />
          <div className="support-card_text">
            <h4 className="suport-card_title">Deposit balance</h4>
            <h5 className="support-card_article-count">5 articles</h5>
          </div>
        </div>
        <div className="support-card">
          <KeySvg />
          <div className="support-card_text">
            <h4 className="suport-card_title">Connection of your project</h4>
            <h5 className="support-card_article-count">5 articles</h5>
          </div>
        </div>
        <div className="support-card">
          <IssuesSvg />
          <div className="support-card_text">
            <h4 className="suport-card_title">Trade issues</h4>
            <h5 className="support-card_article-count">5 articles</h5>
          </div>
        </div>
        <div className="support-card">
          <SecuritySvg />
          <div className="support-card_text">
            <h4 className="suport-card_title">How to trade safely</h4>
            <h5 className="support-card_article-count">5 articles</h5>
          </div>
        </div>
        <div className="support-card">
          <AnalystSvg />
          <div className="support-card_text">
            <h4 className="suport-card_title">Analytics and reporting</h4>
            <h5 className="support-card_article-count">3 articles</h5>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Support;
