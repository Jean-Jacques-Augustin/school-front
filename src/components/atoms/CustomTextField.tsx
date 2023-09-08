import React from "react";
import { styled, TextField } from "@mui/material";

interface CustomLoginInterface {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledCustomLogin = styled(TextField)`
  color: inherit;
  text-decoration: none;
`;

export default function CustomTextField({
  label,
  value,
  onChange,
}: CustomLoginInterface) {
  return <StyledCustomLogin label={label} value={value} onChange={onChange} />;
}
