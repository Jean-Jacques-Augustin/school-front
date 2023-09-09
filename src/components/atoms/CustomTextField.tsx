import React from "react";
import { styled, TextField } from "@mui/material";




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
}
