import * as React from 'react';

import { PeopleEntity } from '../../model';

interface Props {
    person: PeopleEntity;
}

export const RutinesFormComponent: React.StatelessComponent<Props> = (props:Props) =>(
        <div id="rutines-component" className="rutines-component" >
        <label className="rutines" htmlFor="rutines">Rutinas</label>
            <ul className="rutineList">
                
                    {
                        props.person.rutine.map((rut)=> 
                        <li key={rut}>{rut}</li>
                        )
                    }
            
            </ul>
            {
                //AÑADIR AQUÍ LOS BOTONES DE AÑADIR Y ELIMINAR TAREA
            }
        </div>
)