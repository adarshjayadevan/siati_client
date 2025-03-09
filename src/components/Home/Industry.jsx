import React, { useEffect, useState } from 'react';
import { Carousel, Panel, Divider } from 'rsuite';
import { Box, Flex, useBreakpointValue, Button, Heading } from '@chakra-ui/react';
import 'rsuite/dist/rsuite.min.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import './News.css';
import { useNavigate } from 'react-router-dom';

function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loader, setLoader] = useState(false);
    const [news, setNews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        upcoming_events()
    }, [])

    async function upcoming_events() {
        setLoader(true);
        await axios.get(`${import.meta.env.VITE_API_URL}/recentnews`).then(res => {
            debugger
            setNews(res.data.data);
            setLoader(false);
        }).catch(err => {
            debugger
            console.log(err);
            setLoader(false);

        })
    }

    const visiblePanels = 3;

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % news.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length);
    };

    // const getVisibleItems = () => {
    //     const items = [];
    //     for (let i = 0; i < visiblePanels; i++) {
    //         const index = (activeIndex + i) % news.length;
    //         items.push(
    //             <Box
    //                 key={index}
    //                 _hover={{
    //                     cursor: 'pointer',
    //                     transform: 'scale(1.05)',
    //                     transition: 'transform 0.3s ease-in-out',
    //                 }}
    //                 p={1}
    //                 w={{ base: '80%', md: '30%' }}
    //                 onClick={() => {
    //                     if (news[index]?.location?.split('_')[1]) {
    //                         navigate(`/promotions/${news[index]?.newsId}`);
    //                     } else {
    //                         navigate(`/news/${news[index]?.newsId}`);
    //                     }
    //                 }}
    //                 position={'relative'}
    //             >
    //                 <Panel key={index} shaded bordered bodyFill>
    //                     {news[index]?.image ? (
    //                         <Box
    //                             as="img"
    //                             src={news[index]?.image}
    //                             style={{
    //                                 height: '300px',
    //                                 width: '100%',
    //                                 objectFit: 'cover',
    //                                 borderRadius: '0px',
    //                             }}
    //                         />
    //                     ) : (
    //                         <Box
    //                             style={{
    //                                 height: '300px',
    //                                 width: '100%',
    //                                 backgroundColor: '#fff', 
    //                                 borderRadius: '0px',
    //                             }}
    //                         ></Box>
    //                     )}
    //                     <Box
    //                         position="absolute"
    //                         top="0"
    //                         right="0"
    //                         m={2}
    //                         p={2}
    //                         backgroundColor={'#00080'}
    //                         color="white"
    //                         borderRadius="md"
    //                         textAlign="center"
    //                     >
                         
    //                     </Box>
    //                     <Panel
    //                         className="promotions_header"
    //                         header={news[index]?.title}
    //                         style={{ marginTop: '8px' }}
    //                     >
    //                     </Panel>
    //                 </Panel>
    //             </Box>
    //         );
    //     }
    //     return items;
    // };

    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < visiblePanels; i++) {
            const newsItem = news[i]; // Do not use modulus (%), just index directly
    
            items.push(
                <Box
                    key={i}
                    _hover={{
                        cursor: newsItem ? 'pointer' : 'default',
                        transform: newsItem ? 'scale(1.05)' : 'none',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                    p={1}
                    w={{ base: '80%', md: '30%' }}
                    onClick={() => {
                        if (newsItem?.location?.split('_')[1]) {
                            navigate(`/promotions/${newsItem?.newsId}`);
                        } else if (newsItem) {
                            navigate(`/news/${newsItem?.newsId}`);
                        }
                    }}
                    position={'relative'}
                >
                    <Panel key={i} shaded bordered bodyFill>
                        {newsItem ? (
                            <Box
                                as="img"
                                src={newsItem.image}
                                style={{
                                    height: '300px',
                                    width: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '0px',
                                }}
                            />
                        ) : (
                            <Box
                                style={{
                                    height: '300px',
                                    width: '100%',
                                    backgroundColor: '#fff',
                                    borderRadius: '0px',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        )}
                        {newsItem ? (
                            <Panel
                                className="promotions_header"
                                header={newsItem.title}
                                style={{ marginTop: '8px' }}
                            />
                        ) : (
                            <Panel
                                className="promotions_header"
                                header=""
                                style={{
                                    marginTop: '8px',
                                    backgroundColor: '#f5f5f5',
                                    textAlign: 'center',
                                    padding: '10px',
                                    borderRadius: '0px',
                                }}
                            />
                        )}
                    </Panel>
                </Box>
            );
        }
        return items;
    };
    
    
    

    return (
        <Box
            p={{ base: 2, md: 4 }}
        >
            <Box
                borderTop="2px solid" borderColor="blue.500" width="fit-content"
                mt={1}
            >
                <Heading className='home_events_heading' mb={6}>Promotions</Heading>
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
                        wrap="wrap"
                        justify={{ base: 'center', md: 'space-between' }}
                    >
                        {getVisibleItems()}
                    </Flex>
                    <Flex justify="center" mt={8}>
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
                            onClick={() => navigate('/news')}
                        >
                            View All Promotions
                        </Button>

                        <Divider />
                    </Flex>
                </>
            }
        </Box>
    );
}

export default Slider;
