import "./Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


//Navbar code which includes the logo and search bar
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">            
                <span>Social Sphere</span>
            </div>
            <div className="right">

                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
        </div>
    )
}

export default Navbar