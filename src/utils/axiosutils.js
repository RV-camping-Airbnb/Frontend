import axios from 'axios';

export const axiosWithoutAuth = () => {
  return axios.create({
    baseURL: 'https://rvnb-app.herokuapp.com'
  })
}

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  return axios.create({
    baseURL: 'https://rvnb-app.herokuapp.com',
    headers: {
      "Authorization": `${token}`,
      "Content-Type": 'application/json'
    }
  })
}