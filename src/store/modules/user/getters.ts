import type { IUserInfo, IUserState } from './types';

export default {
  isLogged: (): boolean => localStorage.getItem('isLogged') === 'logado',
  getInfo: (state: IUserState): IUserInfo => state.info,
  isInvalidToken: (state: IUserState): boolean => state.invalidToken
};
