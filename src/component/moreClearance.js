import { useContext } from "react";
import ImageDataContext from "../context/imageDataContext";
import Box from "@mui/material/Box";
import GridImage from "../common/gridImage"
import { Container, Stack, Typography,Button } from "@mui/material";


function MoreClearance({index, gridSize}){

    const data = useContext(ImageDataContext)
    return(
        <Container maxWidth="xl">
        <Box>
            <Stack direction={{sm:"row"}} justifyContent ="space-between" >
                 <Typography variant="h4"  align="left" p={2}>More Clearnce Deal</Typography>
                 <Button variant="outlined" size ="medium"  sx={{height:"50px" ,marginTop:"7px"}} >View All</Button>        
            </Stack>
          <GridImage arr={data} index ={index}  gridSize={gridSize} />
          {/* <Grid container >
                <Grid>

                </Grid>

          </Grid> */}
                
        </Box>
        </Container>
    )
}
export default MoreClearance;