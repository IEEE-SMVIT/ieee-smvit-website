import React, { useEffect } from "react";
import { Box, Image, Link, Button} from "@chakra-ui/react";
import Model from "./Model";
import logo from "../assets/ieee_white.png";
import { motion } from "framer-motion";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import About from "./About";
const Landing = () => {
  return (
    <>
      <Model /> <OverLay />
    </>
  );
};
const textVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const letterVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
  },
};


function OverLay() {
  const text = "Advancing Technology for Humanity";
  return (
    <Box position={'absolute'}
    top='0'
    left='0'
    heigth='100%'
    width='100%'
    >
      
    <Box
      position={"relative"}
      top={"50%"}
      left={"50%"}
      transform={"translate(-50%,50%)"}
      display="flex"
      alignItems={"center"}
      flexDirection="column"
      justifyContent={"center"}
      
      
    >
      <Link href="https://www.ieee.org/">
        <Image src={logo} width={"500px"} />
      </Link>
      <motion.span
        style={{ fontSize: "1.3rem" }}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
      
        <Button
          bg={"transparent"}
          transition={{ duration: 0.5 }}
          rightIcon={<ArrowForwardIcon />}
          mt={'12'}
          variant='outline'
          borderRadius={'3xl'}
          _hover={{bg:'rgba(225,225,225,0.15)'}}
          
        >
          SIR M.V.I.T Student Branch
        </Button>
      
    </Box>
    </Box>
   
    
   
    
  );
}
export default Landing;
