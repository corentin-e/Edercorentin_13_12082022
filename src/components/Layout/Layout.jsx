import './layout.css';
import { Link } from "react-router-dom";
import logo from '../../assets/argentBankLogo.png';
import userIcon from '../../assets/icons/icon-user.png'

const Layout = ({children}) => {
    return (
        <div className='layout-background'>
            <div className='layout-head'>
                <img src={logo} alt="logo argentBank" className='layout-logo'/>
                <Link to="login" className='layout-sign'>
                    <img src={userIcon} alt="user icon" className='layout-user_icon'/>
                    <label className='layout-text_sign'>Sign In</label>
                </Link>
            </div>
            {children}
            <div className="layout-footer">
                <label>Copyright 2020 Argent Bank</label>
            </div>
        </div>
    );
}

export default Layout;