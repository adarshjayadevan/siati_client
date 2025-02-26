import React, { useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button, Text } from '@chakra-ui/react';
import Footer from '../components/Home/Footer';
import '../components/style.css'
import { useNavigate } from 'react-router-dom';


function Membership({ scrollToRef }) {
    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);
    const navigate = useNavigate();
    return (
        <>
            <Box minH="100vh" display="flex" flexDirection="column">
                <Header
                    scrollToRef={{
                        about: callToActionRef,
                        contact: anotherComponentRef,
                    }}
                />
                <Flex
                    w={'full'}
                    h={'25vh'}
                    opacity={0.5}
                    backgroundImage={
                        'url(https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600)'
                    }
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <Heading p={5} flex="1" textDecoration={'underline'} color={'blue'} textAlign={'center'} _hover={{
                        cursor:'pointer'
                    }}>
                        Membership
                    </Heading>
                </Flex>


                    <Text 
                    _hover={{
                        cursor:'pointer'
                    }}
                    onClick={()=>navigate('/membershipform')}
                    >membership form</Text>

                <Box mt="auto" w="100%">
                    <Footer />
                </Box>
            </Box>
        </>
    );
}

export default Membership;
