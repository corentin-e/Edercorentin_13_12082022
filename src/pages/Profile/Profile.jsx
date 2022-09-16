import '../Profile/profile.css'
import useUser from "../../services/useUser";
import {useEffect} from "react";
import { TransactionCard } from '../../components'

const Profile = () => {
    const { getUser } = useUser()
    const { putUser } = useUser()

    useEffect(() => {
        getUser()
        putUser()
    }, [])
    console.log(getUser())
    return(
    <div className='profile-page'>
        <div className='profile-page-header'>
            <span className='profile-page-title'>Welcome back</span>
            <div className='profile-page-name'>
                <span>{getUser().firstName}</span>
                <span></span>
            </div>
        </div>
        <TransactionCard/>
    </div>
    );
}

export default Profile;