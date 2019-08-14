import * as React from 'react';

import { OperationEntity } from '../../model/operation';
import { TableHeaderComponent, TableBodyComponent } from './';

import { colors } from '../../common';
import { css } from 'emotion';
import { TableHead, Table, TableBody, withStyles, createStyles } from '@material-ui/core';

interface Props {
  type: boolean; // true for openOperations false for closed Operations
  operationList: Array<OperationEntity>;
  onClickRow: (id: number) => void;
  onToggle: (operation: OperationEntity) => void;
}


export const OpenTableComponent: React.StatelessComponent<Props> = (props: Props) => {
  // styles
  const headerStyles = css`
    background-color: ${colors.GREEN};
    color: ${colors.YELLOW};
  `;
  // end Styles

  return (
    <Table className="table table-striped table-hover">
      <TableHead id="cabecera" className={headerStyles}>
        <TableHeaderComponent />
      </TableHead>
      <TableBody>
        <TableBodyComponent
          operationList={props.operationList}
          type={props.type}
          onClickRow={props.onClickRow}
          onToggle={props.onToggle}
        />
      </TableBody>
    </Table>
  );
};
