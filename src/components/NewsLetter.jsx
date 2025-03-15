import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    
    @media (max-width: 768px) {
        height: auto;
        padding: 40px 20px;
    }
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    text-align: center;
    
    @media (max-width: 1024px) {
        font-size: 50px;
    }
    
    @media (max-width: 768px) {
        font-size: 40px;
        margin-bottom: 15px;
    }
    
    @media (max-width: 480px) {
        font-size: 32px;
    }
`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    
    @media (max-width: 1024px) {
        font-size: 20px;
    }
    
    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 15px;
    }
    
    @media (max-width: 480px) {
        font-size: 16px;
    }
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    
    @media (max-width: 1024px) {
        width: 70%;
    }
    
    @media (max-width: 768px) {
        width: 80%;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        height: 45px; /* Slightly taller for better touch targets */
    }
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    outline: none;
    
    @media (max-width: 480px) {
        flex: 7;
        font-size: 14px;
    }
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background-color: #006666;
    }
    
    @media (max-width: 480px) {
        flex: 2;
    }
`

const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <SendIcon style={{ fontSize: 'inherit' }} />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter
