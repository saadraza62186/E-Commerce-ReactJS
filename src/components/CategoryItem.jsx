import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    overflow: hidden;
    
    @media (max-width: 768px) {
        height: 30vh;
        margin: 5px 0;
    }
    
    &:hover {
        .image {
            transform: scale(1.05);
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 10px;
    }
    
    @media (max-width: 480px) {
        font-size: 20px;
    }
`

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #f8f8f8;
        transform: scale(1.05);
    }
    
    @media (max-width: 768px) {
        padding: 8px;
        font-size: 14px;
    }
    
    @media (max-width: 480px) {
        padding: 6px;
        font-size: 12px;
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img || "/placeholder.svg"} className="image" />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
