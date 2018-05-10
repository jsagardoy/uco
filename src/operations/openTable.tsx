import * as React from 'react';
import {ComposeRowComponent} from './operationRow';
import {OperationEntity} from '../model/operation';
//import operationMockData from '../api/operationMockData';
import {operationAPI} from '../api/operationAPI';

interface Props {
    type: boolean, //true for openOperations false for closed Operations
}
interface State{
    state:{
        allOperations: Array<OperationEntity>
        operation: <OperationEntity>
    }
}


export class OpenTableComponent extends React.Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state = { 
            allOperations: operationAPI.getAllOperations(),
            operation: null;
        }
    }

    changeItem = (newOperation:OperationEntity):void => {
        this.setState({
            allOperations: operationAPI.getAllOperations(),
                operation: newOperation;
        })
        operationAPI.updateAllOperations(this.state.allOperations, newOperation);
        console.log(this.state.allOperations.map((item)=>{`nombre: ${item.name} estado ${item.state}`}));
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

