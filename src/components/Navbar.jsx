"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Badge } from "@mui/material"
import { grey } from "@mui/material/colors"

// Styled components with responsive design
const Container = styled.div`
  height: 60px;
  position: relative;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  
  @media (max-width: 576px) {
    display: none;
  }
`

const Input = styled.input`
  border: none;
  flex: 1;
  outline: none;
`

const Logo = styled.h1`
  font-weight: bold;
  flex: 1;
  text-align: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
  @media (max-width: 768px) {
    display: ${(props) => (props.hideOnMobile ? "none" : "flex")};
  }
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const MenuButton = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
`

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100vh;
  background-color: white;
  z-index: 999;
  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  box-shadow: ${(props) => (props.isOpen ? "0 0 10px rgba(0,0,0,0.2)" : "none")};
`

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`

const MobileMenuContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const MobileMenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  padding: 10px 0;
`

const MobileSearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-bottom: 20px;
  width: 100%;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest(".mobile-menu")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuButton onClick={() => setIsMenuOpen(true)}>
            <MenuIcon />
          </MenuButton>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: grey[500], fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Saad.</Logo>
        </Center>
        <Right>
          <MenuItem hideOnMobile>REGISTER</MenuItem>
          <MenuItem hideOnMobile>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>

      {/* Mobile Menu */}
      <Overlay isOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} className="mobile-menu">
        <MobileMenuHeader>
          <Logo style={{ margin: 0 }}>Saad.</Logo>
          <CloseIcon style={{ cursor: "pointer" }} onClick={() => setIsMenuOpen(false)} />
        </MobileMenuHeader>
        <MobileMenuContent>
          <MobileSearchContainer>
            <Input placeholder="Search" style={{ width: "100%" }} />
            <SearchIcon style={{ color: grey[500], fontSize: 16, marginLeft: "5px" }} />
          </MobileSearchContainer>
          <MobileMenuItem>EN</MobileMenuItem>
          <MobileMenuItem>REGISTER</MobileMenuItem>
          <MobileMenuItem>SIGN IN</MobileMenuItem>
        </MobileMenuContent>
      </MobileMenu>
    </Container>
  )
}

export default Navbar

