
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
    updateToogle = (operation:OperationEntity) =>{
        operation: {
            ...operation,
            operations.state=!operation.state
        }
        const all:Array<OperationEntity> = this.getAllOperations();
        const elem:OperationEntity = all.find(op=>op.id===operation.id);
        all.delete(elem);
        all.add(operation);

    }
}

export const operationAPI = new OperationAPI();