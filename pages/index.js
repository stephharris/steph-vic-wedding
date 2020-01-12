import withLayout from '../hocs/withLayout';
import HomepageTitle from '../components/HomepageTitle';
import '../styles/index.css';

const Homepage = (props) => {
  return (
    <div className="w-screen h-screen absolute -z-1 top-0">
      <HomepageTitle />
    </div>
  )
}

export default withLayout(Homepage);
