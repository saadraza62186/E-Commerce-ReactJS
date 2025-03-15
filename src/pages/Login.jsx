import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
                url("https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    
    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 1200px) {
        width: 40%;
    }
    
    @media (max-width: 768px) {
        width: 70%;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        padding: 15px;
    }
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    
    @media (max-width: 480px) {
        font-size: 20px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    justify-content: center;
    width: 100%;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    
    &:focus {
        border-color: teal;
    }
    
    @media (max-width: 480px) {
        padding: 8px;
    }
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    border-radius: 3px;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #006666;
    }
    
    @media (max-width: 768px) {
        width: 50%;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        padding: 12px;
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    color: #666;
    text-align: center;
    transition: color 0.3s ease;
    
    &:hover {
        color: teal;
    }
    
    @media (max-width: 480px) {
        font-size: 11px;
    }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" type="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
