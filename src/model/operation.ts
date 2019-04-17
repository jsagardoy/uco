import { PeopleEntity } from './people';
export interface OperationEntity {
  nameOperation: string;
  idOperation: number;
  state: boolean;
  operationType: string;
  people?: PeopleEntity[];
}
