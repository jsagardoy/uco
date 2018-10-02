import * as React from 'react';
import { ShowOperation } from '../components/operationDetails';
import { OperationEntity, PeopleEntity } from '../model';
//import { operationAPI } from '../api/operationAPI';
import {RouteComponentProps} from 'react-router'

interface State {
    operationList:Array<OperationEntity>
}

export class OperationDetailedPage extends React.Component<RouteComponentProps<any>,State> {
    constructor(props){
        
        super(props);
        const opList = "operationList";
        
        !!this.props.history.location.state?
        this.state={operationList:this.props.history.location.state.operationList}:
        this.state={operationList:JSON.parse(localStorage.getItem(opList))};
        
        localStorage.setItem(opList,JSON.stringify(this.state.operationList));
    }

    onClickRow = (idPerson:number) =>{
        const idOperation:number =  +this.props.match.params.idOperation;
        const operation = this.state.operationList.find(((operation)=>operation.idOperation===idOperation));
        const peopleList = operation.people;
        const person = peopleList.find((p)=>p.idPerson===idPerson);
        const operationId = this.props.match.params.idOperation;

        this.props.history.push({
            pathname:`${idOperation}/personDetail/${idPerson}`,
            state:{
                operation:operation,
                person: person,
                notEditable: true    
            }
        })
    }

    showOperationDetail = (idOperation:number)=>(
        <div className="Operation">
            {
                this.state.operationList
                    .filter((operation)=>+operation.idOperation===+idOperation)
                    .map((operation) => (
                    <ShowOperation key={operation.idOperation} 
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


