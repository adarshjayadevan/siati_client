import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button, Image } from '@chakra-ui/react';
import { Panel, Divider } from 'rsuite';
import Footer from '../components/Home/Footer';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import '../components/style.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

function Events({ scrollToRef }) {

  const callToActionRef = useRef(null);
  const anotherComponentRef = useRef(null);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);


  const [allEvents, setAllEvents] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    upcoming_events()
  }, [])

  async function upcoming_events() {
    setLoader(true);
    await axios.get(`${import.meta.env.VITE_API_URL}/upcomingevents`).then(res => {
      setAllEvents(res.data.data);
      setLoader(false);
    }).catch(err => {
      console.log(err);
      setLoader(false);
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
          opacity={0.5}
          backgroundImage={
            'url(https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=600)'
          }
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
        >
          <Heading p={5} flex="1">
            Events
          </Heading>
        </Flex>

        {loader ? <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
          <Oval
            visible={true}
            height="40"
            width="40"
            color="#4c90dd"
            secondaryColor='#000080'
            ariaLabel="oval-loading"
          />
        </Box> : <>

          <Box p={8}>
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
              gap={6}
            >
              {allEvents.map((elem, index) => (
                <Box
                  key={index}
                  position="relative"
                  padding={4}
                >
                  {elem?.image ? (
                    <Image
                      src={elem.image}
                      style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <Box boxShadow={'md'} style={{ height: '200px', width: '100%' }}></Box>
                  )}
                  <Box
                    position="absolute"
                    top="0"
                    right="0"
                    m={2}
                    p={2}
                    // backgroundColor="rgba(0, 0, 0, 0.5)"
                    backgroundColor={'blue.400'}
                    color="white"
                    borderRadius="md"
                    textAlign="center"
                  >
                    <Box fontSize="lg" fontWeight="bold">
                      {elem?.startDate?.slice(0, 3)}
                    </Box>
                    <Box fontSize="sm">
                      {/* {elem?.startDate?.slice(4, 6)?.split(',')[0]} */}
                    </Box>
                  </Box>
                  <Panel bodyFill style={{ height: '100%' }}>
                    <Panel className='event-heading' header={elem?.event}
                      onClick={() => navigate(`/event/${elem?.eventId}`)}
                    >
                      <div className='event-calender'>
                        <FaCalendarAlt className='event-calendericon' />
                        {elem?.startDate!=elem?.endDate?<p className='event-date'>{elem?.date}</p>:<p className='event-date'>{elem?.startDate}</p>}
                      </div>
                      <div className='event-calender'>
                        <FaLocationDot className='event-calendericon' />
                        <p className='event-date'>{elem?.location}</p>
                      </div>
                    </Panel>
                  </Panel>
                </Box>
              ))}
            </Grid>
          </Box>

          <Flex justify="center" mt={3}>
            <Button
              marginInline={5}
              marginBottom={10}
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
              onClick={() => navigate('/pastevents')}
            >
              View Past Events
            </Button>

            <Divider />
          </Flex>
        </>}
        <Box mt="auto" w="100%">
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Events;
