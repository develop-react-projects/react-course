import {
  ChangeEvent, useCallback, useEffect, useState,
} from 'react';
import { CounterItem } from 'widgets/Counter/ui/CounterItem';

async function getPeople(name: string = '', page: number = 1, options = {}) {
  return fetch(
    `https://rickandmortyapi.com/api/character?name=${name}&page=${page}`,
    options,
  ).then((res) => res.json());
}

const debounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
) => {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>): void => {
    if (timerId !== null) clearTimeout(timerId);
    timerId = setTimeout(() => {
      timerId = null;
      callback(...args);
    }, delay);
  };
};

interface UserItemsByQueryResult {
  items: any[],
  loading: boolean,
  error: string,
  handlePrevPage: () => void;
  handleNextPage: () => void;
  isDisabledNextButton: boolean;
}

const useItemsByQuery = (query: string): UserItemsByQueryResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPagesCount, setMaxPagesCount] = useState(0);

  const isDisabledNextButton = maxPagesCount === currentPage || loading;

  const handlePrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const fetchItems = async (query: string, page: number) => {
    try {
      setLoading(true);
      setItems([]);
      const response = await getPeople(query, page);
      if (response.error) throw response.error;
      setItems(response.results);
      setMaxPagesCount(response.info.pages);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchItemsQueryDebounce = useCallback(
    debounce((query: string, page: number) => fetchItems(query, page), 1000),
    [],
  );

  useEffect(() => {
    setCurrentPage(1);
    fetchItemsQueryDebounce(query, currentPage);
  }, [query]);

  useEffect(() => {
    fetchItems(query, currentPage);
  }, [currentPage]);

  return {
    items,
    loading,
    error,
    handlePrevPage,
    handleNextPage,
    isDisabledNextButton,
  };
};

export const Counter = () => {
  const [inputValue, setInputValue] = useState('');
  const {
    items,
    loading,
    error,
    handlePrevPage,
    handleNextPage,
    isDisabledNextButton,
  } = useItemsByQuery(inputValue);

  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  return (
    <div>
      <input type="text" placeholder="query..." value={inputValue} onChange={handleChangeQuery} />
      {error && <div>Error!</div>}
      {loading && <div>Loading...</div>}
      {items.map((item) => <CounterItem key={item.id} {...item} />)}
      <button onClick={handlePrevPage} type="button">Prev</button>
      <button onClick={handleNextPage} type="button" disabled={isDisabledNextButton}>Next</button>
    </div>
  );
};
