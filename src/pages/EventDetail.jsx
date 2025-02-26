import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button } from '@chakra-ui/react';
import Footer from '../components/Home/Footer';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import '../components/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

function EventDetail({ scrollToRef }) {
    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const [event, setEvent] = useState(null);
    const params = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        detail_event();
    }, []);

    async function detail_event() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/event/${params.id}`);
            setEvent(res.data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoader(false);
        }
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
            <>
                <Flex
                    mt={'100px'}
                    w={'full'}
                    h={'25vh'}
                    opacity={0.5}
                    backgroundImage={event.image}
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <Heading p={5} flex="1" color={'#000080'}>
                        {event.event}
                    </Heading>
                </Flex>

                <Box p={20} color={'#000080'}>
                    <div className='event-calender'>
                        <FaCalendarAlt className='event-calendericon' />
                        <p className='event-date'>{event.date}</p>
                    </div>
                    <div className='event-calender'>
                        <FaLocationDot className='event-calendericon' />
                        <p className='event-date'>{event.location}</p>
                    </div>
                    <p style={{ marginTop: '10px', textAlign: 'justify', fontSize: 'medium' }}>{event.description}</p>

                    {new Date(event.startDate) >= new Date() &&
                    <>
                    <p style={{ marginTop: '2rem' }}><strong>Registration is now open</strong></p>

                    <Button
                        position="relative"
                        _hover={{
                            _before: {
                                width: "100%",
                            },
                            _after: {
                                width: "100%",
                            },
                        }}
                        _before={{
                            content: '""',
                            position: "absolute",
                            width: "0%",
                            height: "2px",
                            bottom: 0,
                            left: 0,
                            backgroundColor: "currentColor",
                            transition: "width 0.3s ease-in-out",
                        }}
                        _after={{
                            content: '""',
                            position: "absolute",
                            width: "0%",
                            height: "2px",
                            bottom: 0,
                            left: 0,
                            backgroundColor: "currentColor",
                            transition: "width 0.3s ease-in-out",
                        }}
                        width="auto"
                        maxWidth="150px"
                        mt={10}
                        marginBottom={10}
                    >
                        Register
                    </Button>
                    </>
                     } 
                </Box>
            </>
            }

            <Box mt="auto" w="100%">
                <Footer />
            </Box>
        </Box>
    );
}

export default EventDetail;
