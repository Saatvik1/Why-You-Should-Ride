import { Box, Heading, Stack, SimpleGrid, Link, Card, CardHeader, CardBody, StackDivider, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from "react";
import { UseDisclosureProps } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

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
  } from '@chakra-ui/react'
import WeatherFinding from "../Components/WeatherFinding";
import EngineFinding from "../Components/EngineFinding";
import TypeAndAge from "../Components/TypeAndAge";
import Time from "../Components/Time";
import TypeAndAgeRevisited from "../Components/TypeAndAgeRevisited";



const Findings = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')

    

    return (
        <div>
            <Heading color={'green.400'} size='4xl' align="center" p="4" style={{ fontFamily: "monospace" }}>
                My Findings
            </Heading>

            

            <Center>
                <Box align="center" bg="" p={1} width="40%" border="1px">
                    <Heading color={'green.400'} size='2xl' align="" p="4" style={{ fontFamily: "monospace" }}>
                        My Suggestions:
                    </Heading>

                    <Text fontSize='lg' whiteSpace="pre-line">
                        1. Awareness and education of riding in certain weather conditions is at a good place
                        and we should maintain that. {'\n'} {'\n'}
                    </Text>

            

                    <Text fontSize='lg' whiteSpace="pre-line">
                        2. Riders should be thoroughly taught the difference between different types of 
                        motorcycles, and the different engine sizes. Perhaps a system with different tiers 
                        of motorcycle licenses like the one in place in some European countries is a good idea.
                        {'\n\n'}
                    </Text>

                    <Text fontSize='lg' whiteSpace="pre-line">
                        3. Younger people especially need to learn the consequences of 
                        speeding and helmet use. More awareness on the consequences, and perhaps even some 
                        safe alternatives such as track days, will decrease speeding while
                        still allowing for folks to enjoy going fast.  {'\n'} {'\n'}
                        Older people need to be reminded to put on their helmets as well, because 
                        they are just as guilty as young people who neglect helmet use.{'\n'} {'\n'}
                    </Text>

                    <Text fontSize='lg' whiteSpace="pre-line">
                        4. Riders should be extra vigilant on Friday's on weekends. Party time 
                        or hangout time with friends is not an excuse to ride unsafely. Riders need 
                        to strictly adhere to alcohol limits and helmet regulations. {'\n'}{'\n'}
                    </Text>

                    <Text fontSize='lg' whiteSpace="pre-line">
                        5. Riders need to be trained more vigorously. It's clear that young riders
                        speed too much, and are too overconfident in their ride. {'\n'} {'\n'}
                        More training in general needs to be done for improving motorcycle skills. Older 
                        people especially needs to be less overconfident, even if at lower speeds.
                    </Text>

                </Box>
            </Center>

            <WeatherFinding />
            <EngineFinding />
            <TypeAndAge />
            <Time />
            <TypeAndAgeRevisited />

            
        </div>
    )
}

export default Findings;