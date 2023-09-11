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
            <Drawer anchor={"left"} open={open} onClose={updateOpen}>
              {navliks.map((navlink) => (
                <div
                  style={{
                    width: "25vh",
                    margin: "10px",
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  {navlink.name}
                </div>
              ))}
            </Drawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
