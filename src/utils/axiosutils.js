import axios from 'axios';

export const axiosWithoutAuth = () => {
  return axios.create({
    baseURL: 'http://localhost:4000/api'
  })
}

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  return axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
      "Authorization": token,
      "Content-Type": 'application/json'
    }
  })
}