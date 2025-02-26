import { Box, Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initialViewToggle } from '../../redux/slice';


const EventCardCol = ({ event }) => {


    const navigate = useNavigate()
    return <Box
        position="relative"
        border="1px solid"
        borderColor="gray.200"
        overflow="hidden"
        mb={4}
        className='eventcard'
        onClick={() => navigate('/2024-fall-cost-principles-committee-meeting')}
    >
        <Flex direction={{ base: 'column', md: 'row' }} height="100%">
            <Image src={event.image} alt={event.title} height={'160px'} width={{ base: '100%', md: '150px' }} objectFit="cover" />
            <Box p={4} flex="1">
                {event.date && <Text fontSize="sm" color="gray.500">{event.date}</Text>}
                <Heading size="md" mt={2}>{event.title}</Heading>
            </Box>
        </Flex>
        <Box
            position="absolute"
            top="0"
            right="0"
            width="0"
            height="0"
        // borderWidth="0 30px 30px 0"
        // borderColor="transparent #b7cb67 #b7cb67 transparent"
        />
    </Box>
};

export default EventCardCol;