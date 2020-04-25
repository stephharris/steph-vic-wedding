import withLayout from '../hocs/withLayout';
import HomepageTitle from '../components/HomepageTitle';
import CrosswordInput from '../components/CrosswordInput';
import '../styles/index.css';

const Homepage = (props) => {
  return (
    <div className="w-screen h-screen">
      <HomepageTitle />
      <CrosswordInput />
    </div>
  )
}

export default withLayout(Homepage);
