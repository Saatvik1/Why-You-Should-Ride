import { Box, Heading, Stack, SimpleGrid, Link, Card, CardHeader, CardBody, StackDivider, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from "react";
import { UseDisclosureProps } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import WeatherPieMotorcycleImage from '../Images/WeatherPieMotorcycle.png';
import WeatherPieCar from '../Images/WeatherPieCar.png'
import TukeyHSDCar from '../Images/TukeyHSDCar.png'
import TukeyHSDMoto from '../Images/TukeyHSDMoto.png'
import AccidentTypeMotorcyclePie from '../Images/AccidentTypeMotorcyclePie.png'
import AccidentTypeCarPie from '../Images/AccidentTypeCarPie.png'
import LimDiffDistCurve from '../Images/LimDiffDistCurve.png'
import OverspeedAgeDistCurve from '../Images/OverspeedAgeDistCurve.png'
import UnderspeedAgeDistCurve from '../Images/UnderspeedAgeDistCurve.png'



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



const TypeAndAgeRevisited = () => {

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
                            Age and Type of Accidents Revisited
                        </Heading>

                        <Text align = "center" fontSize="xl">
                            Conclusion: Age and "riding experience" correlates with type of 
                            accident. The common types of accidents are also very telling.
                            It gives suggestions on the type of psychology riders have (overconfidence/fear), and at 
                            what age, and gives us a better understanding of what the demographics
                            are, and how to target each one of them with specific suggestions.
                        </Text>
                    </Box>

                 </Center>

                


                <Box align="center" bg="" p={4} h="full" border=""> 

                    {sizes.map((size) => (
                    <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                    >{`Age and Type of Accidents Revisited`}</Button>
                    ))}

                </Box>

            </Box>
            
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Age and Type of Accidents Revisited</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

                <Center> 
                    <Box align = "center" width="60%">

                    <Stack spacing = "110">
    
                    <Text fontSize="xl">
                        First I looked at the differnt types of accidents and their percentages,
                        things like accident while crossing the road, making a U-turn, etc. I compared 
                        them with the types in cars as well, because I was curious if motorcycles 
                        face a different issue than them.
                    </Text>
    
                    <Image
                        objectFit='cover'
                        src={AccidentTypeMotorcyclePie}
                        alt='AccidentTypeMotorcyclePie'
                    />    
                    <Image
                        objectFit='cover'
                        src={AccidentTypeCarPie}
                        alt='AccidentTypeCarPie'
                    />
                        <Text fontSize="xl">
                            Saw a difference in some of the accident types. Mainly accident 
                            types involving going into opposite lanes, or going off the road, off
                            the edge, etc. From my own experience, I know that cornering is a
                            big challenge for beginners, speed management, entry position, 
                            lean angle, target fixation, shifting, throttle and brake control. 
                            Much more to think about compared to when you are just going straight.
                            Good cornering requires a lot of practice and experience, and the result 
                            of bad cornering are those types of accidents where you end up in 
                            the opposite lane or even running off the road.  
                        </Text>
                        
                        <Text fontSize="xl">
                            I then conducted a Z-test to compare the accident type averages between
                            cars and motorcycles, to see if the differences are statistically significant. I chose a Z test because accident cases are independent 
                            of each other. For example, a motorcycle running into the opposite lane probably
                            wont even show up in the database, but if it does the accident type for the 
                            car is different, and since our focus is that the cases aren't dependent.
                            Second, the sample sizes are extremely large, and with CLT I can assume normality.
                            Here are the following results:
                        </Text>

                        <Text whiteSpace="pre-line" fontSize="lg">
                            Accident Type: From opposite direction  over left lane line {'\n'}
                            Z-test Statistic: 23.362067306746475 {'\n'}
                            P-value: 1.0391341629380924e-120 {'\n'}
                            Motorcycle statistic greater {'\n'}
                            True{'\n'}

                            {'\n'}

                            Accident Type: Off the edge of the road on the left side {'\n'}
                            Z-test Statistic: 2.4806159140560657 {'\n'}
                            P-value: 0.013115561244167124 {'\n'}
                            Motorcycle statistic greater {'\n'}
                            True {'\n'}
                            {'\n'}
                            Accident Type: Off the edge of the road on the right side{'\n'}
                            Z-test Statistic: 10.281605667308051{'\n'}
                            P-value: 8.529461178432812e-25{'\n'}
                            Motorcycle statistic greater{'\n'}
                            True{'\n'}
                            {'\n'}
                            Accident Type: Traveling Too Fast for Conditions or Road Configuration{'\n'}
                            Z-test Statistic: 11.394449877125856{'\n'}
                            P-value: 4.456358008714214e-30{'\n'}
                            Motorcycle statistic greater{'\n'}
                            True{'\n'}
                            {'\n'}
                            Accident Type: From adjacent lane (same direction) over right lane line{'\n'}
                            Z-test Statistic: 4.740633536327049{'\n'}
                            P-value: 2.1305097858866665e-06{'\n'}
                            Motorcycle statistic greater{'\n'}
                            True{'\n'}
                            {'\n'}
                            Accident Type: Unknown cause of control loss{'\n'}
                            Z-test Statistic: 12.13341024037678{'\n'}
                            P-value: 7.0261298951759355e-34{'\n'}
                            Motorcycle statistic greater{'\n'}
                            True{'\n'}
                            {'\n'}
                            Accident Type: Suddenly Encountered Poor Road Conditions [Puddle, Pot Hole, Ice, Etc.][Specify:]{'\n'}
                            Z-test Statistic: 3.662268284778189{'\n'}
                            P-value: 0.0002499918452377178{'\n'}
                            Motorcycle statistic greater{'\n'}
                            True{'\n'}
                            {'\n'}
                            Accident Type: From crossing street, turning into opposite direction{'\n'}
                            Z-test Statistic: 29.583669819325863{'\n'}
                            P-value: 2.4240135064131194e-192{'\n'}
                            Motorcycle statistic greater{'\n'}
                            True{'\n'}
                            {'\n'}
                            Accident Type: From crossing street, turning into same direction{'\n'}
                            Z-test Statistic: 7.517976738542051{'\n'}
                            P-value: 5.563039684592464e-14{'\n'}
                            Motorcycle statistic greater{'\n'}
                            True{'\n'}


                        </Text>
    
    
                        <Text fontSize="xl">
                        Motorcycles statistically are running off roads, going into 
                        opposite lanes more than cars, being victims of potholes, 
                        speeding, etc. I wanted to check if speed was a factor in overruning.
                        </Text>

                        <Image
                        objectFit='cover'
                        src={LimDiffDistCurve}
                        alt='LimDiffDistCurve'
                        />
    
                        <Text whiteSpace='pre-line' fontSize="xl">
                            32% of overshooting accidents were 10 and above speed limit. {'\n'}
                            20% of overshooting accidents were below the speed limit, meaning that 
                            most of them are at speed limit, indicating that control is the main 
                            issue. Very common for riders to be uncomfortable making turns even 
                            at slow speeds. {'\n'}
                            Seems like its normally distributed, not showing a bias to any one side.
                            {'\n'}
                            I was then curious about whether there is a pattern regarding age...
                        </Text>

                        <Image
                        objectFit='cover'
                        src={OverspeedAgeDistCurve}
                        alt='OverspeedAgeDistCurve'
                        />

                        <Image
                        objectFit='cover'
                        src={UnderspeedAgeDistCurve}
                        alt='UnderspeedAgeDistCurve'
                        />
    
                        <Text whiteSpace = "pre-line" fontSize="xl">
                        TLDR BELOW {'\n'}
                        A study done on riding behaviour on curves found the following: 
                        "From Table 3, the ratings on two variables of “distance before 
                        curve” and “riding experience” are both significantly and positively
                        correlated to “speed” (β = 0.315; β = 0.392, resp.) while “age” 
                        is found negatively correlated to “speed.”"{'\n'}
                    
                        Yuen, C. W., Karim, M. R., & Saifizul, A. (2014). Investigation on 
                        Motorcyclist Riding Behaviour at Curve Entry Using Instrumented 
                        Motorcycle. The Scientific World Journal, 2014. 
                        https://doi.org/10.1155/2014/968946{'\n'}

                        {'\n'}
                        And also: "Motorcyclists have significant safety compensation 
                        behaviors on horizontal curves— they intend to use safe riding 
                        behaviors when they are subjectively aware of risks. If they feel 
                        “safe” and “confident,” they tend to take unsafe and aggressive 
                        riding behaviors. The safety compensation behaviors can explain 
                        some counterintuitive findings in the crash analysis, such as that 
                        poor pavement conditions are more likely to experience lower injury 
                        severity in motorcycle crashes on curves. Thus, increasing 
                        motorcyclist awareness of potential risks is an effective way 
                        to improve motorcycle safety on curves." Wang et al. {'\n'}

                        Wang, Z., Lee, C., Lin, P.-S., Guo, R., Xin, C., Tammayya Naidu 
                        Kolla, R. D., Yang, R., & Vasili, A. (2018). Study on Motorcycle 
                        Safety in Negotiation  with Horizontal Curves in Florida and  
                        Development of Crash Modification Factors. 
                        In www.cmfclearinghouse.org. Center for Urban Transportation 
                        Research.
                        
                        </Text>
                            
                        <Text whiteSpace = "pre-line" fontSize="xl">
                            TLDR: My thoughts are that higher aged riders are likely 
                            not to speed as much as young people do, but will feel more 
                            confident on curves due to (assumed) more experience. This is why
                            the distribution of underspeed (or at speed limit) accidents increase 
                            for older people. They are likely not to speed, but feel overly confident. 
                            {'\n'} 
                            The correlation between speed and age is higher than the correlation 
                            between speed and experience, and furthermore, to back the 
                            assumption that higher age means more experience check: (Table 3, 
                            Yuen et al., 2014).
                            Younger and less experienced riders face both 
                            lack of experience and excess speed, and thus are as 
                            suceptible to making mistakes more than the older riders 
                            (thats why the younger riders accident count are about equal 
                            in both over and underspeeding, but older people less in speed 
                            and more so in about speed limit).
                            Speed exacerbates the issue, but the main concern is 
                            overconfidence and skill.
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

export default TypeAndAgeRevisited;