import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Box,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import {IoLogoGithub} from 'react-icons/io5';
import ThemeToggleButton from './theme-toggle-button';
import { forwardRef } from 'react';
function Navbar() {
  return (
   <Box
   as='nav'
   w='100%'
   bg={useColorModeValue('#ffffffff','#00000080')}
   css={{backdropFilter:'blur(10px)'}}
   zIndex={2}
   >
    <Container display={'flex'} 
    p={2}
    maxW="container.md"
    wrap="wrap"
    align="center"
    justify="space-between"
    >
        <Flex align={'center'} mr={5}>
            <Heading as={'h1'} size='lg' letterSpacing={'tighter'}>Logo</Heading>
        </Flex>
        <Stack 
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        >
        <Link to={'/blogs'}>Blogs</Link>
        <Link to={'/'}>Home</Link>
        </Stack>

        {/* Adding Theme toggle button */}
        <Box flex={1} align='right'>
            <ThemeToggleButton/>
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu  id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <Link to={'/blogs'}>Blogs</Link>
              </MenuList>
              </Menu>
              </Box>

        </Box>

    </Container>

   </Box>
  )
}

export default Navbar