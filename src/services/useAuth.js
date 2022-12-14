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
        const token = response.data.body.token
        dispatch(logIn({
            token
        }))
        navigate('/profile')
    }


    const logout = () => {
        alert('Vous êtes maintenant déconnecté')
    }

    const isLogged = useSelector(selectToken) //"userSelector" replace "!!useSelector"

    return {
        login,
        logout,
        isLogged,
    }
}