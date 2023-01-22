import Header from "../component/home/Header.js";
import Footer from "../component/home/Footer.js";
import PlusButton from "../component/home/PlusButton.js";
import ItemCard from "../component/ItemCard.js";

function Home() {
    return (
        <div className="home">
            <Header/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <PlusButton/>
            <Footer/>
        </div>
    );
}

export default Home;