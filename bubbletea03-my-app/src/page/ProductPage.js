import Footer from '../component/product-page/Footer';
import Header from '../component/product-page/Header';
import TopImage from '../component/product-page/TopImage';
import UserContent from '../component/product-page/UserContent';
import UserItemList from '../component/product-page/UserItemList';

function ProductPage() {
    window.scrollTo(0, 0);
    return (
        <div className="product-page">
            <Header/>
            <Footer/>
            <TopImage/>
            <UserContent/>
            <UserItemList/>
        </div>
    );
}

export default ProductPage;