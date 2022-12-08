import { NavLink } from 'react-router-dom';
import { setPersonCard, setPersonId } from 'store/cardsSlice/cardsSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards.cards);
  const handleClick = (): void => {
    if (cards.viewPersonCard) {
      dispatch(setPersonCard(false));
      dispatch(setPersonId(null));
    }
  };

  return (
    <header className={styles.header} data-testid="header-component">
      <div className={styles.headerContainer}>
        <nav>
          <ul className={styles.headerNavigate} data-testid="navigation-list">
            <li onClick={handleClick}>
              <NavLink className={styles.headerPageLink} end to="/">
                Main
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className={styles.headerPageLink} end to="about">
                About us
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className={styles.headerPageLink} end to="user-form">
                Form
              </NavLink>
            </li>
            {cards.viewPersonCard && (
              <li data-testid="link-person">
                <NavLink className={styles.headerPageLink} end to={`person-${cards.personId}`}>
                  Person
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
