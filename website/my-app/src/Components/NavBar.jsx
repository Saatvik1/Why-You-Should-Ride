import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useToast,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'

import { useRef, useState } from 'react';

const Links = ['My Findings', 'Explore FARS', 'Predict Injury Severity', 'Contact Me & More Info'];

export default function NavBar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    

    const { isOpen: createIsOpen, onOpen: onCreateIsOpen, onClose: onCreateIsClose } = useDisclosure();
    const cancelRef = useRef()




    const { refreshApp } = props;

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <NavLink to={"/"} className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>Why You Should Ride</NavLink>
                        <HStack as={'nav'} spacing={9} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink to={link} className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>{link.charAt(0).toUpperCase() + link.slice(1)}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink to={link}>{link.charAt(0).toUpperCase() + link.slice(1)}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}