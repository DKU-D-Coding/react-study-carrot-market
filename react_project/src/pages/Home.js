import AddBtn from "../Components/Home/AddBtn";
import BottomBar from "../Components/Home/BottomBar";
import Card from "../Components/Home/Card";
import TopBar from "../Components/Home/TopBar";
import EmptyImg from '../assets/image/no_img.jpg';

let cards = [
    {
        imgSrc: EmptyImg,
        title: "제목 1",
        price: "가격 1",
        goodsId: "226",
        like: 3,
     },
     {
        imgSrc: EmptyImg,
        title: "제목 2",
        price: "가격 2",
        goodsId: "227",
        like: 8,
     },
     {
        imgSrc: EmptyImg,
        title: "제목 3",
        price: "가격 3",
        goodsId: "228",
        like: 7,
     },
     {
        imgSrc: EmptyImg,
        title: "제목 4",
        price: "가격 4",
        goodsId: "229",
        like: 6,
     },
     {
        imgSrc: EmptyImg,
        title: "제목 5",
        price: "가격 5",
        goodsId: "230",
        like: 2,
     }
]

function Home(){
    return(
        <>  
            <TopBar />
            <AddBtn />
                { cards.map(props =>
                        <Card 
                            key = {props.goodsId}
                            {...props}
                        />
                )}       
            <BottomBar />
        </>
    )
}

export default Home;