import { useNavigate} from 'react-router-dom'

function Back_Button(){
  const navigate = useNavigate();
  return(
    <div className="back_button">
        <img alt="뒤로가기" src="/ui/back_button.png" 
        onClick={() => {navigate(-1)}} 
        style={{width: "50px", height: "50px", cursor: "pointer", paddingLeft: "20px", paddingTop:"4px"}}/>
    </div>
  );
}
export default Back_Button;
