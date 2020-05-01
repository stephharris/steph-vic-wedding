import React from 'react';

import withLayout from '../hocs/withLayout';
import CrosswordInput from '../components/CrosswordInput';
import HeroSection from '../components/HeroSection';
import OurStory from '../components/OurStory';
import GallerySection from '../components/GallerySection';

import '../styles/index.css';

class Index extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <HeroSection />
        <OurStory />
        <GallerySection />
      </div>
    )
  }
}


export default withLayout(Index);
