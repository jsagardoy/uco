import * as React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


interface Props{
    list:Array<any>
  }
interface State{
    currentImage: number;
    lightboxIsOpen: boolean;
    photos:Array<any>
}

export class GalleryComponent extends React.Component<Props,State> {
  constructor(props:Props) {
    super(props);
    this.state =({ currentImage: 0,lightboxIsOpen:false, photos : this.transformArray()});
  }
  componentWillReceiveProps (){
    this.setState({
            photos:this.transformArray()
          })
  }
  transformArray = ():Array<any> => {
    var imagesArray:Array<any>=[]; 
    this.props.list.map((item)=>{
        let element={
            src: item.img.data,
            width: 1,
            height: 1,
        }
        imagesArray.push(element);
    });
    if (this.props.list.length==7){console.log(this.props.list[6].img.data);}
    
    return imagesArray;
  }
  calculateSize = ():number =>{
      return Math.floor(Math.random()*4) +1;
  }
  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox = ()=>{
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={this.state.photos} 
                onClick={this.openLightbox} 
                columns={5}
        />
        <Lightbox images={this.state.photos}
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

