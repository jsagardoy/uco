import * as React from 'react';
import {OpenTableComponent} from './';
import {OperationEntity} from '../model/operation';
import operationMockData from '../api/operationMockData';
import {operationAPI} from '../api/operationAPI';


interface Props{
    
}
interface State {
    allOperations: Array <OperationEntity>,
}

export class OperationTableComponent extends React.Component<Props, State> {
 
    constructor (props: Props){
        super(props);
        this.state = {allOperations: []};
    }

    componentDidMount (){
        this.setState({
            allOperations: operationAPI.getAllOperations(),
        });
    }
    static getDerivedStateFromProps (nextProps, prevState){
        return{
            allOperations: nextProps
        }
    }
    updateDataList(newListOperations:Array<OperationEntity>){
        this.setState({allOperations:newListOperations})
    }
    
    public render (){ 
        return(
            <div className='row'>
                    <OpenTableComponent type= {true} updateData={this.updateDataList}/>
                    <OpenTableComponent type= {false} updateData={this.updateDataList}/>             
            </div>
        );
    }
    
}
