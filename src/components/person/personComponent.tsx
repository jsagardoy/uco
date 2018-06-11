import * as React from 'react';
import {PeopleEntity, CompanyEntity} from '../../model';
import { LocationOn, FileUpload, ExpandMore, ExpandLess } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { GalleryComponent } from '../helperComponent';
import {VehicleComponent} from '../vehicles';
import {CompanyComponent} from '../company';


interface Props {
    person: PeopleEntity;
    notEditable:boolean;
    showVehicle:boolean;
    onToggle:(string)=>void;
    
}

export const PersonComponent: React.StatelessComponent<Props> = (props:Props) => {
    return(
        <form className="d-flex justify-content-center align-items-center container">
            <fieldset className="col-10" disabled={props.notEditable}>
                <div className="form-group">
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
                </div>
                <div id="address" className='form-group'> 
                    <label className="col-10" htmlFor="address">Dirección</label>
                    <input type="text" className="form-control" id="address" placeholder={props.person.address}/>
                    <a target="_blank" href={props.person.addressLink}><LocationOn/> Ubicación</a> 
                </div>
                <div id="addressGallery" className='component col-12'>
                    <GalleryComponent imagesList={props.person.addressPic} />
                </div>
                <div className="vehicle">
                    <Button onClick={(event)=>props.onToggle("vehicle")}>
                    <span>Vehículos</span>
                        {props.showVehicle? 
                            <ExpandLess/>:
                            <ExpandMore/>
                        }
                    </Button>
                    {
                        props.showVehicle ? 
                            <div id="vehicles" className='vehicleList'>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                    {
                                        props.person.vehicles.map((vehicle)=>
                                            <VehicleComponent key={vehicle.id} vehicle={vehicle}/>
                                        )
                                    }
                                    </li>
                                </ul>
                            </div>
                    :
                    <div>
                    </div>
                    
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
