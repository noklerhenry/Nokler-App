import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return isLoading ? (
    <div>loading...</div>
  ) : (
    isAuthenticated && (
      <div>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
      </div>
    )
  );
};
