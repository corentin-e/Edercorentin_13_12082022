import { useSelector } from 'react-redux';
import { selectFirstName, selectLastName } from '../../redux/userSlice';
import './user_name_form.css'


const UserNameForm = ({closeEditUserName}) => {
    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);
    console.log(firstName)

/*     const updateUserName = () => {
        document.getElementById("fistNameInput").value;
        document.getElementById("lastNameInput").value;
    } */

    return (
        <form className='username-form'>
            <div className='username-inputs'>
                <input className='username-input' type="text" value="" id="fistNameInput" name="first name" placeholder={firstName}></input>
                <input className='username-input' type="text" value="" id="lastNameInput" name="last name" placeholder={lastName}></input>
            </div>
            <div className="username-buttons">
                <button className="username-button">Save</button>
                <button className="username-button" onClick={closeEditUserName}>Cancel</button>
            </div>

        </form>
    );
}

export default UserNameForm