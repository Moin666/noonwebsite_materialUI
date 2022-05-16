import { Grid, Box } from "@mui/material"


function GridImage({arr,index,bgColor,gridSize}){

  return(
    <Box p={2} >
      <Grid container spacing={2}>
        {arr[index].map(item => <Grid item sm={gridSize} ><Box><img width={"100%"} src={item.urlImg} /></Box></Grid>)}  
    </Grid>
    </Box>
  )

}

export default GridImage