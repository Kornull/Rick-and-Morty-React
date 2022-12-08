import { UseFormRegister } from 'react-hook-form';
import { SearchDataType } from 'store/searchSlice/searchSlice';

import styles from '../Search.module.scss';

type SearchProps = {
  searchChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  searchButton: string;
  register: UseFormRegister<SearchDataType>;
};

const InputSearch = ({ searchChange, searchButton, register }: SearchProps) => {
  return (
    <>
      <input
        className={styles.searchInput}
        data-testid="search-cards"
        value={searchButton}
        type="text"
        {...register('valueSearch', { required: false, onChange: searchChange })}
        placeholder="Search..."
        autoComplete="off"
      />
    </>
  );
};

export default InputSearch;
