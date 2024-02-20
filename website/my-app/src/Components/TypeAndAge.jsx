import { Box, Heading, Stack, SimpleGrid, Link, Card, CardHeader, CardBody, StackDivider, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from "react";
import { UseDisclosureProps } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import WeatherPieMotorcycleImage from '../Images/WeatherPieMotorcycle.png';
import WeatherPieCar from '../Images/WeatherPieCar.png'
import TukeyHSDCar from '../Images/TukeyHSDCar.png'
import TukeyHSDMoto from '../Images/TukeyHSDMoto.png'
import AgeDistributionGeneral from '../Images/AgeDistributionGeneral.png'
import AgeDistributionAlcLimits from '../Images/AgeDistributionAlcLimits.png'
import AgeDistributionHelmet from '../Images/AgeDistributionHelmet.png'

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



const TypeAndAge = () => {

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
                            Age by Accident Type Statistics
                        </Heading>

                        <Text align = "center" fontSize="xl">
                            Conclusion: Most accidents are younger people, 20-30, and the 
                            next most frequent is 47-63. 20-30 year olds speed more than 
                            their older peers, but both age groups equally don't like helmets.
                            In most alcohol related accidents, the quantity is above the legal limit. 
                            In most helmet misuse accidents, there is no helmet at all.
                        </Text>
                    </Box>

                 </Center>

                


                <Box align="center" bg="" p={4} h="full" border=""> 

                    {sizes.map((size) => (
                    <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                    >{`Open Age by Type Statistics Details`}</Button>
                    ))}

                </Box>

            </Box>
            
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Age by Accident Type Statistics</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

                <Center> 
                    <Box align = "center" width="60%">

                    <Stack spacing = "110">
    
                    <Text fontSize="xl">
                        First I looked at the general distribution of age in all accidents.
                    </Text>
    
                    <Image
                        objectFit='cover'
                        src={AgeDistributionGeneral}
                        alt='AgeDistributionGeneral'
                    />    
                    
                        <Text fontSize="xl">
                            Most common age range is 23-31 and then 47-63 
                        </Text>
                        
                        <Text fontSize="xl">
                            Then I wanted to look at age distributions with alcohol filters.
                            I wanted to see how many cases are below the limit but greater than 0,
                            and also how many cases are above the limit. I also looked at 
                            helmet use and misuse.
                        </Text>
    
                        <Image
                        objectFit='cover'
                        src={AgeDistributionAlcLimits}
                        alt='AgeDistributionAlcLimits'
                        />
    
                        <Image
                        objectFit='cover'
                        src={AgeDistributionHelmet}
                        alt='AgeDistributionHelmet'
                        />
    
                        <Text fontSize="xl">
                        Most people who are drinking and get into an accident are drinking over the limit. The distribution of age for those who are drinking matches the general accident age distribution.

                        </Text>
    
                        <Text fontSize="xl">
                        Whats interesting here is that the distribution of age for those who are not wearing a helmet are now more equal to the 23-31 and 47-63 yr olds. Seems that older folks don't like to wear helmets. 
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

export default TypeAndAge;