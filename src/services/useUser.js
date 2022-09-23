import axios from 'axios'
import {useDispatch, useSelector } from "react-redux";
import {selectToken} from "../redux/authSlice";
/* import { useNavigate } from "react-router-dom"; */


export default function useUser() {
    const dispatch = useDispatch()
    const token = useSelector(selectToken)

    //try / catch en cas d'erreur
    const getUser = async () => {
        console.log('tokentest', token)
        const response = await axios.get(`http://localhost:3001/api/v1/user/profile`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const firstName = response.data.firstName
        const lastName = response.data.lastName
        console.log({response})
        dispatch(getUser({
            firstName,
            lastName
        }))

    }



    const putUser = async () => {
        const response = await axios.put(`http://localhost:3001/api/v1/user/profile`, 
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const firstName = response.data.firstName
        const lastName = response.data.lastName
        dispatch(putUser({
            firstName,
            lastName
        }))
    }

    return {
        putUser,
        getUser,
    }
}