import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import {
  Box, Flex, Grid, Heading, Button, VStack, Divider, HStack, Text,

  SimpleGrid,
  Card,
  CardBody,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Image,
  IconButton,
} from '@chakra-ui/react';
import { Panel } from 'rsuite';
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";
import Footer from '../components/Home/Footer';
import '../components/style.css'
import { useNavigate } from 'react-router-dom';
import './Form.css'

function ContactUs({ scrollToRef }) {
  const callToActionRef = useRef(null);
  const anotherComponentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

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
          opacity={0.5}
          backgroundImage={
            'url(https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=600)'
          }
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
        >
          <Heading p={5} flex="1">
            Contact
          </Heading>
        </Flex>

        <Box bg="#f7f7f7" py={10}>
          <Container maxW="6xl" display="flex" flexDirection={{ base: "column", lg: "row" }} gap={10}>
     
            <VStack
              bg="white"
              p={{ base: 6, md: 8 }}
              boxShadow="lg"
              borderRadius="lg"
              spacing={6}
              w={{ base: "100%", lg: "30%" }}
              alignItems="stretch"
              textAlign="center"
              color={`#070740`}
            >
              <Box>
                <Text fontSize="3xl" fontWeight="bold">
                  Get in Touch
                </Text>
              </Box>
              <FormControl id="first-name">
                <FormLabel>Name</FormLabel>
                <Input placeholder="Please enter name..." variant="filled" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input placeholder="Please enter email..." variant="filled" type="email" />
              </FormControl>
              <FormControl id="phone-number">
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder="Please enter phone number..." variant="filled" type="tel" />
              </FormControl>
              <FormControl id="query">
                <FormLabel>What do you have in mind?</FormLabel>
                <Textarea placeholder="Please enter query..." variant="filled" />
              </FormControl>
              <Button colorScheme="blue" size="lg" borderRadius="full">
                Submit
              </Button>
            </VStack>

            <VStack
              w={{ base: "100%", lg: "70%" }}
              alignItems="stretch"
              spacing={6}
              // textAlign="center"
              // justifyContent="center"
            >
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} w="100%">
                <Card boxShadow="md" borderRadius="lg" p={4}>
                  <CardBody>
                    <Text fontSize="lg" fontWeight="bold" color="#070740">
                      Contact Us
                    </Text>
                    <Text mt={2} color="gray.500">
                      Mob: 9742279162 
                    </Text>
                    <Text mt={1} color="gray.500">
                     Wg Cdr - Venugopal Menon (Retd), Hon. Secretary
                    </Text>
                    <Text mt={3} color="gray.500">
                      Mob: 9880275110 - Wg Cdr MP Benjamin (Retd) – Director
                    </Text>
                  </CardBody>
                </Card>

                <Card boxShadow="md" borderRadius="lg" p={4}>
                  <CardBody>
                    <Text fontSize="lg" fontWeight="bold" color="#070740">
                      Address
                    </Text>
                    <Text mt={2} color="gray.500">
                      Society of Indian Aerospace Technologies and Industries
                      Aeronautical Society Buildings
                      Surnjandas Road, (off) Old Madras road
                      Bangalore -560075
                      Karnataka, INDIA</Text>
                  </CardBody>
                </Card>

                <Card boxShadow="md" borderRadius="lg" p={4}>
                  <CardBody>
                    <Text fontSize="lg" fontWeight="bold" color="#070740">
                      Fax & Phone
                    </Text>
                    <Text mt={2} color="gray.500">
                      Phone: +91 80 25275262 / 25219951
                    </Text>
                    <Text mt={2} color="gray.500">
                      Fax: +91 80 2529 2440
                    </Text>
                    <Text color="gray.500">Email: office@siati.org</Text>
                  </CardBody>
                </Card>
              </SimpleGrid>

              <Box
                h="320px"
                w="100%"
                bg="gray.200"
                bgSize="cover"
                bgPos="center"
                borderRadius="lg"
              ><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Aeronautical%20Society%20of%20India,%20Suranjan%20Das%20Rd,%20New%20Thippasandra%20Post,%20Bengaluru,%20Karnataka%20560075+(siati)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></Box>

              {/* <HStack justifyContent="center" spacing={4}>
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  variant="ghost"
                  color="gray.600"
                  _hover={{ color: "blue.500" }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                  variant="ghost"
                  color="gray.600"
                  _hover={{ color: "blue.500" }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Google"
                  icon={<FaGoogle />}
                  variant="ghost"
                  color="gray.600"
                  _hover={{ color: "blue.500" }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  variant="ghost"
                  color="gray.600"
                  _hover={{ color: "blue.500" }}
                />
              </HStack> */}
            </VStack>
          </Container>
        </Box>

        <Box mt="auto" w="100%">
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default ContactUs;
