import React from "react";
import { Cards } from "./Cards";
import { Cart } from "./Cart";
import { Logout } from "./Logout";
import { Profile } from "./Profile";

export const Home = () => {
  return (
    <div>
      <Logout />
      <Profile />
      <h1>Hellow World!</h1>
      <hr />
      <Cards />
      <hr />
      <Cart />
    </div>
  );
};
