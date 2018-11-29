import { PeopleEntity, OperationEntity } from '../model';

export interface State {
    person: PeopleEntity;
    notEditablePerson:boolean;
    notEditableVehicle:boolean;
    notEditableCompany:boolean;
    notEditableRutine:boolean;
    notEditableLinks:boolean;
    notEditableFamiliar:boolean;
    showVehicle:boolean;
    showCompany:boolean;
    showFamiliar:boolean;
    addNewFamiliar:boolean;
    addNewCompany:boolean;
    addNewVehicle:boolean;
}

export const createInitialState = (person:PeopleEntity, notEditable:boolean=true) => (
    {
        person,
        notEditablePerson: notEditable,
        notEditableVehicle: notEditable,
        notEditableCompany: notEditable,
        notEditableRutine: notEditable,
        notEditableLinks: notEditable,
        notEditableFamiliar: notEditable,
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