import React, { useEffect, useRef } from 'react'
import Header from '../components/Home/Header'
import CallToActionWithIllustration from '../components/Home/Cards'
import SplitScreen from '../components/Home/Projects';
import { Box } from '@chakra-ui/react'
import Events from '../components/Home/Events';
import NewsPage from '../components/Home/News';
import Industry from '../components/Home/Industry';
import Footer from '../components/Home/Footer';
import HomeBanner from '../components/Home/Catch';
import EventsLazy from '../components/Home/EventsLazy';
import { useSelector } from 'react-redux';
import Explore from '../components/Home/Explore';
import HomeMission from '../components/Home/Mission';
import Marquee from '../components/Home/Marquee';

function Home() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])
  // const callToActionRef = useRef(null);
  // const anotherComponentRef = useRef(null);
  const events = useRef(null);


  const pageLoad = useSelector(state => state.client.initialView);


  return (
    <>
      <Box
        position="fixed" top="0" left="0" right="0" zIndex="10" bg="white" boxShadow="md"
      >
        <Header
          scrollToRef={{
            // about: callToActionRef,
            // contact: anotherComponentRef,
            events: events,
          }}
        />
      </Box>
      <Box mt={'100px'} >
        <HomeBanner />
      </Box>
      <Box >
        {/* <CallToActionWithIllustration /> */}
      </Box>
      <Box >
        {/* <SplitScreen /> */}
      </Box>
      {/* <Box >
        {!pageLoad ?
          <Events /> :
          <EventsLazy />
        }
      </Box> */}
      <Box >
        <HomeMission />
      </Box>
      <Box ref={events}>
        <Events />
      </Box>
      {/* <Box >
        <NewsPage />
      </Box> */}
       <Box >
        <Marquee />
      </Box>
      <Box >
        <Industry />
      </Box>
     
      <Box >
        <Explore />
      </Box>
      <Box >
        <Footer />
      </Box>

    </>
  )
}

export default Home
