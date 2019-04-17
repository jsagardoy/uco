import { OperationEntity } from '../model';

export interface StateOperation {
  operationList: Array<OperationEntity>;
}

export const createInitialStateOperationDetail = (operationList: Array<OperationEntity>) => ({
  operationList,
});
