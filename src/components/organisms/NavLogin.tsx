import CustomLoginStudents from "../molecules/CustomLoginStudents";
import React from "react";
import { loginAllStudents } from "../../constants/constants";

export default function NavLogin() {
  return (
    <CustomLoginStudents loginAllStudents={loginAllStudents} password="" />
  );
}
