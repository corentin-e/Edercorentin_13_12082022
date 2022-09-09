import '../Login/login.css'
import { Layout } from '../../components/index.js'
import userIconLarge from '../../assets/icons/icon-user-large.png'
import useToken from "../../services/useToken";

const Login = () => {
    const Logins = useToken()
    console.log(Logins)
    return (
        <Layout>
            <div className="login-card">
                <img src={userIconLarge} alt="user icon large" className='login-card_icon'/>
                <label className='login-card_title'> Sign In</label>
                <div className="login-card_form">
                    <label>Username</label>
                    <input type="email" name="username" id="username" className='login-form_input'/>
                </div>
                <div className="login-card_form">
                    <label>Password</label>
                    <input type="password" name="password" id="password" className='login-form_input'/>
                </div>
                <div className='login-card_option'>
                    <input type="checkbox" className='login-option_checkbox'/>
                    <label>Remember me</label>
                </div>
                <button type="submit" className='login-button'>Sign in</button>
            </div>
        </Layout>
    );
}

export default Login;
