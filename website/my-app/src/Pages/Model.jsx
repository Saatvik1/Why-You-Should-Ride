import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import axios from 'axios'
import {useState } from 'react'
import { Field, Form, Formik } from 'formik';


import {
    
    Button,
    Center,
    
  } from '@chakra-ui/react'



const Model = () => {


    
    const [prediction, setPrediction] = useState("")

    

    const handlePredict = (values) =>{
        (async () => {
            console.log(values)

            try{
                await axios.get('https://saatvik1.pythonanywhere.com/get/predict', {
                    params: {
                        helmet : values.helmetSelect,
                        drink : values.drinkSelect,
                        speed : values.speedInput,
                        age : values.ageSelect,
                        engineSize : values.engineSizeSelect,
                        dayOfWeek : values.dayOfWeekSelect,
                        month : values.monthSelect
                    }
                }).then((res) => {
                    console.log("Recieved prediction")
                    console.log(res)
                    setPrediction(res.data)
                })
                    
            } catch(err){
                console.log("Error predict get request")
                console.log(err)
            }

        })()

    }

    

    return (
        <div>
            <Heading color={'green.400'} size='4xl' align="center" p="4" style={{ fontFamily: "monospace" }}>
                Predict Injury Severity
            </Heading>

            <Center>
                <Box align="center" bg="" p={1} width="40%" border="1px">
                    <Heading color={'green.400'} size='2xl' align="" p="4" style={{ fontFamily: "monospace" }}>
                        What is this?
                    </Heading>

                    <Text fontSize='lg' whiteSpace="pre-line">
                        I created a model that takes in data from the 
                        FARS database, and takes in features like 
                        day of ride, what month, helmet use, age, alcohol level,
                        and speeding to predict the severity of an injury 
                        IF you get into an accident. {'\n'}{'\n'} 
                        
                        For example if you were riding with no helmet, extremely drunk,
                        speeding, you would most likely end up as a fatality... if you were 
                        to get into an accident.{'\n'} {'\n'}

                        This model uses Random Forest, and has an 81% accuracy on the testing set.
                    </Text>
                </Box>

            




            </Center>

            <Heading color={'green.400'} size='4xl' align="center" p="4" style={{ fontFamily: "monospace" }}>
                {prediction}
            </Heading>

            {/* <form onSubmit={handlePredict}> */}
            <Center> 

                <Formik
                initialValues={{
                    helmetSelect: '1', // Initialize with empty values
                    drinkSelect: '1',
                    speedInput: '0',
                    ageSelect: '0',
                    engineSizeSelect: '0',
                    dayOfWeekSelect: '1',
                    monthSelect: '1'
                }}
                onSubmit={values => {
                    handlePredict(values);
                }}>


                {({ handleSubmit, handleChange, values }) => (
                        <Form onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                            <Heading color={'green.400'} size='lg' align="" p="4" style={{ fontFamily: "monospace" }}>
                                Do you wear a helmet?
                            </Heading>
                            <Field name="helmetSelect">
                                    {({ field }) => (
                                        <select {...field} className="form-control" size='lg'>
                                            <option value={1}>DOT-Approved Helmet</option>
                                            <option value={0.5}>Not DOT-Approved Helmet</option>
                                            <option value={0}>No Helmet</option>
                                        </select>
                                    )}
                            </Field>

                            <Heading color={'green.400'} size='lg' align="" p="4" style={{ fontFamily: "monospace" }}>
                                Are you going to drink?
                            </Heading>

                            <Field name="drinkSelect">
                                    {({ field }) => (
                                        <select {...field} className="form-control" size='lg'>
                                            <option value={1}>Yes</option>
                                            <option value={0}>No</option>
                                        </select>
                                    )}
                                </Field>

                            <Heading color={'green.400'} size='lg' align="" p="4" style={{ fontFamily: "monospace" }}>
                                What is the speed difference you ride compared to the limit?
                            </Heading>

                            <Field name="speedInput">
                                    {({ field }) => (
                                        <input {...field} type="text" className="form-control" placeholder='Values from -20 to 100' size='lg' />
                                    )}
                                </Field>

                            <Heading color={'green.400'} size='lg' align="" p="4" style={{ fontFamily: "monospace" }}>
                                What is your age?
                            </Heading>
                            <Field name="ageSelect">
                                    {({ field }) => (
                                        <select {...field} className="form-control" size='lg'>
                                            <option value={0}>0-18</option>
                                            <option value={1}>19-32</option>
                                            <option value={2}>33-49</option>
                                            <option value={3}>50+</option>
                                        </select>
                                    )}
                                </Field>


                            <Heading color={'green.400'} size='lg' align="" p="4" style={{ fontFamily: "monospace" }}>
                                What is the engine size?
                            </Heading>
                            <Field name="engineSizeSelect">
                                    {({ field }) => (
                                        <select {...field} className="form-control" size='lg'>
                                            <option value={0}>0-50cc</option>
                                            <option value={1}>51-124cc</option>
                                            <option value={2}>125-349cc</option>
                                            <option value={3}>350-449cc</option>
                                            <option value={4}>450-749cc</option>
                                            <option value={5}>750+cc</option>
                                        </select>
                                    )}
                                </Field>

                            <Heading color={'green.400'} size='lg' align="" p="4" style={{ fontFamily: "monospace" }}>
                                What is the day of the week?
                            </Heading>

                            <Field name="dayOfWeekSelect">
                                    {({ field }) => (
                                        <select {...field} className="form-control" size='lg'>
                                            <option value={1}>Sunday</option>
                                            <option value={2}>Monday</option>
                                            <option value={3}>Tuesday</option>
                                            <option value={4}>Wednesday</option>
                                            <option value={5}>Thursday</option>
                                            <option value={6}>Friday</option>
                                            <option value={7}>Saturday</option>
                                        </select>
                                    )}
                                </Field>

                            <Heading color={'green.400'} size='lg' align="" p="4" style={{ fontFamily: "monospace" }}>
                                What month is it?
                            </Heading>


                            <Field name="monthSelect">
                                    {({ field }) => (
                                        <select {...field} className="form-control" size='lg'>
                                            <option value={1}>January</option>
                                            <option value={2}>February</option>
                                            <option value={3}>March</option>
                                            <option value={4}>April</option>
                                            <option value={5}>May</option>
                                            <option value={6}>June</option>
                                            <option value={7}>July</option>
                                            <option value={8}>August</option>
                                            <option value={9}>September</option>
                                            <option value={10}>October</option>
                                            <option value={11}>November</option>
                                            <option value={12}>December</option>
                                        </select>
                                    )}
                                </Field>

                            <Button type = "submit" colorScheme='green' variant='solid'>
                                Predict
                            </Button>



                            </Stack>
                        </Form>
                    )}




                </Formik>

            


                </Center>
        {/* </form> */}

            

            
        </div>
    );

}

export default Model;
