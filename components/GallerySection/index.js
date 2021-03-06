import classNames from 'classnames';
import { Component } from 'react';
import { get, find } from 'lodash';

import GalleryImage from './GalleryImage';
import CloseIcon from '../CloseIcon';
import IMAGES from './IMAGES';

class GallerySection extends Component {

  constructor(props) {
    super(props)

    this.state = {
      expandedImage: ''
    }

    this.handleExpandImage = this.handleExpandImage.bind(this)
    this.handleCloseExpanded = this.handleCloseExpanded.bind(this)
    this.renderImageGallery = this.renderImageGallery.bind(this)
  }

  handleCloseExpanded() {
    this.setState({ expandedImage: '' })
  }

  handleExpandImage(name) {
    this.setState({ expandedImage: name})
  }

  renderExpandedImage() {
    const image = find(IMAGES, { label: this.state.expandedImage })
    const imageUrl = image && (get(image, 'imageUrl.original') || get(image, 'imageUrl.square'))

    return (
      <div className="popup">
          <div className="popup-inner">
            <CloseIcon handleClose={this.handleCloseExpanded} />
            <img src={`${imageUrl}`} />
          </div>
      </div>
    )
  }

  renderImageGallery() {
    return IMAGES.map((image) => {
      return <GalleryImage key={image.label} label={image.label} imageUrl={image.imageUrl.square} handleExpandImage={this.handleExpandImage} />
    })
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
           { this.renderImageGallery() }
           </div>
        </div>
        { this.state.expandedImage && this.renderExpandedImage() }
      </div>
    )
  }
}

export default GallerySection;
