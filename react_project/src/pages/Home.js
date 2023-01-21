import AddBtn from "../Components/Home/AddBtn";
import BottomBar from "../Components/Home/BottomBar";
import Card from "../Components/Home/Card";
import TopBar from "../Components/Home/TopBar";

function Home(){
    return(
        <>  
            <TopBar />
            <AddBtn />
            <Card title="상품명" img={process.env.PUBLIC_URL + '/no_img.jpg'} alt="image" price="0" like="n" goodsId="406"/>
            <Card title="상품명" img={process.env.PUBLIC_URL + '/no_img.jpg'} alt="image" price="0" like="n" goodsId="407"/>
            <Card title="상품명" img={process.env.PUBLIC_URL + '/no_img.jpg'} alt="image" price="0" like="n" goodsId="408"/>
            <Card title="상품명" img={process.env.PUBLIC_URL + '/no_img.jpg'} alt="image" price="0" like="n" goodsId="409"/>
            <Card title="상품명" img={process.env.PUBLIC_URL + '/no_img.jpg'} alt="image" price="0" like="n" goodsId="410"/>
            <BottomBar />
        </>
    )
}

export default Home;