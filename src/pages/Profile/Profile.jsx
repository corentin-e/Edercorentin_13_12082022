import '../Profile/profile.css'
import useUser from "../../services/useUser";
import {useEffect, useState} from "react";
import { TransactionCard, UserNameForm } from '../../components';
import {selectFirstName, selectLastName} from "../../redux/userSlice";
import {useSelector} from "react-redux";
import {selectToken} from "../../redux/authSlice";
import {Navigate} from "react-router-dom";

const Profile = () => {
    const { getUser } = useUser()
    const token = useSelector(selectToken)

    useEffect(() => {
       getUser()
    }, []);

    const firstName = useSelector(selectFirstName)
    const lastName = useSelector(selectLastName)

    console.log(firstName, lastName)

    const [displayUserNameForm, setDisplayUserNameForm] = useState(false)

    const openEditUserName = () => {
        setDisplayUserNameForm(true)
    }

    const closeEditUserName = () => {
        setDisplayUserNameForm(false)
    }

    console.log('====')
    console.log(token)

    if (!token) {
       return <Navigate to="/" replace={true} />
    }

    return(
    <div className='profile-page'>
        <div className='profile-page-header'>
            <span className='profile-page-title'>Welcome back</span>
            {displayUserNameForm === false ? (
                <div className='profile-page-user-name'>
                    <div className='profile-page-name'>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </div>
                    <button className='profile-page-button_form' onClick={openEditUserName} id="editUserName">Edit</button>
                </div>
            ) : <UserNameForm closeEditUserName={closeEditUserName}/> }
        </div>
        <TransactionCard/>
    </div>
    );
}

export default Profile;