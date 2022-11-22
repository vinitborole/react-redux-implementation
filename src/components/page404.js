import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Link, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

const Item = styled("div")(({ theme }) => ({
  height: "500px",
  display: "flex",
  alignContent: "center",
  flexDirection: "column",
  justifyContent: "center",
}));

const Page404 = () => {
  return (
    <>
      <Helmet>
        <title> 404 | React-Redux </title>
      </Helmet>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} lg={6}>
            <Item>
              <Typography variant="h2" noWrap>
                OOps!
              </Typography>
              <Typography color={`red`} variant="h2" noWrap>
                You Lost Somewhere
              </Typography>

              <Typography variant="body2" sx={{ mb: 5 }}>
                Don’t have an account? {""}
                <Link href={`/`} variant="subtitle2">
                  Go To Home
                </Link>
              </Typography>
            </Item>
          </Grid>
          <Grid xs={12} lg={6}>
            <img src="/assets/images/rocket.gif" alt="lost" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Page404;
