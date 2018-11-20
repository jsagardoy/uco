import * as React from 'react';
import {OperationTableComponent} from '../components/operations';
import { OperationEntity } from '../model';
import { MuiThemeProvider } from 'material-ui';
import {RouteComponentProps} from 'react-router';
import {updateElementFromArray} from '../model/';
import axios from 'axios';
import {getOperations} from '../api/operationAPIConnection';

interface State {
    operationList: Array<OperationEntity>
}

export class OperationsTable extends React.Component<RouteComponentProps<any>,State> {

    constructor(props){
        super(props);
        this.state = {operationList:[]}
    }

     componentWillMount () {
<<<<<<< HEAD
=======
<<<<<<< HEAD
        getOperations().then((res)=>this.setState({operationList:res}));
=======
>>>>>>> master
        const url = 'http://localhost:4000/api/operations';
        axios.get(url)
        .then(res=>{
            const operations = res.data;
            this.setState({operationList:operations});
        })
        .catch((error)=>console.log(error));
>>>>>>> no message
    }
     
    
    onClickRow = (id:number) => {
        this.props.history.push({
            pathname:`/operationDetail/${id}`,
            state:{operationList:this.state.operationList}
        })
    }

    patchStateOperation = (operation:OperationEntity) =>{
        const url = `http://localhost:4000/api/operations/${operation.idOperation}`;

        axios.patch(url,
            {"state":operation.state}
        )
        .then(res=>{
            console.log('Operation updated');
        })
        .catch((error)=>console.log(error));
    }    
    onToggle = (newOperation:OperationEntity):void => {
        const newOp:OperationEntity = {...newOperation};
        newOp.state=!newOperation.state
        const updatedList = updateElementFromArray(this.state.operationList,newOp,(item)=>item.idOperation===newOp.idOperation)
        this.setState({operationList:updatedList});
        this.patchStateOperation(newOp);
    }

render(){
        return(
            <MuiThemeProvider>
                <OperationTableComponent operationList={this.state.operationList} 
                                         onClickRow={this.onClickRow} 
                                         onToggle={this.onToggle}
                />
            </MuiThemeProvider>
        );
    }   
}
