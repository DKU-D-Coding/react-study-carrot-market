import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import ItemCard from './component/ItemCard.js';
import PlusButton from './component/PlusButton';

function App() {
  return (
    <div className="App">
      <i class="fa-solid fa-bars"></i>
      <Header/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <PlusButton/>
      <Footer/>
    </div>
  );
}

export default App;
