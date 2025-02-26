import React, { useEffect, useState } from 'react';
import { Box, VStack, Image, Text, Heading, HStack, Grid, GridItem, Flex, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TbTargetArrow } from "react-icons/tb";
import { GiCornerFlag } from "react-icons/gi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Divider } from 'rsuite';

const HomeMission = () => {
    const navigate = useNavigate();

    useEffect(() => {
    }, [])


    return (
        <Box p={5} mt={5}>
            {/* <Box
                borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={4}>
                <Heading className='home_events_heading' mb={6}>Mission</Heading>
            </Box> */}
            <>
                <Grid templateColumns={{ base: '1fr', md: '1fr' }} gap={8}>

                    <GridItem rowSpan={1}>
                        <Box
                            borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={4}>
                            <Heading className='home_events_heading' mb={6}>Mission</Heading>
                        </Box>
                        <Box
                            height="80%"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="visible"
                            p={5}
                            boxShadow="md"
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                top="-20px"
                                right="-20px"
                                m={2}
                                p={2}
                                backgroundColor="blue.400"
                                color="white"
                                textAlign="center"
                                boxShadow="md"
                            >
                                <Box fontSize="lg" fontWeight="bold">
                                    <GiCornerFlag />
                                </Box>
                            </Box>

                            <Text textAlign="justify" color="#070740" p={2} fontSize="x-large">
                                Our mission is the growth of aerospace infrastructure and capabilities in India, creating useful interaction and partnership among Indian and International aerospace industries, R&D, academia, Quality and Regulatory agencies for development and production of aircraft materials, components, structures, equipments and systems, enhancing industry participation of
                                Large and Medium Private Corporates, SMEs and Start-Ups with international cooperation for the benefit of all concerned, developing global opportunities, greater employment, wealth and welfare.
                            </Text>
                        </Box>

                    </GridItem>

                    {/* <GridItem _hover={{ cursor: 'pointer' }} onClick={() => navigate('/objectives')} rowSpan={2}>
                        <Box
                            borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={4}>
                            <Heading className='home_events_heading' mb={6}>Objectives</Heading>
                        </Box>
                        <Box
                            height="80%"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="visible"
                            p={5}
                            boxShadow="md"
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                top="-20px"
                                right="-20px"
                                m={2}
                                p={2}
                                backgroundColor="#070740"
                                color="white"
                                textAlign="center"
                                boxShadow="md"
                            >
                                <Box fontSize="lg" fontWeight="bold">
                                    <TbTargetArrow />
                                </Box>
                            </Box>
                            {[
                                "Awareness Creation - Business opportunities, Technology trends etc.",
                                "Broadcast & Facilitation - Showcase Collective Strength",
                                "Effective Representation - Effective Interactions between Industry, R&D and Academia",
                                "R&D, Academia, Training & Skill Development",
                                "Encouragement and Recognition - Encouragement and Recognition with SIATI Awards"
                            ].map((item, index) => (
                                <HStack key={index} spacing={2}
                                    mb={4}
                                    alignItems="center">
                                    <MdOutlineDoubleArrow />
                                    <Text color={'#070740'} fontSize="md">
                                        {item}
                                    </Text>
                                </HStack>
                            ))}
                        </Box>
                    </GridItem> */}

                </Grid>
                <Flex justify="center" mt={8}>
                    {/* <Button
                        marginInline={2}
                        width={'200px'}
                        color={'#000080'}
                        fontSize={'large'}
                        _hover={{
                            _before: {
                                content: '""',
                                position: "absolute",
                                width: "0%",
                                height: "2px",
                                bottom: 0,
                                left: 0,
                                backgroundColor: "currentColor",
                                transition: "width 0.3s ease-in-out",
                            },
                            _after: {
                                content: '""',
                                position: "absolute",
                                width: "100%",
                                height: "2px",
                                bottom: 0,
                                left: 0,
                                backgroundColor: "currentColor",
                                transition: "width 0.3s ease-in-out",
                            },
                        }}
                        position="relative"
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
                        onClick={() => navigate('/objectives')}
                    >
                        View Objectives
                    </Button> */}

                    {/* <Divider /> */}
                </Flex>
            </>
        </Box>
    );
};

export default HomeMission;

