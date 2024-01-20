import CategorySelector from './CategorySelector';

const Home = () => {
  return (
    <section className="home-page">
      <p className="home-page_text">
        This project contains the entire CS:GO skins database, select your
        desired category
      </p>
      <CategorySelector />
    </section>
  );
};

export default Home;
