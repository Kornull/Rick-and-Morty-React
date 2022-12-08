import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import InputRadioSearch from './SearchForm/InputRadioSearch';
import InputSearch from './SearchForm/InputSearch';
import InputSearchPage from './SearchForm/InputSearchPage';
import ButtonSearch from './SearchForm/ButtonSearch';
import ButtonSearchCard from './SearchForm/ButtonSearchCard';
import {
  pageNumber,
  searchCard,
  searchCardToPage,
  SearchDataType,
  searchStatus,
} from 'store/searchSlice/searchSlice';

import { useAppDispatch, useAppSelector } from 'store/hooks';

import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const [searchTerm, setSearch] = useState('');
  const [searchCardPage, setSearchCardPage] = useState('');
  const { register, handleSubmit, reset } = useForm<SearchDataType>({
    mode: 'onBlur',
  });

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handelChangeCard = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchCardPage(event.target.value);
  };

  const onSubmit: SubmitHandler<SearchDataType> = (data) => {
    if (data.searchCard.length) {
      dispatch(searchCardToPage(data.searchCard));
    } else {
      dispatch(searchCard(data.valueSearch));
      dispatch(searchStatus(data.type));
      dispatch(searchCardToPage(''));
      dispatch(pageNumber(1));
    }
    reset({
      searchCard: '',
    });
    setSearchCardPage('');
  };

  return (
    <div className={styles.search}>
      <form
        className={styles.searchForm}
        data-testid="form-search"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputSearch searchChange={handelChange} searchButton={searchTerm} register={register} />
        <InputSearchPage
          searchChange={handelChangeCard}
          searchButton={searchCardPage}
          register={register}
        />
        <div className={styles.searchRadioBlock} data-testid="radio-search">
          <InputRadioSearch
            register={register}
            name="all"
            searchButton={search}
            statusSearch="name"
          />
          <InputRadioSearch
            register={register}
            name="status"
            searchButton={search}
            statusSearch="dead or alive"
          />
          <InputRadioSearch
            register={register}
            name="species"
            searchButton={search}
            statusSearch="species"
          />
        </div>
        <ButtonSearch />
        <ButtonSearchCard />
      </form>
    </div>
  );
};

export default Search;
