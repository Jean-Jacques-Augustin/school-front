import {Button, styled} from "@mui/material";
import React from "react";


export interface CustomButtonInterface {
    text: string;
    onClick?: () => void;
    isDisabled?: boolean;
    startIcon?: React.ReactNode;
}

const StyledCustomButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px
`;


export default function CustomButton({text, onClick, isDisabled, startIcon}: CustomButtonInterface) {
    return (<StyledCustomButton variant="contained" onClick={onClick} disabled={isDisabled} startIcon={startIcon}>
        {text}
    </StyledCustomButton>)
}