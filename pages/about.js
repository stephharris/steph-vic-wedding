import withLayout from '../hocs/withLayout';
import Image from '../components/Image';
import '../styles/index.css';

const About = () => (
  <div className="p-12 sm:p-8">
    This is the about page.
    <Image />
  </div>
)

export default withLayout(About);
