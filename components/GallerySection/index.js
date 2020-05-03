import classNames from 'classnames';
import { Component } from 'react'

import GalleryImage from './GalleryImage';

const IMAGES = [
{
    label: 'in_the_mud',
    caption: 'Moments before crawling over an 8 inch long cave centipede in Phong Nha, Vietnam.',
    imageUrl: {
      square: 'in_the_mud.png',
      original: 'in_the_mud.png'
    }
  },
  {
    label: 'sunset_rooftop',
    caption: 'Los Angeles, CA 2019',
    imageUrl: {
      square: 'sunset_rooftop.png',
      original: 'sunset_rooftop.png'
    }
  },
  {
    label: 'on_the_bridge',
    caption: 'Los Angeles Bridge, CA 2019',
    imageUrl: {
      square: 'on_the_bridge.png',
      original: 'on_the_bridge.png'
    }
  }
]

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
        { this.state.expandedImage &&
          <div onClick={this.handleCloseExpanded} className="popup">
              <div className="popup-inner">
                <img src="/sunset_rooftop.png" />
              </div>
          </div>
        }
      </div>
    )
  }
}

export default GallerySection;
