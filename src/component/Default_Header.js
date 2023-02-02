import BackButton from './Back_Button'
import './Default_Header.css'

function DefaultHeader({title}){
  return(
    <div className="default_header">
        <BackButton />
        <h1 className='ttl'> {title} </h1>
        <h2 className='end'> 완료 </h2>
    </div>
  );
}
export default DefaultHeader;
