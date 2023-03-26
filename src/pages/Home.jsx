import React from 'react'
import { Box } from '@chakra-ui/react'
import Model from '../components/Model'
const Home=()=>{

  return (
    <>
    <Model/> <OverLay/>
    </>
  )
}



function OverLay(){
  return(
    
    <Box position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%,-50%,0)'}>
      <h1 style={{ margin: 0, padding: 0, fontSize: '15em', fontWeight: 500, letterSpacing: '-0.05em' }}>IEEE</h1>
    </Box>
 
  )
}
export default Home