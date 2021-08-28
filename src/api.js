import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyB5oLIKE3Ut3p9-2LOE6-HTGCpjsHBzO28',
   },
})

export default request
