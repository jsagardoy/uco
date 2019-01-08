import { OperationEntity } from "../../model";



const generateNewId=() =>
    Math.pow(Math.round(Math.random() * 100), 2)

export const createEmptyOperation = ():OperationEntity =>(
    {
        idOperation : generateNewId(),
        nameOperation : '',
        state:true,
        operationType:'',
    }
)

    
