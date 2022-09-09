import axios from 'axios'
/* import { useQuery } from 'react-query' */



const getToken = async () => {
    const requestLogins = await axios.get(`http://localhost:3001/api/v1/user/login`)
    console.log(requestLogins)
}

export default function useToken() {
    return getToken()
}