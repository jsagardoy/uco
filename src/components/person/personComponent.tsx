import * as React from 'react';
import {Link} from 'react-router-dom';
import {PeopleEntity, CompanyEntity} from '../../model';


import ImageUploader from 'react-images-upload';

import FileUpload from '@material-ui/icons/FileUpload';
import Button from '@material-ui/core/Button';
import { GalleryComponent } from '../helperComponent';
import {VehicleComponent} from '../vehicles';
import {CompanyComponent} from '../company';


interface Props {
    person: PeopleEntity;
    editable:boolean
}

export const PersonComponent: React.StatelessComponent<Props> = (props:Props) => {
    return(
        <form>
            <fieldset disabled={props.editable}>
                <div id="name" className='form-group'>
                    <label  className="col-2" htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder={props.person.name}/>
                </div>
                <div id="alias" className='form-group'>
                    <label className="col-10" htmlFor="aka">Alias</label>
                    <input type="text" className="form-control" id="aka" placeholder={props.person.aka}/>
                </div>
               <div id="uploadPic"className='col-12'>
                    <Button variant="contained" size="small" color="primary"> 
                        <FileUpload />
                        Añadir Imagen 
                    </Button>
                </div>
               <div id="personGallery" className='form-group'>
                    <GalleryComponent imagesList={props.person.picsLinks} />
                </div> 
                
                <div id="address" className='form-group'> 
                    <label className="col-10" htmlFor="address">Dirección</label>
                    <input type="text" className="form-control" id="address" placeholder={props.person.address}/>
                    <a target="_blank" href={props.person.addressLink}>Ubicación</a>
                </div>
                <div id="addressGallery" className='form-group'>
                    <GalleryComponent imagesList={props.person.addressPic} />
                </div>
                <div id="vehicles" className='form-group'>
                    {
                        props.person.vehicles.map((vehicle)=>
                            <VehicleComponent key={vehicle.id} vehicle={vehicle}/>
                        )
                    }
                </div>
                <div id="companies" className='form-group'>
                    {
                        props.person.companies.map((company:CompanyEntity)=>
                        <CompanyComponent key={company.id} company={company}/>
                    )
                    }
                </div>
                <div id="rutines" className='form-group'>
                    <label className="col-10" htmlFor="rutines">Rutinas</label>
                    <input type="text" className="form-control" id="rutines" placeholder={props.person.aka}/>
                </div>
                <div id="links" className='form-group'>
                    <label className="col-10" htmlFor="links">Relaciones</label>
                    <input type="text" className="form-control" id="links" placeholder={props.person.aka}/>
                </div>
                <div id="family" className='form-group'>
                    <label className="col-10" htmlFor="family">Familiares</label>
                    <input type="text" className="form-control" id="family" placeholder={props.person.aka}/>
                </div>
            </fieldset>
        </form>
    );
}
