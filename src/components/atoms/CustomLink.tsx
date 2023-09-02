import React from "react";
import {Link} from "react-router-dom";
import {styled} from "@mui/material";


interface CustomLinkInterface {
    href: string;
    children: React.ReactNode;
}

const StyledCustomLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
`;

export default function CustomLink({href, children}: CustomLinkInterface) {
    return (<StyledCustomLink to={href}>
        {children}
    </StyledCustomLink>)
}