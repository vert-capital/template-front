import type { IUserState, IUserInfo } from './types';

export default {
  setIsLogged(state: IUserState, isLogged: boolean): void {
    state.isLogged = isLogged;
  },
  setIsLoading(state: IUserState, isLoading: boolean): void {
    state.isLoading = isLoading;
  },
  setTokens(state: IUserState): void {
    state.token = String(localStorage.getItem('token'));
    state.refresh_token = String(localStorage.getItem('refresh_token'));
    localStorage.setItem('isLogged', 'logado');
  },
  setClearTokens(state: IUserState): void {
    state.token = null;
    state.refresh_token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('isLogged');
  },
  setUserInfo(state: IUserState, info: IUserInfo): void {
    state.info = info;
  }
};
