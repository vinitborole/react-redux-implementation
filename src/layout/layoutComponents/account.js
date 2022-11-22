import React, { useState } from "react";

import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/auth";

const account = {
  displayName: "User Name",
  email: "demo@demo.dev",
  photoURL: "/assets/images/avatar.jpg",
};

export default function Account() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const logOut = () => {
    setOpen(null);
    dispatch(logout());
  };

  return (
    <>
      {isAuthenticated && (
        <>
          <IconButton
            onClick={handleOpen}
            sx={{
              p: 0,
              ...(open && {
                "&:before": {
                  zIndex: 1,
                  content: "''",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  position: "absolute",
                  bgcolor: (theme) => alpha(theme.palette.grey[0], 0.8),
                },
              }),
            }}
          >
            <Avatar src={account.photoURL} alt="photoURL" />
          </IconButton>

          <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                p: 0,
                mt: 1.5,
                ml: 0.75,
                width: 180,
                "& .MuiMenuItem-root": {
                  typography: "body2",
                  borderRadius: 0.75,
                },
              },
            }}
          >
            <Box sx={{ my: 1.5, px: 2.5 }}>
              <Typography variant="subtitle2" noWrap>
                {account.displayName}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                noWrap
              >
                {account.email}
              </Typography>
            </Box>

            <Divider sx={{ borderStyle: "dashed" }} />

            <MenuItem onClick={logOut} sx={{ m: 1 }}>
              Logout
            </MenuItem>
          </Popover>
        </>
      )}
    </>
  );
}
