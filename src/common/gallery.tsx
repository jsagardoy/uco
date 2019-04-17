import * as React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

interface Props {
  list: Array<any>;
}
interface State {
  currentImage: number;
  lightboxIsOpen: boolean;
  photos: Array<any>;
}

export class GalleryComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const newArray: Array<any> = this.initialTransformArray(this.props.list);
    this.state = { currentImage: 0, lightboxIsOpen: false, photos: newArray };
  }

  public componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const newArray: Array<any> = this.initialTransformArray(this.props.list);
      const newState = {
        ...this.state,
        photos: newArray,
      };
      this.setState(newState);
    }
  }

  public initialTransformArray = (list: Array<any>) => {
    const imagesArray: Array<any> = [];
    list.map(item => {
      if (item.img.data !== null) {
        const element = {
          src: item.img.data,
          width: 1,
          height: 1,
        };
        imagesArray.push(element);
      }
    });
    return imagesArray;
  };

  public calculateSize = (): number => {
    return Math.floor(Math.random() * 4) + 1;
  };
  public openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  };
  public closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };
  public gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  };
  public gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  };
  public render() {
    return (
      <div>
        <Gallery photos={this.state.photos} onClick={this.openLightbox} columns={5} />
        <Lightbox
          images={this.state.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}
