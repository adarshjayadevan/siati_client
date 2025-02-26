import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Box, Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import { Divider } from 'rsuite';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initialViewToggle } from '../../redux/slice';


const Placeholder = ({ image }) => (
    <Box
    position="relative"
    border="1px solid"
    borderColor="gray.200"
    overflow="hidden"
    mb={4}
    minHeight="350px"
    className='eventcard'
>
    <Image filter="blur(10px)" src={image}  width="100%" />
    <Box p={4}>
        <Text fontSize="sm" color="gray.500">loading...</Text>
        <Heading size="md" mt={2}>loading...</Heading>
        <Text mt={2}>loading...</Text>
    </Box>
</Box>
);

const PlaceholderSmall = ({ image }) => (
    <Box
        position="relative"
        border="1px solid"
        borderColor="gray.200"
        overflow="hidden"
        mb={4}
        className='eventcard'
        
        onClick={() => navigate('/2024-fall-cost-principles-committee-meeting')}
    >
        <Flex direction={{ base: 'column', md: 'row' }} height="100%">
            <Image filter="blur(10px)" src={image} height={'160px'} width={{ base: '100%', md: '150px' }} objectFit="cover" />
            <Box p={4} flex="1">
                <Text fontSize="sm" color="gray.500">loading...</Text>
                <Heading size="md" mt={2}>loading...</Heading>
            </Box>
        </Flex>
    </Box>
  );


const EventCard = lazy(() => import('./EventCard'));
const EventCardCol = lazy(() => import('./EventCardCol'));

const EventsLazy = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(initialViewToggle({}))
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const events = [
        {
            date: 'Sep 10, 2024 – Sep 11, 2024',
            title: '2024 Supply Chain Summit',
            description: 'The Supply Chain Summit will convene a large audience of supply chain leaders from prime companies, as well as business…',
            image: 'https://images.pexels.com/photos/16958357/pexels-photo-16958357/free-photo-of-us-coast-guard.jpeg?auto=compress&cs=tinysrgb&w=600',
            link: 'https://www.aia-aerospace.org/events/2024-supply-chain-summit-2/',
        },
        {
            date: 'Sep 25, 2024 – Sep 27, 2024',
            title: '2024 Fall Cost Principles Committee Meeting',
            image: 'https://images.pexels.com/photos/28186704/pexels-photo-28186704/free-photo-of-firefighter.jpeg?auto=compress&cs=tinysrgb&w=600',
            link: 'https://www.aia-aerospace.org/events/2024-fall-cost-principles-committee-meeting/',
        },
        {
            date: 'Oct 7, 2024 – Oct 9, 2024',
            title: '2024 Fall Joint AIA/NDIA Industrial Security Committee Meeting',
            image: 'https://images.pexels.com/photos/6044812/pexels-photo-6044812.jpeg?auto=compress&cs=tinysrgb&w=600',
            link: 'https://www.aia-aerospace.org/events/2024-fall-joint-aia-ndia-industrial-security-committee-meeting/',
        },
        {
            date: 'Nov 19, 2024 – Nov 21, 2024',
            title: '2024 Fall Board of Governors and Membership Meeting',
            image: 'https://images.pexels.com/photos/17725270/pexels-photo-17725270/free-photo-of-a-person-in-a-gas-mask-holding-a-gun.jpeg?auto=compress&cs=tinysrgb&w=600',
            link: 'https://www.aia-aerospace.org/events/2024-fall-board-of-governors-and-membership-meeting/',
        },
    ];

    return (
        <Box p={5} mt={10}>
            <Box borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={4}>
                <Heading className='home_events_heading' mb={6}>Upcoming Events</Heading>
            </Box>
            <Flex direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Box flex="1" mb={{ base: 4, md: 0 }}>
                    {loading ? (
                        <Placeholder image={events[0].image} />
                    ) : (
                        <Suspense fallback={<Placeholder image={events[0].image} />}>
                            <EventCard event={events[0]} />
                        </Suspense>
                    )}
                </Box>
                <Flex direction="column" flex="1" ml={{ md: 4 }} spacing={4}>
                    {loading ? (
                        events.slice(1).map((event, index) => (
                            <PlaceholderSmall key={index} image={event.image} />
                        ))
                    ) : (
                        events.slice(1).map((event, index) => (
                            <Suspense key={index} fallback={<PlaceholderSmall image={event.image} />}>
                                <EventCardCol event={event} />
                            </Suspense>
                        ))
                    )}
                </Flex>
            </Flex>
            <Flex justify="center" mt={3}>
                <Button
                    marginInline={5}
                    width={'200px'}
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
        </Box>
    );
};

export default EventsLazy;
