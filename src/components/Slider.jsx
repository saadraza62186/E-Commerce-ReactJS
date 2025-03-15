"use client"

import { useState } from "react"
import styled from "styled-components"
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined"
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined"
import { sliderItems } from "../data"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 70vh;
  }
  
  @media (max-width: 480px) {
    height: 60vh;
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
  
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #${(props) => props.bg};
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  
  @media (max-width: 768px) {
    flex: 1;
  }
`

const InfoContainer = styled.div`
  position: absolute;
  left: 52%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  @media (max-width: 1024px) {
    left: 45%;
    padding: 30px;
  }
  
  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 70px;
  
  @media (max-width: 1024px) {
    font-size: 50px;
  }
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`

const Desc = styled.p`
  margin: 50px 0px;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 3px;
  
  @media (max-width: 1024px) {
    margin: 30px 0;
    font-size: 18px;
    letter-spacing: 2px;
  }
  
  @media (max-width: 768px) {
    margin: 15px 0;
    font-size: 16px;
    letter-spacing: 1px;
  }
  
  @media (max-width: 480px) {
    margin: 10px 0;
    font-size: 14px;
  }
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #000;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #000;
    color: white;
  }
  
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 6px;
    font-size: 14px;
  }
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

// Dots for mobile navigation
const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 3;
  
  @media (min-width: 769px) {
    display: none;
  }
`

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#000" : "#ccc")};
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1)
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0)
    }
  }

  const handleDotClick = (index) => {
    setSlideIndex(index)
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon style={{ fontSize: "inherit" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img || "/placeholder.svg"} alt={item.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon style={{ fontSize: "inherit" }} />
      </Arrow>

      {/* Dots for mobile navigation */}
      <DotsContainer>
        {sliderItems.map((_, index) => (
          <Dot key={index} active={slideIndex === index} onClick={() => handleDotClick(index)} />
        ))}
      </DotsContainer>
    </Container>
  )
}

export default Slider

