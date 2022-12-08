import { UseFormRegister } from 'react-hook-form';
import { SearchDataType } from 'store/searchSlice/searchSlice';

import styles from '../Search.module.scss';

type InputSearchData = {
  name: string;
  searchButton: SearchDataType;
  register: UseFormRegister<SearchDataType>;
  statusSearch: string;
};

const InputRadioSearch = ({ name, register, searchButton, statusSearch }: InputSearchData) => {
  return (
    <>
      <label htmlFor={name}>
        {name.slice(0, 1).toUpperCase() + name.slice(1)}
        <input
          className={styles.searchRadioInput}
          id={name}
          {...register('type', { required: true })}
          type="radio"
          value={name}
          defaultChecked={name === searchButton.type}
          title={statusSearch}
        />
      </label>
    </>
  );
};

export default InputRadioSearch;
