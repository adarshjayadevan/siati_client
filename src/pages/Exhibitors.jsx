import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, GridItem, Heading, Button, Text, Table, Tbody, Td, Tr, Image } from '@chakra-ui/react';
import Footer from '../components/Home/Footer';
import '../components/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';


function Exhibitors({ scrollToRef }) {
    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const [exhibitors, setExhibitors] = useState(null);
    const params = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getAllExhibitors();
    }, []);

    async function getAllExhibitors() {
        setLoader(true);
        await axios.get(`${import.meta.env.VITE_API_URL}/exhibitorpage`).then(res => {
            setExhibitors(res.data.data);
            setLoader(false);
        }).catch(err => {
            debugger
            setLoader(false);
        })

    }


    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            <Box position="fixed" top="0" left="0" right="0" zIndex="10" bg="white" boxShadow="md">
                <Header scrollToRef={{
                    about: callToActionRef,
                    contact: anotherComponentRef,
                }} />
            </Box>

            {loader ? <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
                <Oval
                    visible={true}
                    height="40"
                    width="40"
                    color="#4c90dd"
                    secondaryColor='#000080'
                    ariaLabel="oval-loading"
                />
            </Box> :
                <Box p={5} textAlign="center" mt={20}>
                    {exhibitors.map((elem) => (
                        <Box key={elem._id} mt={5} id={elem._id}>
                            <Heading className='home_events_heading'>{elem._id.toUpperCase()}</Heading>
                            <Grid
                                templateColumns={{
                                    base: "1fr",
                                    sm: elem.exhibitors.length === 1 ? "1fr" : "repeat(2, 1fr)",
                                    md: `repeat(${Math.min(elem.exhibitors.length, 3)}, 1fr)`,
                                    lg: `repeat(${Math.min(elem.exhibitors.length, 4)}, 1fr)`,
                                }}
                                justifyContent="center"
                                alignItems="center"
                                gap={6}
                            >
                                {elem.exhibitors.map((exhibitor, index) => (
                                    <GridItem
                                        key={index}
                                        bg="white"
                                        boxShadow="md"
                                        borderRadius="md"
                                        overflow="hidden"
                                        textAlign="center"
                                    >
                                        <Image
                                            src={exhibitor.logo}
                                            alt={exhibitor.exhibitor}
                                            height={200}
                                            width={200}
                                            borderRadius="300px"
                                            display="inline"
                                        />
                                        <Box p={4}>
                                            <Text fontWeight="bold" fontSize="lg">
                                                {exhibitor.exhibitor}
                                            </Text>
                                            <Text mt={1} fontSize="md" color="gray.600">
                                                Event: {exhibitor.event?.event}
                                            </Text>
                                        </Box>
                                    </GridItem>
                                ))}
                            </Grid>
                        </Box>
                    ))}
                </Box>

            }

            <Box mt="auto" w="100%">
                <Footer />
            </Box>
        </Box>
    );
}

export default Exhibitors;
