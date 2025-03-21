import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
  
  @media only screen and (min-width: 768px) {
    width: auto;
  }
`

const TopTexts = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
  @media only screen and (min-width: 768px) {
    width: auto;
  }
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0;
  }
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  align-self: center;
  
  @media only screen and (min-width: 768px) {
    align-self: flex-start;
  }
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  @media only screen and (min-width: 768px) {
    align-items: flex-start;
  }
`

const ProductName = styled.span`
  margin-bottom: 10px;
  
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`

const ProductId = styled.span`
  margin-bottom: 10px;
  
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 10px 0;
  
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  
  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  
  @media only screen and (min-width: 768px) {
    height: 70vh;
    margin-top: 0;
    margin-left: 20px;
  }
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="/product1.jpg" />
                <Details>
                  <ProductName>
                    <b>Product : </b>WHITE SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID :</b> 123456
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size :</b> XL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="/product8.jpg" />
                <Details>
                  <ProductName>
                    <b>Product : </b>BLACK SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID :</b> 123456
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size :</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 50</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart

