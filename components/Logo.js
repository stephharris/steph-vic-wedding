import Link from 'next/link';

import '../styles/index.css';

const Logo = () => (
  <div className="logo-wrapper">
    <div className="logo">
      <Link href="/">
        <a className="logo-link">Steph & Vic</a>
      </Link>
    </div>
  </div>
);

export default Logo;
