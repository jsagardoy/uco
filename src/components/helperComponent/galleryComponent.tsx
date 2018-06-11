import * as React from  'react';
import Gallery  from 'react-grid-gallery';

interface Props{
    imagesList:Array<string>;

}

export const GalleryComponent:React.StatelessComponent<Props> = (props) =>{
    
    const thumbnailWidth=200;
    const thumbnailHeight=200;
    const resultList=[];
    props.imagesList.map((image) => resultList.push(
        {
            src: image,
            thumbnail:image,
            thumbnailHeight:thumbnailHeight,
            thumbnailWidth:thumbnailWidth
        }
    )
    )
    return(
        <Gallery images={resultList}/>
    )
}