import {  useParams } from "react-router-dom";
import Header from "../Header/Header";
import RightSideNav from "../RightSideNav/RightSideNav";
import Nav from "../Navbar/Nav";

const NewsDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h3>Coming soon...</h3>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;