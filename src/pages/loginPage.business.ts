import { LoginEntity } from '../model';

export const createEmptyLogin = (): LoginEntity => ({
  username: '',
  password: '',
  email: '',
});
