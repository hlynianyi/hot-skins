import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Skin } from '../../interfaces/interfaces';
import LoadingSkeleton from '../Library/LoadingSkeleton';
import Pagination from '../Library/Pagination';
import ItemOverlay from '../Library/ItemOverlay';
import axios from 'axios';
import routes from '../../routes';
import { rarityCheck } from '../../utils/utils';
import { actions as selectedCategoryActions } from './../../slices/selectedItemsSlice';
import { selectors as selectedCategorySelectors } from '../../slices/selectedItemsSlice';

const Keys = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [chosenItem, setChosenItem] = useState<Skin | null>(null);

  const allSkins: Skin[] = useSelector(selectedCategorySelectors.selectAll);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleQueryClear = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredSkinsBySearch = useMemo(() => {
    if (searchQuery === '') return allSkins;
    return allSkins.filter(skin =>
      skin.name?.toLowerCase().includes(searchQuery)
    );
  }, [allSkins, searchQuery]);
  useEffect(() => {
    dispatch(selectedCategoryActions.clearItems());
  }, []);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(routes.getKeys());
        dispatch(selectedCategoryActions.addItems(response.data));
      } catch (err) {
        console.error('Fetching skins data error:', err);
      }
    };
    fetchData();

    setTimeout(() => {
      setIsLoading(false);
    }, 500); // delay
  }, [dispatch]);

  const handleOverlayShow = (item: Skin) => setChosenItem(item);

  const itemsPerPage: number = 55;
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;

  const currentItems = useMemo(() => {
    return filteredSkinsBySearch.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredSkinsBySearch, indexOfFirstItem, indexOfLastItem]);

  const paginatedSkins = useMemo(() => {
    return filteredSkinsBySearch;
  }, [filteredSkinsBySearch]);

  return (
    <section className="marketplace">
      <div className="items">
        <div className="top-block">
          <div className="top-block__row">
            <h2 className="top-block__header">
              Find a whatever by your liking
            </h2>
          </div>
          <div className="top-block__row">
            <div className="top-block__rarity">
              <span className="rarity-text">
                Rarity is not an option for collections
              </span>
            </div>
            <label htmlFor="Search" className="top-block__input-container">
              <input
                className="top-block__input"
                id="Search"
                type="text"
                placeholder="Search by name.."
                ref={searchInputRef}
                onChange={handleSearchChange}
              />
              <button
                className="top-block__input-clear "
                onClick={handleQueryClear}
              >
                x
              </button>
            </label>
          </div>
        </div>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="item-cards">
            {currentItems.map(item => (
              <div
                className="card"
                key={item.id}
                onClick={() => handleOverlayShow(item)}
              >
                <img className="card-image" src={item.image} alt={item.name} />
                <p className="card-name">{item.name}</p>
                <div className="card-rarity">{rarityCheck(item.rarity)}</div>
              </div>
            ))}
          </div>
        )}
        <Pagination
          skins={paginatedSkins}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div
          className={`${
            chosenItem ? 'item-overlay_show' : 'item-overlay_hide'
          }`}
        >
          {chosenItem && (
            <ItemOverlay item={chosenItem} setChosenItem={setChosenItem} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Keys;
