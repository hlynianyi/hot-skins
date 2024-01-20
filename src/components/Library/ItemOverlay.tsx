import { Skin } from '../../interfaces/interfaces';

interface ItemOverlayProps {
  item: Skin;
  setChosenItem: Function;
}

const ItemOverlay: React.FC<ItemOverlayProps> = ({ item, setChosenItem }) => {
  const wears = item.wears;
  const colls = item.collections;

  return (
    <div className="item-overlay_container">
      <img className="image" src={item.image} alt="item" />
      <div className="description">
        <div className="row">
          <p className="text title">Name: </p>
          <p className="text">{item.name}</p>
        </div>
        <div className="row">
          <p className="text title">Decription: </p>
          <p className="text">{item.description}</p>
        </div>
        <div className="row">
          <p className="text title">Category: </p>
          <p className="text">{item.category?.name}</p>
        </div>
        <div className="row">
          <p className="text title">Rarity: </p>
          <p className="text">{item.rarity?.name}</p>
        </div>
        <div className="row">
          <p className="text title">Float range: </p>
          <p className="text">
            {item.min_float} - {item.max_float}
          </p>
        </div>
        <div className="row">
          <p className="text title">Paint index: </p>
          <p className="text">{item.paint_index}</p>
        </div>
        <div className="row">
          <p className="text title">Starttrack: </p>
          <p className="text">{item.stattrak === true ? 'Yes' : 'No'}</p>
        </div>
        <div className="row">
          <p className="text title ">Souvenir: </p>
          <p className="text">{item.souvenir === true ? 'Yes' : 'No'}</p>
        </div>
        <div className="row">
          <p className="text title ">Wears: </p>
          <p className="text">
            {wears?.map((wear, index) => (
              <span key={index}>
                {wear.name}
                {index < wears.length - 1 ? ', ' : ''}
              </span>
            )) || 'No wears available'}
          </p>
        </div>
        <div className="row">
          <p className="text title ">Collections: </p>
          <p className="text">
            {colls?.map((collection, index) => (
              <span key={index}>
                {collection.name}
                {index < colls.length - 1 ? ', ' : ''}
              </span>
            )) || 'No collections available'}
          </p>
        </div>
      </div>
      <button
        onClick={() => setChosenItem(null)}
        className="item-overlay_close-button"
      >
        Close
      </button>
    </div>
  );
};

export default ItemOverlay;
