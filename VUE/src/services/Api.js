import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://vallesdepinto-server.herokuapp.com`
  })
}
