import Link from 'next/link';
import '../styles/index.css';

const headerStyle = {
  marginLeft: 'auto'
};

const linkStyle = {
  marginRight: '30px'
}

const Header = () => (
  <div className="w-full p-12 sm:p-8 inline-flex">
    <Link href="/">
      <a className="header-link">stephandvic.com</a>
    </Link>
  </div>
);

export default Header;
