import React, { useEffect, useRef } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, GridItem, Heading, Button, Text, Table, Tbody, Td, Tr, Image } from '@chakra-ui/react';
import Footer from '../components/Home/Footer';
import './Manage.css';
import { useNavigate } from 'react-router-dom';
import nairImg from '../assets/nair.jpg';
import menonImg from '../assets/menon1.jpg';
import benjaminImg from '../assets/benjamin.jpg';
import khajuria from '../assets/trustees/khajuria.jpg';
import upadhya from '../assets/trustees/upadhya.jpg';
import pv from '../assets/trustees/pv.jpg';
import jitendra from '../assets/trustees/jitendra.jpg';
import sajalprakash from '../assets/trustees/sajalprakash.jpg';
import girish from '../assets/trustees/girish.jpg';
import apvsprasad from '../assets/trustees/apvsprasad.jpg';
import bhatt from '../assets/trustees/bhatt.jpg';
import mayank from '../assets/trustees/mayank.jpg';
import arunakar from '../assets/trustees/arunakar.jpg';
import kvs from '../assets/trustees/kvs.jpg';
import dwarak from '../assets/trustees/dwarak.jpg';
import drs from '../assets/trustees/drs.jpg';
import rajeev from '../assets/trustees/rajeev.jpg';
import naresh from '../assets/trustees/naresh.jpg';
import vaidya from '../assets/trustees/vaidya.jpg';
import jagdish from '../assets/trustees/jagdish.jpg';
import skjhaImg from '../assets/skjha.jpg';
import { Divider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

function Trustees({ scrollToRef }) {
    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);
    const navigate = useNavigate();

    const teamData = [
        {
            name: "Air Mshl DS Khajuria (Retd)",
            position: "Former AOM, IAF",
            img: khajuria,
        },
        {
            name: "Dr. A.R.Upadhya",
            position: "Former Director NAL",
            img: upadhya
        },
        // {
        //     name: "Dr. PV Venkitakrishnan--",
        //     position: "Former Director CBPO, ISRO",
        //     img: pv
        // },
        {
            name: "Mr. Jitendra J Jadhav",
            position: "Director General, ADA",
            img: jitendra
        },
        // {
        //     name: "Mr. Sajal Prakash",
        //     position: "CEO (AC), HAL",
        //     img: sajalprakash
        // },
        {
            name: "Mr. S Jayakrishnan",
            position: "CEO (BC), HAL",
            img: 'https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?semt=ais_hybrid'
        },
        {
            name: "Dr. A. Pashilkar",
            position: "Director CSIR-NAL",
            img: 'https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?semt=ais_hybrid'
        },
        // {
        //     name: "Dr. Girish S Deodhare",
        //     position: "PD (CA) & Director ADA",
        //     img: girish
        // },
        {
            name: "Mr. APVS Prasad",
            position: "Chief Executive CEMILAC",
            img: apvsprasad
        },
        // {
        //     name: "Mr. M. K. Mishra",
        //     position: "CEO, BC HAL",
        //     img: 'https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?semt=ais_hybrid'
        // },
        {
            name: "Mr. M Satyanarayana",
            position: "CEO (AC), HAL",
            img: 'https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?semt=ais_hybrid'
        },
        // {
        //     name: "Mr. Amitab Bhatt",
        //     position: "CEO, BC HAL",
        //     img: bhatt
        // },
        {
            name: "Mr. Arun Chaudhary",
            position: "Director-DIITM, DRDO",
            img: 'https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?semt=ais_hybrid'
        },
        // {
        //     name: "Dr Mayank Dwivedi",
        //     position: "Director DIITM, DRDO",
        //     img: mayank
        // },
        {
            name: "Mr. Arunakar Mishra",
            position: "CEO Genser Aerospace & IT Pvt. Ltd",
            img: arunakar
        },
        {
            name: "Mr. KV Subramanian",
            position: "CEO Systems Aids",
            img: kvs
        },
        {
            name: "Prof. Dwarakadasa",
            position: "CMD KHMDL",
            img: dwarak
        },
        {
            name: "Mr. D.R.Subramanyam",
            position: "MD SLN Technologies",
            img: drs
        },
        {
            name: "Mr. Rajeev Sikka",
            position: "MD, Sikka interplants Ltd, Bangalore",
            img: rajeev
        },
        {
            name: "Dr. Naresh Palta",
            position: "Advisor, Maini Aerospace",
            img: naresh
        },
        {
            name: "Mr. M. Behramkamdin",
            position: "Sr VP-Godrej Aerospace",
            img: 'https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?semt=ais_hybrid'
        },
        // {
        //     name: "Mr. S.M.Vaidya",
        //     position: "VP & Business head Aerospace, Godrej & Boyce mfg Co",
        //     img: vaidya
        // },
        {
            name: "Mr. Jagdish Yerubandi",
            position: "MD, Compupower Pvt Ltd, Hyderabad",
            img: jagdish
        },
        {
            name: "Mr. Sanjay Chawla",
            position: "DG DGAQA",
            img: 'https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?semt=ais_hybrid'
        },
        {
            name: "Mr. S.K. Bramhane",
            position: "Dy DGCA (SZ)",
            img: 'https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?semt=ais_hybrid'
        },
        {
            name: "R Adm Deepak Bansal VSM (Retd)",
            position: "Former ACNS (AM)",
            img: 'https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?semt=ais_hybrid'
        },
        {
            name: "Shri SK Jha",
            position: "Resident Director, North Zone",
            img:skjhaImg
        },

    ];

    const governingCouncil = [
        {
            name: "Dr. C.G.Krishnadas Nair",
            position: "Honorary President",
            img: nairImg,
        },
        {
            name: '',
            position: "",
            img: '',
        },
        {
            name: "Wg Cdr Venugopal Menon [Retd]",
            position: "Honorary Secretary",
            img: menonImg,
        },
        {
            name: '',
            position: "",
            img: '',
        },
        {
            name: 'Wg Cdr MP Benjamin [Retd]',
            position: "Director",
            img: benjaminImg,
        },

    ];

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
                mt={'10px'}
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


            <Box p={5} maxW="1330px" mx="auto" mt={20} mb={20}>
                <Box
                    // borderTop="2px solid"
                    // borderColor="blue.500"
                    width="fit-content"
                // mt={4}
                >
                    {/* <Heading textAlign={'center'} className='home_events_heading' mb={6}>Governing Council</Heading> */}
                    <Text justifyContent={'center'} fontSize={'x-large'} color={'#000080'}>Governing Council consisting of Hony President, Dr. C.G. Krishnadas Nair , Wg Cdr Venugopal Menon (Retd) as its Hon Secretary & Senior Director and Wg Cdr MP Benjamin (Retd), Director and members nominated from HAL, ISRO, DRDO, CEMILAC, ADA, DGCA, NAL, DGAQA etcand from Private industries, plan year-to-year activities & guide the office bearers and the Committees set up for various activities.</Text>
                </Box>
                <Table marginBottom={5}>
                    <Tr>
                        {governingCouncil.map((elem, idx) => (
                            <Td key={idx}>
                                <GridItem
                                    bg="white"
                                    boxShadow={elem.name ? "md" : ''}
                                    className={elem.name ? "" : 'governing_class'}
                                    borderRadius='md'
                                    overflow="hidden"
                                    textAlign="center"
                                >
                                    <Image

                                        src={elem.img}
                                        alt={elem.name}
                                        height={200}
                                        width={200}
                                        borderRadius={'300px'}
                                        display="inline"
                                    />
                                    <Box p={4}>
                                        <Text fontWeight="bold" fontSize="lg">
                                            {elem.name}
                                        </Text>
                                        <Text mt={1} fontSize="md" color="gray.600">
                                            {elem.position}
                                        </Text>
                                    </Box>
                                </GridItem>
                            </Td>
                        ))}
                    </Tr>
                </Table>

                <Grid
                    templateColumns={{
                        base: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                        lg: "repeat(4, 1fr)",
                    }}
                    gap={6}
                >
                    {teamData.map((member, index) => (
                        <GridItem
                            key={index}
                            bg="white"
                            boxShadow="md"
                            borderRadius="md"
                            overflow="hidden"
                            textAlign="center"
                        >
                            <Image
                                src={member.img}
                                alt={member.name}
                                height={200}
                                width={200}
                                borderRadius={'300px'}
                                display="inline"
                            />
                            <Box p={4}>
                                <Text fontWeight="bold" fontSize="lg">
                                    {member.name}
                                </Text>
                                <Text mt={1} fontSize="md" color="gray.600">
                                    {member.position}
                                </Text>
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
            </Box>

            <Flex p={5} justify="center" mt={8}>
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
                    onClick={() => navigate('/management')}
                >
                    Go Back
                </Button>

                <Divider />
            </Flex>

            <Box mt="auto" w="100%">
                <Footer />
            </Box>
        </Box>
    );
}

export default Trustees;
