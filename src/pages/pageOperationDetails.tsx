import * as React from 'react';
import { ShowOperation } from '../operationDetails';
import { OperationEntity } from '../model';
import { operationAPI } from '../api/operationAPI';

export const OperationDetailed = ({match})=>{
    const id= +match.params.id;
    const operationList = operationAPI.getAllOperations();
    return(
        <div>
        <div className="Operation">
            
                {
                    operationList
                        .filter(operation=>operation.id===id)
                        .map((operation) => (
                        <ShowOperation key={operation.id} operation={operation} />
                    ))
                }
            
        </div>
        </div>
    
    )
}