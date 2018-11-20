import * as React from 'react';
import {PeopleEntity, FamiliarEntity, CompanyEntity} from '../../model';
import {Edit,Save,Cancel,ExpandMore, ExpandLess} from '@material-ui/icons';
import Button from '@material-ui/core/Button';

import {PersonFormComponent} from '../form';

import {VehicleComponent} from '../vehicles';
import {CompanyComponent} from '../company';
import {RutinesComponent} from '../rutines';
import {LinksComponent} from '../links';

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
    onEdit:()=>void;
    handleChange: (fieldName:string, value:any, group:string) => void;
    fileSelectedHandler:(fieldName:string, value:any, group:string,fileName:string) => void;
    onSave:(person) =>void;
    onCancel:(person)=>void;
    savingNew: (fieldId: string,element:any)=>void;
    addingNew: (fieldId: string)=>void; 
    removeFromList: (fieldId:string, index:number) =>void;   
}



export const PersonComponent: React.StatelessComponent<Props> = (props:Props) => {
    var oldPerson:PeopleEntity = {...props.person};
    const newFamiliar =  createNewFamiliar();
    const newCompany = createNewCompany();
    const newVehicle = createNewVehicle();
    return(
        
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
                    {props.showFamiliar?
                        <Button onClick={(e)=>props.addingNew('addNewFamiliar')}>Añadir nuevo Familiar</Button>
                        :
                        <></>
                    }
                    
                    </>
                } 
            </fieldset>
        </form>

    );
}
