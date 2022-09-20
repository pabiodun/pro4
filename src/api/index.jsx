import { ServiceApi, routes } from './api';


export const loginUser = async (body) => await ServiceApi.post(routes.userLogin, body);