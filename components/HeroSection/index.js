import '../../styles/index.css';
import HeroImage from './HeroImage';
import NavigationMenu from '../NavigationMenu';

const HeroSection = () => (
  <div className="section">
    <div className="content-wrapper">
       <h2 className="hero-date">08.21.2020</h2>
       <HeroImage />
       <NavigationMenu />
    </div>
  </div>
);

export default HeroSection;
