import * as React from 'react';
import {ComposeRowComponent} from './operationRow';
import {OperationEntity} from '../model/operation';
//import operationMockData from '../api/operationMockData';
import {operationAPI} from '../api/operationAPI';

interface Props {
    
    
}
interface State{
    openOperations: Array <OperationEntity>;
    closedOperations: Array<OperationEntity>;
}


export class OpenTableComponent extends React.Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state = { 
            openOperations: operationAPI.getOpenOperations(),
            closedOperations: operationAPI.getClosedOperations()
        }
    }

    changeItem(newOperation){
        const all: OperationEntity[];
        all.push(...this.state.openOperations,...this.state.closedOperations);
    }

    setToggle = (newOperation:OperationEntity, status:boolean):void =>{
        status?
        this.setState({
            //rellenar
        });
        :
        this.setState({
            this.state.
        });
    }   

    public render(){
        return (<div className='table-responsive col-6'>
            <h2>{this.state.openOperations?'Operaciones abiertas':'Operaciones cerradas'}</h2>
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
                            (this.state.openOperations) ?
                                this.state.openOperations.map( (operation : OperationEntity) => 
                                <ComposeRowComponent key={operation.id} 
                                                    initialOperation = {operation} 
                                                    onToggleUpdated = {}/>
                                )
                            :
                                this.state.closedOperations.map( (operation : OperationEntity) => 
                                <ComposeRowComponent key={operation.id} operation = {operation}/>
                                )
                        }   
                    
                        
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

