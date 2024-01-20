import { Skin, Rarity } from '../interfaces/interfaces';
import {
  LegendaryRaritySvg,
  AncientRaritySvg,
  MythRaritySvg,
  RareRaritySvg,
  CommonRaritySvg,
  ImmortalRaritySvg,
  UncommonRaritySvg,
} from '../assets/marketplace_page';

export const getSkinsByRarity = (
  filterName: string,
  source: Skin[]
): Skin[] => {
  const filtered: { [key: string]: () => Skin[] } = {
    Immortal: () =>
      source.filter((item: Skin) => item.rarity?.id.startsWith('immortal', 7)),
    Ancient: () =>
      source.filter((item: Skin) => item.rarity?.id.startsWith('ancient', 7)),
    Legendary: () =>
      source.filter((item: Skin) => item.rarity?.id.startsWith('legendary', 7)),
    Mythical: () =>
      source.filter((item: Skin) => item.rarity?.id.startsWith('mythical', 7)),
    Rare: () =>
      source.filter((item: Skin) => item.rarity?.id.startsWith('rare', 7)),
    'Un-common': () =>
      source.filter((item: Skin) => item.rarity?.id.startsWith('uncommon', 7)),
    Common: () =>
      source.filter((item: Skin) => item.rarity?.id.startsWith('common', 7)),
  };
  return filtered[filterName] ? filtered[filterName]() : [];
};

export const rarityCheck = (rarity: Rarity | undefined) => {
  if (!rarity || !rarity.id) {
    return null;
  }

  const rarityToComponentMap: { [key: string]: JSX.Element } = {
    rarity_legendary_character: <LegendaryRaritySvg />,
    rarity_mythical_character: <MythRaritySvg />,
    rarity_rare_character: <RareRaritySvg />,
    rarity_ancient_character: <AncientRaritySvg />,
    rarity_immortal_character: <ImmortalRaritySvg />,
    rarity_common_character: <CommonRaritySvg />,
    rarity_uncommon_character: <UncommonRaritySvg />,
    rarity_default_character: <CommonRaritySvg />,
  };

  const matchingKey = Object.keys(rarityToComponentMap).find(key =>
    rarity.id.startsWith(key.slice(0, -10))
  );
  return matchingKey ? rarityToComponentMap[matchingKey] : null;
};
