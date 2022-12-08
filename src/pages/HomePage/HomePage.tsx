import { useEffect } from 'react';
import Cards from 'components/Cards';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import Load from 'image/loading.gif';
import { fetchSearchCards } from 'store/cardsSlice/cardsSlice';
import Search from 'components/Search';
import { ENDPOINTS } from 'components/types/types';
import Pagination from 'components/Pagination';
const HomePage = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const cards = useAppSelector((state) => state.cards.cards);

  useEffect(() => {
    const Link = `${ENDPOINTS.character}?${search.type === 'all' ? 'name' : search.type}=${
      search.valueSearch
    }&page=${search.page}`;

    dispatch(fetchSearchCards(Link));
  }, [search.valueSearch, search.page, search.type, dispatch]);

  return (
    <>
      <Search />
      {cards.results.length ? <Pagination /> : null}
      {cards.loading ? <img className="loading-gif" src={Load} alt="loading"></img> : <Cards />}
    </>
  );
};

export default HomePage;
