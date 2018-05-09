
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
    
    getOpenOperations = () : Array<OperationEntity> =>
    {
        
        const all:Array<OperationEntity> = this.getAllOperations();
        const allOpen:Array<OperationEntity> = all.filter (operation => operation.state);
        return allOpen;
    }

    getClosedOperations = () : Array<OperationEntity> =>
    {
        
        const all:Array<OperationEntity> = this.getAllOperations();
        const allClose:Array<OperationEntity> = all.filter (operation => !operation.state);
        return allClose;
    }
    
}

export const operationAPI = new OperationAPI();