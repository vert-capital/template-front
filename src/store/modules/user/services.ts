import api from '@/common/axios';

export const authUrl = () => '/accounts/login';

//CHANGE: insert route to valid token
export const validToken = (token: string): any => { return { 'token': 'true' } };

export const logoutApplication = () => api.get(`/api/cas/logout/`);
