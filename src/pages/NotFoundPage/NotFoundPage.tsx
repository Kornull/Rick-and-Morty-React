import NotFoundPng from 'image/not-found.png';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.notPage} data-testid="page-404">
      <img className={styles.notPageImg} src={NotFoundPng} alt="not-found" />
      <p>Page not found</p>
      <p>Select an item from the menu for further viewing</p>
    </div>
  );
};

export default NotFoundPage;
