import React from "react";

import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, Typography, Link } from "@mui/material";
import Account from "./account";

const HEADER_MOBILE = 50;
const HEADER_DESKTOP = 50;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  background: theme.palette.grey[0],
  boxShadow: "5px 5px 14px 6px #00000021",
  [theme.breakpoints.up("lg")]: {
    width: `100%`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const StyledLogo = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[900],
}));

export default function Header() {
  return (
    <StyledRoot>
      <StyledToolbar>
        <Link href="/">
          <StyledLogo variant="h5" noWrap>
            Redux Login
          </StyledLogo>
        </Link>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <Account />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
