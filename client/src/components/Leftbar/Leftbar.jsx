import "./Leftbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { LogoutOutlined, NotificationAddOutlined } from "@mui/icons-material"; 
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";


//Code for the left side bar which includes the Menu items
const Leftbar = () => {

    const {currentUser} = useContext(AuthContext);

    return (
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                <div className="user">
                   <img src={"/upload/" + currentUser.profilePic} alt="" /> 
                    <span>{currentUser.name}</span>
                </div>
                    <div className="item">
                        <HomeOutlinedIcon fontSize="large"/>
                        <Link to="/" style={{textDecoration:"none"}}>
                        <span>Home</span>
                        </Link>
                    </div>
                    <div className="item">
                        <NotificationAddOutlined fontSize="large"/>
                        <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <span>Profile</span>
                        </Link>
                    </div>
                    <div className="item">
                    <LogoutOutlined fontSize="large"/>
                    <Link to="/login" style={{textDecoration:"none"}}>
                    <span>Logout</span>
                    </Link>
                    </div>
                <hr />
                </div>
            </div>
        </div>
    )
}

export default Leftbar