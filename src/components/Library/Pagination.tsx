import { useEffect, useState } from 'react';
import { Skin } from '../../interfaces/interfaces';

interface PaginationProps {
  skins: Skin[];
  currentPage: number;
  setCurrentPage: Function;
}

const Pagination: React.FC<PaginationProps> = ({
  skins,
  currentPage,
  setCurrentPage,
}) => {
  const itemsPerPage: number = 55;
  const totalItems: number = skins.length;
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);

  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(1);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(9);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    const newPageNumbers: number[] = [1];
    for (let i = 2; i < totalPages; i++) {
      if (i >= minPageNumberLimit && i <= maxPageNumberLimit) {
        newPageNumbers.push(i);
      }
    }
    if (totalPages > 1) {
      newPageNumbers.push(totalPages);
    }
    setPageNumbers(newPageNumbers);
  }, [minPageNumberLimit, maxPageNumberLimit, totalPages]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    let newMaxPageNumberLimit = maxPageNumberLimit;
    let newMinPageNumberLimit = minPageNumberLimit;

    if (pageNumber >= maxPageNumberLimit - 3) {
      newMaxPageNumberLimit = Math.min(pageNumber + 3, totalPages);
      newMinPageNumberLimit = Math.max(newMaxPageNumberLimit - 8, 1);
    } else if (pageNumber <= minPageNumberLimit + 3) {
      newMinPageNumberLimit = Math.max(pageNumber - 4, 1);
      newMaxPageNumberLimit = Math.min(newMinPageNumberLimit + 8, totalPages);
    }
    setMaxPageNumberLimit(newMaxPageNumberLimit);
    setMinPageNumberLimit(newMinPageNumberLimit);
  };

  const handleNextBtn = () => {
    const newCurrentPage = currentPage + 1;
    if (newCurrentPage < totalPages) {
      setCurrentPage(newCurrentPage);
      if (
        newCurrentPage > maxPageNumberLimit - 3 &&
        newCurrentPage < totalPages - 3
      ) {
        setMaxPageNumberLimit(maxPageNumberLimit + 1);
        setMinPageNumberLimit(minPageNumberLimit + 1);
      }
    }
  };

  const handlePrevBtn = () => {
    const newCurrentPage = currentPage - 1;
    if (newCurrentPage > 1) {
      setCurrentPage(newCurrentPage);
      if (newCurrentPage < minPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit - 1);
        setMinPageNumberLimit(minPageNumberLimit - 1);
      }
    }
  };

  return (
    <div className="pagination">
      <button
        className={`pagination__button-direction pagination__button pagination__button--active`}
        onClick={handlePrevBtn}
      >
        Previous page
      </button>
      {pageNumbers.map(number => (
        <button
          className={`pagination__button ${number === currentPage ? 'pagination__button--active' : ''}`}
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
      <button
        className={`pagination__button-direction pagination__button pagination__button--active`}
        onClick={handleNextBtn}
      >
        Next page
      </button>
    </div>
  );
};

export default Pagination;
