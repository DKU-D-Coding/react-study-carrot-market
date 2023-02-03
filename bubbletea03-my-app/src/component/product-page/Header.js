import { Link, useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    return (
        <div className="header">
            <img src="/product-page/arrow.png" onClick={() => {navigate(-1)}} style={{cursor:"pointer"}}/>
            <Link to="/">
                <img src="/home/home.png"/>
            </Link>
        </div>
    );
}

export default Header;