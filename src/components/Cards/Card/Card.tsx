import { Link } from 'react-router-dom';
import { setPersonCard, setPersonId } from 'store/cardsSlice/cardsSlice';
import { useAppDispatch } from 'store/hooks';

import { AboutCard } from '../../types/types';

import styles from './Card.module.scss';

const Card: React.FC<AboutCard> = (props) => {
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(setPersonCard(true));
    dispatch(setPersonId(props.id));
  };

  return (
    <Link
      to={`person-${props.id}`}
      onClick={handleClick}
      id={`${props.id}`}
      data-testid="person-card-link"
    >
      <div id={`${props.id}`} className={styles.card} data-testid="person-card">
        <div className={styles.cardImage}>
          <img className={styles.cardImage} src={props.image} alt={props.name} />
        </div>
        <div className={styles.cardDescription}>
          <h3>Dossier :</h3>
          <ul className={styles.cardAboutList}>
            <li className={styles.cardAboutHero}>
              Name: <span className={styles.cardDossierText}>{props.name}</span>
            </li>
            <li className={styles.cardAboutHero}>
              Species: <span className={styles.cardDossierText}>{props.species}</span>
            </li>
            <li className={styles.cardAboutHero}>
              Gender: <span className={styles.cardDossierText}>{props.gender}</span>
            </li>
            <li className={styles.cardAboutHero}>
              Location:
              <span className={styles.cardDossierText}>
                {props.location ? props.location.name : 'unknown'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Card;
