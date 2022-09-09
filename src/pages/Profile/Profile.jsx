import '../Profile/profile.css'
import useUser from "../../services/useUser";
import {useEffect} from "react";

const Profile = () => {
    const { getUser } = useUser()

    useEffect(() => {
        getUser()
    }, [])

    return(<div>Profile</div>)
}

export default Profile;