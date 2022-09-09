import axios from 'axios'
import {useDispatch, useSelector } from "react-redux";
import {logIn, selectToken} from "../redux/authSlice";
import { useNavigate } from "react-router-dom";


export default function useAuth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //try / catch en cas d'erreur
    const login = async (body) => {
        const response = await axios.post(`http://localhost:3001/api/v1/user/login`, body)
        console.log(response)
        console.log(response.data)
        const token = response.data.body.token
        dispatch(logIn({
            token
        }))

        navigate('/profile')

    }

    const logout = () => {
        console.log('LOGOUT')
    }


    const isLogged = !!useSelector(selectToken)

    return {
        login,
        logout,
        isLogged
    }
}