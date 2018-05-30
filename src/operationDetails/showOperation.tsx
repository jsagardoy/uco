import * as React from 'react';
import {OperationEntity,PeopleEntity} from '../model';
import {PersonRow} from './personRow';


interface Props {
    operation: OperationEntity;
}

export const ShowOperation = (props:Props)=>{
        return(
            <div className="operation">
                <h1 className="operationTitle">Operación {props.operation.name}</h1>
                <h2> ({props.operation.type})</h2>
                <table className= "table table-striped col-8">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Alias</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.operation.people.map((person : PeopleEntity)=> (
                                <PersonRow key={person.id} person = {person}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )

}

