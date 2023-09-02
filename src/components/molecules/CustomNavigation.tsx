import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import CustomLink from "../atoms/CustomLink";

import {navlinksType} from "../../types/students";


interface CustomNavigationInterface {
    title: string;
    navliks: navlinksType[];
}


export default function CustomNavigation(
    {title, navliks}: CustomNavigationInterface
) {
    return <AppBar
        variant={"elevation"}
        elevation={1}
        color={"inherit"}
    >
        <Container>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <Typography
                    variant="h6"
                >{title}
                </Typography>
                <div
                    style={{
                        display: "flex",
                        gap: "1rem"
                    }}
                >
                    {navliks.map((navlink) =>
                        <CustomLink href={navlink.path}>
                            {navlink.name}
                        </CustomLink>)
                    }
                </div>
            </Toolbar>
        </Container>
    </AppBar>
}