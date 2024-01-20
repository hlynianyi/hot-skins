import Tooltip from './Tooltip';

interface RarityFilterProps {
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RarityFilters: React.FC<RarityFilterProps> = ({ handleFilterChange }) => {
  return (
    <div className="top-block__rarity">
      <span className="rarity-text">Rarity</span>
      <div className="rarity-filter">
        <label htmlFor="Ancient">
          <input
            className="checkbox"
            onChange={handleFilterChange}
            type="checkbox"
            id="Ancient"
            name="Ancient"
          />
        </label>
        <label htmlFor="Legendary">
          <input
            className="checkbox"
            onChange={handleFilterChange}
            type="checkbox"
            id="Legendary"
            name="Legendary"
          />
        </label>
        <label htmlFor="Mythical">
          <input
            className="checkbox"
            onChange={handleFilterChange}
            type="checkbox"
            id="Mythical"
            name="Mythical"
          />
        </label>
        <label htmlFor="Rare">
          <input
            className="checkbox"
            onChange={handleFilterChange}
            type="checkbox"
            id="Rare"
            name="Rare"
          />
        </label>
        <label htmlFor="Un-common">
          <input
            className="checkbox"
            onChange={handleFilterChange}
            type="checkbox"
            id="Un-common"
            name="Un-common"
          />
        </label>
        <label htmlFor="Common">
          <input
            className="checkbox"
            onChange={handleFilterChange}
            type="checkbox"
            id="Common"
            name="Common"
          />
        </label>
      </div>
      <Tooltip />
    </div>
  );
};

export default RarityFilters;
