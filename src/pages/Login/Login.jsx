import '../Login/login.css'
import userIconLarge from '../../assets/icons/icon-user-large.png'
import useAuth from "../../services/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm()
    const { login } = useAuth()


    return (
        <form className="login-card" onSubmit={handleSubmit(login)}>
            <img src={userIconLarge} alt="user icon large" className='login-card_icon'/>
            <label className='login-card_title'> Sign In</label>
            <div className="login-card_form">
                <label>Username</label>
                <input type="email" className='login-form_input' {...register("email", { required: true })}/>
            </div>
            <div className="login-card_form">
                <label>Password</label>
                <input type="password" className='login-form_input' {...register("password", { required: true })}/>
            </div>
            <div className='login-card_option'>
                <input type="checkbox" className='login-option_checkbox'/>
                <label>Remember me</label>
            </div>
            <button type="submit" className='login-button'>Sign in</button>
        </form>
    );
}

export default Login;
