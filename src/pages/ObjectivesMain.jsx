import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button } from '@chakra-ui/react';
import { Panel } from 'rsuite';
import Footer from '../components/Home/Footer';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import '../components/style.css'
import { useNavigate } from 'react-router-dom';
import AboutCards from '../components/AboutCards';
import Objectives from '../components/Objectives';


function ObjectivesMain({ scrollToRef }) {
    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])
    const navigate = useNavigate();
    return (
        <>
            <Box minH="100vh" display="flex" flexDirection="column">
                <Box
                    position="fixed" top="0" left="0" right="0" zIndex="10" bg="white" boxShadow="md"
                >
                    <Header
                        scrollToRef={{
                            about: callToActionRef,
                            contact: anotherComponentRef,
                        }}
                    />
                </Box>
                <Flex
                    mt={'100px'}
                    w={'full'}
                    h={'25vh'}
                    opacity={0.5}
                    backgroundImage={
                        'url(https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600)'
                    }
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <Heading p={5} flex="1">
                        Objectives
                    </Heading>
                </Flex>


                <Objectives />


                <Box mt="auto" w="100%">
                    <Footer />
                </Box>
            </Box>
        </>
    );
}

export default ObjectivesMain;
