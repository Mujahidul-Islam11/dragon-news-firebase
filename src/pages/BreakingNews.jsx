import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="bg-gray-200 p-4 flex">
            <button className="btn btn-secondary">BreakingNews</button>
            <Marquee pauseOnHover={true} speed={150} >
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet.     Bayern Slams Authorities Over Flight Delay to Club World Cup
            </Marquee>
        </div>
    );
};

export default BreakingNews;