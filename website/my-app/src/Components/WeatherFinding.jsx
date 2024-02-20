import { Box, Heading, Stack, SimpleGrid, Link, Card, CardHeader, CardBody, StackDivider, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from "react";
import { UseDisclosureProps } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import WeatherPieMotorcycleImage from '../Images/WeatherPieMotorcycle.png';
import WeatherPieCar from '../Images/WeatherPieCar.png'
import TukeyHSDCar from '../Images/TukeyHSDCar.png'
import TukeyHSDMoto from '../Images/TukeyHSDMoto.png'

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



const WeatherFinding = () => {

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
                            Weather Statistics
                        </Heading>

                        <Text align = "center" fontSize="xl">
                            Conclusion: Motorcycle riders are smart, they generally don't take the risk of riding during the rain or even when it is cloudy. Statistically speaking,
                            weather factors do play a role in accident rate, as the difference between their averages are significant.
                        </Text>
                    </Box>

                 </Center>

                


                <Box align="center" bg="" p={4} h="full" border=""> 

                    {sizes.map((size) => (
                    <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                    >{`Open Weather Statistics Details`}</Button>
                    ))}

                </Box>

            </Box>
            
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Weather Statistics</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

                <Center> 
                    <Box align = "center" width="60%">

                    <Stack spacing = "110">
    
                    <Text fontSize="xl">
                        First I compared the weather statistics between Cars and Motorcycles, and create pie graphs to get a general sense of the proportions.
                    </Text>
    
                    <Image
                        objectFit='cover'
                        src={WeatherPieMotorcycleImage}
                        alt='WeatherPieMotorcycle'
                    />    
                    <Image
                        objectFit='cover'
                        src={WeatherPieCar}
                        alt='WeatherPieCar'
                    />
                        <Text fontSize="xl">
                            I noticed that cloudy weather percentages for motorcycle accidents are much lower than cars, and rain accidents are also high than cars. 
                            The rain statistic made sense, since motorcycle have limited traction due to only having smaller two wheels. But why cloudy? A little counter intuitive since you 
                            would think that theres nothing wrong with just clouds. I also wanted to see if the different weathers are ACTUALLY statistically significant from one another. Using 
                            percentages as a sole indicator isn't enough, since there are more clear days than rainy days for example. 
                        </Text>
                        
                        <Text fontSize="xl">
                            To test statistical significane I decided to perform a Oneway ANOVA test, since it's good for comparing multiple means while controlling for variance. After, to see 
                            specific results, I used Tukey's HSD, on both cars and motorcycles, with a 95% CI.
                        </Text>
    
                        <Image
                        objectFit='cover'
                        src={TukeyHSDCar}
                        alt='TukeyHSDCar'
                        />
    
                        <Image
                        objectFit='cover'
                        src={TukeyHSDMoto}
                        alt='TukeyHSDMoto'
                        />
    
                        <Text fontSize="xl">
                            The first summary table is for cars, and the second is motorcycles. In the cars summary table, we see that all different weathers are statistically significant from 
                            each other. In the motorcycle table however, only the first 3 rows are significant. Note that for cloudy and rain in motorcycles, are NOT statistically different. 
                            Again intuitively, it seems like it should be easier to ride when there are clouds compared to when it is actually raining. This is a stark difference from the cars table,
                            where cloudy and rain are different and cloudy's accidents are much more. My conclusion is the following: 
                        </Text>
    
                        <Text fontSize="xl">
                        My suspected reasoning for this is that riders are avoiding the roads when there is bad weather, but they are also avoiding cloudy conditions maybe not because it is cloudy, 
                        but because the roads are still wet from rain. Here is a quote from a study called:  "Predicting motorcycle crash injury severity using weather data and alternative 
                        Bayesian multivariate crash frequency models": 
                        </Text>
    
                        <Text fontSize="xl">
                        "The occurrence of rainfall is usually expected to be connected with increased possibility of crashes due to poor driving conditions, but in this study, the precipitation 
                        was observed to be negatively related with all the crash severities. It is also noteworthy that this parameter was significant only for CP, the least severe crash type, 
                        as an additional inch of precipitation decreased the crash rate by a significant margin of almost 23%. As noted by another study on general 
                        vehicles (El-Basyouny et al., 2014), the increased rainfall may act as a precautionary signal for drivers to be more cautious, 
                        which in turn reduces crashes due to sensitive driving. But in case of motorcycles collisions, the rationale for this negative relationship 
                        (and lack of significance) may be the role of rain to act as a deterrent for the riders, rather than just a precautionary signal, to not 
                        indulge in driving the motorcycle altogether. The comparative vulnerability of motorcycles due to lack of balance on wet surfaces during rain 
                        may be the factor which influences the psychology of riders. A similar trend was observed for the presence of clouds, which may be regarded by the 
                        riders as an indication of potential occurrence of rainfall." (Cheng et al)
                        
                        </Text>
    
                        <Text>
                        Cheng, W., Gill, G. S., Sakrani, T., Dasu, M., & Zhou, J. (2017). Predicting motorcycle crash injury severity using weather data and alternative Bayesian multivariate 
                        crash frequency models. Accident Analysis & Prevention, 108, 172-180. https://doi.org/10.1016/j.aap.2017.08.032
                        https://www.sciencedirect.com/science/article/pii/S0001457517303123#bib0255
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

export default WeatherFinding;