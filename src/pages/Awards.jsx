import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button, Stack, HStack, Text } from '@chakra-ui/react';
import { Panel } from 'rsuite';
import Footer from '../components/Home/Footer';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import '../components/style.css'
import { MdOutlineDoubleArrow } from 'react-icons/md';
import Objectives from '../components/Objectives';


function Awards({ scrollToRef }) {
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
                        'url(https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600)'
                    }
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <Heading p={5} flex="1">
                        Objectives
                    </Heading>
                </Flex>


                <Box p={5} position="relative">
                    <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>

                        <Box p={8} textAlign={'justify'}>
                            <Stack spacing={6} w={'full'} >
                                <Heading fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
                                    <Text
                                        as={'span'}
                                        color={'#000080'}
                                    >
                                        SIATI AWARDS
                                    </Text>
                                </Heading>
                                <Box
                                    height="100%"
                                    overflow="hidden"
                                    p={4}
                                >
                                    {[
                                        `(a) “SIATI AWARD FOR EXCELLENCE” : SIATI instituted  this award to Industries from the year 1992 for Excellence in indigenous development/ Import Substitution of aerospace material, components structures, equipment and systems etc. The Awards are given on the basis of nominations received from the Certifying Agencies and the user organizations like DRDO, HAL, ISRO NAL, IAF etc. So far about 160 industries are recipient of these awards.`,
                                        `(b) "SIATI AWARD FOR LIFETIME SERVICE AND ACHIEVEMENTS” was instituted in the year 2011 to honour eminent persons who have made significant contribution in the aerospace, R&D, Industry and Education field.`,
                                        `(c) "SIATI AWARD FOR WOMEN ACHIEVER IN AEROSPACE” SIATI constituted this award from the year 2017 to honour eminent women in Aerospace who have made great contribution. `
                                    ].map((item, index) => {
                                        const formattedText = item.replace(
                                            /([“"])(SIATI AWARD.*?)([”"])/g,
                                            (_, openQuote, awardTitle, closeQuote) =>
                                                `${openQuote}<strong>${awardTitle}</strong>${closeQuote}`
                                        );
                                
                                        return (
                                            <HStack key={index} spacing={2} mb={2} alignItems="left">
                                                <Text color={'gray.500'} fontSize="md">
                                                    <span dangerouslySetInnerHTML={{ __html: formattedText }} />
                                                </Text>
                                            </HStack>
                                        );
                                    })}
                                    <Text fontStyle={'italic'} color={'gray.500'} fontSize="md">
                                        {`The Awardees are selected by the Award Committee and the Awards are conferred during SIATI Annual each year.`}
                                    </Text>
                                </Box>
                            </Stack>
                            <Stack spacing={6} w={'full'} >
                                <Heading fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
                                    <Text
                                        as={'span'}
                                        color={'#000080'}
                                    >
                                        CGK Endowment Fund
                                    </Text>
                                </Heading>
                                <Box
                                    height="100%"
                                    overflow="hidden"
                                    p={4}
                                >
                                    {[
                                        `CGK Endowment Fund was created in 2023 by SIATI in honour of its Founder President Dr CG Krishnadas Nair considering his immense contribution for enhancement of Aerospace Industry in the Country. The Awards are aimed to encourage Aerospace Education, Skill Development and Research by Students and young Faculties and industry professionals. Annual Awards are given for the best Published Paper or Project in the field of Aerospace Science, Engineering Technology and Management.work by students, scholars, young faculty and industry professionals.`,
                                    ].map((item, index) => (
                                        <HStack key={index} spacing={2} mb={2} alignItems="left">
                                            <Text color={'gray.500'} fontSize="md">
                                                <strong>CGK Endowment Fund was created in 2023 by SIATI in honour of its Founder President</strong>
                                                {item.replace("CGK Endowment Fund was created in 2023 by SIATI in honour of its Founder President", "")}
                                            </Text>
                                        </HStack>
                                    ))}
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>


                <Box mt="auto" w="100%">
                    <Footer />
                </Box>
            </Box>
        </>
    );
}

export default Awards;
