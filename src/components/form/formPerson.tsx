import * as React from 'react';
import Button from '@material-ui/core/Button';

import { LocationOn, FileUpload} from '@material-ui/icons';
import { PeopleEntity } from '../../model';

import {GalleryComponent} from '../../common';

interface Props {
    person: PeopleEntity;
}

export const PersonFormComponent: React.StatelessComponent<Props> = (props:Props) => {

    return (
    <div  className="flex PersonComponent">
        <img className="avatar" src={props.person.picsLinks[0]} width="200px" height="200px" />
        {   
            props.person.aka ?
                <h1 className="personData">{`${props.person.namePerson} - ${props.person.aka}`}</h1>
                :
                <h1>{`${props.person.namePerson} - ${props.person.aka}`}</h1>
        }
        <div className=''>
            <label className="name" htmlFor="name">Nombre</label>
            <input type="text" className="name" id="name" placeholder={props.person.namePerson} />

            <label className="aka" htmlFor="aka">Alias</label>
            <input type="text" className="aka" id="aka" placeholder={props.person.aka} />
            <GalleryComponent list={props.person.picsLinks}/>
            <Button variant="contained" size="small" color="primary">
                <FileUpload />
                Añadir Imagen
            </Button>
        </div>
        <div className='block' >
            <h5 className='imageAddressTitle'>Domicilio</h5>
            <label className="address" htmlFor="address">Dirección </label>
            <input type="text" className="address" id="address" placeholder={props.person.address} />
            <a target="_blank" href={props.person.addressLink}> <LocationOn /> Ubicación</a>
            
            <div className='container'>
                <GalleryComponent list = {props.person.addressPic}/> 
            </div>
        </div>
    </div>
    )
}

