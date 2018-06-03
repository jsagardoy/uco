import * as React from 'react';
import {OperationTableComponent} from '../operations';
import { OperationEntity } from '../model';
import { MuiThemeProvider } from 'material-ui';
import {RouteComponentProps} from 'react-router';




interface State {
    operationList: Array<OperationEntity>
}

export class OperationsTable extends React.Component<RouteComponentProps<any>,State> {

    constructor(props){
        super(props);

        this.state={
            operationList:[]
        }
    }

onClickRow = (id:number) => {
    this.props.history.push({
        pathname:`/operationDetail/${id}`
    })
}

render(){
        return(
            <MuiThemeProvider>
                <OperationTableComponent operationList={this.state.operationList} onClickRow={this.onClickRow}/>
            </MuiThemeProvider>
        );
    }   
}
