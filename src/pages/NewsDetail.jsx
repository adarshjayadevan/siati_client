import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button, Text } from '@chakra-ui/react';
import Footer from '../components/Home/Footer';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import '../components/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

function NewsDetail({ scrollToRef }) {
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

    const addLineBreaks = (text) => {
        // Split the text into sentences based on periods.
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

        // Add a line break after every two sentences.
        const formattedText = sentences.reduce((acc, sentence, index) => {
            acc += sentence;
            // Add a line break after every two sentences.
            if ((index + 1) % 2 === 0) {
                acc += "<br />";
            }
            return acc;
        }, "");

        return formattedText;
    };

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
                        // opacity={0.5}
                        paddingRight={'5rem'}
                        // backgroundImage={news.image}
                        backgroundSize={'cover'}
                        backgroundPosition={'center center'}
                    >
                        <Box>
                            <Heading p={5} flex="1" color={'#000080'}>
                                {news.title}
                            </Heading>
                            <Text px={5} flex="1" color={'#000080'}>
                                {news.date}
                            </Text>
                        </Box>
                    </Flex>

                    <Box px={'10rem'}  color={'#000080'}>
                        {/* <Text fontSize={'large'} py={5} textAlign={'justify'}
                        // dangerouslySetInnerHTML={{ __html: addLineBreaks(`${news.location} : ${news.description}`) }}
                        >
                          {news.location} :  {news.description}
                        </Text> */}
                        <center>
                        <img height={'600px'} width={'450px'} src={news.image}/>
                        </center>

                    </Box>
                </>
            }

            <Box mt="auto" w="100%">
                <Footer />
            </Box>
        </Box>
    );
}

export default NewsDetail;
