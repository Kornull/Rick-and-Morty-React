import { CardMenu } from 'components/Form/Form';
import UserCard from './UserCard';
import styles from '../Cards.module.scss';

type UserProps = {
  cards?: CardMenu[];
};

const UserCards = ({ cards = [] }: UserProps) => {
  return (
    <div className={styles.cardsBlock} data-testid="user-cards">
      {cards.length ? cards.map((card) => <UserCard key={card.lastName} {...card} />) : null}
    </div>
  );
};

export default UserCards;
