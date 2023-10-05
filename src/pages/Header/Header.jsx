import moment from "moment/moment";

const Header = () => {
    return (
        <div>
            <img src={'https://i.ibb.co/zRcFYMJ/logo.png'} alt="" className="mx-auto my-6" />
            <div>
            <p className="text-center">Journalism Without Fear or Favour</p>
            <p className="text-center text-xl mb-8">{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;