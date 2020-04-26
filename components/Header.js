import Link from 'next/link';

import '../styles/index.css';

const Header = () => (
  <div className="header-wrapper">
    <div className="header">
      <Link href="/">
        <a className="header-link">Steph & Vic</a>
      </Link>
    </div>
  </div>
);

export default Header;
