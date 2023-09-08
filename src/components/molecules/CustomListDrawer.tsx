import { AppBar, Container, Toolbar, Typography } from "@mui/material";

import { DrawersLists } from "../../types/ListsDrawers";
import CustomDrawer from "../atoms/CustomDrawer";

interface CustomNavigationInterface {
  listsShown: DrawersLists[];
}

export default function CustomNavigation({
  listsShown,
}: CustomNavigationInterface) {
  return (
    <AppBar variant={"elevation"} elevation={1} color={"inherit"}>
      {listsShown.map((lists) => (
        <CustomDrawer>{lists.user}</CustomDrawer>
      ))}
    </AppBar>
  );
}
