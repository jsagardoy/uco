

import * as React from 'react';
import { PeopleEntity, removeElementFromArray } from '../../model';


import { fileSelectedHandler, handleChange } from '../../common';
import { PersonFormComponent } from '../form';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {Save,Edit,Cancel,Delete } from '@material-ui/icons';


interface Props {
    person: PeopleEntity;
    showPerson: boolean;
    addNew: boolean;
    index?:number;
    onToggle: (fieldId: string) => void;
    removeFromList: (fieldId: string, index: number) => void;
}

interface State {
    person:PeopleEntity;
}

export class PersonComponent extends React.Component<Props, State> {
    prevState: State;
    constructor(props: Props) {
        super(props);
        this.state = { person: this.props.person };
        this.prevState=this.state;
    }
    fileSelectedHandler = (fieldName: string, value: File, group: string, fileName: string) => {

        fileSelectedHandler(fieldName, value, group, fileName, this.state.person, (data) => {
            let newState: State = {
                ...this.state,
                person: data
            }
            this.setState(newState);
        })
    }


    handleChange = (fieldName: string, value: any, group: string) => {
        this.setState(handleChange(fieldName, value, group, this.state));
    }

    onEdit = () => {
        let element: PeopleEntity = this.state.person;
        element.editable = !element.editable;
        let newState: State = {
            ...this.state,
            person :element
        }
        this.setState(newState);
    }
    
    onSave = (value: PeopleEntity, ) => {

        let element: PeopleEntity = {
            ...value,
            editable: !this.state.person.editable,
        }
        let element2;
        if (this.state.person.picsLinks[0].img.data === null) {

            const newPerson = {
                ...this.state.person,
                picsLinks: removeElementFromArray(this.state.person.picsLinks, (item) => item.img.data == null)
            }
            element2 = {
                ...element,
                picsLinks: newPerson.picsLinks
            }
        }
        else {
            element2 = {
                ...element
            }
        }

        const newState: State = {
            ...this.state,
            person: element2
        }
        this.setState(newState);
        this.prevState = newState;//update content for prevState with the saved data
        //aquí debería llamar a la API parar guardarlo y hacer sacar una tarjetita diciendo que OK o Fail
    }

    onCancel = () => {
            if(this.props.addNew)
                this.props.removeFromList('persons', this.props.index)
            else{
                const newState:State = {...this.prevState};
                newState.person.editable=false;
                this.setState(newState);
            }  
    }

    render() {
        return (<div id='persons' className='persons'>
            {
                this.props.showPerson ?
                    <Card className='person.card'>
                        <CardActionArea>
                        {
                        (this.state.person.picsLinks[0]===null||this.state.person.picsLinks[0].img.data===null)?
                        null
                        :
                            <CardMedia component="img"
                                image={this.state.person.picsLinks[0].img.data}
                                title={this.state.person.namePerson}
                            />
                        }
                            <CardContent>
                                        <PersonFormComponent
                                            person={this.state.person}
                                            handleChange={this.handleChange}
                                            handlefileSelectorChange={this.fileSelectedHandler}
                                            editable={this.state.person.editable}
                                        />
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {
                                this.state.person.editable ?
                                    <>
                                        <Button onClick={() => this.onSave(this.state.person)}>
                                            <Save />
                                        </Button>
                                        <Button onClick={(e) => this.onCancel()}>
                                            <Cancel />
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <Button onClick={(e) => this.onEdit()}>
                                            <Edit />
                                        </Button>
                                        <Button onClick={(e) => this.props.removeFromList('people', this.props.index)}>
                                            <Delete />
                                        </Button>
                                    </>
                            }
                        </CardActions>
                    </Card>

                    :
                    <>
                    </>
            }
        </div>
        );
    }

}


/* import * as React from 'react';
import { PeopleEntity, FamiliarEntity, CompanyEntity } from '../../model';
import { Edit, Save, Cancel, ExpandMore, ExpandLess, Delete } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

import { PersonFormComponent } from '../form';

import { personComponent } from '../persons';
import { CompanyComponent } from '../company';
import { RutinesComponent } from '../rutines';
import { LinksComponent } from '../links';

import "../../content/site.css";
import { dataType } from '../../common';
import { FamiliarComponent } from '../familiar';

import { createNewCompany, createNewFamiliar, createNewperson } from '.';
import { Card, CardActionArea, CardContent, CardActions, CardMedia } from '@material-ui/core';

interface Props {
    person: PeopleEntity;
    editablePerson: boolean;
    editableperson: boolean;
    editableCompany: boolean;
    editableRutine: boolean;
    editableLinks: boolean;
    editableFamiliar: boolean;
    showperson: boolean;
    showCompany: boolean;
    showFamiliar: boolean;
    addNewFamiliar: boolean;
    addNewCompany: boolean;
    addNewperson: boolean;
    onToggle: (string) => void;
    onEdit: (fieldId: string) => void;
    handleChange: (fieldName: string, value: any, group: string) => void;
    fileSelectedHandler: (fieldName: string, value: any, group: string, fileName: string) => void;
    savingNew: (fieldId: string, element: any) => void;
    addingNew: (fieldId: string, group: string, value:any) => void;
    removeFromList: (fieldId: string, index?: number) => void;
    onCancel: ()=>void;
    onSave:(value:PeopleEntity)=>void;
}



export const PersonComponent: React.StatelessComponent<Props> = (props: Props) => {
    //var oldPerson: PeopleEntity = { ...props.person };
    const newFamiliar = createNewFamiliar();
    const newCompany = createNewCompany();
    const newperson = createNewperson();

    return (

        <Card>
            <Card className="person.card">
            {
                (props.person.picsLinks[0]==null||props.person.picsLinks[0].img.data==null)?
                null
                :
                <CardMedia>
                    <img className="avatar" src={props.person.picsLinks[0].img.data} width="200px" height="200px" />
                </CardMedia>
            }
                <CardActionArea>
                    <CardContent>
                        <PersonFormComponent person={props.person}
                            editable={props.editablePerson}
                            handleChange={props.handleChange}
                            handlefileSelectorChange={props.fileSelectedHandler}
                        />
                    </CardContent>
                </CardActionArea>
                <CardActions>
                {
                                props.editablePerson ?
                                    <>
                                        <Button onClick={(e) => props.onSave(props.person)}>
                                            <Save />
                                        </Button>
                                        <Button onClick={(e) => props.onCancel}>
                                            <Cancel />
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <Button onClick={(e) => props.onEdit('editablePerson')}>
                                            <Edit />
                                        </Button>
                                        <Button onClick={(e) => props.removeFromList("editablePerson")}>
                                            <Delete />
                                        </Button>
                                    </>
                            }
                </CardActions>
            </Card>


            <Button className="buttonperson" onClick={(event) => props.onToggle(dataType.person)}>
                <span>Vehículos</span>
                {props.showperson ?
                    <ExpandLess /> :
                    <ExpandMore />
                }
            </Button>

            {
                    props.person.persons.map((person, index) => (
                        <personComponent key={person.idperson}
                            person={person}
                            index={index}
                            showperson={props.showperson}
                            onToggle={props.onToggle}
                            addNew={props.addNewperson}
                            removeFromList={props.removeFromList}
                        />
                    )) 

            }

            {
                props.showperson ?
                    <Button onClick={(e) => props.addingNew("addNewperson", 'persons',newperson)}>Añadir nuevo vehiculo</Button>
                    :
                    <></>
            }

            <Button onClick={(event) => props.onToggle(dataType.COMPANY)}>
                <span>Empresas</span>
                {
                    props.showCompany ?
                        <ExpandLess /> :
                        <ExpandMore />
                }
            </Button>
            {
                    props.person.companies.map((company, index) => (
                        <CompanyComponent 
                            addNew={props.addNewCompany}
                            key={company.idCompany}
                            index={index}
                            company={company}
                            showCompany={props.showCompany}
                            onToggle={props.onToggle}
                            removeFromList={props.removeFromList}
                        />
                    )
                    )
            }
            {
                props.showCompany ?
                    <Button onClick={(e) => props.addingNew("addNewCompany", 'companies',newCompany)}>Añadir nueva Empresa</Button>
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

                props.person.familiars.map((familiar, index) => (
                    <FamiliarComponent key={familiar.idFamiliar}
                        familiar={familiar}
                        showFamiliar={props.showFamiliar}
                        onToggle={props.onToggle}
                        addNew={props.addNewFamiliar}
                        removeFromList={props.removeFromList}
                        index={index}
                    />
                ))
            }

            <CardActions>
                {
                props.showFamiliar?
                <Button onClick={(e) => props.addingNew('addNewFamiliar','familiars',newFamiliar)}>Añadir nuevo Familiar</Button>
                :
                null
                }
            </CardActions>
            
        </Card>

    );
}
 */