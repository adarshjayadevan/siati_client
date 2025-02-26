import React, { useEffect, useRef } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button, Text, Table, Tbody, Td, Tr } from '@chakra-ui/react';
import Footer from '../components/Home/Footer';
import { Panel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './Manage.css';
import { useNavigate } from 'react-router-dom';
import nairImg from '../assets/nair.jpg';
import menonImg from '../assets/menon1.jpg';
import benjaminImg from '../assets/benjamin.jpg';
import debImg from '../assets/deb.jpg';
import skjhaImg from '../assets/skjha.jpg';

function Mangement({ scrollToRef }) {
    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const Card = props => (
        <Panel style={{ marginInline: '2rem' }} >
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <img src={props.image} style={{ height: '400px', width: '300px' }} />
                <Text className='user-details'>{props.user}</Text>
                <Text className='user-details'>{props.designation}</Text>
                <Text className='user-details-addl'>{props.additionalInfo}</Text>
                {props.link && <Text className='user-details-addl-link' onClick={() => navigate('/presidentprofile')}>{props.link}</Text>}
            </Box>
        </Panel>
    );

    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            <Box position="fixed" top="0" left="0" right="0" zIndex="10" bg="white" boxShadow="md">
                <Header scrollToRef={{
                    about: callToActionRef,
                    contact: anotherComponentRef,
                }} />
            </Box>

            <Flex
                mt={'100px'}
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

            {/* <Text 
                className='management_heading' 
                textAlign={'justify'} 
                paddingTop={'1rem'} 
                px={{ base: '1rem', md: '10rem' }} 
                fontSize={{ base: 'md', md: 'lg' }}
            >
                The Management of the Society of Indian Aerospace Technologies and Industries is entrusted to a Council of Trustees formed from the various prominent industries with Dr. C.G. Krishnadas Nair as its Hon President and Wg Cdr Venugopal Menon(Retd) as its Hon Secretary General with members nominated from HAL, ISRO, NAL,DRDO, ADA,DGCA, CEMILAC, DGAQA etc and from Private industries.
            </Text>

            <Box mt={5}>
                <Grid 
                    templateColumns={{ base: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }} 
                    gap={6}
                    px={{ base: '1rem', md: '0' }}
                >
                    <Card
                        user={'Dr.C.G.Krishnadas Nair'}
                        designation={'Honorary President'}
                        additionalInfo={'Former Chairman, Hindustan Aeronautics Ltd '}
                        link={'(Click here for Profile)'}
                        image={nairImg}
                    />
                    <Card
                        user={'Wg Cdr Venugopal Menon(Retd)'}
                        designation={'Honorary Secretary'}
                        additionalInfo={''}
                        image={menonImg}
                    />
                    <Card
                        user={'Wg Cdr MP Benjamin'}
                        designation={'Director'}
                        additionalInfo={''}
                        image={benjaminImg}
                    />
                    <Card
                        user={'Shri SK Jha'}
                        designation={'Resident Director, North Zone'}
                        additionalInfo={''}
                        image={skjhaImg}
                    />
                    <Card
                        user={'Shri Debashish Deb'}
                        designation={'Resident Director, East Zone'}
                        additionalInfo={''}
                        image={debImg}
                    />
                </Grid>
            </Box> */}

            <Box p={5} overflowX="auto">
                <Table mx={'auto'} width={'75%'} variant="unstyled" size="md">
                    <Tbody>
                        <Tr>
                            <Td
                                h={"400px"}
                                w={'50%'}
                                boxShadow="md" borderRadius="lg"
                                backgroundColor="rgba(104, 111, 140, 0.1)"
                            ><Text
                                className='management_heading'
                                textAlign={'justify'}
                                fontSize={{ base: 'md', md: 'lg' }}

                            >
                                    The Management of the Society of Indian Aerospace Technologies and Industries is entrusted to a Council of Trustees formed from the various prominent industries with Dr. C.G. Krishnadas Nair as its Hon President and Wg Cdr Venugopal Menon(Retd) as its Hon Secretary General with members nominated from HAL, ISRO, NAL,DRDO, ADA,DGCA, CEMILAC, DGAQA etc and from Private industries.
                                </Text></Td>
                            <Td
                                h={"400px"}
                                w={'50%'}
                                // backgroundColor="rgba(7, 7, 64, 0.1)"
                                backgroundColor="rgba(7, 7, 64, 0.92)"
                                boxShadow="md" borderRadius="lg"
                                ><img src={nairImg} style={{borderRadius:"80px",marginBottom:'10px'}} />
                                <Text className='user-details'>Dr.C.G.Krishnadas Nair</Text>
                                <Text className='user-details'>Honorary President</Text>
                                <Text className='user-details-addl'>Former Chairman, Hindustan Aeronautics Ltd </Text>
                                <Text className='user-details-addl-link' onClick={() => navigate('/presidentprofile')}>Click here for Profile</Text></Td>
                        </Tr>
                        <Tr>
                            <Td
                                h={"400px"}
                                w={'50%'}
                                // p={4}
                                boxShadow="md" borderRadius="lg"
                                bg="blue.100"><img src={menonImg} style={{borderRadius:"120px",marginBottom:'10px'}} />
                                <Text className='user-details_row2'>Wg Cdr Venugopal Menon(Retd)</Text>
                                <Text className='user-details_row2'>Honorary Secretary</Text></Td>
                                <Td
                                h={"400px"}
                                w={'50%'}
                                // border
                                boxShadow="md" borderRadius="lg"
                                backgroundColor="rgba(104, 111, 140, 0.1)"><img src={benjaminImg} style={{borderRadius:"80px",marginBottom:'10px'}} />
                                <Text className='user-details_row3'>Wg Cdr MP Benjamin</Text>
                                <Text className='user-details_row3'>Director</Text></Td>
                        </Tr>
                        <Tr>
                            <Td
                                h={"400px"}
                                w={'50%'}
                                boxShadow="md" borderRadius="lg"
                                backgroundColor="rgba(104, 111, 140, 0.1)"><img src={skjhaImg} style={{borderRadius:"80px",marginBottom:'10px'}} />
                                <Text className='user-details_row3'>Shri SK Jha</Text>
                                <Text className='user-details_row3'>Resident Director, North Zone</Text></Td>
                            <Td
                                h={"400px"}
                                w={'50%'}
                                boxShadow="md" borderRadius="lg"
                                backgroundColor="rgba(7, 7, 64, 0.92)"><img src={debImg} style={{borderRadius:"80px",marginBottom:'10px'}} />
                                <Text className='user-details'>Shri Debashish Deb</Text>
                                <Text className='user-details'>Resident Director, East Zone</Text></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>

            <Box mt="auto" w="100%">
                <Footer />
            </Box>
        </Box>
    );
}

export default Mangement;
