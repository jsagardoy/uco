import * as React from 'react';
import Button from '@material-ui/core/Button';

import { LocationOn} from '@material-ui/icons';
import { PeopleEntity } from '../../model';

import {GalleryComponent} from '../../common';
import { Input,InputFile } from './common';


interface Props {
    person: PeopleEntity;
    notEditable:boolean;
    handleChange:(fieldName:string,value:any,group:string)=>void;
    handlefileSelectorChange:(fieldName:string,value:File,group:string,fileName:string)=>void;
}


export const PersonFormComponent: React.StatelessComponent<Props> = (props:Props) => {

    return (
    <div  className="PersonComponent">
        <img className="avatar" src={props.person.picsLinks[0].img.data} width="200px" height="200px" />
        {   
            props.person.aka ?
                <h1 className="personData">{`${props.person.namePerson} - ${props.person.aka}`}</h1>
                :
                <h1>{`${props.person.namePerson} - ${props.person.aka}`}</h1>
        }
        <div className='block'>
            <Input  name='namePerson'
                    value={props.person.namePerson}
                    placeholder={props.person.namePerson} 
                    label='Nombre'
                    group='person'
                    onChange={props.handleChange}
            />

            <Input  name='aka'
                    value={props.person.aka}
                    placeholder={props.person.aka} 
                    label='Alias'
                    group='person'
                    onChange={props.handleChange}
            />
            <GalleryComponent list={props.person.picsLinks}/>
            {//show button only if in edditing mode
            }
            {
            props.notEditable?
            null:
            <InputFile group='person'
                       name='picsLinks'
                       onChange={props.handlefileSelectorChange}     
            />   
            }
        </div>
        <div className='block' >
            <h5 className='imageAddressTitle'>Domicilio</h5>
            <Input  name='address'
                    value={props.person.address}
                    placeholder={props.person.address} 
                    label='Dirección'
                    group='person'
                    onChange={props.handleChange}
            />
            {props.notEditable?
            <a target="_blank" href={props.person.addressLink}> <LocationOn /> Ubicación</a>:
            <Input  name='addressLink'
                    value={props.person.addressLink}
                    placeholder={props.person.addressLink} 
                    label='URL Mapa'
                    group='person'
                    onChange={props.handleChange}
            />
            } 

            <GalleryComponent list = {props.person.addressPic}/>
            {
            props.notEditable?
            null:
            <InputFile group='person'
                       name='addressPic'
                       onChange={props.handlefileSelectorChange}     
            />   
            }
        </div>
    </div>
    )
}

