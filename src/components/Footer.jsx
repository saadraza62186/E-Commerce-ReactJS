import styled from "styled-components"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import PinterestIcon from "@mui/icons-material/Pinterest"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import PlaceIcon from "@mui/icons-material/Place"
import EmailIcon from "@mui/icons-material/Email"

const Container = styled.div`
  display: flex;
  background-color: #f8f8f8;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 20px 20px 10px 20px;
  }
`

const Logo = styled.h1`
  @media (max-width: 480px) {
    font-size: 24px;
  }
`

const Desc = styled.p`
  margin: 20px 0px;
  line-height: 1.5;
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin: 15px 0;
  }
`

const SocialContainer = styled.div`
  display: flex;
  
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`

const Title = styled.h3`
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    font-weight: 500;
    transform: translateX(5px);
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 10px 20px 20px 20px;
    background-color: #f0f0f0;
  }
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SAAD.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error necessitatibus magnam quam consequatur
          aliquid rem, dignissimos quibusdam placeat a modi tenetur nostrum veniam iure vitae ducimus vero facere. Nemo.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon style={{ fontSize: "20px" }} />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon style={{ fontSize: "20px" }} />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon style={{ fontSize: "20px" }} />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon style={{ fontSize: "20px" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wish List</ListItem>
          <ListItem>Wish List</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <PlaceIcon style={{ fontSize: "20px" }} />
          Dolman Mall Tariq Road Karachi
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ fontSize: "20px" }} />
          +92 315 0277 967
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ fontSize: "20px" }} />
          Contact@Saad.dev
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer

