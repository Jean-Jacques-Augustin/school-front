import React, { ReactNode } from "react";
import { styled, TableCell, TableCellProps } from "@mui/material";

interface CustomTableCellInterface extends TableCellProps {
  children?: ReactNode;
}

const StyledCustomTableCell = styled(TableCell)`
   {
    color: inherit;
    text-decoration: none;
    width: 100%;
  }
`;

export default function CustomTableCell({
  children,
  ...props
}: CustomTableCellInterface) {
  return <StyledCustomTableCell {...props}>{children}</StyledCustomTableCell>;
}
