import { Grid, Paper, Box, Container } from "@mui/material";
import Aside from "./../../components/Aside";
import NavBar from "../../components/NavBar";
import ContentDash from "../../components/ContentDash";
import "./../../styles/page/dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <Box className="dashboard">
        <Grid
          container
          style={{ width: "95%", margin: "0 auto", padding: "2rem 0" }}
        >
          <Grid item xs={3}>
            <Aside />
          </Grid>

          <Grid item xs={9} className="content">
            <Grid item xs={12}>
              <NavBar />
            </Grid>

            <Grid item xs={12}>
              <ContentDash />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
