import Header from "../component/home/Header.js";
import Footer from "../component/home/Footer.js";
import PlusButton from "../component/home/PlusButton.js";
import ItemCard from "../component/ItemCard.js";

import data from "../data/data.js";

function Home() {
    window.scrollTo(0, 0);
    
    return (
        <div className="home">
            <Header/>
            {
                data.map((value, index) => <ItemCard item={value}/>)
            }
            <PlusButton/>
            <Footer/>
        </div>
    );
}

export default Home;