import React from 'react';

import withLayout from '../hocs/withLayout';
import HeroSection from '../components/HeroSection';
import OurStory from '../components/OurStory';
import GallerySection from '../components/GallerySection';
import CrosswordSection from '../components/CrosswordSection';

class Index extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <HeroSection />
        <OurStory />
        <CrosswordSection />
        <GallerySection />
      </div>
    )
  }
}


export default withLayout(Index);
