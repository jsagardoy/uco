import * as React from 'react';
import {OperationTableComponent} from '../components/operations';
import { OperationEntity } from '../model';
import { MuiThemeProvider } from 'material-ui';
import {RouteComponentProps} from 'react-router';
import { operationAPI } from '../api/operationAPI';
import {updateElementFromArray} from '../model/';


interface State {
    operationList: Array<OperationEntity>
}

export class OperationsTable extends React.Component<RouteComponentProps<any>,State> {

    constructor(props){
        super(props);

        this.state={
            operationList:operationAPI.getAllOperations()
        }
    }
    componentDidMount () {
        this.setState({operationList: operationAPI.getAllOperations()});
    } 

    
    onClickRow = (id:number) => {
        this.props.history.push({
            pathname:`/operationDetail/${id}`,
            state:{operationList:this.state.operationList}
        })
    }
    onToggle = (newOperation:OperationEntity):void => {
        const newOp:OperationEntity = {...newOperation};
        newOp.state=!newOperation.state
        const updatedList = updateElementFromArray(this.state.operationList,newOp,(item)=>item.id===newOp.id)
        this.setState({operationList:updatedList})
    }

render(){
        return(
            <MuiThemeProvider>
                <OperationTableComponent operationList={this.state.operationList} onClickRow={this.onClickRow} onToggle={this.onToggle}/>
            </MuiThemeProvider>
        );
    }   
}
