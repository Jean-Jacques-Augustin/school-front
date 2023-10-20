import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
} from "@mui/material";
import CustomTableCell from "../atoms/CustomStudentsLists";

const UserTable: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Last Name</CustomTableCell>
            <CustomTableCell>Birth</CustomTableCell>
            <CustomTableCell>Email</CustomTableCell>
            <CustomTableCell>Adress</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <CustomTableCell>John Doe</CustomTableCell>
            <CustomTableCell>Doe</CustomTableCell>
            <CustomTableCell>18/06/10</CustomTableCell>
            <CustomTableCell>john.doe@example.com</CustomTableCell>
            <CustomTableCell>2 rue de la glore 98700</CustomTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UserTable;
