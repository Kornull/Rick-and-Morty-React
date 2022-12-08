import { useEffect, useState } from 'react';
import Card from './Card';
import { AboutCard } from '../types/types';
import styles from './Cards.module.scss';
import { useAppSelector } from 'store/hooks';

let newCards: AboutCard[] = [];

const Cards = () => {
  const cards = useAppSelector((state) => state.cards.cards);
  const search = useAppSelector((state) => state.search.search);

  const [sortCard, setSortCard] = useState<AboutCard[]>([]);

  useEffect(() => {
    newCards = [];
    if (cards.results === undefined) {
      setSortCard([]);
    } else {
      if (!newCards.length && search.searchCard.length) {
        newCards = cards.results.filter((card) =>
          card.name.toLowerCase().includes(search.searchCard.toLowerCase())
        );
        setSortCard(newCards);
      } else {
        setSortCard(cards.results);
      }
    }
  }, [cards, search.searchCard]);

  return (
    <div className={styles.cardsBlock}>
      {sortCard.length ? (
        sortCard.map((card) => <Card key={card.id} {...card} />)
      ) : (
        <h3 data-testid="error-text">Nothing found</h3>
      )}
    </div>
  );
};

export default Cards;
