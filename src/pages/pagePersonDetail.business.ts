import { PeopleEntity, OperationEntity } from '../model';

export interface State {
    person: PeopleEntity;
    editablePerson:boolean;
    editableVehicle:boolean;
    editableCompany:boolean;
    editableRutine:boolean;
    editableLinks:boolean;
    editableFamiliar:boolean;
    showPerson:boolean;
    showVehicle:boolean;
    showCompany:boolean;
    showFamiliar:boolean;
    addNewPerson:boolean;
    addNewFamiliar:boolean;
    addNewCompany:boolean;
    addNewVehicle:boolean;
}

export const createInitialState = (person:PeopleEntity, editable:boolean=true) => (
    {
        person,
        editablePerson: editable,
        editableVehicle: editable,
        editableCompany: editable,
        editableRutine: editable,
        editableLinks: editable,
        editableFamiliar: editable,
        showPerson: false,
        showVehicle: false,
        showCompany: false,
        showFamiliar: false,
        addNewFamiliar: false,
        addNewCompany: false,
        addNewVehicle: false,
        addNewPerson: false,
    }
)

export const parseOperation = (data):Array<OperationEntity> =>{
    const opList:Array<OperationEntity> = [];
    
    data.forEach(item => {
            opList.push(item);
    })
      return (opList);
} 