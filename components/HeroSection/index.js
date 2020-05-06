import HeroImage from './HeroImage';
import NavigationMenu from '../NavigationMenu';
import styles from './index.module.css';


const HeroSection = () => (
  <div className="section">
    <div className="content-wrapper">
       <h2 className={styles.heroDate}>08.21.2020</h2>
       <HeroImage />
       <NavigationMenu />
    </div>
  </div>
);

export default HeroSection;
