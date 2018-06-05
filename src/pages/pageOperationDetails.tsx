import * as React from 'react';
import { ShowOperation } from '../components/operationDetails';
import { OperationEntity } from '../model';
import { operationAPI } from '../api/operationAPI';
import {RouteComponentProps} from 'react-router'

interface State {
    operationList:Array<OperationEntity>
}

export class OperationDetailedPage extends React.Component<RouteComponentProps<any>,State> {
    constructor(props){
        super(props);
        
        this.state={operationList:this.props.history.location.state.operationList};
    }

    onClickRow = (id:number) =>{
        this.props.history.push({
            pathname:`/personDetail/${id}`,
            state:{operationList:this.state.operationList}
        })
    }

    showOperationDetail = (id:number)=>(
        <div className="Operation">
            {
                this.state.operationList
                    .filter((operation)=>+operation.id===+id)
                    .map((operation) => (
                    <ShowOperation key={operation.id} 
                                operation={operation} 
                                onClickRow={this.onClickRow}
                    />
                ))
            }
        </div>
    )
   
    
    render(){
        return(
            this.showOperationDetail(this.props.match.params.idOperation)
        );
    }

}


