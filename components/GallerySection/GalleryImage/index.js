import { Component } from 'react';

class GalleryImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleExpandImage, label, imageUrl } = this.props

    return (
      <div className="gallery-image">
        <img onClick={() => handleExpandImage(label)} src={imageUrl} alt="Romantic Hero Image of Steph and Vic" />
      </div>
    )
  }
}

export default GalleryImage;
