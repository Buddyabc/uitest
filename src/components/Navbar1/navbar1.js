import "./navbar.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
const Navbar=(props)=>{
    return (
        <>
        <div className="navbar">
            <div className="logo">{props.navbarData.logo.inner}</div>
            <div className="otherSection">
                <div className="account mar-2"><a  href={props.navbarData.account.link}><AccountCircleIcon/></a></div>
                 <select className="selectSection">
                    <option value="0" className="name">{props.navbarData.selectedName.name}</option>
                    <option value="0">About</option>
                    <option value="0">Log out</option>
                 </select>
                <div className="notification mar-2"><a href={props.navbarData.notification.link} style={{color:"black"}}><NotificationsIcon/></a>
                </div>
                <div className="AppsIcon mar-2"><a href={props.navbarData.grid.link} style={{color:"black"}}><AppsIcon/></a></div>
            </div>
            </div>
            <div className="borderLine"></div>
        </>
    )
}
export default Navbar;