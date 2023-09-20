import "./navbar.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
const Navbar=(props)=>{
    return (
        <>
        <div className="navbar">
            <div className="logo">{props.logo}</div>
            <div className="otherSection">
                <div className="account mx-2"><a style={{color:"black"}}href={props.accountLink}><AccountCircleIcon/></a></div>
                 <select className="selectSection">
                    <option value="0" className="name">{props.name}</option>
                    <option value="0">one</option>
                    <option value="0">two</option>
                 </select>
                <div className="notification mx-2"><a href={props.notificationLink} style={{color:"black"}}><NotificationsIcon/></a>
                </div>
                <div className="AppsIcon mx-2"><a href={props.gridLink} style={{color:"black"}}><AppsIcon/></a></div>
            </div>
            </div>
            <div className="borderLine"></div>
        </>
    )
}
export default Navbar;