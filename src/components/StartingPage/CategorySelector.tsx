import { Link } from 'react-router-dom';

const CategorySelector = () => {
  return (
    <div className="home-page_container">
      <div className="home-page_category-selector">
        <Link className="home-page_button" to="/library/skins">
          SKINS
        </Link>
        <Link className="home-page_button" to="/library/agents">
          AGENTS
        </Link>
        <Link className="home-page_button" to="/library/stickers">
          STICKERS
        </Link>
        <Link className="home-page_button" to="/library/collections">
          COLLECTIONS
        </Link>
        <Link className="home-page_button" to="/library/crates">
          CRATES
        </Link>
        <Link className="home-page_button" to="/library/keys">
          KEYS
        </Link>
        <Link className="home-page_button" to="/library/patches">
          PATCHES
        </Link>
        <Link className="home-page_button" to="/library/graffiti">
          GRAFFITI
        </Link>
        <Link className="home-page_button" to="/library/musickits">
          MUSIC KITS
        </Link>
      </div>
    </div>
  );
};

export default CategorySelector;
