import { Container,Box } from "@mui/material";
import GridImage from '../common/gridImage'

import { useContext } from "react";
import ImageDataContext from "../context/imageDataContext";

function SetTablePart({index,gridSize}){

    const data = useContext(ImageDataContext)
    console.log(data)
    console.log("sasd")
    return(
        <Container maxWidth="xl"   >
            <Box sx={{padding:"15px", background:"rgb(235, 235, 235)"}}>

            <GridImage arr={data} index ={index}  gridSize={gridSize} />
            </Box>
        </Container>
    )

}

export default SetTablePart;