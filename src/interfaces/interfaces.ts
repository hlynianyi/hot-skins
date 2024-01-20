export interface Rarity {
  id: string;
  name?: string;
  color?: string;
}

export interface Skin {
  id: string;
  name?: string;
  description?: string;
  weapon?: Weapon;
  category?: Category;
  pattern?: Pattern;
  min_float?: number;
  max_float?: number;
  rarity?: Rarity;
  stattrak?: boolean;
  souvenir?: boolean;
  paint_index?: string;
  wears?: Wear[];
  collections?: Collection[];
  crates?: Crate[];
  team?: Team;
  image?: string;
}

interface Weapon {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface Pattern {
  id: string;
  name: string;
}

interface Wear {
  id: string;
  name: string;
}

interface Collection {
  id: string;
  name: string;
  image: string;
}

interface Crate {
  id: string;
  name: string;
  image: string;
}

interface Team {
  id: string;
  name: string;
}

interface ItemOverlayProps {
  item: Skin;
  setChosenItem: Function;
}
