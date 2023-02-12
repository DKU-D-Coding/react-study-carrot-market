import '../style/ModalBasic.css';
import React from 'react';
const ModalBasic = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, categoryList } = props;
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className='close' onClick={close}>
              &times;
            </button>
          </header>
          <main>
            {props.children}
            <div>
              {categoryList.map(element => {
                return (
                  <button
                    className='category'
                    key={element}
                    onClick={e => {
                      e.preventDefault();
                      props.setCategory(element);
                    }}
                  >
                    {element}
                  </button>
                );
              })}
            </div>
          </main>
          <footer>
            <button className='close' onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};
export default ModalBasic;
