import Link from 'next/link';
import styles from './Logo.module.css';

const Logo = () => (
  <div className={styles.logoWrapper}>
    <div className={styles.logo}>
      <Link href="/">
        <a className={styles.logoLink}>Steph & Vic</a>
      </Link>
    </div>
  </div>
);

export default Logo;
