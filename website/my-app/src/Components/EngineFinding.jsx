import { Box, Heading, Stack, SimpleGrid, Link, Card, CardHeader, CardBody, StackDivider, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from "react";
import { UseDisclosureProps } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import WeatherPieMotorcycleImage from '../Images/WeatherPieMotorcycle.png';
import WeatherPieCar from '../Images/WeatherPieCar.png'
import TukeyHSDCar from '../Images/TukeyHSDCar.png'
import TukeyHSDMoto from '../Images/TukeyHSDMoto.png'
import EngineSizesPie from '../Images/EngineSizesPie.png'
import CrashFactorByEngine from '../Images/CrashFactorsByEngineBar.png'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    Center,
  } from '@chakra-ui/react'



const EngineFinding = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')

    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = ['full']

    return (
        <div>

            <Box>
                <Center>
                    <Box align="center" bg="" p={1} width="60%" h="" border="">
                        <Heading align="center" p="4" style={{ fontFamily: "monospace" }}>
                            Engine Size Statistics
                        </Heading>

                        <Text align = "center" fontSize="xl">
                            Conclusion: A majority of crashes are with large engine sizes (750cc+). I explored possible factors and this section is built upon in the later 
                            sections as well.
                        </Text>
                    </Box>

                 </Center>

                


                <Box align="center" bg="" p={4} h="full" border=""> 

                    {sizes.map((size) => (
                    <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                    >{`Open Engine Size Statistics Details`}</Button>
                    ))}

                </Box>

            </Box>
            
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Engine Size Statistics</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

                <Center> 
                    <Box align = "center" width="60%">

                    <Stack spacing = "110">
    
                    <Text fontSize="xl">
                        First I filtered out all accidents where the engine size is not known. Then I 
                        simply created a pie graph to visually look at the count and percentages of each 
                        size range. It ranges from 0-50, 51-124, 125-349,
                        350-449, 450-749, 750+ ccs. 
                        
                    </Text>

                    <Text fontSize="xl">
                        Engine size isn't the only indicator of how powerful a motorcycle 
                        is. For example a 750cc sport bike will likely have more acceleration
                        and torque than a 750cc cruiser, because of design and weight differences.
                        But it is a good indicator for overall power, since it is at the top of 
                        the general range. 

                        For context, generally for sport bikes, it is advised that a 
                        beginner starts on a bike that is less than 500cc.
                    </Text>
    
                    <Image
                        objectFit='cover'
                        src={EngineSizesPie}
                        alt='EngineSizesPie'
                    />    
                    
                        <Text fontSize="xl">
                             My early analysis was: A majority of deaths are high cc engines. The early hypothesis is that peolpe are on crotch rockets they can't hande, going to fast and then crashing out.
                        </Text>
                        
                        <Text fontSize="xl">
                            To investigate this, I looked at the proportion of accidents that 
                            involved overspeeding. I also included other factors like helmet use
                            and alcohol.
                        </Text>
    
                        <Image
                        objectFit='cover'
                        src={CrashFactorByEngine}
                        alt='CrashFactorByEngine'
                        />
    
                        <Text fontSize="xl">
                             We see that a lot of accidents involved no helmets and alcohol use 
                            . Surprisingly not a lot of accidents involved over speeding. So then I looked 
                            into the other a factors and their statistics. Heres what I found:

                        </Text>
    
                        <Text fontSize="xl">
                            54% of people in motorcycle accidents did not wear a helmet
                            !!      36% of people in motorcycle accidents had alcohol in their system
                            33% of people in motorcycle accidents both did not wear a helmet and had alcohol in their system
                        </Text>
    
                        <Text fontSize="xl">
                            These significant statistics led me to question if there is an
                            identifiable pattern or demographic for accidents with no helemt and with 
                            alcohol. This is investigated in the later parts.
                        </Text>
    
    
                    </Stack>
                    
                    </Box>


                    
                </Center>
            
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

            
        </div>
    )
}

export default EngineFinding;