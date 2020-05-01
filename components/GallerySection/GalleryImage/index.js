import { Component } from 'react'

import '../../../styles/index.css';

class GalleryImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleExpandImage, label } = this.props

    return (
      <img onClick={() => handleExpandImage(label)} className="gallery-image" src="/romance_square.png" alt="Romantic Hero Image of Steph and Vic" />
    )
  }
}

export default GalleryImage;
