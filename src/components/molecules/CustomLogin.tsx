import { Button, Grid, Paper, Typography } from "@mui/material";
import CustomTextField from "../atoms/CustomTextField";

export default function CustomLogin() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "90vh",
            }}
        >
            <Paper
                elevation={2}
                style={{
                    padding: 0,
                    width: "400px",
                }}
            >
                <Grid
                    container
                    direction="column"
                    padding={2}
                    spacing={2}
                    margin={0}
                    width={"100%"}
                >
                    <Grid item>
                        <Typography variant="h4">
                            <b>Login</b>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <CustomTextField label="Email" />
                    </Grid>
                    <Grid item>
                        <CustomTextField label="Password" />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" fullWidth>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
