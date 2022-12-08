import styles from '../PersonCard.module.scss';

type DescribeModalProp = {
  title: string;
  describe: string | number;
};

const PersonDescription = ({ title, describe }: DescribeModalProp) => {
  return (
    <li className={styles.personList}>
      {title}: <span className={styles.personText}>{describe}</span>
    </li>
  );
};

export default PersonDescription;
