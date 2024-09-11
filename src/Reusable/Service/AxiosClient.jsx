import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://databaseufest.aureliusivan.my.id/api";

localStorage.getItem('LoginID') ? axiosClient.defaults.headers = {
      Authorization: `Bearer ${localStorage.getItem('LoginID')}`,
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
    }
    :
    axiosClient.defaults.headers = {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
    };


axiosClient.defaults.timeout = 20000;

axiosClient.defaults.withCredentials = false;


export function getRequest(URL) {
  return axiosClient.get(`/${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
  return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then(response => response);
}