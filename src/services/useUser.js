import axios from 'axios'
import {useDispatch, useSelector } from "react-redux";
import {selectToken} from "../redux/authSlice";
/* import { useNavigate } from "react-router-dom"; */


export default function useUser() {
    const dispatch = useDispatch()
    const token = useSelector(selectToken)

    //try / catch en cas d'erreur
    const getUser = async (body) => {
        const response = await axios.get(`http://localhost:3001/api/v1/user/profile`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body
        })
        const firstName = response.data.body.firstName
        const lastName = response.data.body.lastName
        dispatch(getUser({
            firstName,
            lastName
        }))
        console.log('Test', firstName)
    }



    const putUser = async (body) => {
        const response = await axios.put(`http://localhost:3001/api/v1/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }, body
        })
        const firstName = response.data.body.firstName
        const lastName = response.data.body.lastName
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