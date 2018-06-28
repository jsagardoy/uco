import { PeopleEntity } from './people';
export interface OperationEntity{
    nameOperation: string,
    idOperation: number,
    state: boolean,
    operationType: string,
    people? : PeopleEntity[],
}

/*export const createEmptyOperation = ():OperationEntity =>({
    nameOperation:"",
    id: -1,
    state:true,
    type:"",
    people: []
})*/

