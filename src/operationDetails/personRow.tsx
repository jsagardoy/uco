import * as React from 'react';
import {PeopleEntity} from '../model';

interface Props {
    person : PeopleEntity;
}

export class PersonRow extends React.Component<Props>{

    constructor(props:Props) {
        super(props);
    }

render(){    
    return(
        <tr>
            <td>
                <img src={this.props.person.picsLinks[0]} alt="person portrait" style={{ maxWidth: '10rem' }}/>
            </td>
            <td>
                <span>{this.props.person.name}</span>
            </td>
            <td>
                <span>{this.props.person.aka}</span>
            </td>
        </tr>
        )
}
    
}
