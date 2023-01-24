import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div style={{ textAlign: 'center'}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Item(props){
  return(
      <figure style={{ float:'center'}}><img src={props.img} width="200px" /><figcaption>{props.todo}</figcaption></figure>
  );
}

function Main(){
  const [arr, func] = useState(['러닝','요가','헬스'])
  return(
    <>
    <h1>TODO list</h1>
    <div style={{ textAlign: 'center'}}>
      <Link to="/one"><Item  todo = {arr[0]} img="running.jpg" /></Link>
      <Link to="/two"><Item  todo = {arr[1]} img="yoga.jpg" /></Link>
      <Link to="/three"><Item  todo = {arr[2]} img="workout.jpg"/></Link>
    </div>
    </>
  );
}
function One(){
  return(
    <div>
      helloworld!
    </div>
  );
}
function Two(){
  return(
    <div>
      helloworld!
    </div>
  );
}
function Three(){
  return(
    <div>
      helloworld!
    </div>
  );
}

