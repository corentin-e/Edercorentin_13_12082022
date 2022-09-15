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

    return(
    <div className="profile-page">
        <TransactionCard/>
    </div>
    );
}

export default Profile;