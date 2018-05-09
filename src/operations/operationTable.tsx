import * as React from 'react';
import {OpenTableComponent} from './';
import {OperationEntity} from '../model/operation';
import operationMockData from '../api/operationMockData';
import {operationAPI} from '../api/operationAPI';


interface Props{

}
interface State {
    operations: Array <OperationEntity>,
    openOperations: Array <OperationEntity>,
    closedOperations: Array <OperationEntity>,
    
}

export class OperationTableComponent extends React.Component<Props, State> {
 
    constructor (props: Props){
        super(props);
        this.state = {operations: [], openOperations: [], closedOperations: []};
    }

    componentDidMount (){
        this.setState({
            operations: operationAPI.getAllOperations(),
            openOperations: operationAPI.getOpenOperations(),
            closedOperations: operationAPI.getClosedOperations(),
        });
    }


    public render (){ 
        return(
            <div className='row'>
                    <OpenTableComponent typeOperation = {true} openOperations={this.state.openOperations}/>
                    <OpenTableComponent typeOperation = {false} closedOperations={this.state.closedOperations}/>             
            </div>
        );
    }
    
}
