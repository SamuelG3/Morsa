import React from "react";
import HomeHeader from "../UI/organisms/HomeHeader";
import HomeFooter from "../UI/organisms/HomeFooter";

export default function Visitor(props) {
  return (
    <div>
      <HomeHeader />
      {props.children}
      <HomeFooter />
    </div>
  );
}
