import Posts from "../../components/Posts/Posts"
import Share from "../../components/Share/Share"
import "./Home.scss"

const Home = () => {
    //Code that shows the share and posts
    return (
        <div className="Home">
            <Share />
            <Posts />
        </div>
    )
}

export default Home