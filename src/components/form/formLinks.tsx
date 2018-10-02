import * as React from 'react';
import { PeopleEntity } from '../../model';

interface Props{
    person: PeopleEntity;
}

export const LinksFormComponent:React.StatelessComponent<Props> = (props:Props) =>(
    <div id="links" className='links'>
        <label className="col-10" htmlFor="links">Relaciones</label>
        <ul className="linksList">
        {
            props.person.links.map((link)=> 
            <li key={link}>
                {link}
            </li>)
        }
        </ul>
    </div>
)