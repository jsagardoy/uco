
import OperationMockData  from  './operationMockData';
import {OperationEntity} from '../model';


class OperationAPI {

    private _clone = (item) => (
        JSON.parse(JSON.stringify(item))
    )
    getAllOperations = () : Array<OperationEntity> =>
    (
        this._clone (OperationMockData)    
    ) 
    
    
}

export const operationAPI = new OperationAPI();