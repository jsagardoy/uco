import * as React from 'react';
import { PeopleEntity } from '../../model';
import { TableRow, TableCell } from '@material-ui/core';
import { css } from 'emotion';

interface Props {
  person: PeopleEntity;
  onClickRow: (id: number) => void;
}

const imgStyle = css`
  border-radius: 50%;
  max-width: 5em;
  max-height: 5em;
`;

export const PersonRow: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <TableRow onClick={() => props.onClickRow(props.person.idPerson)}>
      <TableCell align="left">
        <img className={imgStyle} src={props.person.picsLinks[0].img.data} alt="person portrait" />
      </TableCell>
      <TableCell align="left">{props.person.namePerson}</TableCell>
      <TableCell align="left">{props.person.aka}</TableCell>
      <TableCell align="left">
      <img className={imgStyle} src={props.person.vehicles[0].pic[0].img.data} alt="vehicle portrait"/>
      </TableCell>
    </TableRow>
  );
};
