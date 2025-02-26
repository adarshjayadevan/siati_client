import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import { Box, Flex, Grid, Heading, Button, VStack, Divider, HStack, Text } from '@chakra-ui/react';
import { Panel } from 'rsuite';
import Footer from '../components/Home/Footer';
import './style.css'
import { useNavigate } from 'react-router-dom';

function PrezProfile({ scrollToRef }) {
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


        <Box  p={8}  pl={'5rem'} bg="white"
         >
            <Box mt={'100px'}>
              <Heading className='main-heading'>Dr. C.G. Krishnadas Nair</Heading>
            </Box>

            <Divider />

            <Box mt={'2rem'} textAlign="justify">
              <Text fontSize={'x-large'} className='profile_para'>Padma Shree awardee Dr.C.G.Krishnadas Nair, an eminent techno craft in the field of aerospace with national and international reputation is the founder of SIATI. He has made significant contributions in aerospace engineering, R&D, education, industry and management. He transformed Hindustan Aeronautics Limited into a globally competent aerospace industry with emphasis on research, design and development, collaborating with National Laboratories, Academia, Indian private industries and international aerospace organizations. He served also as Managing Director of Cochin International Airport Limited (CIAL), the first Non-Metro Private Airport. He served as the Vice Chancellor of MATS University and Chairman governing council of a number of engineering colleges and visiting professor including INAE – AICTE distinguished visiting professor of IIT Chennai. He is the Chancellor of Jain University and Chairman governing council of National Institute of Technology, Calicut. He established International Institute of Aerospace Engineering and Management (IIAEM) first of its kind in India as a collaborative venture between Jain University, SIATI, and leading Aerospace and aviation organizations. He is the Chairman of its Governing Council. He has made significant R&D contributions by indigenous development of high-quality aerospace alloys, composites materials and advanced process technologies and non-destructive testing and evaluation. He led the design and development of Advanced Light helicopters, jet trainer and fighter aircraft. He was actively associated with ISRO in developing advanced materials, structures and process tech for satellite and Launch vehicles and with DRDO for structures and engines for Prithvi and Agni Missiles. He has published over 200 technical / research papers and authored 21 books. He served as President of Aeronautical Society of India and President, Indian Institute of Metals. He served as member Board of several Public, Private and Joint venture companies and research and academic councils of R&D labs and academic institutions. He is founder President of Society of Indian Aerospace and Industries (SIATI) and founder Chairman of Society of Defence Technologies (SODET) and contributed to the growth of private sector participation in aerospace and Defense.</Text>
            </Box>

            <Box mt={'1rem'} mb={'2rem'} textAlign="justify">
              <Text fontSize={'x-large'} className='profile_para'>He has won many National and International Awards. Padma Shree, Scope Award for best Chief Executive, Birla Gold Medal, Indira Priyadarshini Award, National Aeronautical Prize, Vasvik Research Award, Omprakash Bhasin Award, Dr Ambedkar Bharat Shree Award, National Metallurgist Award, Life Time Achievement Award from Indian National Academy of Engineering (INAE) etc are but few of them.</Text>
            </Box>
        </Box>

        <Box mt="auto" w="100%">
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default PrezProfile;
