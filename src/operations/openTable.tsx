import * as React from 'react';
import {ComposeRowComponent} from './operationRow';
import {OperationEntity} from '../model/operation';
//import operationMockData from '../api/operationMockData';
import {operationAPI} from '../api/operationAPI';
import {updateElementFromArray} from '../model/';

interface Props {
    type: boolean, //true for openOperations false for closed Operations
    updateData:Array<OperationEntity>
}
interface State{
      allOperations: Array<OperationEntity>
}


export class OpenTableComponent extends React.Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state = { 
            allOperations: operationAPI.getAllOperations()  
        }
    }

    changeItem = (newOperation:OperationEntity):void => {
        const newOp:OperationEntity = {...newOperation};
        console.log(`Operacion a cambiar ${newOp}`);
        newOp.state=!newOperation.state
        const updatedList = updateElementFromArray(this.state.allOperations,newOp,(item)=>item.id===newOp.id)
        updatedList.map((item)=>(console.log(`nombre: ${item.name} estado ${item.state}`)));
//actualizar el component

    }

    setToggle = (newOperation:OperationEntity, status:boolean):void =>{
       
    }   

    public render(){
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
                            this.state.allOperations
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

