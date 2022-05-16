import Carousel from "../common/carousel";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

function CarouselComplete() {
  return (
    <Container  maxWidth="xl"  >
      <Grid container spacing={0} className="">
        <Grid item sm={8}>
          <Box sw={{width:"100%"}}>
            <Carousel />
          </Box>
        </Grid>
        <Grid item sm={2}>
          <Box>
            <img width="100%" style={{height:"30vh"}} src="https://k.nooncdn.com/cms/pages/20220510/c252e39d84d26530b563be2f71d11296/en_dk_uae-fash-01.png"/>
          </Box>
        </Grid>
        <Grid item sm={2}  >
          <Box  >
            <img  width="100%" style={{height:"30vh"}} src="https://k.nooncdn.com/cms/pages/20220510/c252e39d84d26530b563be2f71d11296/en_dk_uae-fash-03.png" />
          </Box>
        </Grid>

        <Grid item sm ={2}>
            
        </Grid>
      </Grid>
    </Container>
  );
}

export default CarouselComplete;
