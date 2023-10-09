import axios from "axios";

const baseURL=  'http://localhost:3000/api/v1';


/**
 * @example:
 * const response = await api.get('/users') => localhost:3000/api/v1/users
 * const { data } = response;
 */

export const api = axios.create({
     baseURL : baseURL,
     headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
     },
})