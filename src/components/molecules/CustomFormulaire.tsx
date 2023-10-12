import { Button, Grid, Paper, Typography } from "@mui/material";
import CustomTextField from "../atoms/CustomTextField";

export default function CustomFormulaire() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper elevation={3} style={{ padding: "20px" }}>
        <form>
          <Grid container direction="column" spacing={2} alignItems="center">
            <Grid item>
              <Typography variant="h5">Form Title</Typography>
            </Grid>
            <Grid item>
              <CustomTextField label="Name" />
            </Grid>
            <Grid item>
              <CustomTextField label="LastName" />
            </Grid>
            <Grid item>
              <CustomTextField label="Birth" />
            </Grid>
            <Grid item>
              <CustomTextField label="Email" />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}
