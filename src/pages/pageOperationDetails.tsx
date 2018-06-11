import * as React from 'react';
import { ShowOperation } from '../components/operationDetails';
import { OperationEntity, PeopleEntity } from '../model';
import { operationAPI } from '../api/operationAPI';
import {RouteComponentProps} from 'react-router'

interface State {
    operationList:Array<OperationEntity>
}

export class OperationDetailedPage extends React.Component<RouteComponentProps<any>,State> {
    constructor(props){
        super(props);
        !!this.props.history.location.state?
        this.state={operationList:this.props.history.location.state.operationList}:
        this.state={operationList:operationAPI.getAllOperations()};
    }

    onClickRow = (idPerson:number) =>{
        const idOperation:number =  +this.props.match.params.idOperation;
        const operation = this.state.operationList.find(((operation)=>operation.id===idOperation));
        const peopleList = operation.people;
        const person = peopleList.find((p)=>p.id===idPerson);
        const operationId = this.props.match.params.idOperation;

        this.props.history.push({
            pathname:`${idOperation}/personDetail/${idPerson}`,
            state:{person: person,
                    notEditable: true    
            }
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


