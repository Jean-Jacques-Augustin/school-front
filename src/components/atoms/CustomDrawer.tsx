import React from "react";
import { styled, Drawer } from "@mui/material";

interface CustomDrawerInterface {
  children?: React.ReactNode;
}

const StyledCustomDrawer = styled(Drawer)`
  color: inherit;
  text-decoration: none;
`;

export default function CustomDrawer({ children }: CustomDrawerInterface) {
  return <StyledCustomDrawer>{children}</StyledCustomDrawer>;
}
