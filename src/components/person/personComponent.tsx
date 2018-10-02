import * as React from 'react';
import {PeopleEntity} from '../../model';
/* import {ExpandMore, ExpandLess } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {FamiliarComponent} from '../familiar'; */

import {
        PersonFormComponent,
        VehicleFormComponent,
        CompanyFormComponent,
        RutinesFormComponent,
        LinksFormComponent,
        FamiliarFormComponent
        } from '../form';

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
        
        <form className="formPerson">
            <fieldset disabled={props.notEditable}>
                <PersonFormComponent person={props.person} 
                />
                
                <VehicleFormComponent person={props.person} 
                                      showVehicle={props.showVehicle}
                                      onToggle={props.onToggle}
                />
                
                <CompanyFormComponent person={props.person}
                                      showCompany={props.showCompany}
                                      onToggle={props.onToggle}
                />

                <RutinesFormComponent person={props.person} 
                />

                <LinksFormComponent person={props.person}
                />
                
                <FamiliarFormComponent person={props.person}
                                       showFamiliar={props.showFamiliar}
                                       onToggle={props.onToggle}
                />
                {/* <div className="PersonComponent">
                    <img className="avatar" src={props.person.picsLinks[0]} width="200px" height="200px" />
                    {
                        props.person.aka?
                        <h1 className="col-8">{`${props.person.namePerson} - ${props.person.aka}`}</h1>
                        :
                        <h1>{`${props.person.namePerson} - ${props.person.aka}`}</h1>
                    }
                    <label  className="col-2" htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder={props.person.namePerson}/>

                    <label className="col-10" htmlFor="aka">Alias</label>
                    <input type="text" className="form-control" id="aka" placeholder={props.person.aka}/>

                    <Button variant="contained" size="small" color="primary"> 
                            <FileUpload />
                            Añadir Imagen 
                    </Button>

                    <GalleryComponent imagesList={props.person.picsLinks} />
                    <div className='address-component'></div>
                        <label className="col-10" htmlFor="address">Dirección</label>
                        <input type="text" className="form-control" id="address" placeholder={props.person.address}/>
                        <a target="_blank" href={props.person.addressLink}> <LocationOn/> Ubicación</a> 
                        <GalleryComponent imagesList={props.person.addressPic} />
                    </div> */}
                

                {/* <div className='vehicle-component'>
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
                                            <VehicleComponent key={vehicle.idVehicle} vehicle={vehicle}/>
                                        )
                                    }
                                    </li>
                                </ul>
                            </div>
                    :
                    <>
                    </>
                    }
                </div> */}
            
                {/* <div className="companies-component">
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
                                    <CompanyComponent key={company.idCompany} company={company}/>
                                )
                                }
                            </div>
                        :
                            <>
                            </>
                        }
                    </div> */}

               {/*  <div id="rutines-component" className="rutines-component" >
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
 */}
                {/* <div id="links" className='links'>
                        <label className="col-10" htmlFor="links">Relaciones</label>
                        <ul className="linksList">
                                {props.person.links.map((link)=> 
                                    <li key={link}>
                                        {link}
                                    </li>)}
                        </ul>
                    </div> */}

                {/* <div id='familiars' className='familiars'>

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
                            <li key={familiar.idFamiliar}>
                                <FamiliarComponent familiar={familiar}/>
                            </li>
                        )
                        }
                        </ul>
                        :
                        <>
                        </>
                    } 
                </div> */}
            </fieldset>
        </form>

    );
}
