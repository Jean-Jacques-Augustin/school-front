import React, { useState } from "react";

import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  Hidden,
} from "@mui/material";
import CustomLink from "../atoms/CustomLink";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navlinksType } from "../../types/students";

const drawerWidth = 240;

const simpleDrawer = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120,120,120,0.2)",
  },
};

interface CustomNavigationInterface {
  title: string;
  navliks: navlinksType[];
}

export default function CustomNavigation({
  title,
  navliks,
}: CustomNavigationInterface) {
  const [open, setOpen] = useState(false);

  const updateOpen = () => {
    setOpen(!open);
  };

  return (
    <AppBar variant={"elevation"} elevation={1} color={"inherit"}>
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">{title}</Typography>

          <Hidden mdDown>
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              {navliks.map((navlink) => (
                <CustomLink href={navlink.path}>{navlink.name}</CustomLink>
              ))}
            </div>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={updateOpen}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer
              variant="temporary"
              anchor={"left"}
              open={open}
              onClose={updateOpen}
              sx={simpleDrawer.drawer}
              PaperProps={{ sx: simpleDrawer.drawerPaper, elevation: 9 }}
            >
              <Toolbar />
              <h1>Hello word</h1>
            </Drawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
