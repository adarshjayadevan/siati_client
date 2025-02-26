import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button } from '@chakra-ui/react';
import { List, VStack, Pagination } from 'rsuite';
import Footer from '../components/Home/Footer';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import '../components/style.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

function News({ scrollToRef }) {

    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);
    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [totalItems, setTotalItems] = useState(1)
    const [news, setNews] = useState([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        upcoming_events()
    }, [activePage])

    async function upcoming_events() {
        setLoader(true);
        await axios.get(`${import.meta.env.VITE_API_URL}/news/${activePage}`).then(res => {
            setNews(res.data.data);
            debugger
            setTotalItems(res.data.totalPages*limit);
            setLoader(false);
        }).catch(err => {
            console.log(err);
            setLoader(false)
        })
    }


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
                    //   opacity={0.5}
                    backgroundImage={
                        'url(https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600)'
                    }
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <Heading color={'white'} p={5} flex="1">
                        News
                    </Heading>
                </Flex>

                {loader ? <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
                    < Oval
                        visible={true}
                        height="40"
                        width="40"
                        color="#4c90dd"
                        secondaryColor='#000080'
                        ariaLabel="oval-loading"
                    />
                </Box> :
                    <>
                        <Box p={8}>
                            <List hover>
                                {news.map((elem, index) => {
                                    return <List.Item style={{ paddingLeft: '2rem' }} key={index}>
                                        <VStack>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <PiBookmarkSimpleFill style={{ fontSize: 'large', color: '#000080' }} />
                                                <h4 className='past-events-header' onClick={()=>navigate(`/news/${elem.newsId}`)} style={{ marginLeft: '4px' }}>{elem.title}</h4>
                                            </div>
                                            <div className='event-calender'>
                                                <FaCalendarAlt className='event-calendericon' />
                                                <p className='event-date'>{elem.date} | {elem.location}</p>
                                            </div>
                                            <div style={{ paddingRight: '5rem' }}>
                                                <p >{elem.description.slice(0, 390)}</p>
                                            </div>

                                        </VStack>
                                    </List.Item>
                                })}
                            </List>
                        </Box>

                        <Box padding={5} mx={'auto'}>
                            <Pagination
                                prev
                                last
                                next
                                first
                                size="lg"
                                total={totalItems}
                                limit={limit}
                                activePage={activePage}
                                onChangePage={setActivePage}
                            />
                        </Box>
                    </>
                }


                <Box mt="auto" w="100%">
                    <Footer />
                </Box>
            </Box >
        </>
    );
}

export default News;
