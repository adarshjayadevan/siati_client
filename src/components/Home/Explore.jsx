import {
    Box,
    Heading,
    Text,
    VStack,
    Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaCaretRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Explore() {
    const navigate = useNavigate()
    const [message, setMessage] = useState([
        {
            heading: 'Become a Member',
            content: 'SIATI membership is your chance to stay connected to the changes impacting your industry and have a seat at the table as new initiatives are launched.',
            link:'/membership'
        },
        {
            heading: 'Contact Us',
            content: 'Find industry alignment on issues and advocacy opportunities, so your organization can impact the competitiveness and vitality of our field.',
            link:"/contact"
        },{
            heading: 'News',
            content: 'Identify emerging trends and align with key industry issues that influence public discourse and drive the future of our field..',
            link:"/news"
        }
    ]);

    return (
        <Box bgGradient="linear(to-r, #000080, #4c90dd)"  p={4} mt={4}>
            <Box
                borderTop="2px solid"
                borderColor="#fff"
                width="fit-content"
                mt={4}
                // mx="auto"     
                marginLeft={'5%'}
                textAlign="center"
            >
                <Heading className='explore_heading' mb={6}>Explore</Heading>
            </Box>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing="4rem"
                justify="center"
                align="center"
                mt={10}
            >
                {message.map((item, index) => (
                    <Box
                        backgroundColor={'white'}
                        key={index}
                        p={6}
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="md"
                        width="100%"
                        maxW="400px"
                        boxShadow="lg"
                        position="relative"
                    >
                        {/* Top Border Decoration */}
                        <Box
                            position="absolute"
                            top="-12px"
                            left="25px"
                            height="9px"
                            width="100px"  // Adjust length as needed
                            backgroundColor="#4c90dd"
                            transform="skew(-30deg)"
                            zIndex="1"
                        />
                        <VStack _hover={{
                            cursor:'pointer'
                        }} 
                        align="start" spacing={4}
                        onClick={()=>navigate(item.link)}
                        >
                            <Box display="flex" alignItems="center">
                                <FaCaretRight style={{ marginRight: '8px',color:'#4c90dd' }} />
                                <Heading _hover={{
                                    textDecoration:'underline'
                                }} color={'#000080'} size="md" fontWeight="bold">{item.heading}</Heading>
                            </Box>
                            <Text textAlign="justify">{item.content}</Text>
                        </VStack>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}
