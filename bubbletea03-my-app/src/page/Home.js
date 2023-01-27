import Header from "../component/home/Header.js";
import Footer from "../component/home/Footer.js";
import PlusButton from "../component/home/PlusButton.js";
import ItemCard from "../component/ItemCard.js";

import itemData from "../data/ItemData.js";

function Home() {
    window.scrollTo(0, 0);
    
    return (
        <div className="home">
            <Header/>
            {
                itemData.map((item, idx) => <ItemCard item={item} key={idx}/>)
            }
            <PlusButton/>
            <Footer/>
        </div>
    );
}

export default Home;