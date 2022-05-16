import { Container, Typography } from "@mui/material";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

import ImageDataContext from "../context/imageDataContext";
import { useContext } from "react";
import { Box } from "@mui/system";

import GridImage from "../common/gridImage";
function MegaDeal({condRed}) {
  const data = useContext(ImageDataContext);
  return (
    <Container maxWidth="xl">
      <Box p={1} sx={{ bgcolor: "rgb(250, 242, 156);" }}>
       {condRed ?<Typography variant="h4" align="left" p={1} sx={{ bgcolor: "primary" }}>Mega deal of the day <QueryBuilderIcon /> 24 hour only</Typography> : <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-title-01C.png"/> }
        <GridImage arr={data} index="megaDealImages" gridSize="3" />
      </Box>
    </Container>
  );
}

export default MegaDeal;
