export interface IUserState {
  isLogged: boolean;
  isLoading: boolean;
  canAddObrigation: boolean;
  canAddTemplateObrigation: boolean;
  canCreateMassObrigation: boolean;
  token: string | null;
  refresh_token: string | null;
  info: IUserInfo;
}
export interface IUserInfo {
  email: string;
  name: string;
  profile_image: null;
  groups: string[];
  is_superuser: boolean;
}
