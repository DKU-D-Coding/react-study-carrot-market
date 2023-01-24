import AddBtn from "../Components/Home/AddBtn";
import BottomBar from "../Components/Home/BottomBar";
import Card from "../Components/Home/Card";
import TopBar from "../Components/Home/TopBar";
const baseUrl = process.env.PUBLIC_URL;

let cards = [
    {
        imgSrc: baseUrl + 'no_img.jpg',
        title: "제목 1",
        price: "가격 1",
        goodsId: "226",
        like: 3,
     },
     {
        imgSrc: baseUrl + 'no_img.jpg',
        title: "제목 2",
        price: "가격 2",
        goodsId: "227",
        like: 8,
     },
     {
        imgSrc: baseUrl + 'no_img.jpg',
        title: "제목 3",
        price: "가격 3",
        goodsId: "228",
        like: 7,
     },
     {
        imgSrc: baseUrl + 'no_img.jpg',
        title: "제목 4",
        price: "가격 4",
        goodsId: "229",
        like: 6,
     },
     {
        imgSrc: baseUrl + 'no_img.jpg',
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
            {
                cards.map(card =>
                        <Card 
                            title={card.title}
                            price={card.price}
                            imgSrc={card.imgSrc}
                            goodsId={card.goodsId}
                            like={card.like} 
                        />
                    )
            }
            <BottomBar />
        </>
    )
}

export default Home;