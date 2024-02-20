import { Box, Heading, Stack, SimpleGrid, Link, Card, CardHeader, CardBody, StackDivider, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from "react";
import { UseDisclosureProps } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import WeatherPieMotorcycleImage from '../Images/WeatherPieMotorcycle.png';
import WeatherPieCar from '../Images/WeatherPieCar.png'
import TukeyHSDCar from '../Images/TukeyHSDCar.png'
import TukeyHSDMoto from '../Images/TukeyHSDMoto.png'
import AccidentByMonthBar from '../Images/AccidentByMonthBar.png'
import AccidentByDayWeekBar from '../Images/AccidentByDayWeekBar.png'
import TimeDayAlcHelmDist from '../Images/TimeDayAlcHelmDist.png'


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



const Time = () => {

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
                    <Box align="center" bg="" p={1} width="60%" border="">
                        <Heading align="center" p="4" style={{ fontFamily: "monospace" }}>
                            Time Statistics
                        </Heading>

                        <Text align = "center" fontSize="xl">
                            Conclusion: Once again, riders avoid bad riding times. Result is that 
                            most accidents are during the summer. Also, most accidents are on Friday,
                            Saturday, and Sunday, at evening/night times. Alcohol and helmet use is 
                            almost consistently proportional to accident time distribution.
                        </Text>
                    </Box>

                 </Center>

                


                <Box align="center" bg="" p={4} h="full" border=""> 

                    {sizes.map((size) => (
                    <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                    >{`Open Time Statistics Details`}</Button>
                    ))}

                </Box>

            </Box>
            
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Time Statistics</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

                <Center> 
                    <Box align = "center" width="60%">

                    <Stack spacing = "110">
    
                    <Text fontSize="xl">
                        First I looked at the distribution of accidents by months and day of week over the three years.
                        Just to get a general idea.
                    </Text>
    
                    <Image
                        objectFit='cover'
                        src={AccidentByMonthBar}
                        alt='AccidentByMonthBar'
                    />    
                    <Image
                        objectFit='cover'
                        src={AccidentByDayWeekBar}
                        alt='AccidentByDayWeekBar'
                    />
                        <Text fontSize="xl">
                            As you can see, most accidents are during the warmer 
                            months and also during the party times; Friday, Saturday,
                             and Sunday.
                        </Text>
                        
                        <Text fontSize="xl">
                            Next, going to look at the time distribution during the day, while also including 
                            alcohol and helmet use distributions, just to see if theres any correlation 
                            of carelessness.
                        </Text>
    
                        <Image
                        objectFit='cover'
                        src={TimeDayAlcHelmDist}
                        alt='TimeDayAlcHelmDist'
                        />
    
    
                        <Text fontSize="xl">
                            Not much to analyze here, the distribution of no helmet and alcohol related
                            accidents pretty much follow the same distribution of all accidents. This section of 
                            the EDA was very underwhelming. 
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

export default Time;