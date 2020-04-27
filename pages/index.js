import React from 'react';

import withLayout from '../hocs/withLayout';
import CrosswordInput from '../components/CrosswordInput';
import HeroSection from '../components/HeroSection';

import '../styles/index.css';

class Index extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <HeroSection />
        <div className="bio">

        </div>
      </div>
    )
  }
}


export default withLayout(Index)

/*
        // <div className="section">
        //   <HomepageTitle />
        //   <CrosswordInput />
        // </div> */
