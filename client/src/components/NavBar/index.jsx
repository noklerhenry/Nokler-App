import React from "react";
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
  ButtonShop,
} from "./styleNavBar.js";
import ImgLogo from "./Logo/footer_nokler_logo.png";
import SearchBar from "../searchBar/index";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { loginWithRedirect } = useAuth0();
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
            <ButtonUser onClick={loginWithRedirect}>
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
};

export default NavBar;
