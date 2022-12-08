import { useNavigate } from 'react-router-dom';
import { AboutCard } from 'components/types/types';
import PersonDescription from './PersonDescription';

import styles from './PersonCard.module.scss';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setPersonCard, setPersonId } from 'store/cardsSlice/cardsSlice';

enum PersonClose {
  closeId = 'modal-close',
}

const PersonCard = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards.cards);
  const navigate = useNavigate();

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    ev.stopPropagation();
    dispatch(setPersonCard(false));
    dispatch(setPersonId(null));
    navigate(-1);
  };

  const personInfo = cards.results!.find((card) => Number(card.id) === cards.personId) as AboutCard;

  return (
    <div className={styles.person} id={`person-${PersonClose.closeId}`} data-testid="modal-card">
      <div className={styles.personCard} data-testid="describe-card">
        <ul>
          <li>
            <img className={styles.personImage} src={personInfo.image} alt="image" />
          </li>
          {personInfo.created ? (
            <PersonDescription title="Dossier created" describe={personInfo.created} />
          ) : (
            <PersonDescription title="Dossier created" describe={''} />
          )}

          <PersonDescription title="ID" describe={personInfo.id} />
          <PersonDescription title="Full name" describe={personInfo.name} />
          <PersonDescription title="Species" describe={personInfo.species} />
          <PersonDescription title="Status" describe={personInfo.status} />
          <PersonDescription title="Gender" describe={personInfo.gender} />
          <PersonDescription title="Location" describe={personInfo.location!.name} />
          <PersonDescription title="Origin location" describe={personInfo.origin!.name} />
        </ul>
        <button
          className={styles.personClose}
          onClick={handleClick}
          id={PersonClose.closeId}
          data-testid="close-person"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
