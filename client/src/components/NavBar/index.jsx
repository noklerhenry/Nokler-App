import React from 'react';
import { 
    Nav, 
    NavBarContainer, 
    NavLogo, 
    SearchBarContainer,
    UserIconContainer, 
    ButtonUser,
    UserIcon,
    UserSpan,
    ShopIconContainer,
    ShopIcon,
    ButtonShop
} from './styleNavBar.js';
import ImgLogo from "./Logo/footer_nokler_logo.png";
import SearchBar from '../SearchBar/index';


const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo>
            <img src={ImgLogo} alt="nokler logo" width="110px" height="30px" />
          </NavLogo>
          <SearchBarContainer>
            <SearchBar />
          </SearchBarContainer>
          <UserIconContainer>
            <ButtonUser>
              <UserIcon />
            </ButtonUser>
            <UserSpan>Sign in / Register</UserSpan>
          </UserIconContainer>
          <ShopIconContainer>
              <ButtonShop>
                  <ShopIcon />
              </ButtonShop>
          </ShopIconContainer>
        </NavBarContainer>
      </Nav>
    </>
  );
}

export default NavBar