import api from '@/common/axios';

export const getUserInfo = () => api.get('/user/me/ ');

export const authUrl = () => '/accounts/login';

export const validToken = (token: string) => api.post('/token/verify/', { token: token });

export const getApplications = () => api.get(`/aplicacoes/`);

export const logoutApplication = () => api.get(`/cas/logout/`);
