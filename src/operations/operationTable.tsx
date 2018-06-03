import * as React from 'react';
import {OpenTableComponent} from './';
import {OperationEntity} from '../model/operation';
import {updateElementFromArray} from '../model/';
import operationMockData from '../api/operationMockData';
import {operationAPI} from '../api/operationAPI';


interface Props{
    operationList:Array <OperationEntity>
    onClickRow: (id:number) =>void;
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


    onToggle = (newOperation:OperationEntity):void => {
        const newOp:OperationEntity = {...newOperation};
        newOp.state=!newOperation.state
        const updatedList = updateElementFromArray(this.state.allOperations,newOp,(item)=>item.id===newOp.id)
        this.setState({allOperations:updatedList})
    }


    public render (){ 
        return(
            <div className='row'>
                <OpenTableComponent type={true} operationList={this.state.allOperations} onClickRow={this.props.onClickRow} onToggle={this.onToggle}/>
                <OpenTableComponent type={false} operationList={this.state.allOperations} onClickRow={this.props.onClickRow} onToggle={this.onToggle}/>
                             
            </div>
        );
    }
    
}
