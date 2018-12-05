import { PeopleEntity, OperationEntity } from '../model';

export interface State {
    person: PeopleEntity;
    editablePerson:boolean;
    editableVehicle:boolean;
    editableCompany:boolean;
    editableRutine:boolean;
    editableLinks:boolean;
    editableFamiliar:boolean;
    showVehicle:boolean;
    showCompany:boolean;
    showFamiliar:boolean;
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
        showVehicle: false,
        showCompany: false,
        showFamiliar: false,
        addNewFamiliar: false,
        addNewCompany: false,
        addNewVehicle: false,
    }
)

export const parseOperation = (data):Array<OperationEntity> =>{
    const opList:Array<OperationEntity> = [];
    
    data.forEach(item => {
            opList.push(item);
    })
      return (opList);
} 