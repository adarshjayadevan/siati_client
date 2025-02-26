import { Box, Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {

    const dispatch = useDispatch();
    // useEffect(() => {

    //     const timer = setTimeout(() => {
    //         dispatch(initialViewToggle({}))
    //     }, 2000); 
    //     return () => clearTimeout(timer);
    // }, []);

    const navigate = useNavigate()
    return <Box
        position="relative"
        border="1px solid"
        borderColor="gray.200"
        overflow="hidden"
        mb={4}
        minHeight="350px"
        className='eventcard'
        onClick={() => navigate('/2024-fall-cost-principles-committee-meeting')}
    >
        <Image src={event.image} alt={event.title} width="100%" />
        <Box p={4}>
            {event.date && <Text fontSize="sm" color="gray.500">{event.date}</Text>}
            <Heading size="md" mt={2}>{event.title}</Heading>
            {event.description && <Text mt={2}>{event.description}</Text>}
        </Box>
        <Box
            position="absolute"
            bottom="0"
            right="0"
            width="0"
            height="0"
        // borderWidth="0 30px 30px 0"
        // borderColor="transparent #b7cb67 #b7cb67 transparent"
        />
    </Box>
};

export default EventCard;