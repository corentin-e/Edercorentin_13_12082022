import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {selectToken} from "../redux/authSlice";
import { updateProfile } from "../redux/userSlice";


export default function useUser() {
    const dispatch = useDispatch()
    const token = useSelector(selectToken)
    console.log('token0',useSelector(selectToken))
    console.log('token',token)

    //try / catch en cas d'erreur
    const getUser = async () => {
        const response = await axios.get(`http://localhost:3001/api/v1/user/profile`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        const firstName = response.data.body.firstName
        console.log('first name', firstName)
        const lastName = response.data.body.lastName

        dispatch(updateProfile({
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