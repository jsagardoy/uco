import * as React from 'react';
import { ShowOperation } from '../components/operationDetails';
import { OperationEntity, PeopleEntity } from '../model';
//import { operationAPI } from '../api/operationAPI';
import {RouteComponentProps} from 'react-router'
import { storeOperations,getOperationList,initializeStateDetail} from '../api/operationDetail';
import {StateOperation} from '.';
import { Button } from '@material-ui/core';
import { ArrowLeft, PersonAdd } from '@material-ui/icons';

export class OperationDetailedPage extends React.Component<RouteComponentProps<any>,StateOperation> {
    constructor(props){
        
        super(props);
        const operations:Array<OperationEntity> = getOperationList(this.props.history.location.state);
        storeOperations(operations);
        this.state = initializeStateDetail(
                                    this.props.history.location.state,
                                    operations   
                                )
    }


    onClickRow = (idPerson:number) =>{
        const idOperation:number =  +this.props.match.params.idOperation;
        const operation:OperationEntity = this.state.operationList.find(((operation)=>operation.idOperation===idOperation));
        const peopleList:PeopleEntity[] = operation.people;
        const person:PeopleEntity = peopleList.find((p)=>p.idPerson===idPerson);
        //const operationId = this.props.match.params.idOperation;

        this.props.history.push({
            pathname:`${idOperation}/personDetail/${idPerson}`,
            state:{person: person,
                    editable: true    
            }
        })
    }

    showOperationDetail = (id:number)=>(
        <div className="Operation">
            {
                this.state.operationList
                    .filter((operation)=>+operation.idOperation===+id)
                    .map((operation) => (
                    <ShowOperation key={operation.idOperation} 
                                operation={operation} 
                                onClickRow={this.onClickRow}
                    />
                ))
            }
        </div>
    )
    goBack = () => {
        this.props.history.push(`/`);
        //this.goBack();
    }
    addNewPersonToOperation = () => {
        this.props.history.push(`/operationDetail/${+this.props.match.params.idOperation}/personDetail/newPerson`);
    }

    render() {
        return (
            <>
                <Button onClick={(e) => this.goBack()}><ArrowLeft /></Button>
                <Button onClick={(e) => this.addNewPersonToOperation()}><PersonAdd/></Button> 
                {
                    this.showOperationDetail(this.props.match.params.idOperation)
                }
               
            </>
        );
    }

}


