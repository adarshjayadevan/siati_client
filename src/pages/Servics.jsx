import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button, Text, Icon, List, ListItem, HStack } from '@chakra-ui/react';
import Footer from '../components/Home/Footer';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import { MdOutlineDoubleArrow } from 'react-icons/md';
import '../components/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

function Services({ scrollToRef }) {
    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [news, setNews] = useState(null);
    const params = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }, []);




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
                <>
                    <Flex
                        mt={'100px'}
                        w={'full'}
                        h={'25vh'}
                        opacity={0.5}
                        paddingRight={'5rem'}
                        backgroundImage={'https://images.pexels.com/photos/5054535/pexels-photo-5054535.jpeg?auto=compress&cs=tinysrgb&w=600'}
                        backgroundSize={'cover'}
                        backgroundPosition={'center center'}
                    >
                        <Box>
                            <Heading p={5} flex="1" color={'#000080'}>
                                Services
                            </Heading>
                        </Box>
                    </Flex>

                    <Box marginInline={'auto'}
                    >
                        <Heading ml={5} color={'#000080'} size="lg" mb={4}>
                            All Industry / Institution members can avail services from SIATI
                        </Heading>

                        <Box>
                            <List ml={5} textAlign="center" spacing={3}>
                                <ListItem>
                                    <HStack justify="left" align="start">
                                        <Icon as={MdOutlineDoubleArrow} boxSize={5} color="gray.500" />
                                        <Box color={'gray.500'}>Development and production of aerospace materials, equipment, structures, etc for both Indian and Overseas customers.</Box>
                                    </HStack>
                                </ListItem>

                                <ListItem>
                                    <HStack justify="left" align="start">
                                        <Icon as={MdOutlineDoubleArrow} boxSize={5} color="gray.500" />
                                        <Box color={'gray.500'}>Assistance in building international collaboration for technology tie-ups and Joint Venture.</Box>
                                    </HStack>
                                </ListItem>

                                <ListItem>
                                    <HStack justify="left" align="start">
                                        <Icon as={MdOutlineDoubleArrow} boxSize={5} color="gray.500" />
                                        <Box color={'gray.500'}>Platform for interaction with Indian R&D, Academia and industry for technology and business development.</Box>
                                    </HStack>
                                </ListItem>

                                <ListItem>
                                    <HStack justify="left" align="start">
                                        <Icon as={MdOutlineDoubleArrow} boxSize={5} color="gray.500" />
                                        <Box color={'gray.500'}>Active participation under the EU India Co-operation projects industry collaborations and reciprocity of Airworthiness certification.</Box>
                                    </HStack>
                                </ListItem>

                                <ListItem>
                                    <HStack justify="left" align="start">
                                        <Icon as={MdOutlineDoubleArrow} boxSize={5} color="gray.500" />
                                        <Box color={'gray.500'}>Export Promotion through Offset/Counter Trade Agreements and forum for interaction with Government, HAL & STC in this matter.</Box>
                                    </HStack>
                                </ListItem>

                                <ListItem>
                                    <HStack justify="left" align="start">
                                        <Icon as={MdOutlineDoubleArrow} boxSize={5} color="gray.500" />
                                        <Box color={'gray.500'}>Provide platform for developing a consortium to share expertise and costly processing facilities to facilitate enhanced sourcing from India.</Box>
                                    </HStack>
                                </ListItem>

                                <ListItem>
                                    <HStack justify="left" align="start">
                                        <Icon as={MdOutlineDoubleArrow} boxSize={5} color="gray.500" />
                                        <Box color={'gray.500'}>Interaction with Government for policies conducive for development of aerospace technology R&D & business.</Box>
                                    </HStack>
                                </ListItem>


                                <ListItem>
                                    <HStack justify="left" align="start">
                                        <Icon as={MdOutlineDoubleArrow} boxSize={5} color="gray.500" />
                                        <Box color={'gray.500'}>Work for DGCA FAA, reciprocity and similarly DGCA BCAR JAA reciprocity.</Box>
                                    </HStack>
                                </ListItem>


                                <ListItem>
                                    <HStack justify="left" align="start">
                                        <Icon as={MdOutlineDoubleArrow} boxSize={5} color="gray.500" />
                                        <Box color={'gray.500'}>Participate in workshops and training programs for Quality Certifications like ASA9100, DGAQA, and CEMILAC certifications.</Box>
                                    </HStack>
                                </ListItem>

                                <ListItem>
                                    <HStack justify="left" align="start">
                                        <Icon as={MdOutlineDoubleArrow} boxSize={5} color="gray.500" />
                                        <Box color={'gray.500'}>Training in specific fields for e.g. Machining, Welding, Casting, Forgings, Rubber & Sealant technology, structural assembly technology, CAD CAM etc.</Box>
                                    </HStack>
                                </ListItem>

                                <ListItem>
                                    <HStack justify="left" align="start">
                                        <Icon as={MdOutlineDoubleArrow} boxSize={5} color="gray.500" />
                                        <Box color={'gray.500'}>Training in general areas such as production management, project management, quality management, airworthiness, contract management, lean manufacturing, productivity management, export marketing, HRD and finance management etc.
                                        </Box>
                                    </HStack>
                                </ListItem>


                            </List>
                        </Box>
                    </Box>

                </>
            }

            <Box mt="auto" w="100%">
                <Footer />
            </Box>
        </Box>
    );
}

export default Services;
