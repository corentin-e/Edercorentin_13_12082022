import { useSelector } from 'react-redux';
import {useState} from "react";
import { selectFirstName, selectLastName } from '../../redux/userSlice';
import useUser from '../../services/useUser';
import './user_name_form.css'


const UserNameForm = ({closeEditUserName}) => {

    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);

    const  { putUser } = useUser()
    

    const [updateName, setUpdateName] = useState({
        firstName: "",
        lastName: "",
    });

    const updateUserName =   async () => {
        const inputsForm = {
            firstName: updateName.firstName,
            lastName: updateName.lastName
        };
        console.log('===update Name User===', inputsForm)
        try {
            putUser();
        } catch (error) {
            console.log("===Error===")
        }
        console.log("===Sucess===")
    }

    const handleUpdateInputsName = (e) => {
        e.preventDefault();
        const inputsName = e.target.id;
        setUpdateName({
          ...updateName,
          [inputsName]: e.target.value,
        });
    };

    return (
        <form className='username-form'>
            <div className='username-inputs'>
                <input className='username-input' type="text" id="firstName" name="first name" placeholder={firstName} onChange={handleUpdateInputsName}></input>
                <input className='username-input' type="text" id="lastName" name="last name" placeholder={lastName} onChange={handleUpdateInputsName}></input>
            </div>
            <div className="username-buttons">
                <button className="username-button" onClick={updateUserName()}>Save</button>
                <button className="username-button" onClick={closeEditUserName}>Cancel</button>
            </div>

        </form>
    );
}

export default UserNameForm