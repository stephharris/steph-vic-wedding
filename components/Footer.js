import styles from './Footer.module.css';


const Heart = () => (
  <svg className={styles.heart} width="10px" height="10px" viewBox="0 0 492.7 426.8">
    <g fill='#111'>
    <path d="M492.7,133.1C492.7,59.6,433.1,0,359.7,0c-48,0-89.9,25.5-113.3,63.6C222.9,25.5,181,0,133,0C59.6,0,0,59.6,0,133.1,c0,40,17.7,75.8,45.7,100.2l188.5,188.6c3.2,3.2,7.6,5,12.1,5s8.9-1.8,12.1-5L447,233.2C475,208.9,492.7,173.1,492.7,133.1z"/>
    </g>
  </svg>
)

const Footer = () => (
  <div className={styles.footer}>
    <p>Made with { <Heart /> } (obviously) by <a target="_blank" href="https://ste.ph">Steph</a>.</p>
  </div>
);

export default Footer;
