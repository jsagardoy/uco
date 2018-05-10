import * as React from 'react';
import {OpenTableComponent} from './';
import {OperationEntity} from '../model/operation';
import operationMockData from '../api/operationMockData';
import {operationAPI} from '../api/operationAPI';


interface Props{
    
}
interface State {
    operations: Array <OperationEntity>,
}

export class OperationTableComponent extends React.Component<Props, State> {
 
    constructor (props: Props){
        super(props);
        this.state = {operations: []};
    }

    componentDidMount (){
        this.setState({
            operations: operationAPI.getAllOperations(),
        });
    }


    public render (){ 
        return(
            <div className='row'>
                    <OpenTableComponent type= {true} />
                    <OpenTableComponent type= {false}/>             
            </div>
        );
    }
    
}
