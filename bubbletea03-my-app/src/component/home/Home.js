import Footer from './Footer.js';
import Header from './Header.js';
import ItemCard from './ItemCard.js';
import PlusButton from './PlusButton.js';

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