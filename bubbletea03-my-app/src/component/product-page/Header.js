import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <img src="/product-page/arrow.png"/>
            <Link to="/">
                <img src="/home/home.png"/>
            </Link>
        </div>
    );
}

export default Header;