import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Skin } from '../../interfaces/interfaces';
import LoadingSkeleton from '../Library/LoadingSkeleton';
import Pagination from '../Library/Pagination';
import RarityFilters from '../Library/RarityFilters';
import ItemOverlay from '../Library/ItemOverlay';
import axios from 'axios';
import routes from '../../routes';
import { getSkinsByRarity, rarityCheck } from '../../utils/utils';
import { actions as selectedCategoryActions } from './../../slices/selectedItemsSlice';
import { selectors as selectedCategorySelectors } from '../../slices/selectedItemsSlice';

const Stickers = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredSkins, setFilteredSkins] = useState<Skin[]>([]);
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]);
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

  const memoizedFilteredSkins = useMemo(() => {
    let newFilteredSkins: Skin[] = [];
    if (searchQuery === '') {
      checkedFilters.forEach(
        filter =>
          (newFilteredSkins = [
            ...newFilteredSkins,
            ...getSkinsByRarity(filter, allSkins),
          ])
      );
    } else {
      checkedFilters.forEach(
        filter =>
          (newFilteredSkins = [
            ...newFilteredSkins,
            ...getSkinsByRarity(filter, filteredSkinsBySearch),
          ])
      );
    }
    return newFilteredSkins;
  }, [checkedFilters, allSkins, filteredSkinsBySearch, searchQuery]);

  useEffect(() => {
    dispatch(selectedCategoryActions.clearItems());
  }, []);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(routes.getStickers());
        dispatch(selectedCategoryActions.addItems(response.data));
      } catch (err) {
        console.error('Fetching skins data error:', err);
      }
    };
    fetchData();

    setTimeout(() => {
      let newFilteredSkins: Skin[] = [];
      newFilteredSkins = [...newFilteredSkins, ...memoizedFilteredSkins];
      setFilteredSkins(newFilteredSkins);
      setIsLoading(false);
    }, 500); // delay
  }, [dispatch, checkedFilters, allSkins, memoizedFilteredSkins]);

  const handleOverlayShow = (item: Skin) => setChosenItem(item);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    if (e.target.checked) {
      setCheckedFilters([...checkedFilters, e.target.name]);
    } else {
      setCheckedFilters(
        checkedFilters.filter(filter => filter !== e.target.name)
      );
    }
  };

  const itemsPerPage: number = 55;
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;

  const currentItems = useMemo(() => {
    return checkedFilters.length === 0
      ? filteredSkinsBySearch.slice(indexOfFirstItem, indexOfLastItem)
      : filteredSkins.slice(indexOfFirstItem, indexOfLastItem);
  }, [
    checkedFilters.length,
    indexOfFirstItem,
    indexOfLastItem,
    filteredSkins,
    filteredSkinsBySearch,
  ]);

  const paginatedSkins = useMemo(() => {
    return checkedFilters.length === 0 ? filteredSkinsBySearch : filteredSkins;
  }, [checkedFilters.length, filteredSkinsBySearch, filteredSkins]);

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
            <RarityFilters handleFilterChange={handleFilterChange} />
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

export default Stickers;
