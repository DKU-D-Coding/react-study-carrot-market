import Footer from '../component/home/Footer.js';
import Header from '../component/home/Header.js';
import ItemCard from '../component/ItemCard.js';
import PlusButton from '../component/home/PlusButton.js';

function Home() {
    return (
        <div className="header">
            <Header/>
            <PlusButton/>
            <Footer/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </div>
    );
}

export default Home;