import * as React from 'react';

import {PeopleEntity} from '../../model';


import ImageUploader from 'react-images-upload';

import FileUpload from '@material-ui/icons/FileUpload';
import Button from '@material-ui/core/Button';
import { GalleryComponent } from '.';

interface Props {
    person: PeopleEntity;
    editable:boolean
}

export const PersonComponent: React.StatelessComponent<Props> = (props:Props) => {
    return(
        <form>
            <fieldset disabled={props.editable}>
                <div className='form-group'>
                    <label  className="col-2" htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder={props.person.name}/>
                </div>
                <div className='form-group'>
                    <label className="col-10" htmlFor="aka">Alias</label>
                    <input type="text" className="form-control" id="aka" placeholder={props.person.aka}/>
                </div>
              
               <div className='form-group'>
                    <GalleryComponent imagesList={props.person.picsLinks} />
                </div> 
            </fieldset>
        </form>
    );
}
