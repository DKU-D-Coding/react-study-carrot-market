import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 33.3%;
  overflow: hidden;
  margin: 0 auto;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
  max-width: 100%;
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;
const IMG = styled.img`
  max-width: 100%;
  height: 70vh;
  object-fit: cover;
  object-position: center;
`;

function Carousel({ imageList = [] }) {
  console.log(imageList);
  const [currentSlide, setCurrentSlide] = useState(0);
  const TOTAL_SLIDES = imageList.length - 1;

  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        {imageList.map(item => (
          <Slide key={item.id} img={item.url} />
        ))}
      </SliderContainer>
      <ButtonContainer>
        <Button onClick={prevSlide}>Previous Slide</Button>
        <Button onClick={nextSlide}>Next Slide</Button>
      </ButtonContainer>
    </Container>
  );
}
function Slide({ img }) {
  return <IMG src={img} alt={'image'} />;
}
export default Carousel;
