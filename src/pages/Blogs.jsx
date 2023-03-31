import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Blogs=()=>{
    return(
        <Box position={'relative'}>
            <Link to={'/'}>Return</Link>
            <h1>This is blogs page</h1>
        </Box>
    )
}
export default Blogs;