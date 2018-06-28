import * as React from 'react';
import {OperationTableComponent} from '../components/operations';
import { OperationEntity } from '../model';
import { MuiThemeProvider } from 'material-ui';
import {RouteComponentProps} from 'react-router';
//import { operationAPI } from '../api/operationAPI';
//import {getOperations} from '../api/operationAPIConnection';
import {updateElementFromArray} from '../model/';
import axios from 'axios';

interface State {
    operationList: Array<OperationEntity>
}

export class OperationsTable extends React.Component<RouteComponentProps<any>,State> {

    constructor(props){
        super(props);
        this.state= ({operationList:[]});  
    }

    parseOperation = (data):Array<OperationEntity> =>{
        const opList:Array<OperationEntity> = [];
        
        data.forEach(item => {
                opList.push(item);
        })
          return (opList);
    } 
    componentWillMount () {
        const url = 'http://localhost:4000/api/operations';
        axios.get(url)
        .then(res=>{
            const operations = res.data;
            this.setState({operationList:operations});
        })
        .catch((error)=>console.log(error));
        //this.setState({operationList: operationAPI.getAllOperations()});
        //this.setState({operationList: getOperations});
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
        const updatedList = updateElementFromArray(this.state.operationList,newOp,(item)=>item.id===newOp.idOperation)
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
