import * as React from 'react';
import {PeopleEntity, FamiliarEntity} from '../../model';
import {Edit,Save,Cancel,ExpandMore, ExpandLess} from '@material-ui/icons';
import Button from '@material-ui/core/Button';

import {
        PersonFormComponent, FamiliarFormComponent,
        } from '../form';

import {VehicleComponent} from '../vehicles';
import {CompanyComponent} from '../company';
import {RutinesComponent} from '../rutines';
import {LinksComponent} from '../links';

import "../../content/site.css";
import { dataType } from '../../common';
import { FamiliarComponent } from '../familiar';


interface Props {
    person: PeopleEntity;
    notEditable:boolean;
    showVehicle:boolean;
    showCompany:boolean;
    showFamiliar:boolean;
    addNew:boolean;
    onToggle:(string)=>void;
    onEdit:()=>void;
    handleChange: (fieldName:string, value:any, group:string) => void;
    fileSelectedHandler:(fieldName:string, value:any, group:string,fileName:string) => void;
    onSave:(person) =>void;
    onCancel:(person)=>void;
    savingNew:(family:FamiliarEntity)=>void;
    addingNew:()=>void;
  
}
const createNewFamiliar = ():FamiliarEntity =>(
    {
        idFamiliar: Math.pow(Math.round(Math.random()*100),2) ,
        nameFamiliar: '',
        familiarPics: [{img:{data:null,contentType:null}}],
        familiarAddress: '',
        addressLink:'',
        related: ''
    }
)

export const PersonComponent: React.StatelessComponent<Props> = (props:Props) => {
    var oldPerson:PeopleEntity = {...props.person};
    const newFamiliar =  createNewFamiliar();
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
                props.person.companies.map((company)=>(
                    <CompanyComponent   key={company.idCompany}
                                        company={company}
                                        showCompany={props.showCompany}
                                        onToggle={props.onToggle}
                />
                ))
                }
                </ul>
    
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
                    props.addNew?
                    <FamiliarComponent  notEditable={props.notEditable}
                                        familiar={newFamiliar}
                                        showFamiliar={props.showFamiliar}
                                        onToggle={props.onToggle}
                                        savingNew={props.savingNew}
                                        addNew={props.addNew}
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
                                            addNew={props.addNew}
                        />))
                    }
                    {props.showFamiliar?
                        <Button onClick={props.addingNew}>Añadir nuevo Familiar</Button>
                        :
                        <></>
                    }
                    
                    </>
                } 
            </fieldset>
        </form>

    );
}
