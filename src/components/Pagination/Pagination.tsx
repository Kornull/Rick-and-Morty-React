import { ViewNumOfPages } from './PaginationComponents/ViewNumOfPages';

import styles from './Pagination.module.scss';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { pageNumber } from 'store/searchSlice/searchSlice';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards.cards);
  const search = useAppSelector((state) => state.search.search);

  return (
    <>
      {cards.results.length ? (
        <div className={styles.pagination} data-testid="search-pagination">
          <button
            className={styles.paginationButtons}
            onClick={() => dispatch(pageNumber(search.page - 1))}
            disabled={+search.page === 1}
            data-testid="test-btn-prev"
          >
            {'<<'}
          </button>
          <ViewNumOfPages cards={cards} stateSearch={search} />
          <button
            className={styles.paginationButtons}
            onClick={() => dispatch(pageNumber(search.page + 1))}
            disabled={+search.page === +cards.info.pages}
            data-testid="test-btn-next"
          >
            {'>>'}
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
