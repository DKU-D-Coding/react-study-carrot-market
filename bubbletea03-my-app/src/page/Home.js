import Header from "../component/home/Header.js";
import Footer from "../component/home/Footer.js";
import PlusButton from "../component/home/PlusButton.js";
import ItemCard from "../component/ItemCard.js";

function Home() {
    window.scrollTo(0, 0);
    return (
        <div className="home">
            <Header/>
            {
                [1, 2, 3, 4, 5, 6, 7, 8].map(() => <ItemCard/>)
            }
            <PlusButton/>
            <Footer/>
        </div>
    );
}

export default Home;