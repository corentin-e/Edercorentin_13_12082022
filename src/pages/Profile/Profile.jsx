import '../Profile/profile.css'
import useUser from "../../services/useUser";
import {useEffect} from "react";
import { TransactionCard } from '../../components';
import {selectFirstName, selectLastName} from "../../redux/userSlice";
import {useSelector} from "react-redux";

const Profile = () => {
    const { getUser } = useUser()
    const { putUser } = useUser()

    useEffect(() => {
       getUser()
    }, [])

    const firstName = useSelector(selectFirstName)
    const lastName = useSelector(selectLastName)
    console.log(firstName, lastName)


    const editUserName = () => {
        document.getElementById("editUserName").className="profile-page-button_form-hidden";
        document.getElementById("nameUserProfil").className="profile-page-name-hidden";
    }

    return(
    <div className='profile-page'>
        <div className='profile-page-header'>
            <span className='profile-page-title'>Welcome back</span>
            <div className='profile-page-name-hiden' id="nameUserProfil">
                <span>{firstName}</span>
                &nbsp;
                <span>{lastName}</span>
            </div>
            <button className="profile-page-button_form" onClick={editUserName} id="editUserName">Edit</button>
        </div>
        <TransactionCard/>
    </div>
    );
}

export default Profile;