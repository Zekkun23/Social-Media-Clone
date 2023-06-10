import "./Rightbar.scss"
import { Link } from "react-router-dom"

// This is the code for the right sidebar which includes popular posts and people you may know

const Rightbar = () => {

    const handleLinkClick = () => {
        window.location.reload();
      };

      
    return (
        <div className="rightbar">
            <div className="container">
                <div className="item">
                    <span>Popular Posts</span>
                    <div className="posts">

                    <div className="post">
                        <img src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <div className="desc">
                        <h3>The new market! </h3>
                        <span>4 Likes</span>
                        </div>
                    </div>

                    <div className="post">
                        <img src="https://images.pexels.com/photos/1933464/pexels-photo-1933464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <div className="desc">
                        <h3>My dog is cute! </h3>
                        <span>7 Likes</span>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Popular posts on the side bar */}
                <div className="item">
                <span>People You May Know</span>
                    <div className="people">
                        <div className="person">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                            <div className="desc">
                                <h3>Ken Katakutan</h3>
                                <span>@KanekiKen</span>
                            </div>
                            </div>
                        </div>  

                        <div className="people">
                        <div className="person">
                            <img src="https://images.pexels.com/photos/2829793/pexels-photo-2829793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                            <div className="desc">
                            <h3>Patty Ra</h3>
                                <span>@MoSakhin</span>
                            </div>
                            </div>
                        </div>  

                        <div className="people">
                        <div className="person">
                            <img src="https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                            <div className="desc">
                            <h3>Johnny</h3>
                                <span>@Johnny</span>
                            </div>
                            </div>
                    </div>  
                    {/* People you may know on the side bar */}
                </div> 
            </div> 
        </div>                            
    )
}

export default Rightbar