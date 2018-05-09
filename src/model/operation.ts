import { PeopleEntity } from './people';
export interface OperationEntity{
    name: string,
    id: number,
    state: boolean,
    type: string,
    people? : PeopleEntity[],
}

export const createEmptyOperation = ():OperationEntity =>({
    name:"",
    id: -1,
    state:true,
    type:"",
    people: []
})

