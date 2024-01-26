import React from "react";
import { useLocation, Navigate } from "react-router-dom";

function SecureRoute({ children }) {
  const { pathname } = useLocation();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    const redirect = encodeURIComponent(pathname);
    return (
      <Navigate
        to={{
          pathname: "/login",
          state: { from: redirect },
        }}
      />
    );
  }

  return <>{children}</>;
}

export default SecureRoute;
