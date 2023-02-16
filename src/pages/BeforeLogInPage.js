import React from 'react';
import { Link } from 'react-router-dom';
import carrot from '../images/carrot.jpg';
function BeforeLogInPage() {
  return (
    <div>
      <div>
        <img src={carrot} alt={'carrot'}></img>
      </div>
      <div>
        <Link to='./signup'>
          <button>시작하기</button>
        </Link>

        <p>
          이미 계정이 있나요?
          <Link to='./signin'>
            <span>로그인</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BeforeLogInPage;
