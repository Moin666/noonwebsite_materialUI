import { IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "bootstrap";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Stack from '@mui/material/Stack';


function AllCategories({handleOpen}) {
  const Item = styled(Box)(({ theme }) => ({
    // marginTop: "80px",
    // textAlign: "center",
  }));

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));
  return (
    <Box sx={{ flexGrow: 1, marginTop:"75px", marginBottom:"20px" }}>
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Typography variant="h6">Electronics <KeyboardArrowDownIcon/></Typography>
      </Grid>
      <Grid item xs={8}>
      <Stack direction="row" spacing={4}>
 
        <Typography  fontWeight='fontWeightMedium' variant="h6">Electronics</Typography>
        <Typography variant="h6">MEN</Typography>
        <Typography variant="h6">WOMEN</Typography>
        <Typography variant="h6">HOME</Typography>
        <Typography variant="h6">BABY AND TOYS</Typography>
        <Typography variant="h6">SPORTS</Typography>
        <Typography variant="h6">BEST SELLER</ Typography>
        <Typography variant="h6">SELL ON NOON</Typography>
        <Typography variant="h6">BEAUTY AND FRAGNANCE</Typography>

      </Stack>
      </Grid>
    
    </Grid>
  </Box>
  );
}

export default AllCategories;
