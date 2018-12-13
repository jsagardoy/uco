import * as React from 'react';
import Button from '@material-ui/core/Button';

import { LocationOn } from '@material-ui/icons';
import { PeopleEntity } from '../../model';

import { GalleryComponent } from '../../common';
import { Input, InputFile } from './common';


interface Props {
    person: PeopleEntity;
    editable: boolean;
    handleChange: (fieldName: string, value: any, group: string) => void;
    handlefileSelectorChange: (fieldName: string, value: File, group: string, fileName: string) => void;
}


export const PersonFormComponent: React.StatelessComponent<Props> = (props: Props) => {

    return (
            <div className="PersonComponent">
               
                {
                    props.person.aka ?
                        <h1 className="personData">{`${props.person.namePerson} - ${props.person.aka}`}</h1>
                        :
                        <h1>{`${props.person.namePerson} - ${props.person.aka}`}</h1>
                }
                <div className='block'>
                    <Input name='namePerson'
                        editable={props.editable}
                        value={props.person.namePerson}
                        placeholder={props.person.namePerson}
                        label='Nombre'
                        group='person'
                        onChange={props.handleChange}
                    />

                    <Input name='aka'
                        editable={props.editable}
                        value={props.person.aka}
                        placeholder={props.person.aka}
                        label='Alias'
                        group='person'
                        onChange={props.handleChange}
                    />
                    <GalleryComponent list={props.person.picsLinks} />
                     <h3>Fotografías</h3>
                     {                      
                        props.editable ?
                            
                            <InputFile group='person'
                                name='picsLinks'
                                onChange={props.handlefileSelectorChange}
                            />
                            :
                            null 
                    }
                </div>
                <div className='block' >
                    <Input name='address'
                        editable={props.editable}
                        value={props.person.address}
                        placeholder={props.person.address}
                        label='Dirección'
                        group='person'
                        onChange={props.handleChange}
                    />
                    {props.editable ?

                        <Input name='addressLink'
                            editable={props.editable}
                            value={props.person.addressLink}
                            placeholder={props.person.addressLink}
                            label='URL Mapa'
                            group='person'
                            onChange={props.handleChange}
                        />
                        :
                        <a target="_blank" href={props.person.addressLink}> <LocationOn /> Ubicación</a> 
                    }
                    <h3>Fotografías domicilio</h3>
                    <GalleryComponent list={props.person.addressPic} />
                    {
                        props.editable ?
                            <InputFile group='person'
                                name='addressPic'
                                onChange={props.handlefileSelectorChange}
                            />
                            :null
                    }
                </div>
            </div>
    )
}

