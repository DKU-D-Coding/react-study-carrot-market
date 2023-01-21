import Header from "../component/Header";
import Footer from "../component/Footer";
import PlusButton from "../component/PlusButton";
import ItemCard from "../component/ItemCard";

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