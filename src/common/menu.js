import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
function MenuBar({open,handleClose, anchorEl}) {
  return(
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
      vertical: "top",
      horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <MenuItem >Profile</MenuItem>
      <MenuItem >My account</MenuItem>
      <MenuItem >Logout</MenuItem>
    </Menu>
  );
}

export default MenuBar;
