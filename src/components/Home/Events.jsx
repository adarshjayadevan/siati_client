// import React, { useEffect, useState } from 'react';
// import { Box, VStack, Image, Text, Heading, HStack, Grid, GridItem, Flex, Button } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Oval } from 'react-loader-spinner';
// import { Divider } from 'rsuite';

// const UpcomingEvents = () => {
//     const navigate = useNavigate();
//     const [events, setEvents] = useState([]);
//     const [loader, setLoader] = useState(false);

//     useEffect(() => {
//         upcoming_events()
//     }, [])

//     async function upcoming_events() {
//         setLoader(true);
//         await axios.get(`${import.meta.env.VITE_API_URL}/upcomingevents`).then(res => {
//             setEvents(res.data.data);
//             setLoader(false);
//         }).catch(err => {
//             setLoader(false);
//             console.log(err);

//         })
//     }
//     return (
//         <Box
//             paddingInline={5}
//             mt={10}>
//             <Box
//                 borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={4}>
//                 <Heading className='home_events_heading' mb={6}>Upcoming Events</Heading>
//             </Box>
//             {loader ? <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
//                 <Oval
//                     visible={true}
//                     height="40"
//                     width="40"
//                     color="#4c90dd"
//                     secondaryColor='#000080'
//                     ariaLabel="oval-loading"
//                 />
//             </Box> : <>
//                 {events.length > 0 ? <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>

//                     <GridItem _hover={{ cursor: 'pointer' }} onClick={() => navigate(`/event/${events[0]?.eventId}`)} rowSpan={2}>
//                         <Box
//                             height="100%"
//                             borderWidth="1px"
//                             borderRadius="lg"
//                             overflow="hidden"

//                             boxShadow="md"
//                         >
//                             <p>{ }</p>
//                             <Image
//                                 // src="https://via.placeholder.com/300"
//                                 src={events[0]?.image}
//                                 alt={events[0]?.event}
//                                 objectFit="cover"
//                                 height="450px"
//                                 width="100%"
//                                 mb={4}
//                             />
//                             <Text p={2} fontSize="sm" color="gray.500">
//                                 {events[0]?.date}
//                             </Text>
//                             <Heading color={'#070740'} _hover={{ textDecoration: 'underline' }} p={2} size="lg" fontWeight="bold">
//                                 {events[0]?.event}
//                             </Heading>
//                             <Text color={'#070740'} p={2} fontSize="sm">
//                                 {events[0]?.description?.slice(0, 200)}...
//                             </Text>
//                         </Box>
//                     </GridItem>

//                     {/* {events.slice(1, 3).map((elem, idx) => {
//                         return <GridItem key={elem.eventId}
//                             _hover={{ cursor: 'pointer' }} onClick={() => navigate(`/event/${elem.eventId}`)}
//                         >
//                             <Box
//                                 height="100%"
//                                 borderWidth="1px"
//                                 borderRadius="lg"
//                                 overflow="hidden"

//                                 boxShadow="md"
//                             >
//                                 <HStack spacing={4} height="100%">
//                                     <Image
//                                         // src="https://via.placeholder.com/150"
//                                         src={elem.image}
//                                         alt={elem.event}
//                                         objectFit="cover"
//                                         height="300px"
//                                         width="50%"
//                                     />
//                                     <VStack align="start" justify="start" spacing={1} height="100%">
//                                         <Text mt={2} fontSize="sm" color="gray.500">
//                                             {elem.date}
//                                         </Text>
//                                         <Heading color={'#070740'} _hover={{ textDecoration: 'underline' }} mt={3} size="md" fontWeight="bold">
//                                             {elem.event}
//                                         </Heading>
//                                     </VStack>
//                                 </HStack>
//                             </Box>
//                         </GridItem>
//                     })} */}

//                     <GridItem
//                         key={events[1]?.eventId}
//                         _hover={{ cursor: 'pointer' }}
//                         onClick={() => navigate(`/event/${events[1]?.eventId}`)}
//                     >
//                         <Box
//                             height="100%"
//                             borderWidth="1px"
//                             borderRadius="lg"
//                             overflow="hidden"
//                             boxShadow="md"
//                         >
//                             <HStack spacing={4} height="100%">
//                                 <Image
//                                     src={events[1]?.image}
//                                     alt={events[1]?.event}
//                                     objectFit="cover"
//                                     height="300px"
//                                     width="50%"
//                                 />
//                                 <VStack align="start" justify="start" spacing={1} height="100%">
//                                     <Text mt={2} fontSize="sm" color="gray.500">
//                                         {events[1]?.date}
//                                     </Text>
//                                     <Heading
//                                         color={'#070740'}
//                                         _hover={{ textDecoration: 'underline' }}
//                                         mt={3}
//                                         size="md"
//                                         fontWeight="bold"
//                                     >
//                                         {events[1]?.event}
//                                     </Heading>
//                                 </VStack>
//                             </HStack>
//                         </Box>
//                     </GridItem>

//                     <GridItem
//                         // key={events[2].eventId}
//                         // _hover={{ cursor: 'pointer' }}
//                         // onClick={() => navigate(`/event/${events[2].eventId}`)}
//                     >
//                         <Box
//                             height="100%"
//                             borderWidth="1px"
//                             borderRadius="lg"
//                             overflow="hidden"
//                             boxShadow="md"
//                         >
//                             <HStack spacing={4} height="100%">
//                                 <Image
//                                     // src={events[2].image}
//                                     // alt={events[2].event}
//                                     objectFit="cover"
//                                     height="300px"
//                                     width="50%"
//                                 />
//                                 <VStack align="start" justify="start" spacing={1} height="100%">
//                                     <Text mt={2} fontSize="sm" color="gray.500">
//                                         {/* {events[2].date} */}
//                                     </Text>
//                                     <Heading
//                                         color={'#070740'}
//                                         _hover={{ textDecoration: 'underline' }}
//                                         mt={3}
//                                         size="md"
//                                         fontWeight="bold"
//                                     >
//                                         {/* {events[2].event} */}
//                                     </Heading>
//                                 </VStack>
//                             </HStack>
//                         </Box>
//                     </GridItem>


//                 </Grid> :
//                     <Box>
//                         <GridItem rowSpan={2}>
//                             <Box
//                                 height="100%"
//                                 borderWidth="1px"
//                                 borderRadius="lg"
//                                 overflow="hidden"

//                                 boxShadow="md"
//                             >
//                                 <Image

//                                     objectFit="cover"
//                                     height="450px"
//                                     width="100%"
//                                     mb={4}
//                                 />
//                                 <Text p={2} fontSize="sm" color="gray.500">

//                                 </Text>
//                                 <Heading color={'#070740'} p={2} size="lg" fontWeight="bold">

//                                 </Heading>
//                                 <Text color={'#070740'} p={2} fontSize="sm">
//                                 </Text>
//                             </Box>
//                         </GridItem>
//                     </Box>
//                 }
//                 <Flex justify="center" mt={8}>
//                     <Button
//                         marginInline={2}
//                         width={'200px'}
//                         color={'#000080'}
//                         _hover={{
//                             _before: {
//                                 content: '""',
//                                 position: "absolute",
//                                 width: "0%",
//                                 height: "2px",
//                                 bottom: 0,
//                                 left: 0,
//                                 backgroundColor: "currentColor",
//                                 transition: "width 0.3s ease-in-out",
//                             },
//                             _after: {
//                                 content: '""',
//                                 position: "absolute",
//                                 width: "100%",
//                                 height: "2px",
//                                 bottom: 0,
//                                 left: 0,
//                                 backgroundColor: "currentColor",
//                                 transition: "width 0.3s ease-in-out",
//                             },
//                         }}
//                         position="relative"
//                         _before={{
//                             content: '""',
//                             position: "absolute",
//                             width: "0%",
//                             height: "2px",
//                             bottom: 0,
//                             left: 0,
//                             backgroundColor: "currentColor",
//                             transition: "width 0.3s ease-in-out",
//                         }}
//                         _after={{
//                             content: '""',
//                             position: "absolute",
//                             width: "0%",
//                             height: "2px",
//                             bottom: 0,
//                             left: 0,
//                             backgroundColor: "currentColor",
//                             transition: "width 0.3s ease-in-out",
//                         }}
//                         onClick={() => navigate('/events')}
//                     >
//                         View All Events
//                     </Button>

//                     <Divider />
//                 </Flex>
//             </>}
//         </Box>
//     );
// };

// export default UpcomingEvents;


import React, { useEffect, useState } from 'react';
import { Box, VStack, Image, Text, Heading, Grid, GridItem, Flex, Button, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { Divider } from 'rsuite';

const UpcomingEvents = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        upcoming_events();
    }, [])

    async function upcoming_events() {
        setLoader(true);
        await axios.get(`${import.meta.env.VITE_API_URL}/upcomingevents`).then(res => {
            setEvents(res.data.data);
            setLoader(false);
        }).catch(err => {
            setLoader(false);
            console.log(err);
        })
    }

    return (
        <Box paddingInline={5} mt={5}>
            <Box borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={4}>
                <Heading className='home_events_heading' mb={6}>Upcoming Events</Heading>
            </Box>

            {loader ? (
                <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
                    <Oval
                        visible={true}
                        height="40"
                        width="40"
                        color="#4c90dd"
                        secondaryColor='#000080'
                        ariaLabel="oval-loading"
                    />
                </Box>
            ) : (
                <>
                    {events.length > 0 ? (
                        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
                            {/* First Event: Large Box */}
                            <GridItem _hover={{ cursor: 'pointer' }} onClick={() => navigate(`/event/${events[0]?.eventId}`)} rowSpan={2}>
                                <Box height="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                                    
                                    {events[0]?.startDate!=events[0]?.endDate?<Text p={2} fontSize="sm" color="gray.500">{events[0]?.date}</Text>:<Text p={2} fontSize="sm" color="gray.500">{events[0]?.startDate}</Text>}
                                    <Heading color={'#070740'} _hover={{ textDecoration: 'underline' }} p={2} size="lg" fontWeight="bold">
                                        {events[0]?.event}
                                    </Heading>
                                    <Text color={'#070740'} p={2} fontSize="sm">
                                        {events[0]?.description?.slice(0, 200)}...
                                    </Text>
                                    {events[0]?.image?<Image
                                        src={events[0]?.image}
                                        alt={events[0]?.event}
                                        objectFit="cover"
                                        height="450px"
                                        width="100%"
                                        mb={4}
                                    />:<Image
                                    objectFit="cover"
                                    height="450px"
                                    width="100%"
                                    mb={4}
                                />}
                                </Box>
                            </GridItem>

                            {/* Second and Third Events: Smaller Boxes */}
                            {events.slice(1, 3).map((event, idx) => (
                                <GridItem key={event?.eventId} _hover={{ cursor: 'pointer' }} onClick={() => navigate(`/event/${event?.eventId}`)}>
                                    <Box height="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                                        <HStack spacing={4} height="100%">
                                            {event?.image ? (
                                                <Image
                                                    src={event?.image}
                                                    alt={event?.event}
                                                    objectFit="cover"
                                                    height="300px"
                                                    width="50%"
                                                />
                                            ) : (
                                                <Box height="300px" width="50%" borderWidth="1px" borderRadius="lg"></Box>
                                            )}

                                            <VStack align="start" justify="start" spacing={1} height="100%">
                                                {/* <Text mt={2} fontSize="sm" color="gray.500">{event?.date}</Text> */}
                                                {event?.startDate!=event?.endDate?<Text p={2} fontSize="sm" color="gray.500">{event?.date}</Text>:<Text p={2} fontSize="sm" color="gray.500">{event?.startDate}</Text>}
                                                <Heading color={'#070740'} _hover={{ textDecoration: 'underline' }} mt={3} size="md" fontWeight="bold">
                                                    {event?.event || 'Event Title'}
                                                </Heading>
                                            </VStack>
                                        </HStack>
                                    </Box>
                                </GridItem>
                            ))}

                            {/* Fallback for missing events */}
                            {events.length < 3 && (
                                <GridItem>
                                    <Box height="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                                        <Box height="300px" width="50%" borderWidth="1px" borderRadius="lg"></Box>
                                        <VStack align="start" justify="start" spacing={1} height="100%">
                                            <Text mt={2} fontSize="sm" color="gray.500"></Text>
                                            <Heading color={'#070740'} _hover={{ textDecoration: 'underline' }} mt={3} size="md" fontWeight="bold"></Heading>
                                        </VStack>
                                    </Box>
                                </GridItem>
                            )}
                        </Grid>
                    ) : (
                        <Box>
                            {/* Blank Event Box */}
                            <GridItem rowSpan={2}>
                                <Box height="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                                    <Box height="450px" width="100%" borderWidth="1px" borderRadius="lg"></Box>
                                    <Text p={2} fontSize="sm" color="gray.500"></Text>
                                    <Heading color={'#070740'} p={2} size="lg" fontWeight="bold"></Heading>
                                    <Text color={'#070740'} p={2} fontSize="sm"></Text>
                                </Box>
                            </GridItem>
                        </Box>
                    )}

                    <Flex justify="center" mt={8}>
                        <Button
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
                            onClick={() => navigate('/events')}
                        >
                            View All Events
                        </Button>

                        <Divider />
                    </Flex>
                    {/* <Divider /> */}
                </>
            )}
        </Box>
    );
};

export default UpcomingEvents;
