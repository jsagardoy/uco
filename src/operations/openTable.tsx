import * as React from 'react';
import {ComposeRowComponent} from './operationRow';
import {OperationEntity} from '../model/operation';
//import operationMockData from '../api/operationMockData';
//import {operationAPI} from '../api/operationAPI';

interface Props {
    typeOperation: boolean;
    openOperations?: Array <OperationEntity>;
    closedOperations?: Array<OperationEntity>;
}



export const OpenTableComponent = (props:Props) =>(
    <div className='table-responsive col-6'>
        <h2>{props.typeOperation?'Operaciones abiertas':'Operaciones cerradas'}</h2>
        <div className='table-responsive'>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Operacion</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                
                    {   
                        (props.typeOperation) ?
                            props.openOperations.map( (operation : OperationEntity) => 
                            <ComposeRowComponent key={operation.id} operation = {operation} />
                            )
                        :
                            props.closedOperations.map( (operation : OperationEntity) => 
                            <ComposeRowComponent key={operation.id} operation = {operation}/>
                            )
                    }   
                
                    
                </tbody>
            </table>
        </div>
    </div>
)

