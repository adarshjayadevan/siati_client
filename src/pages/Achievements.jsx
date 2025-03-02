import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button, Stack, HStack, Text  } from '@chakra-ui/react';
import { Panel } from 'rsuite';
import Footer from '../components/Home/Footer';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDoubleArrow } from 'react-icons/md';
import '../components/style.css'
import Objectives from '../components/Objectives';


function Achievements({ scrollToRef }) {
    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
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
                        'url(https://images.pexels.com/photos/6120397/pexels-photo-6120397.jpeg?auto=compress&cs=tinysrgb&w=600)'
                    }
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <Heading p={5} flex="1">
                        Achievements
                    </Heading>
                </Flex>


                <Box p={5} position="relative">
                    <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>

                        <Flex p={8} flex={1} align={'center'} justify={'center'}>
                            <Stack spacing={6} w={'full'} >
                                <Heading fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
                                    <Text
                                        as={'span'}
                                        color={'#000080'}
                                    >
                                        Achievements
                                    </Text>
                                </Heading>
                                <Box
                                    height="100%"
                                    overflow="hidden"
                                    p={4}
                                >
                                    {[
                                        `Society of Indian Aerospace Technologies & Industries (SIATI) was established in April 1991 with a mission to create useful interaction with Indian and International Aerospace companies, R&D organisations and Academic Institutions for growth of Aerospace companies through partnership.  SIATI has nurtured several aerospace companies and achieved to make them major suppliers and exporters to major Aircraft Industries like HAL, Boeing Airbus etc. and some of them have grown to become public limited companies.`,
                                        `International Co-operation: SIATI has established relationship with ‘MOUs’ with similar international organisations like ADS (UK), GIFAS (FRANCE), BDLI (GERMANY), SJAC (JAPAN), AAA (AUSTRALIA), AIAC (CANADA) etc. `,
                                        `IIAEM:  SIATI conceived and established “International Institute for Aerospace Engineering and Management” (IIAEM) jointly with Jain University.`,
                                        `AASSC: SIATI as one of the promoters established “Aviation and Aerospace Sector Skill Council” supported by Ministry of Skill Development, GOI.`,
                                        `InAQG:  SIATI along with HAL formed InAQG (Indian Aerospace Quality Group) in the year 2016 as a part of Asia Pacific Aerospace Quality Group (APAQG) which is part of International Aerospace Quality Group (IAQG) formed by major Aerospace OEMs. All SIATI members are automatically members of InAQG.`,
                                        `Aerospace & Defence Directory: SIATI has published a unique Directory of Aerospace and Defence Companies grouping them as per capability.`,
                                        `Workshop / Seminar/ Short Courses:  SIATI has organised several Workshops and Seminar on the subject related to aerospace industries with a good attendance by them. SIATI along with Jain University conducted short courses on relevant subjects for the benefit of`
                                    ].map((item, index) => (
                                        <HStack key={index} spacing={2} mb={2} alignItems="center">
                                            <MdOutlineDoubleArrow fontSize={'lg'} />
                                            <Text color={'gray.500'} fontSize="md">
                                                {item}
                                            </Text>
                                        </HStack>
                                    ))}
                                </Box>
                            </Stack>
                        </Flex>
                    </Stack>
                </Box>


                <Box mt="auto" w="100%">
                    <Footer />
                </Box>
            </Box>
        </>
    );
}

export default Achievements;
