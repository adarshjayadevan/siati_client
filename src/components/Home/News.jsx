import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    VStack,
    Text,
    useBreakpointValue,
    Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Grid, Row, Col, Divider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

export default function SplitScreen() {

    const [news, setNews] = useState([{
        date: 'August 15, 2024',
        event: 'AIA President and CEO Commends New AUKUS Rule, Urges Continued Collaboration'
    },
    {
        date: 'August 15, 2024',
        event: 'AIA President and CEO Commends New AUKUS Rule, Urges Continued Collaboration'
    },
    {
        date: 'August 25, 2024',
        event: 'AIA President and CEO Commends New AUKUS Rule, Urges Continued Collaboration'
    }])


    return (
        <Box p={5} mt={5}>
            <Box borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={4}>
                <Heading className='home_events_heading' mb={6}>Recent News</Heading>
            </Box>
            <Grid style={{ marginBottom: '15px' }} fluid>
                <Row style={{ paddingInline: "30px", marginTop: "5px" }}>
                    {news.map((elem, index) => (
                        <Col key={index} xs={24} sm={24} md={8}>
                            <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                overflow="hidden"
                                p={4}
                                marginY={5}
                                boxShadow="md"
                                maxW="sm"
                                bg="white"
                            >
                                <VStack align="start" spacing={2}>
                                    <Text fontSize="sm" color="gray.500">
                                        {elem.date}
                                    </Text>
                                    <Heading size="md" _hover={{
                                        textDecoration: "underline",
                                        cursor: "pointer",
                                    }}>
                                        {elem.event}
                                    </Heading>
                                </VStack>
                            </Box>
                        </Col>
                    ))}

                </Row>

                {/* <Row style={{ paddingInline: "30px", marginTop: "5px" }}>
                    {news.map((elem, index) => (
                        <Col key={index} xs={24} sm={24} md={8}>
                            <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                overflow="hidden"
                                p={4}
                                boxShadow="md"
                                maxW="sm"
                                bg="white"
                            >
                                <VStack align="start" spacing={2}>
                                    <Text fontSize="sm" color="gray.500">
                                        {elem.date}
                                    </Text>
                                    <Heading size="md" _hover={{
                                        textDecoration: "underline",
                                        cursor: "pointer",
                                    }}>
                                        {elem.event}
                                    </Heading>
                                </VStack>
                            </Box>
                        </Col>
                    ))}
                </Row> */}
            </Grid>
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
                    View All News
                </Button>
                <Divider />
            </Flex>
        </Box>
    )
}
