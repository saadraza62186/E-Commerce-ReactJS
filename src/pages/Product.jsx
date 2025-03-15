import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  
  @media only screen and (min-width: 768px) {
    padding: 50px;
    flex-direction: row;
  }
`

const ImgContanier = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  
  @media only screen and (min-width: 768px) {
    height: 90vh;
  }
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px 0px;
  
  @media only screen and (min-width: 768px) {
    padding: 0px 50px;
  }
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media only screen and (min-width: 768px) {
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin: 0px 5px;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media only screen and (min-width: 768px) {
    width: 50%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  
  @media only screen and (min-width: 768px) {
    width: auto;
  }

  &:hover {
    background-color: #f8f4f4;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContanier>
          <Image src="/product1.jpg" />
        </ImgContanier>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa molestias eligendi magnam provident
            laboriosam beatae, rerum modi veritatis, atque, cum dignissimos! Porro aliquam tempore impedit aperiam,
            libero blanditiis deserunt.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Product

