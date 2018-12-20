import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { PeopleEntity } from '../model/people';
import { PersonComponent, createNewCompany, createNewFamiliar, createNewVehicle } from '../components/person';

import { appendElementToArray, removeElementFromArray, OperationEntity, updateElementFromArray } from '../model';

import { fileSelectedHandler, handleChange } from '../common/handlers';
import { initializeState, getPerson, storePerson } from '../api/person';
import { State } from './pagePersonDetail.business';
import { ArrowLeft, Save, ExpandLess, ExpandMore } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { createNewPerson } from '../components/person/personComponent.business';
import { dataType } from '../common';
import { VehicleComponent } from '../components/vehicles';
import { CompanyComponent } from '../components/company';
import { RutinesComponent } from '../components/rutines';
import { LinksComponent } from '../components/links';
import { FamiliarComponent, StateFamiliar } from '../components/familiar';
import { CardActions } from '@material-ui/core';
import { getOperationList, storeOperations } from '../api/operationDetail';
//import { StateOperation } from './pageOperationDetails.business';

export class DetailPersonPage extends React.Component<RouteComponentProps<any>, State> {
    prevState: State;

    constructor(props) {
        super(props);

        const person: PeopleEntity = getPerson(this.props.history.location.state);

        storePerson(person);

        this.state = initializeState(
            this.props.history.location.state,
            person
        )
    }

    componentWillMount() {
        if (this.props.history.location.pathname.endsWith('newPerson')) {
            this.updateStateNewPerson();
        }
    }

    onToggle = (fieldId: keyof State | string) => {
        this.setState({
            ...this.state,
            [fieldId]: !this.state[fieldId]
        })
    }

    onEdit = (fieldId: keyof State) => {

        let newState: State = {
            ...this.state,
            [fieldId]: !this.state[fieldId]
        }

        this.setState(newState);
    }

    fileSelectedHandler = (fieldName: string, value: File, group: string, fileName: string): any => {

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

    savingNew = (fieldId: keyof State, element: any) => {

        //const newArray: Array<any> = appendElementToArray(this.state.person[fieldId], element);
        const newArray: Array<any> = updateElementFromArray(this.state.person[fieldId], element, (item)=>item.idVehicle===this.state.person[fieldId].idVehicle)
        let newState: State = {
            ...this.state,
            person: {
                ...this.state.person,
                [fieldId]: newArray
            }
        }
        const field: string = fieldId;
        switch (field) {
            case 'person':
                newState.editablePerson = false;
                newState.addNewPerson = false;
                newState.showPerson = true;
                break;
            case 'companies':
                newState.editableCompany = false;
                newState.addNewCompany = false;
                newState.showCompany = true;
                break;
            case 'familiars':
                newState.editableFamiliar = false;
                newState.addNewFamiliar = false;
                newState.showFamiliar = true;
                break;
            case 'vehicles':
                newState.editableVehicle = false;
                newState.addNewVehicle = false;
                newState.showVehicle = true;
                break;
        }
        this.setState(newState);
        console.log(`New ${field} added`);

    }

    addingNew = (fieldId: keyof State, group: string, newElement: any): void => {

        let newState: State = {
            ...this.state,
            [fieldId]: true,
        }
        let newArray = appendElementToArray(newState.person[group], newElement);

        newState.person[group] = newArray;
        this.setState(newState);
    }
    removeFromList = (fieldId: keyof State, index: number = 0): void => {
        let newArray = removeElementFromArray(this.state.person[fieldId], (item) => item === this.state.person[fieldId][index]);
        let newState: State = {
            ...this.state,
            person: {
                ...this.state.person,
                [fieldId]: newArray
            },
        }
        this.setState(newState);
        console.log('Elemento Eliminado');
    }
    goBack = () => {
        const path=`/operationDetail/${+this.props.match.params.idOperation}`;
        this.props.history.push(
            {
                pathname: `${path}`,
                /* state: { operationList: this.state } */
            }
        )
    }

    updateStateNewPerson = () => {
        const newPerson: PeopleEntity = createNewPerson();
        let newState: State = {
            ...this.state,
            person: newPerson
        }
        this.setState(newState);
    }

    newPersonAdded = () => {

        let operations: Array<OperationEntity> = getOperationList(this.props.history.location.state);
        const idOperation: number = +this.props.match.params.idOperation;
        let operation: OperationEntity = operations.find((operation: OperationEntity) => operation.idOperation === idOperation);
        let operationIndex: number = operations.findIndex((operation: OperationEntity) => operation.idOperation === idOperation);
        let peopleList = appendElementToArray(operation.people, this.state.person);
        operations[operationIndex].people = peopleList;
        let path = this.props.history.location.pathname.substring(0, this.props.history.location.pathname.indexOf('/personDetail/newPerson'));

        /* this.props.history.push(path); */
        this.props.history.push(
            {
                pathname: `${path}`,
                state: { operationList: operations }
            }
        )
    }
    updateState = (fieldId: keyof State, value: any) => {
        //aquí tengo que hcaer cambios para el caso de que no sea person, sino person.fieldID
        let newState;
        if (fieldId === 'person') {
            newState = {
                ...this.state,
                [fieldId]: value
            }
        }
        else {
            let newArray = updateElementFromArray (this.state.person[fieldId], value,(item)=>item.idVehicle===value.idVehicle);
            /* let emptyItem = newArray.find((item)=>item.brand==='');
            newArray= removeElementFromArray(newArray,emptyItem); */

            newState = {
                ...this.state,
                person: {
                    ...this.state.person,
                    [fieldId]: newArray
                }
            }
            
        }
        this.setState(newState);
    }


    render() {
        const newFamiliar = createNewFamiliar();
        const newCompany = createNewCompany();
        const newVehicle = createNewVehicle();
        return (
            <>

                <Button onClick={(e) => this.goBack()}><ArrowLeft /></Button>
                <Button onClick={e => this.newPersonAdded()}> <Save /> </Button>
                        
                
                {
                    <PersonComponent
                        showPerson={true}
                        onToggle={this.onToggle}
                        person={this.state.person}
                        removeFromList={this.removeFromList}
                        addNew={this.state.addNewPerson}
                        updateState={this.updateState}
                    />


                }
                <Button className="buttonVehicle" onClick={(event) => this.onToggle(dataType.VEHICLE)}>
                    <span>Vehículos</span>
                    {this.state.showVehicle ?
                        <ExpandLess /> :
                        <ExpandMore />
                    }
                </Button>

                {
                    this.state.person.vehicles.map((vehicle, index) => (
                        <VehicleComponent key={vehicle.idVehicle}
                            vehicle={vehicle}
                            index={index}
                            showVehicle={this.state.showVehicle}
                            onToggle={this.onToggle}
                            addNew={this.state.addNewVehicle}
                            removeFromList={this.removeFromList}
                            updateState={this.updateState}
                        />
                    ))

                }

                {
                    this.state.showVehicle ?
                        <Button onClick={(e) => this.addingNew("addNewVehicle", 'vehicles', newVehicle)}>Añadir nuevo vehiculo</Button>
                        :
                        <></>
                }

                <Button onClick={(event) => this.onToggle(dataType.COMPANY)}>
                    <span>Empresas</span>
                    {
                        this.state.showCompany ?
                            <ExpandLess /> :
                            <ExpandMore />
                    }
                </Button>
                {
                    this.state.person.companies.map((company, index) => (
                        <CompanyComponent
                            addNew={this.state.addNewCompany}
                            key={company.idCompany}
                            index={index}
                            company={company}
                            showCompany={this.state.showCompany}
                            onToggle={this.onToggle}
                            removeFromList={this.removeFromList}
                        />
                    )
                    )
                }
                {
                    this.state.showCompany ?
                        <Button onClick={(e) => this.addingNew("addNewCompany", 'companies', newCompany)}>Añadir nueva Empresa</Button>
                        :
                        <></>
                }


                <RutinesComponent rutines={this.state.person.rutines}

                />

                <LinksComponent links={this.state.person.links}
                />


                <Button onClick={(event) => this.onToggle(dataType.FAMILIAR)}>
                    <span>Familiares</span>
                    {this.state.showFamiliar ?
                        <ExpandLess /> :
                        <ExpandMore />
                    }
                </Button>
                {

                    this.state.person.familiars.map((familiar, index) => (
                        <FamiliarComponent key={familiar.idFamiliar}
                            familiar={familiar}
                            showFamiliar={this.state.showFamiliar}
                            onToggle={this.onToggle}
                            addNew={this.state.addNewFamiliar}
                            removeFromList={this.removeFromList}
                            index={index}
                        />
                    ))
                }

                <CardActions>
                    {
                        this.state.showFamiliar ?
                            <Button onClick={(e) => this.addingNew('addNewFamiliar', 'familiars', newFamiliar)}>Añadir nuevo Familiar</Button>
                            :
                            null
                    }
                </CardActions>


                
            </>);
    }
}