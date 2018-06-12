import * as React from 'react';
import {PeopleEntity, CompanyEntity} from '../../model';
import { LocationOn, FileUpload, ExpandMore, ExpandLess } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { GalleryComponent } from '../helperComponent';

import {VehicleComponent} from '../vehicles';
import {FamiliarComponent} from '../familiar';
import {CompanyComponent} from '../company';

import "../../content/site.css";


interface Props {
    person: PeopleEntity;
    notEditable:boolean;
    showVehicle:boolean;
    showCompany:boolean;
    showFamiliar:boolean;
    onToggle:(string)=>void;
    
}

export const PersonComponent: React.StatelessComponent<Props> = (props:Props) => {
    return(
        
        <form className="d-flex justify-content-center align-items-center flex-column">
            <fieldset className="col-10" disabled={props.notEditable}>
            <div className="d-flex d-inline-flex">
                <img className="avatar" src={props.person.picsLinks[0]} width="200px" height="200px" />
                {
                    props.person.aka?
                    <h1 className="col-8">{`${props.person.name} - ${props.person.aka}`}</h1>
                    :
                    <h1>{`${props.person.name} - ${props.person.aka}`}</h1>
                }
            </div>

            <div className="d-flex flex-column">
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

                <div id="personGallery" className='gallery'>
                    <GalleryComponent imagesList={props.person.picsLinks} />
                </div> 
            

                <div id="address" className='form-group'> 
                    <label className="col-10" htmlFor="address">Dirección</label>
                    <input type="text" className="form-control" id="address" placeholder={props.person.address}/>
                    <a target="_blank" href={props.person.addressLink}><LocationOn/> Ubicación</a> 
                </div>

                <div id="addressGallery" className='gallery'>
                    <GalleryComponent imagesList={props.person.addressPic} />
                </div>

                <div className='vehicle col-12'>
                    <button type="button" className="buttonVehicle" onClick={(event)=>props.onToggle("vehicle")}>
                        {props.showVehicle? 
                            <ExpandLess/>:
                            <ExpandMore/>
                        }
                        <span>Vehículos</span>
                    </button>
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
                    <>
                    </>
                    }
            
                </div>

                <div className="companies-component">
                    <Button onClick={(event)=>props.onToggle("company")}>
                        <span>Empresas</span>
                            {props.showCompany? 
                                <ExpandLess/>:
                                <ExpandMore/>
                            }
                    </Button>
                    {
                    props.showCompany?
                        <div id="companies" className='form-group'>
                            {
                                props.person.companies.map((company:CompanyEntity)=>
                                <CompanyComponent key={company.id} company={company}/>
                            )
                            }
                        </div>
                    :
                        <>
                        </>
                    }
                </div>

                <div id="rutines" className='form-group'>
                    <label className="col-10" htmlFor="rutines">Rutinas</label>
                    <ul className="rutineList">
                        
                            {
                                props.person.rutine.map((rut)=> 
                                <li key={rut}>{rut}</li>
                                )
                            }
                    
                    </ul>
                    {
                        //AÑADIR AQUÍ LOS BOTONES DE AÑADIR Y ELIMINAR TAREA
                    }
                </div>

                <div id="links" className='form-group'>
                    <label className="col-10" htmlFor="links">Relaciones</label>
                    <ul className="linksList">
                            {props.person.links.map((link)=> 
                                <li key={link}>
                                    {link}
                                </li>)}
                    </ul>
                </div>

                <div className='form-group'>

                    <Button onClick={(event)=>props.onToggle("familiar")}>
                        <span>Familiares</span>
                            {props.showFamiliar? 
                                <ExpandLess/>:
                                <ExpandMore/>
                            }
                    </Button>
                    {
                        props.showFamiliar?
                        <ul className="familiarList">
                        {
                            props.person.familiars.map((familiar)=>
                            <li key={familiar.id}>
                                <FamiliarComponent familiar={familiar}/>
                            </li>
                        )
                        }
                        </ul>
                        :
                        <>
                        </>
                    } 
                </div>
            </div>
            </fieldset>
        </form>

    );
}
