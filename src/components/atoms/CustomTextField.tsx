import React from "react";
import { styled, TextField } from "@mui/material";

<<<<<<< HEAD
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
=======
// interface CustomLoginInterface {
//   children?: React.ReactNode;
// }

// const StyledCustomLogin = styled(TextField)`
//   color: inherit;
//   text-decoration: none;
// `;

// export default function CustomLogin({ children }: CustomLoginInterface) {
//   return <StyledCustomLogin>{children}</StyledCustomLogin>;
// }

interface CustomTextFieldInterface {
    label: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

const StyledCustomTextField = styled(TextField)`
     {
        color: inherit;
        text-decoration: none;
        width: 100%;
    }
`;

export default function CustomTextField({
    label,
    onChange,
    value,
}: CustomTextFieldInterface) {
    return (
        <StyledCustomTextField
            fullWidth
            label={label}
            variant="outlined"
            onChange={onChange}
            value={value}
        />
    );
>>>>>>> ddc3ba4253b156db220a807c05a14e3a966eca51
}
