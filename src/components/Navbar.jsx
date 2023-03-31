import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Box,
    Stack,
    Image,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import heading from '../assets/logo.png'

function Navbar() {
  return (
   <Box
   as='nav'
   w='100%'
   bg='transparent'
   css={{backdropFilter:'blur(2px)'}}
   zIndex={2}
   position='fixed'
   >
    <Container display={'flex'} 
    p={2}
    maxW='container.xl'
    wrap="wrap"
    alignItems="center"
    justifyContent='space-around'
    >
        <Flex align={'center'} mr='16'>
            <Link to={'/'}><Image src={heading} width={210} height={100} /></Link>
        </Flex>
        <Stack 
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        p='2'
        justifyContent={'space-around'}
        >
        <Link to={'/'}>Home</Link>
        <Link>About Us</Link>
        <Link>Events</Link>
        <Link>Societies</Link>
        <Link to={'/blogs'}>Blogs</Link>
        <Link>Membership</Link>
        <Link>Team</Link>
        </Stack>

       
        <Box flex={1} align='right'>
            <Box ml={2} display={{ base: 'block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem>
                
                <Link to={'/'}>Home</Link>
                </MenuItem>
                <MenuItem>
                
                <Link>Events</Link>
                </MenuItem>
                <MenuItem>
                
                <Link to={'/blogs'}>Blogs</Link>
                </MenuItem>
                <MenuItem>
                
                <Link>Membership</Link>
                </MenuItem>
                <MenuItem>
                <Link>About Us</Link>
                
                </MenuItem>
                <MenuItem>
                
                <Link>Team</Link>
                </MenuItem>
              </MenuList>
              </Menu>
              </Box>

        </Box>

    </Container>

   </Box>
  )
}

export default Navbar