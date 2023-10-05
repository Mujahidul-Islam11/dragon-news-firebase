import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./Header/Header";
import LeftsideNav from "./LeftSideNavs/LeftsideNav";
import Nav from "./Navbar/Nav";
import RightSideNav from "./RightSideNav/RightSideNav";
import News from "./News/News";

const Home = () => {
    const Newses = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Nav></Nav>
            <dir className="grid md:grid-cols-4 gap-6 mt-16">
                <div>
                    <LeftsideNav></LeftsideNav>
                </div>
                <div className="md:col-span-2 rounded-lg">
                    {
                        Newses.map(news=> <News key={news._id} news={news}></News>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </dir>
        </div>
    );
};

export default Home;