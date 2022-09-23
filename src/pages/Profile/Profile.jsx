import '../Profile/profile.css'
import useUser from "../../services/useUser";
import {useEffect} from "react";
import { TransactionCard } from '../../components';

const Profile = () => {
    const { getUser } = useUser()
    const { putUser } = useUser()

    useEffect(() => {
        getUser()
        putUser()
    }, [])
    console.log(getUser())

    const editUserName = () => {
        document.getElementById("editUserName").className="profile-page-button_form-hidden";
        document.getElementById("nameUserProfil").className="profile-page-name-hidden";
    }

    return(
    <div className='profile-page'>
        <div className='profile-page-header'>
            <span className='profile-page-title'>Welcome back</span>
            <div className='profile-page-name-hiden' id="nameUserProfil">
                <span>{/* {getUser().firstName} */}Test</span>
                <span>Test</span>
            </div>
            <button className="profile-page-button_form" onClick={editUserName} id="editUserName">Edit</button>
        </div>
        <TransactionCard/>
    </div>
    );
}

export default Profile;