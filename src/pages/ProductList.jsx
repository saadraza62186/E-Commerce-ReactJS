import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
  }
`;

const Filter = styled.div`
  margin: 10px 0;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  
  @media only screen and (min-width: 768px) {
    margin: 20px;
    flex-direction: row;
    align-items: center;
  }
`;

const FilterText = styled.span`
  font-size: 18px;
  margin-bottom: 10px;
  
  @media only screen and (min-width: 768px) {
    font-size: 20px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Select = styled.select`
  padding: 10px;
  font-weight: 600;
  min-width: 120px;
  
  @media only screen and (min-width: 768px) {
    margin-right: 20px;
  }
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <SelectContainer>
            <Select defaultValue="">
              <Option value="" disabled>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select defaultValue="">
              <Option value="" disabled>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </SelectContainer>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select defaultValue="newest">
            <Option value="newest">
              Newest
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
