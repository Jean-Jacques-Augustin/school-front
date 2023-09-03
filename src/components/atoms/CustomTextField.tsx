import React from "react";
import { styled, TextField } from "@mui/material";

interface CustomTextFieldInterface {
  label: string;
  value: string;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField = styled(TextField)`
  color: inherit;
  text-decoration: none;
`;

export default function CustomLogin({
  label,
  value,
  onchange,
}: CustomTextFieldInterface) {
  return <CustomTextField>{children}</CustomTextField>;
}
