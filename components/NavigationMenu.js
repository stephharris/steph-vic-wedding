import styles from './NavigationMenu.module.css';

const NavigationMenu = () => (
  <div className={styles.navigationMenu}>
    <a href="#our-story">Our Story</a>
    <a href="#photos">Photos</a>
    <a target="_blank" href="https://www.zola.com/registry/stephanieandvictoraugust21">Registry</a>
    <a href="#crossword">Crossword</a>
  </div>
);

export default NavigationMenu;
