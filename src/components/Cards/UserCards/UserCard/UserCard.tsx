import React from 'react';
import { CardMenu } from '../../../Form/Form';
import styles from '../../Card/Card.module.scss';

import imageDefault from '../../../../image/19.jpeg';

const UserCard = (props: CardMenu) => {
  const { location, lastName, email, firstName, gender, image } = props;

  return (
    <div id={`${lastName}`} className={styles.card} data-testid="person-card">
      <div>
        <img className={styles.cardImage} src={image.length ? image : imageDefault} alt={image} />
      </div>
      <div className={styles.cardDescription}>
        <h3>Dossier :</h3>
        <ul className={styles.cardAboutList}>
          <li className={styles.cardAboutHero}>
            Name:{' '}
            <span className={styles.cardDossierText}>
              {lastName} {firstName}
            </span>
          </li>
          <li className={styles.cardAboutHero}>
            Mail: <span className={styles.cardDossierText}>{email}</span>
          </li>
          <li className={styles.cardAboutHero}>
            Gender: <span className={styles.cardDossierText}>{gender}</span>
          </li>
          <li className={styles.cardAboutHero}>
            Location:
            <span className={styles.cardDossierText}>{location}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
