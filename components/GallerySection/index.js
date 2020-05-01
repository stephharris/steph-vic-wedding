import classNames from 'classnames';
import { Component } from 'react'
import { useRouter } from 'next/router';

import '../../styles/index.css';
import GalleryImage from './GalleryImage';


class GallerySection extends Component {

  constructor(props) {
    super(props)

    this.state = {
      expandedImage: ''
    }

    this.handleExpandImage = this.handleExpandImage.bind(this)
  }

  componentDidMount() {
    console.log('this.state.expandedImage', this.state.expandedImage)
  }

  handleExpandImage(name) {
    console.log('this.ref', name)
    this.setState({ expandedImage: name})
  }

  render() {
    return (
      <div
        className={classNames(
          'section',
          'gallery-section'
        )}>
        <div className="content-wrapper">
           <h2 id="gallery" className="gallery-title">Gallery</h2>
           <div className="gallery-images">
             <GalleryImage label="1" handleExpandImage={this.handleExpandImage} />
             <GalleryImage label="2" handleExpandImage={this.handleExpandImage} />
             <GalleryImage label="3" handleExpandImage={this.handleExpandImage} />
           </div>
        </div>
        { Boolean(this.state.expandedImage) &&
          <div className="popup">
              <div className="popup-inner">hii</div>
          </div> }
      </div>
    )
  }
}

export default GallerySection;
