import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Image,
    Box,
} from '@chakra-ui/react'
import theme from '../theme'



const Landing = () => {

    const handleReadMyFindings = () => {
        window.location.href = "/My%20Findings";
    }

    const handleGetStartedClick = () => {
        //window.location.href = "/builder";
    }

    const handleModelClick = () => {
        window.location.href = "/Predict%20Injury%20Severity";
    }


    return (
        <Container maxW={'5xl'} theme={theme}>
            <Button colorScheme='brand'>Click me</Button>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Why You{' '}
                    <Text as={'span'} color={'green.400'}>
                        Should Ride {' '}
                    </Text>
                    A Motorcycle
                </Heading>
                <Text fontSize='lg' color={'white.500'} maxW={'3xl'}>
                    Riding a motorcycle can be one of the most thrilling and freeing experiences in the world. The sensation of the rushing wind connects you with your 
                    environment, while also being one with your bike. You get a sense of adventure and exploration, even if you are doing your boring daily commute.
                </Text>
                <Text fontSize='lg' color={'white.500'} maxW={'3xl'}>
                    But it does come with it's drawbacks. I'm sure you've heard some say "Don't ride a motorcycle, it's too dangerous!" Well that's why I made Why You Should Ride. To
                     explore the real reasons why motorcyclists are dying, and what we can do about it.
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <Button onClick={handleReadMyFindings}
                        rounded={'full'}
                        px={6}
                        colorScheme={'green'}
                        bg={'green.400'}
                        _hover={{ bg: 'green.500' }}>
                        Read My Findings
                    </Button>
                    <Button onClick={handleGetStartedClick}
                        rounded={'full'}
                        px={6}
                        colorScheme={'green'}
                        bg={'green.400'}
                        _hover={{ bg: 'green.500' }}>
                        Explore the Data
                    </Button>
                    <Button onClick={handleModelClick}
                        rounded={'full'}
                        px={6}
                        colorScheme={'green'}
                        bg={'green.400'}
                        _hover={{ bg: 'green.500' }}>
                        How Severe Will Your Accident Be?
                    </Button>
                    <Button onClick={handleGetStartedClick}
                        rounded={'full'}
                        px={6}
                        colorScheme={'green'}
                        bg={'green.400'}
                        _hover={{ bg: 'green.500' }}>
                        Contact Me
                    </Button>
                    
                </Stack>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}
                    lineHeight={'110%'}>
                    <Text as={'span'} color={'green.400'}>
                        Who {' '}
                    </Text>
                    I am and
                    <Text as={'span'} color={'green.400'}>
                    {' '} How {' '}
                    </Text>
                    I did it
                </Heading>
                <Text fontSize='lg' color={'white.500'} maxW={'3xl'}>
                    My name is Saatvik and I am an aspiring rider. I am a full time student at Stony Brook University, majoring in Computer Science and Applied Mathematics and Statistics.
                    I have loved motorcycles since I was child (all because I watched Dhoom, if you know you know). I do not currently have a motorcycle, but that will change soon. I've had my
                    license for over a year however so it's just a matter of buying one!
                </Text>
                <Text fontSize='lg' color={'white.500'} maxW={'3xl'}>
                    My analysis on motorcycle deaths was done using a variety of technologies.
                </Text>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}
                    lineHeight={'110%'}>
                    <Text as={'span'} color={'green.400'}>
                    {' '} Data Source: {' '}
                    </Text>
                </Heading>
                <Text fontSize='lg' color={'white.500'} maxW={'3xl'}>
                    I used the FARS dataset from the National Highway Transport Agency (NHTSA). I used data from 2021, 2020, and 2019, as these were the latest available datasets. 
                </Text>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}
                    lineHeight={'110%'}>
                    <Text as={'span'} color={'green.400'}>
                    {' '} Transforming the Data: {' '}
                    </Text>
                </Heading>
                <Text fontSize='lg' color={'white.500'} maxW={'3xl'}>
                    After downloading the csv files for the FARS dataset, I used Python in a Jupyter notebook environment to extract all necessary information. I performed 
                    any necessary data cleaning and prepared it for database insertion. 
                </Text>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}
                    lineHeight={'110%'}>
                    <Text as={'span'} color={'green.400'}>
                    {' '} Uploading the Data: {' '}
                    </Text>
                </Heading>
                <Text fontSize='lg' color={'white.500'} maxW={'3xl'}>
                    Uploaded the data to a database hosted by PlanetScale, a  MySQL compatible database. 
                </Text>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}
                    lineHeight={'110%'}>
                    <Text as={'span'} color={'green.400'}>
                    {' '} Exploratory Data Analysis: {' '}
                    </Text>
                </Heading>
                <Text fontSize='lg' color={'white.500'} maxW={'3xl'}>
                    Using a combination of SQL and Python, I performed EDA on the dataset. I also used various libraries for plots, to help in this process. I also took my finding and 
                    cross referenced them with some studies, which you can check out in the EDA section. 
                </Text>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}
                    lineHeight={'110%'}>
                    <Text as={'span'} color={'green.400'}>
                    {' '} Model Creation: {' '}
                    </Text>
                </Heading>
                <Text fontSize='lg' color={'white.500'} maxW={'3xl'}>
                    Used Random Forest to create a model that accurately predicts crash severity (Fatal, severe, mild, no apparent, possible injury). Attained an 81% accuracy rate! 
                </Text>
                <Flex w={'100vm'}>
                    {/* <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} /> */}
                    <Box height='full' pr='40' justifyContent="right" alignItems="right" display="flex">
                        {/* <Image
                        src={landingpage_picture}
                        borderRadius='70%'
                        boxSize='70%' /> */}
                    </Box>
                </Flex>
            </Stack>


            
        </Container>
    )
}
export default Landing;