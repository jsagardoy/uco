import * as React from 'react';
import {ComposeRowComponent} from './operationRow';
import {OperationEntity} from '../model/operation';
import {operationAPI} from '../api/operationAPI';
import {updateElementFromArray} from '../model/';

interface Props {
    type: boolean, //true for openOperations false for closed Operations
    operationList: Array<OperationEntity>,
    updateData:(newOperations:Array<OperationEntity>)=>void
}
interface State{
      allOperations: Array<OperationEntity>
}


export class OpenTableComponent extends React.Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state = { 
            allOperations:this.props.operationList //operationAPI.getAllOperations()  
        }
    }

    changeItem = (newOperation:OperationEntity):void => {
        const newOp:OperationEntity = {...newOperation};
        newOp.state=!newOperation.state
        const updatedList = updateElementFromArray(this.props.operationList,newOp,(item)=>item.id===newOp.id)
        this.props.updateData(updatedList);
    }

    

     render(){
        return (<div className='table-responsive col-6'>
            
            <h2>{this.props.type?'Operaciones abiertas':'Operaciones cerradas'}</h2>
            
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
                            this.props.operationList
                                .filter(operation=>operation.state===this.props.type)
                                .map((operation : OperationEntity) => (                          
                                    <ComposeRowComponent key={operation.id} 
                                                            initialOperation = {operation}
                                                            onEditingOperation = {this.changeItem}                    
                                    />
                                ))    
                        }  
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

