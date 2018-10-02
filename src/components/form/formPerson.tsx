import * as React from 'react';
import Button from '@material-ui/core/Button';
import { LocationOn, FileUpload} from '@material-ui/icons';
import { PeopleEntity } from '../../model';
//import { GalleryComponent } from '../helperComponent';
import {Carousel} from 'react-responsive-carousel';

interface Props {
    person: PeopleEntity;
}

export const PersonFormComponent: React.StatelessComponent<Props> = (props:Props) => {
    return (
    <div className="PersonComponent">
        <img className="avatar" src={props.person.picsLinks[0]} width="200px" height="200px" />
        {
            props.person.aka ?
                <h1 className="personData">{`${props.person.namePerson} - ${props.person.aka}`}</h1>
                :
                <h1>{`${props.person.namePerson} - ${props.person.aka}`}</h1>
        }
        <label className="name" htmlFor="name">Nombre</label>
        <input type="text" className="name" id="name" placeholder={props.person.namePerson} />

        <label className="aka" htmlFor="aka">Alias</label>
        <input type="text" className="aka" id="aka" placeholder={props.person.aka} />

        <Button variant="contained" size="small" color="primary">
            <FileUpload />
            Añadir Imagen
                    </Button>
        {/* <GalleryComponent imagesList={props.person.picsLinks} /> */}
            
            <Carousel autoPlay>
            {
            props.person.picsLinks.map((pic) =>{
                <div className="personPic">
                    <img src={pic}/>
                </div>
            }
            )
            } 
            </Carousel>
        <label className="address" htmlFor="address">Dirección</label>
        <input type="text" className="address" id="address" placeholder={props.person.address} />
        <a target="_blank" href={props.person.addressLink}> <LocationOn /> Ubicación</a>
        <Carousel autoPlay>
                {
                    props.person.addressPic.map((pic)=>{
                        <div className="addressPic"> 
                            <img src={pic} />
                        </div>
                    })
                }
        </Carousel>
       {/*  <GalleryComponent imagesList={props.person.addressPic} /> */}
    </div>
    )
}

