import { Box, Heading, Stack, SimpleGrid, Link, Card, CardHeader, CardBody, StackDivider, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from "react";
import { UseDisclosureProps } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik';
import '../Explore.css'
//import "leaflet/dist/leaflet.css"
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'




import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Center,
    Select,
    Input,
  } from '@chakra-ui/react'



const Contact = () => {


    return (

        <Center>
            <Box align="center" bg="" p={1} width="40%" border="1px">
            <Heading color={'green.400'} size='2xl' align="" p="4" style={{ fontFamily: "monospace" }}>
                Contact Me & More Info on WYSR
            </Heading>

            <Text fontSize='lg' whiteSpace="pre-line">
                For more information on the project such as my EDA methods, tech stack etc, checkout my Github:  {'\n'}
                <Link href='https://github.com/Saatvik1/Why-You-Should-Ride/' isExternal>
                    Github Link to Why You Should Ride <ExternalLinkIcon mx='2px' />
                </Link> {'\n'}
                For more information about me or to contact me, also go to my Github! {'\n'}
                <Link href='https://github.com/Saatvik1/' isExternal>
                    Github Link ReadMe <ExternalLinkIcon mx='2px' />
                </Link> {'\n'}
            </Text>


            </Box>

        </Center>
        
    )

                

}

export default Contact;












                