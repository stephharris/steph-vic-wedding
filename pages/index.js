import React from 'react';

import Fonts from '../components/Fonts';
import withLayout from '../hocs/withLayout';
import HomepageTitle from '../components/HomepageTitle';
import CrosswordInput from '../components/CrosswordInput';

import '../styles/index.css';

class Index extends React.Component {
  componentDidMount () {
    Fonts()
  }

  render() {
    return (
      <div className="wrapper">
        <div className="hero-section">
          <div className="hero-title">
            <h1 className="title-text">Stephanie Harris</h1>
            <h1 className="title-text">- and -</h1>
            <h1 className="title-text">Victor Ma</h1>
          </div>
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
