import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

const Item = styled("div")(({ theme }) => ({
  height: "500px",
  display: "flex",
  alignContent: "center",
  flexDirection: "column",
  justifyContent: "center",
}));

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called login");
  }

  componentDidMount() {
    console.log("login mount");
  }

  componentDidUpdate() {
    console.log("login updated");
  }

  componentWillUnmount() {
    console.log("login will unmount");
  }

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} lg={6}>
            <Item>
              <Typography variant="h2" noWrap>
                Hello!
              </Typography>
              <Typography color={`red`} variant="h2" noWrap>
                Vinit Borole
              </Typography>
             
              <Typography>
                Its good to see you here! We are still working on something
                great. Stay tune with us for news and events of launch.
              </Typography>
            </Item>
          </Grid>
          <Grid xs={12} lg={6}>
              <img src="/assets/images/comingsoon.gif" alt="coming soon" />
          </Grid>
        </Grid>
      </Box>
    );
  }
}
export default DashboardPage;
