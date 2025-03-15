"use client"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5), 
      rgba(255, 255, 255, 0.5)
    ), 
    url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500") 
    center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  padding: 20px;
  box-sizing: border-box;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`

const InputContainer = styled.div`
  width: 48%;
  margin-bottom: 15px;
  
  @media (max-width: 576px) {
    width: 100%;
  }
`

const FullWidthInputContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
`

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: teal;
  }
`

const Agreement = styled.span`
  font-size: 14px;
  margin: 15px 0;
  text-align: center;
  color: #555;
  width: 100%;
`

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px;
  background-color: teal;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  margin: 20px auto 0;
  display: block;

  &:hover {
    background-color: #005f5f;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
    // Add your registration logic here
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input placeholder="First Name" required />
          </InputContainer>
          <InputContainer>
            <Input placeholder="Last Name" required />
          </InputContainer>
          <FullWidthInputContainer>
            <Input placeholder="Email" type="email" required />
          </FullWidthInputContainer>
          <FullWidthInputContainer>
            <Input placeholder="Username" required />
          </FullWidthInputContainer>
          <FullWidthInputContainer>
            <Input type="password" placeholder="Password" required />
          </FullWidthInputContainer>
          <FullWidthInputContainer>
            <Input type="password" placeholder="Confirm Password" required />
          </FullWidthInputContainer>
          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the{" "}
            <b>PRIVACY POLICY</b>.
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register

