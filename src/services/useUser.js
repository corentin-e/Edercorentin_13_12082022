import axios from 'axios'
import {useDispatch, useSelector } from "react-redux";
import {logIn, selectToken} from "../redux/authSlice";
import { useNavigate } from "react-router-dom";


export default function useUser() {
    const dispatch = useDispatch()
    const token = useSelector(selectToken)

    //try / catch en cas d'erreur
    const getUser = async () => {
        const response = await axios.get(`http://localhost:3001/api/v1/user/profile`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })


    }



    const putUser = async (body) => {
        //TODO
    }




    const isLogged = !!useSelector(selectToken)

    return {
        putUser,
        getUser,
    }
}