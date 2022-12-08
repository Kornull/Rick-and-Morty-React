import IconSVG from 'image/icon-search.svg';
import styles from '../Search.module.scss';

const ButtonSearch = () => {
  return (
    <button type="submit" className={styles.searchButton} title="search name">
      <svg className={styles.searchIcon} data-testid="button-search">
        <use xlinkHref={`${IconSVG}#icon-search`} />
      </svg>
    </button>
  );
};

export default ButtonSearch;
