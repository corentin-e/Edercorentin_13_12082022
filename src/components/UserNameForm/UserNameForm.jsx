import { useSelector } from 'react-redux';
import { selectFirstName, selectLastName } from '../../redux/userSlice';
import useUser from '../../services/useUser';
import { useForm } from "react-hook-form";

import './user_name_form.css'


const UserNameForm = ({closeEditUserName}) => {
    const { putUser } = useUser()
    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            firstName,
            lastName,
        },
    });

    const onSubmit = (data) => {
        putUser(data)
        closeEditUserName()
    }

    return (
        <form className='username-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='username-inputs'>
                <input className='username-input' {...register("firstName", { required: true })}  />
                <input className='username-input' {...register("lastName", { required: true })} />
            </div>
            <div className="username-buttons">
                <button className="username-button">Save</button>
                <button className="username-button" onClick={closeEditUserName} type="button">Cancel</button>
            </div>

        </form>
    );
}

export default UserNameForm