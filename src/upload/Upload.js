import UploadHeader from '../component/Header3';
import PhotoUpload from './PhotoUpload';
import Category from './Category';
import TextInput from './TextInput';
import TextareaInput from './TextareaInput';

function Upload() {
	return (
    <div className="Upload">
      <UploadHeader title="중고거래 글쓰기"/>
      <PhotoUpload/>
      <TextInput inputText="제목"/>
      <Category />
      <TextInput inputText="가격(원)"/>
      <TextareaInput  />
    </div>
  );
}

export default Upload;



