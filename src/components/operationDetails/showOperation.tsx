import * as React from 'react';
import { OperationEntity, PeopleEntity } from '../../model';
import { PersonRow } from './personRow';
import { TableHeaderOperationDetailComponent, TableBodyComponent } from '.';
import { css } from 'emotion';
import { colors } from '../../common';
import Table from '@material-ui/core/Table';
import { Paper } from '@material-ui/core';

interface Props {
  operation: OperationEntity;
  onClickRow: (id: number) => void;
  open: boolean;
  handleOpen: () => void;
}
//Styles
const divStyles = css`
  color: ${colors.GREEN};
`;

const titleStyles = css`
  text-align: center;
`;
const paperStyles = css`
  width: 80%;
  margin-left: 10%;
`;
const tableStyles = css`
  width: 80%;
`;

//endStyles
export const ShowOperation: React.StatelessComponent<Props> = (props: Props) => (
  <div className={divStyles}>
    <div className={titleStyles}>
      <h1 className="operationTitle">Operación {props.operation.nameOperation}</h1>
      <h2> ({props.operation.operationType})</h2>
    </div>
    <Paper className={paperStyles}>
      <Table className={tableStyles}>
        <TableHeaderOperationDetailComponent />
        <TableBodyComponent
          people={props.operation.people}
          onClickRow={props.onClickRow}
          open={props.open}
          handleOpen={props.handleOpen}
        />
      </Table>
    </Paper>
  </div>
);
