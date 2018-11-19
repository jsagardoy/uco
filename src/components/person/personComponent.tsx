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

import {createNewCompany,createNewFamiliar} from '.';
import {State} from '../../pages';

interface Props {
    person: PeopleEntity;
    notEditable:boolean;
    showVehicle:boolean;
    showCompany:boolean;
    showFamiliar:boolean;
    addNewFamiliar:boolean;
    addNewCompany:boolean;
    onToggle:(string)=>void;
    onEdit:()=>void;
    handleChange: (fieldName:string, value:any, group:string) => void;
    fileSelectedHandler:(fieldName:string, value:any, group:string,fileName:string) => void;
    onSave:(person) =>void;
    onCancel:(person)=>void;
    savingNew: (fieldId: string,element:any)=>void;
    addingNew: (fieldId:keyof State)=>void;    
}



export const PersonComponent: React.StatelessComponent<Props> = (props:Props) => {
    var oldPerson:PeopleEntity = {...props.person};
    const newFamiliar =  createNewFamiliar();
    const newCompany = createNewCompany();
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
                <ul>
                {
                
                props.person.vehicles.map((vehicle)=>(
                    <VehicleComponent key={vehicle.idVehicle}
                                      vehicle={vehicle} 
                                      showVehicle={props.showVehicle}
                                      notEditable={props.notEditable}
                                      onToggle={props.onToggle}
                    />
                ))
        
                }
                </ul>

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
                    />
                   :
                    props.person.companies.map((company)=>(
                    <CompanyComponent   addNewCompany={props.addNewCompany}
                                        key={company.idCompany}
                                        company={company}
                                        showCompany={props.showCompany}
                                        savingNew={props.savingNew}
                                        onToggle={props.onToggle}
                    />
                    )
                    )
                }
                
                </ul>
                {  
                    props.showCompany?
                    <Button onClick={(e)=>props.addingNew}>Añadir nueva Empresa</Button>
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
                    />
                    :
                    <>
                    {   
                        props.person.familiars.map((familiar)=>(
                        <FamiliarComponent  key={familiar.idFamiliar}
                                            notEditable={props.notEditable}
                                            familiar={familiar}
                                            showFamiliar={props.showFamiliar}
                                            onToggle={props.onToggle}
                                            savingNew={props.savingNew}
                                            addNew={props.addNewFamiliar}
                        />))
                    }
                    {props.showFamiliar?
                        <Button onClick={(e)=>props.addingNew}>Añadir nuevo Familiar</Button>
                        :
                        <></>
                    }
                    
                    </>
                } 
            </fieldset>
        </form>

    );
}
