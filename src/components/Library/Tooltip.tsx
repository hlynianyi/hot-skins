import React, { useState } from 'react';

type Rarity = {
  name: string;
  color: string;
};

const rarities: Rarity[] = [
  { name: 'Ancient', color: 'red' },
  { name: 'Legendary', color: 'purple' },
  { name: 'Mythical', color: 'blue' },
  { name: 'Rare', color: 'navy' },
  { name: 'Un-common', color: 'lightblue' },
  { name: 'Common', color: 'grey' },
];

const Tooltip: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="question-mark">?</div>
      {isVisible && (
        <div className="tooltip">
          {rarities.map((rarity, index) => (
            <div key={index} className="tooltip-item">
              <span className="rarity-name">{rarity.name}</span>
              <span id={rarity.name} className="square"></span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
