import * as React from 'react';
import { PeopleEntity } from '../../model';
import { PersonRow } from '.';
import { TableBody } from '@material-ui/core';

interface Props {
  people: Array<PeopleEntity>;
  open: boolean;
  onClickRow: (idPerson: number) => void;
  handleOpen: () => void;
}

export const TableBodyComponent: React.StatelessComponent<Props> = (props: Props) => (
  <TableBody>
    {props.people
      ? props.people.map((person: PeopleEntity) => (
          <PersonRow
            key={person.idPerson}
            person={person}
            onClickRow={props.onClickRow}
            open={props.open}
            handleOpen={props.handleOpen}
          />
        ))
      : null}
  </TableBody>
);
