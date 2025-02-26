import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button, Text, Image } from '@chakra-ui/react';
import Footer from '../components/Home/Footer';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import '../components/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

function PromotionDetail({ scrollToRef }) {
    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const [news, setNews] = useState(null);
    const params = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        detail_event();
    }, []);

    async function detail_event() {
        setLoader(true);
        await axios.get(`${import.meta.env.VITE_API_URL}/newsdetail/${params.id}`).then(res => {
            setNews(res.data.data);
            setLoader(false);
        }).catch(err => {
            debugger
            setLoader(false);
        })

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

                    <Box mt={'100px'}>
                        <Heading p={5} flex="1" color={'#000080'}>
                            {news.title.split('-').splice(0, 2).join('-')}
                        </Heading>
                        <Text as={'h4'} paddingLeft={5}>{news.title.split('-').splice(2, 3).join('-')}</Text>
                    </Box>

                    <Flex justifyContent="center"
                        alignItems="center">
                        <Image height={500} width={500} src={news.image} />
                    </Flex>



                    <Box px={'10rem'} paddingTop={'2rem'} color={'#000080'}>
                        <Text fontSize={'large'} py={5} textAlign={'justify'}
                        > {news.description}
                        </Text>
                    </Box>
                </>
            }

            <Box mt="auto" w="100%">
                <Footer />
            </Box>
        </Box>
    );
}

export default PromotionDetail;
