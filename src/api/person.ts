import { PeopleEntity } from '../model';
import { State, createInitialState } from '../pages/pagePersonDetail.business';

const _OPLIST = 'operationList';

export const loadPerson = () => JSON.parse(localStorage.getItem(_OPLIST));

export const getPerson = (state: State): any => (state ? state.person : loadPerson());

export const storePerson = (person: PeopleEntity) => {
  localStorage.setItem(_OPLIST, JSON.stringify(person));
};

export const initializeState = (state: State, person: PeopleEntity) =>
  !!state ? createInitialState(state.person) : createInitialState(person);
