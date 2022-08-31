import type { IUserInfo, IUserState } from './types';

export default {
  isLogged: (state: IUserState): boolean => state.isLogged,
  getInfo: (state: IUserState): IUserInfo => state.info
};
