import React from 'react';

import withLayout from '../hocs/withLayout';
import HeroSection from '../components/HeroSection';
import OurStory from '../components/OurStory';
import GallerySection from '../components/GallerySection';
import CrosswordSection from '../components/CrosswordSection';

import '../styles/index.css';

class Index extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <HeroSection />
        <OurStory />
        <GallerySection />
        <CrosswordSection />
      </div>
    )
  }
}


export default withLayout(Index);
