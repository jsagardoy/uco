import * as React from 'react';
<<<<<<< HEAD
import {PeopleEntity, CompanyEntity} from '../../model';
import { LocationOn, FileUpload, ExpandMore, ExpandLess } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { GalleryComponent } from '../helperComponent';

import {VehicleComponent} from '../vehicles';
import {FamiliarComponent} from '../familiar';
import {CompanyComponent} from '../company';
=======
<<<<<<< HEAD
import {PeopleEntity, FamiliarEntity, CompanyEntity} from '../../model';
import {Edit,Save,Cancel,ExpandMore, ExpandLess} from '@material-ui/icons';
import Button from '@material-ui/core/Button';

import {PersonFormComponent} from '../form';

import {VehicleComponent} from '../vehicles';
import {CompanyComponent} from '../company';
import {RutinesComponent} from '../rutines';
import {LinksComponent} from '../links';
=======
import {PeopleEntity, CompanyEntity} from '../../model';
import { LocationOn, FileUpload, ExpandMore, ExpandLess } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { GalleryComponent } from '../helperComponent';

import {VehicleComponent} from '../vehicles';
import {FamiliarComponent} from '../familiar';
import {CompanyComponent} from '../company';
>>>>>>> no message
>>>>>>> master

import "../../content/site.css";
import { dataType } from '../../common';
import { FamiliarComponent } from '../familiar';

import {createNewCompany,createNewFamiliar, createNewVehicle} from '.';



interface Props {
    person: PeopleEntity;
    notEditable:boolean;
    showVehicle:boolean;
    showCompany:boolean;
    showFamiliar:boolean;
    addNewFamiliar:boolean;
    addNewCompany:boolean;
    addNewVehicle:boolean;
    onToggle:(string)=>void;
<<<<<<< HEAD
    handleChange: (e)=>void;
=======
<<<<<<< HEAD
    onEdit:()=>void;
    handleChange: (fieldName:string, value:any, group:string) => void;
    fileSelectedHandler:(fieldName:string, value:any, group:string,fileName:string) => void;
    onSave:(person) =>void;
    onCancel:(person)=>void;
    savingNew: (fieldId: string,element:any)=>void;
    addingNew: (fieldId: string)=>void; 
    removeFromList: (fieldId:string, index:number) =>void;   
=======
    handleChange: (e)=>void;
>>>>>>> no message
>>>>>>> master
}



export const PersonComponent: React.StatelessComponent<Props> = (props:Props) => {
    var oldPerson:PeopleEntity = {...props.person};
    const newFamiliar =  createNewFamiliar();
    const newCompany = createNewCompany();
    const newVehicle = createNewVehicle();
    return(
        
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <form className="formPerson" encType="multipart/form-data">
            <fieldset disabled={props.notEditable}>
                {
                    props.notEditable?
                <Button onClick={props.onEdit}>
                    <Edit />
                </Button>
                :
                <>
                    <Button onClick={()=>props.onSave(oldPerson)}>
                        <Save />
                    </Button>
                    <Button onClick={()=>props.onCancel(oldPerson)}>
                        <Cancel />
                    </Button>  
                </>
                }
                 <PersonFormComponent   person={props.person}
                                        notEditable={props.notEditable}
                                        handleChange={props.handleChange} 
                                        handlefileSelectorChange={props.fileSelectedHandler}
                /> 
 
                {
                <Button className="buttonVehicle" onClick={(event) => props.onToggle(dataType.VEHICLE)}>
                <span>Vehículos</span>
                    {props.showVehicle ?
                        <ExpandLess /> :
                        <ExpandMore />
                    }
                </Button> 
                }

                {
                    props.addNewVehicle? 
                        <VehicleComponent   key={newVehicle.idVehicle}
                                            vehicle={newVehicle} 
                                            showVehicle={props.showVehicle}
                                            notEditable={props.notEditable}
                                            onToggle={props.onToggle}
                                            addNew={props.addNewVehicle}
                                            savingNew={props.savingNew}
                                            removeFromList={props.removeFromList}
                        />
                :
                <ul>
                    {
                    props.person.vehicles.map((vehicle, index)=>(
                        <VehicleComponent key={vehicle.idVehicle}
                                        vehicle={vehicle}
                                        index={index} 
                                        showVehicle={props.showVehicle}
                                        notEditable={props.notEditable}
                                        onToggle={props.onToggle}
                                        addNew={props.addNewVehicle}
                                        savingNew={props.savingNew}
                                        removeFromList={props.removeFromList}
                        />
                    ))
                    }
                </ul>
                }

                {
                    props.showVehicle?
                    <Button onClick={(e)=>props.addingNew("addNewVehicle")}>Añadir nuevo vehiculo</Button>
                    :
                    <></>
                }

                <Button onClick={(event)=>props.onToggle(dataType.COMPANY)}>
                    <span>Empresas</span>
                    {
                        props.showCompany? 
                        <ExpandLess/>:
                        <ExpandMore/>
                    }
                </Button>
                <ul>
                {
                    props.addNewCompany?        
                    <CompanyComponent   addNewCompany={props.addNewCompany}
                                        company={newCompany}
                                        showCompany={props.showCompany}
                                        savingNew={props.savingNew}
                                        onToggle={props.onToggle}
                                        removeFromList={props.removeFromList}
                    />
                   :
                    props.person.companies.map((company,index)=>(
                    <CompanyComponent   addNewCompany={props.addNewCompany}
                                        key={company.idCompany}
                                        index={index}
                                        company={company}
                                        showCompany={props.showCompany}
                                        savingNew={props.savingNew}
                                        onToggle={props.onToggle}
                                        removeFromList={props.removeFromList}
                    />
                    )
                    )
                }
                
                </ul>
                {  
                    props.showCompany?
                    <Button onClick={(e)=>props.addingNew("addNewCompany")}>Añadir nueva Empresa</Button>
                    :
                    <></>
                }

                
    
                <RutinesComponent rutines={props.person.rutines}
                />

                <LinksComponent links={props.person.links}
                />
                <Button onClick={(event) => props.onToggle(dataType.FAMILIAR)}>
                    <span>Familiares</span>
                    {props.showFamiliar ?
                    <ExpandLess /> :
                    <ExpandMore />
                }
                </Button>
                {
                    props.addNewFamiliar?
                    <FamiliarComponent  notEditable={props.notEditable}
                                        familiar={newFamiliar}
                                        showFamiliar={props.showFamiliar}
                                        onToggle={props.onToggle}
                                        savingNew={props.savingNew}
                                        addNew={props.addNewFamiliar}
                                        removeFromList={props.removeFromList}
                                        
                    />
=======
>>>>>>> master
        <form className="d-flex justify-content-center align-items-center flex-column" >
            <fieldset className="col-10" disabled={props.notEditable}>
            <div className="d-flex d-inline-flex">
                <img className="avatar" src={props.person.picsLinks[0]} width="200px" height="200px" />
                {
                    props.person.aka?
                    <h1 className="col-8">{`${props.person.namePerson} - ${props.person.aka}`}</h1>
                    :
                    <h1>{`${props.person.namePerson} - ${props.person.aka}`}</h1>
                }
            </div>
<<<<<<< HEAD

            <div className="d-flex flex-column">
                <div id="name" className='form-group'>
                    <label  className="col-2" htmlFor="namePerson">Nombre</label>
                    <input type="text" className="form-control" id="namePerson" defaultValue={props.person.namePerson} onBlur={props.handleChange}/>
                </div>

=======

            <div className="d-flex flex-column">
                <div id="name" className='form-group'>
                    <label  className="col-2" htmlFor="namePerson">Nombre</label>
                    <input type="text" className="form-control" id="namePerson" defaultValue={props.person.namePerson} onBlur={props.handleChange}/>
                </div>

>>>>>>> master
                <div id="alias" className='form-group'>
                    <label className="col-10" htmlFor="aka">Alias</label>
                    <input type="text" className="form-control" id="aka" defaultValue={props.person.aka} onBlur={props.handleChange}/>
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
                    <input type="text" className="form-control" id="address" defaultValue={props.person.address} onBlur={props.handleChange}/>
                    <a target="_blank" href={props.person.addressLink}><LocationOn/> Ubicación</a>
                    <div hidden={props.notEditable}>
                        <label className="col-10" htmlFor="addressLink">URL Dirección</label>
                        <input type="text" className="form-control" id="addressLink" defaultValue={props.person.addressLink} onBlur={props.handleChange}/> 
                    </div>
                     
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
                                            <VehicleComponent key={vehicle.idVehicle} vehicle={vehicle}/>
                                        )
                                    }
                                    </li>
                                </ul>
                            </div>
>>>>>>> no message
                    :
                    <>
                    {   
                        props.person.familiars.map((familiar,index)=>(
                        <FamiliarComponent  key={familiar.idFamiliar}
                                            notEditable={props.notEditable}
                                            familiar={familiar}
                                            showFamiliar={props.showFamiliar}
                                            onToggle={props.onToggle}
                                            savingNew={props.savingNew}
                                            addNew={props.addNewFamiliar}
                                            removeFromList={props.removeFromList}
                                            index={index}
                        />
                        ))
                    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    {props.showFamiliar?
                        <Button onClick={(e)=>props.addingNew('addNewFamiliar')}>Añadir nuevo Familiar</Button>
                        :
                        <></>
                    }
                    
                    </>
                } 
=======
>>>>>>> master
            
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
                                <CompanyComponent key={company.idCompany} company={company}/>
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
                </div>
            </div>
<<<<<<< HEAD
=======
>>>>>>> no message
>>>>>>> master
            </fieldset>
        </form>

    );
}
