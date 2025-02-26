import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button, Text, Table, Tbody, Td, Tr, Image } from '@chakra-ui/react';
import Footer from '../components/Home/Footer';
import './Manage.css';
import { useNavigate } from 'react-router-dom';
import { Divider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import nairImg from '../assets/nair.jpg';
import menonImg from '../assets/menon1.jpg';
import benjaminImg from '../assets/benjamin.jpg';
import debImg from '../assets/deb.jpg';
import skjhaImg from '../assets/skjha.jpg';

function MangementNew({ scrollToRef }) {
    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);
    const navigate = useNavigate();
    const [members, setMembers] = useState([
        {
            photo: '',
            name: '',
            designation: ''
        },
        {
            photo: '',
            name: '',
            designation: ''
        },
        {
            photo: nairImg,
            name: 'Dr.C.G.Krishnadas Nair',
            designation: 'Honorary President',
            about: 'Former Chairman, HAL'
        }, {
            photo: menonImg,
            name: 'Wg Cdr Venugopal Menon(Retd)',
            designation: 'Honorary Secretary'
        }, {
            photo: benjaminImg,
            name: 'Wg Cdr MP Benjamin',
            designation: 'Director'
        }, {
            photo: skjhaImg,
            name: 'Shri SK Jha',
            designation: 'Resident Director, North Zone'
        },
        // {
        //     photo:debImg,
        //     name:'Shri Debashish Deb',
        //     designation:'Resident Director, East Zone'
        // }
    ])

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

            <Flex
                w={'full'}
                h={'10vh'}
                paddingRight={'5rem'}
                backgroundImage={'https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&w=600'}
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
            >
                <Box>
                    <Heading p={5} flex="1" color={'#000080'}>
                        Management
                    </Heading>
                </Box>
            </Flex>


            <Box p={5} overflowX="auto">

                <Box as="section" p={{ base: 4, md: 10 }} mx="auto" maxWidth="1320px">
                    <Flex
                        flexWrap="wrap"
                        gap={8}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                    >
                        {members.map((elem, index) => (
                            <Box
                                key={index}
                                textAlign="center"
                                maxW="300px"
                                w="full"
                                
                                mx="auto"
                                flex={{ base: '1 1 100%', md: '1 1 45%' }}
                                p={4}
                            >
                                {(index == 0)? (
                                    <Text
                                        borderRadius="md"
                                        className='siati-management-text'
                                        // bg="gray.100"
                                        p={4}
                                        mx="auto"
                                        w="full"
                                        // maxWidth={'600px'}
                                        maxH="300px"
                                        overflow="hidden"
                                        textAlign="justify"
                                        fontSize={'medium'}
                                    >
                                        The Management of the Society of Indian Aerospace Technologies and Industries 
                                        is entrusted to a Governing Council formed from the various prominent industries 
                                        with Dr. C.G. Krishnadas Nair as its Hon President and Wg Cdr Venugopal Menon(Retd) 
                                        as its Hon Secretary General with members nominated from 
                                        HAL, ISRO, NAL,DRDO, ADA,DGCA, CEMILAC, DGAQA etc and from Private industries.
                                    </Text>
                                ) : (
                                    <Image
                                        src={elem.photo}
                                        alt={elem.name}
                                        borderRadius="md"
                                        objectFit="cover"
                                        mx="auto"
                                        w="full"
                                        maxH="300px"
                                    />
                                )}
                                <Text fontWeight="bold" mt={4}>
                                    {(index == 0) ? "" : elem.name}
                                </Text>
                                <Text className='member_designation_text' color="gray.500">
                                    {(index === 0) ? "" : elem.designation}
                                </Text>
                                <Text className='member_designation_text' color="gray.500">
                                    {index === 2 ? elem.about:""}
                                </Text>
                                <Text className='member_designation_text' onClick={() => navigate('/presidentprofile')} color="blue.500" _hover={{cursor:'pointer'}}>
                                    {index === 2 ? "Click here to view profile" : ""}
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                </Box>
                {/* <Box as="section" p={{ base: 4, md: 10 }} mx="auto" maxWidth="1320px">
                    <Flex
                        flexWrap="wrap"
                        gap={8}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                    >
                        {members.map((elem, index) => {
                            // Render merged cell for index 0 and 1
                            if (index === 0) {
                                return (
                                    <Box
                                        key={index}
                                        textAlign="center"
                                        maxW="600px" // Adjust width to merge
                                        w="full"
                                        mx="auto"
                                        p={4}
                                        flex={{ base: '1 1 100%', md: '1 1 100%' }}
                                    >
                                        <Text
                                            borderRadius="md"
                                            p={4}
                                            mx="auto"
                                            w="full"
                                            maxH="300px"
                                            overflow="hidden"
                                            textAlign="justify"
                                            fontSize={'medium'}
                                        >
                                            The Management of the Society of Indian Aerospace Technologies and Industries
                                            is entrusted to a Council of Trustees formed from the various prominent industries
                                            with Dr. C.G. Krishnadas Nair as its Hon President and Wg Cdr Venugopal Menon(Retd)
                                            as its Hon Secretary General with members nominated from
                                            HAL, ISRO, NAL, DRDO, ADA, DGCA, CEMILAC, DGAQA etc and from Private industries.
                                        </Text>
                                    </Box>
                                );
                            }

                            // Render other items normally
                            return (
                                <Box
                                    key={index}
                                    textAlign="center"
                                    maxW="300px"
                                    w="full"
                                    mx="auto"
                                    flex={{ base: '1 1 100%', md: '1 1 45%' }}
                                    p={4}
                                >
                                    <Image
                                        src={elem.photo}
                                        alt={elem.name}
                                        borderRadius="md"
                                        objectFit="cover"
                                        mx="auto"
                                        w="full"
                                        maxH="300px"
                                    />
                                    <Text fontWeight="bold" mt={4}>
                                        {elem.name}
                                    </Text>
                                    <Text color="gray.500">
                                        {elem.designation}
                                    </Text>
                                    <Text color="gray.500">
                                        {index === 2 ? elem.about : ""}
                                    </Text>
                                    <Text onClick={() => navigate('/presidentprofile')} color="blue.500" _hover={{ cursor: 'pointer' }}>
                                        {index === 2 ? "Click here to view profile" : ""}
                                    </Text>
                                </Box>
                            );
                        })}
                    </Flex>
                </Box> */}

                <Flex justify="center" mt={5}>
                    <Button
                        marginInline={2}
                        width={'200px'}
                        color={'#000080'}
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
                        onClick={() => navigate('/trustees')}
                    >
                        Governing Council
                    </Button>

                    <Divider />
                </Flex>
            </Box>



            <Box mt="auto" w="100%">
                <Footer />
            </Box>
        </Box>
    );
}

export default MangementNew;
