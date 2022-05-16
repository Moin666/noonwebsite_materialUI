import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import PetsIcon from "@mui/icons-material/Pets";
import Badge from "@mui/material/Badge";
import InputBase from "@mui/material/InputBase";

import Avatar from "@mui/material/Avatar";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Mail, Notifications, Pets } from "@mui/icons-material";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#ffeb3b",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "60%",
  textAlign: "start",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

function Navbar() {
  return (
    <AppBar >
      <StyledToolbar position="static" >
        <Box>
          <IconButton disableRipple>
            <img src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"></img>
          </IconButton>
          <IconButton disableRipple>
            <img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"></img>
            <Typography
              variant="caption"
              sx={{ marginTop: "2px", marginLeft: "7px" }}
            >
              {" "}
              Delivery to <br /> Dubai
            </Typography>
          </IconButton>
        </Box>
        <Search>
          <InputBase
            sx={{ marginLeft: "2px",width:"100%" }}
            placeholder="What are you looking for?"
          />
        </Search>
        <Icons>
          <IconButton disableRipple>العربية</IconButton>
          <IconButton aria-label="delete" disableRipple size="small">
          | Sign In <SupervisorAccountIcon />
          </IconButton>
          <IconButton aria-label="delete" size="small" disableRipple>
            <Badge badgeContent={8} color="error">
              | Cart <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Icons>

        {/* <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          MK DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} /> */}
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
