import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="text">Copyright © @hlynianyi</p>
      <aside className="links">
        <Link to={'/support'}>
          <span className="link">Support</span>
        </Link>
        <Link to={'/contacts'}>
          <span className="link">Contacts</span>
        </Link>
        <Link to={'/about'}>
          <span className="link">About Project</span>
        </Link>
      </aside>
    </footer>
  );
};

export default Footer;
