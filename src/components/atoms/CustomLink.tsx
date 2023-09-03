import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";

interface CustomLinkInterface {
  href: string;
  children?: React.ReactNode;
}

const StyledCustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default function CustomLink({ href, children }: CustomLinkInterface) {
  return <StyledCustomLink to={href}>{children}</StyledCustomLink>;
}

/*
link to ='/' => <a href='/'>Home</a>
 */
