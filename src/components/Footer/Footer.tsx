import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <div className={styles.footerContainer}>
        <p>© by Kornull 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
