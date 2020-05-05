import React, { Component } from "react";
import { connect } from "react-redux";

class ImagesContainer extends Component {
  constructor({ getImages, images }) {
    super();
    if (images.length === 0) getImages();
  }

  render() {
    const { images } = this.props;
    return (
      <div>
        <ul className="row">
          {images.map((image, _idx) => (
            <li className="col s12 m4" key={_idx}>
              <div className="card">
                <div className="card-image">
                  <img src={image.urls.raw} alt={image.description} />
                  <span className="card-title">{image.description}</span>
                </div>
                <div className="card-content">
                  <p>{image.alt_description}</p>
                </div>
                <div className="card-action">
                  <a href={image.links.download}>Download</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className="btn" onClick={() => this.props.getImages()}>
          <i className="material-icons">add</i>
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ images }) => ({ images });
const mapDispatchToProps = (dispatch) => ({
  getImages: () => dispatch({ type: "IMAGES_SUCCESS" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer);
