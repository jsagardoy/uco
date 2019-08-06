import { OperationEntity } from '../model';
import { StateOperation, createInitialStateOperationDetail } from '../pages';

const _OPDETAIL = 'operationDetail';

export const loadOperationDetail = () => JSON.parse(localStorage.getItem(_OPDETAIL));

export const getOperationList = (state: StateOperation): any => (state ? state.operationList : loadOperationDetail());

export const storeOperations = (operationList: Array<OperationEntity>) => {
  localStorage.setItem(_OPDETAIL, JSON.stringify(operationList));
};

export const initializeStateDetail = (state: StateOperation, operationList: Array<OperationEntity>, open:boolean) =>
  !!state ? createInitialStateOperationDetail(state.operationList) : createInitialStateOperationDetail(operationList);
