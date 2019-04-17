import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { PeopleEntity } from '../model/people';
import { PersonComponent, createNewCompany, createNewFamiliar, createNewVehicle } from '../components/person';

import { appendElementToArray, removeElementFromArray, updateElementFromArray, colors } from '../common';
import { OperationEntity } from '../model';

import { fileSelectedHandler, handleChange } from '../common/handlers';
import { initializeState, getPerson, storePerson } from '../api/person';
import { State } from './pagePersonDetail.business';
import { ArrowLeft, Save, ExpandLess, ExpandMore, Motorcycle, AccountBalance } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { createNewPerson } from '../components/person/personComponent.business';
import { dataType } from '../common';
import { VehicleComponent } from '../components/vehicles';
import { CompanyComponent } from '../components/company';
import { RutinesComponent } from '../components/rutines';
import { LinksComponent } from '../components/links';
import { FamiliarComponent } from '../components/familiar';
import { CardActions } from '@material-ui/core';
import { getOperationList } from '../api/operationDetail';
import { putPerson } from '../api/operationAPIConnection';
import { toast } from 'react-toastify';
import { css } from 'emotion';

export class DetailPersonPage extends React.Component<RouteComponentProps<any>, State> {
  prevState: State;

  constructor(props) {
    super(props);

    const person: PeopleEntity = getPerson(this.props.history.location.state);

    storePerson(person);

    this.state = initializeState(this.props.history.location.state, person);
  }
  componentWillMount() {
    if (this.props.history.location.pathname.endsWith('newPerson')) {
      this.updateStateNewPerson();
    }
  }
  onToggle = (fieldId: keyof State | string) => {
    this.setState({
      ...this.state,
      [fieldId]: !this.state[fieldId],
    });
  };
  onEdit = (fieldId: keyof State) => {
    let newState: State = {
      ...this.state,
      [fieldId]: !this.state[fieldId],
    };

    this.setState(newState);
  };
  fileSelectedHandler = (fieldName: string, value: File, group: string, fileName: string): any => {
    fileSelectedHandler(fieldName, value, group, fileName, this.state.person, data => {
      let newState: State = {
        ...this.state,
        person: data,
      };
      this.setState(newState);
    });
  };
  handleChange = (fieldName: string, value: any, group: string) => {
    this.setState(handleChange(fieldName, value, group, this.state));
  };
  savingNew = (fieldId: keyof State, idField: string, element: any) => {
    let newArray: Array<any> = [];
    let newState: State;
    if (fieldId !== 'person') {
      newArray = updateElementFromArray(
        this.state.person[fieldId],
        element,
        item => item[idField] === this.state.person[fieldId][idField]
      );
      newState = {
        ...this.state,
        person: {
          ...this.state.person,
          [fieldId]: newArray,
        },
      };
    } else {
      newState = {
        ...this.state,
        [fieldId]: element,
      };
    }

    switch (String(fieldId)) {
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
      case 'links':
        newState.editableLinks = false;
        break;
      case 'rutines':
        newState.editableRutine = false;
        break;
    }
    this.setState(newState);

    toast.success(`${String(fieldId)} añadido`);
  };
  addingNew = (fieldId: keyof State, group: string, newElement: any): void => {
    let newState: State = {
      ...this.state,
      [fieldId]: true,
    };
    let newArray = appendElementToArray(newState.person[group], newElement);

    newState.person[group] = newArray;
    this.setState(newState);
  };
  removeFromList = (fieldId: keyof State, index: number = 0): void => {
    let newArray = removeElementFromArray(
      this.state.person[fieldId],
      item => item === this.state.person[fieldId][index]
    );
    let newState: State = {
      ...this.state,
      person: {
        ...this.state.person,
        [fieldId]: newArray,
      },
    };
    this.setState(newState);
    toast.success('Elemento Eliminado');
  };
  goBack = () => {
    const path = `/operationDetail/${+this.props.match.params.idOperation}`;
    this.props.history.push({
      pathname: `${path}`,
    });
  };
  updateStateNewPerson = () => {
    const newPerson: PeopleEntity = createNewPerson();
    let newState: State = {
      ...this.state,
      person: newPerson,
    };
    this.setState(newState);
  };
  newPersonAdded = () => {
    let peopleList;
    let operations: Array<OperationEntity> = getOperationList(null);
    const idOperation: number = +this.props.match.params.idOperation;
    let operation: OperationEntity = operations.find(
      (operation: OperationEntity) => operation.idOperation === idOperation
    );
    let operationIndex: number = operations.findIndex(
      (operation: OperationEntity) => operation.idOperation === idOperation
    );
    const idPerson: number = this.props.match.params.idPerson;
    this.props.match.url.includes('/newPerson')
      ? (peopleList = appendElementToArray(operation.people, this.state.person))
      : (peopleList = updateElementFromArray(
          operation.people,
          this.state.person,
          item => +item.idPerson === +idPerson
        ));
    operations[operationIndex].people = peopleList;

    putPerson(operation.idOperation, operations[operationIndex]).then(e => toast.error('Añadido'));

    let path = `/operationDetail/${idOperation}`;

    this.props.history.push({
      pathname: `${path}`,
      state: { operationList: operations },
    });
  };
  updateState = (fieldId: keyof State, value: any, idField?: string) => {
    let newState;

    if (fieldId === 'person') {
      newState = {
        ...this.state,
        [fieldId]: value,
      };
    } else {
      let newArray = updateElementFromArray(
        this.state.person[fieldId],
        value,
        item => item[idField] === value[idField]
      );
      newState = {
        ...this.state,
        person: {
          ...this.state.person,
          [fieldId]: newArray,
        },
      };
    }
    this.setState(newState);
  };
  render() {
    //Styles
    const wraperStyle = css`
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin-left: 10%;
      margin-top: 1%;
    `;
    const sectionStyle = css`
      width: 49.5%;
    `;
    const iconStyle = css`
      color: ${colors.YELLOW};
      padding-left: 2%;
    `;

    const divStyle = css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-top: 0.5%;
      padding-bottom: 0.5%;
      border: 1px solid;
      border-radius: 8px;
      border-color: ${colors.GREEN};
      background-color: ${colors.GREEN};
    `;

    //end Styles

    const newFamiliar = createNewFamiliar();
    const newCompany = createNewCompany();
    const newVehicle = createNewVehicle();
    return (
      <>
        <Button onClick={e => this.goBack()}>
          <ArrowLeft />
        </Button>
        <Button onClick={e => this.newPersonAdded()}>
          {' '}
          <Save />{' '}
        </Button>
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
        <div className={wraperStyle}>
          <div className={sectionStyle}>
            <div className={divStyle} onClick={event => this.onToggle(dataType.VEHICLE)}>
              <Motorcycle className={iconStyle} />
              {this.state.showVehicle ? <ExpandLess className={iconStyle} /> : <ExpandMore className={iconStyle} />}
            </div>
            {this.state.person.vehicles.map((vehicle, index) => (
              <VehicleComponent
                key={vehicle.idVehicle}
                vehicle={vehicle}
                index={index}
                showVehicle={this.state.showVehicle}
                onToggle={this.onToggle}
                addNew={this.state.addNewVehicle}
                removeFromList={this.removeFromList}
                updateState={this.updateState}
              />
            ))}

            {this.state.showVehicle ? (
              <Button onClick={e => this.addingNew('addNewVehicle', 'vehicles', newVehicle)}>
                Añadir nuevo vehiculo
              </Button>
            ) : (
              <></>
            )}
          </div>
          <div className={sectionStyle}>
            <div className={divStyle} onClick={event => this.onToggle(dataType.COMPANY)}>
              <AccountBalance className={iconStyle} />
              {this.state.showCompany ? <ExpandLess className={iconStyle} /> : <ExpandMore className={iconStyle} />}
            </div>
            {this.state.person.companies.map((company, index) => (
              <CompanyComponent
                addNew={this.state.addNewCompany}
                key={company.idCompany}
                index={index}
                company={company}
                showCompany={this.state.showCompany}
                onToggle={this.onToggle}
                removeFromList={this.removeFromList}
                updateState={this.updateState}
              />
            ))}
            {this.state.showCompany ? (
              <Button onClick={e => this.addingNew('addNewCompany', 'companies', newCompany)}>
                Añadir nueva Empresa
              </Button>
            ) : (
              <></>
            )}
          </div>
        </div>
        <RutinesComponent rutines={this.state.person.rutines} updateState={this.updateState} />

        <LinksComponent links={this.state.person.links} />

        <Button onClick={event => this.onToggle(dataType.FAMILIAR)}>
          <span>Familiares</span>
          {this.state.showFamiliar ? <ExpandLess /> : <ExpandMore />}
        </Button>
        {this.state.person.familiars.map((familiar, index) => (
          <FamiliarComponent
            key={familiar.idFamiliar}
            familiar={familiar}
            showFamiliar={this.state.showFamiliar}
            onToggle={this.onToggle}
            addNew={this.state.addNewFamiliar}
            removeFromList={this.removeFromList}
            index={index}
            updateState={this.updateState}
          />
        ))}

        <CardActions>
          {this.state.showFamiliar ? (
            <Button onClick={e => this.addingNew('addNewFamiliar', 'familiars', newFamiliar)}>
              Añadir nuevo Familiar
            </Button>
          ) : null}
        </CardActions>
      </>
    );
  }
}
