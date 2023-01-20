import Card from '../Components/Card';
import { Link } from 'react-router-dom';
import styles from '../App.css'
function Main() {
    return(
        <>
            <h1 className="toDoTitle">Hello World!</h1>
            <div className="toDo">
                <Link to="/study">
                    <Card title="study" img={process.env.PUBLIC_URL + '/study.png'} />
                </Link>
                <Link to="/shopping">
                    <Card title="shopping" img={process.env.PUBLIC_URL + '/shopping.jpg'} />
                </Link>
                <Link to="exercise">
                    <Card title="exercise" img={process.env.PUBLIC_URL + '/exercise.jpg'} />
                </Link>
            </div>
        </>
    )
}

export default Main;