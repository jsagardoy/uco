import * as React from 'react';
import {OpenTableComponent} from './';
import {OperationEntity} from '../model/operation';
import operationMockData from '../api/operationMockData';
import {operationAPI} from '../api/operationAPI';


interface Props{
    operationList:Array <OperationEntity>
}
interface State {
    allOperations: Array<OperationEntity>,
}

export class OperationTableComponent extends React.Component<Props, State> {
 
    constructor (props: Props){
        super(props);
        const operations = this.props.operationList;
        this.state = {allOperations: operations};
    }

    componentDidMount (){
        this.setState({allOperations: operationAPI.getAllOperations()});
    }


    updateDataList = (newOperations: Array<OperationEntity>):void => {
        this.setState({allOperations:newOperations})
    }


    public render (){ 
        return(
            <div className='row'>
                <OpenTableComponent type= {true} operationList={this.state.allOperations} updateData={this.updateDataList}/>
                <OpenTableComponent type={false} operationList={this.state.allOperations} updateData={this.updateDataList}/>             
            </div>
        );
    }
    
}
