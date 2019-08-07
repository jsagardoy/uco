import * as React from 'react';
import { OperationEntity } from '../../model/operation';
import { RowComponent } from './';
import TableBody from '@material-ui/core/TableBody';

interface Props {
  operationList: Array<OperationEntity>;
  type: boolean;
  onClickRow: (id: number) => void;
  onToggle: (newOperation: OperationEntity) => void;
}

export const TableBodyComponent: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <>
      {props.operationList
        .filter(operation => operation.state === props.type)
        .map((operation: OperationEntity) => (
          <RowComponent
            key={operation.idOperation}
            operation={operation}
            onClickRow={props.onClickRow}
            onToogle={props.onToggle}
          />
        ))}
    </>
  );
};
