import { OperationEntity } from '../model';

export interface StateOperation {
  operationList: Array<OperationEntity>;
  open: boolean;
}

export const createInitialStateOperationDetail = (operationList: Array<OperationEntity>) => ({
  operationList,
  open: false,
});

