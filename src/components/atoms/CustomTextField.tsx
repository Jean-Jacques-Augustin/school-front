import React from "react";
import { styled, TextField } from "@mui/material";

interface CustomLoginInterface {
  children?: React.ReactNode;
}

const StyledCustomLogin = styled(TextField)`
  color: inherit;
  text-decoration: none;
`;

export default function CustomLogin({ children }: CustomLoginInterface) {
  return <StyledCustomLogin>{children}</StyledCustomLogin>;
}
