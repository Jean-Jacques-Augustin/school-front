import { Container, TextField, Button } from "@mui/material";
import CustomLogin from "../atoms/CustomTextField";

import { StudentsType } from "../../types/students";

interface CustomStudentsLoginInterface {
  loginAllStudents: StudentsType[];
  password: string;
  login: string;
}

export default function CustomLoginStudents({
  loginAllStudents,
  password,
  login,
}: CustomStudentsLoginInterface) {
  return;
  <Container>
    <TextField label="Outlined" variant="outlined">
      {loginAllStudents.map((loginStudent) => (
        <CustomLogin>{loginStudent.email}</CustomLogin>
      ))}
    </TextField>
    <TextField label="Outlined" variant="outlined">
      {password}
    </TextField>
    <Button>{login}</Button>
  </Container>;
}
