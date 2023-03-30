import React from "react";

import { useAuth } from "../contexts/AuthContext";
import { Loader, Redirect } from "../components";

const AuthenticatedRoute = (Component: any) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    // eslint-disable-next-line react/display-name
    const { loading, token } = useAuth();

    if (loading) {
      return (
        <div className="w-full h-screen bg-background pt-20 flex flex-col gap-4 items-center">
          <Loader />
          <p className="text-lg text-black opacity-80">Loading...</p>
        </div>
      );
    }

    if (token) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
};

export default AuthenticatedRoute;
