import * as React from 'react';
import { PeopleEntity } from '../../model';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { FamiliarComponent } from '../familiar';
import {dataType} from '../../common';

interface Props{
    person: PeopleEntity;
    showFamiliar: boolean;
    onToggle: (string) => void;
}

export const FamiliarFormComponent:React.StatelessComponent<Props> = (props:Props) =>(
    <div id='familiars' className='familiars'>

        <Button onClick={(event) => props.onToggle(dataType.FAMILIAR)}>
            <span>Familiares</span>
            {props.showFamiliar ?
                <ExpandLess /> :
                <ExpandMore />
            }
        </Button>
        {
            props.showFamiliar ?
                <ul className="familiarList">
                    {
                        props.person.familiars.map((familiar) =>
                            <li key={familiar.idFamiliar}>
                                <FamiliarComponent familiar={familiar} />
                            </li>
                        )
                    }
                </ul>
                :
                <>
                </>
        }
    </div>
)