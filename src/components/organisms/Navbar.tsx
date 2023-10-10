import CustomNavigation from "../molecules/CustomNavigation";
import React from "react";
import { navlinks } from "../../constants/constants";

export default function Navbar() {
  return <CustomNavigation title={"School"} navliks={navlinks} />;
}
