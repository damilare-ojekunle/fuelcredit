import React, { useEffect } from "react";
import Router from "next/router";

export const Redirect = ({ to }: { to: string }) => {
  useEffect(() => {
    Router.push(to);
  }, [to]);
  return null;
};
