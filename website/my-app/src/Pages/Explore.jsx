import { Box, Heading, Stack, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from "react";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik';
import '../Explore.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'




import {
    Button,
    Center,
  } from '@chakra-ui/react'



const Explore = () => {


    const [year, setYear] = useState("2021")
    const [markers, setMarkers] = useState(undefined)

    var coords = []
    

    useEffect(() => {
        (async () => {

            console.log("tf is happening")
            try{
                // await axios.get('http://127.0.0.1:5000/get/coords', {
                await axios.get('https://saatvik1.pythonanywhere.com/get/coords', {
                    params: {
                        year : year,
                    }
                }).then((res) => {
                    
                    coords = res.data

                    let temp = coords.map((coordPair) => {
                        console.log(coordPair)
                        return <Marker position={coordPair}/>
                    })

                    setMarkers(temp)

                    console.log(markers)



                })

            } catch (err){
                console.log("Failed to get lat and long")
                console.log(err)

            }
            
            



        })()
    }, [year])

    console.log(markers)

    return (
        <div>
            {/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" /> */}
            <Heading color={'green.400'} size='4xl' align="center" p="4" style={{ fontFamily: "monospace" }}>
                Explore FARS
            </Heading>

            <Center>
                <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>




                <Box align="center" bg="" p={1} width="40%" border="1px">
                    <Heading color={'green.400'} size='2xl' align="" p="4" style={{ fontFamily: "monospace" }}>
                        Interactive Map & PowerBI Dashboard
                    </Heading>

                    <Text fontSize='lg' whiteSpace="pre-line">
                        Here is an interactive map to view locations of motorcycle accidents, so you can see how geographic locations affect them. {'\n'}{'\n'}
                        As for the dashboard, unfortunately I only have a student account and am not able to publish it. But, you can head to the repository for this 
                        project and download it at:  {'\n'}
                        <Link href='https://github.com/Saatvik1/Why-You-Should-Ride/blob/main/website/my-app/src/Images/FARS2021Dashboard.pbix' isExternal>
                            Github Link to PowerBI File <ExternalLinkIcon mx='2px' />
                        </Link> {'\n'}
                        All you need is PowerBI desktop and then just open the file!
                    </Text>


                </Box>


                <Formik initialValues={{
                    year: '2021',
                }}
                onSubmit={values => {
                    console.log(values.year)
                    setYear(values.year);
                }}>

                    {({ handleSubmit, handleChange, values }) => (
                        <Form onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                            <Heading color={'green.400'} size='lg' align="" p="4" style={{ fontFamily: "monospace" }}>
                                Select Year
                            </Heading>
                            <Field name="year">
                                    {({ field }) => (
                                        <select {...field} className="form-control" size='lg'>
                                            <option value={'2021'}>2021</option>
                                            <option value={'2020'}>2020</option>
                                            <option value={'2019'}>2019</option>
                                        </select>
                                    )}
                            </Field>

                            <Button type = "submit" colorScheme='green' variant='solid'>
                                Change Year
                            </Button>



                            </Stack>
                        </Form>
                    )}




                </Formik>


                                      
                    <MapContainer center={[40.7244, -73.7154]} zoom={8} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[40.7244, -73.7154]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>

                        {markers}
                    </MapContainer>
            


                </Stack>
                
                    
                    

                



                

            




            </Center>

            <Center> 


            </Center>
       

            

            
        </div>
    );

}

export default Explore;
