
import React, { useEffect, useState } from 'react';
import { Box, VStack, Image, Text, Heading, HStack, Grid, GridItem, Flex, Button } from '@chakra-ui/react';
import { Panel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { Divider } from 'rsuite';
import BEL from '../../assets/exhibitorLogos/bel.jpg';
import BHARATDYNAMICS from '../../assets/exhibitorLogos/bharatdynamics.jpeg';
import COMSYS from '../../assets/exhibitorLogos/comsys.jpg';
import SIKA from '../../assets/exhibitorLogos/sika.jpg';
import SANAUTO from '../../assets/exhibitorLogos/sanauto.jpg';
import SIATI from '../../assets/exhibitorLogos/siati.jpeg';

import _BEL from '../../assets/exhibitorsDocs/bel.pdf';
import _BHARATDYNAMICS from '../../assets/exhibitorsDocs/bharatdynamics.pdf';
import _COMSYS from '../../assets/exhibitorsDocs/comsys.pdf';
import _SANAUTO from '../../assets/exhibitorsDocs/sanauto.pdf';
import _SIKA from '../../assets/exhibitorsDocs/sika.pptx';
import _SIATI from '../../assets/exhibitorsDocs/siati.pptx';
import './Marquee.css';

const Marquee = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    upcoming_events()
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

  function openDoc(arg) {
    if (arg == '1') {
      window.open(_BEL, '_blank');
    } else if (arg == '2') {
      window.open(_BHARATDYNAMICS, '_blank');
    } else if (arg == '3') {
      window.open(_COMSYS, '_blank');
    } else if (arg == '4') {
      window.open(_SIKA, '_blank');
    } else if (arg == '5') {
      window.open(_SANAUTO, '_blank');
    } else if (arg == '6') {
      window.open(_SIATI, '_blank');
    }
  }
  return (
    <Box
      paddingInline={5}
      mt={10}
    >
      {/* <Box
        borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={4}>
        <Heading className='home_events_heading' mb={6}>Members</Heading>
      </Box> */}
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
        <Panel style={{ width: '100%', overflow: 'hidden', height: '175px', marginBottom:'2rem' }}>
          <div className="marquee-row marquee-left-right">
            <div className="marquee-content">
              <img
                // style={{ cursor: 'pointer' }}
                // onClick={() => openDoc('1')}
                src={BEL} alt={'Bharat Electronics'}
              />
              <img
                // style={{ cursor: 'pointer' }}
                // onClick={() => openDoc('2')}
                src={BHARATDYNAMICS} alt={'Bharat Dynamics'}
              />
              <img
                // style={{ cursor: 'pointer' }}
                // onClick={() => openDoc('5')}
                src={SANAUTO} alt={'SAN Auto'}
              />
              <img
                // style={{ cursor: 'pointer' }}
                // onClick={() => openDoc('3')}
                src={COMSYS} alt={'COMSYS'}
              />
              <img
                // style={{ cursor: 'pointer' }}
                // onClick={() => openDoc('4')}
                src={SIKA} alt={'SIKA'}
              />
              
              <img
                // style={{ cursor: 'pointer' }}
                // onClick={() => openDoc('6')}
                src={SIATI} alt={'SIATI'}
              />

              <img
                // style={{ cursor: 'pointer' }}
                // onClick={() => openDoc('1')}
                src={BEL} alt={'Bharat Electronics'}
              />
              <img
                // style={{ cursor: 'pointer' }}
                // onClick={() => openDoc('2')}
                src={BHARATDYNAMICS} alt={'Bharat Dynamics'}
              />
              <img
                // style={{ cursor: 'pointer' }}
                // onClick={() => openDoc('5')}
                src={SANAUTO} alt={'SAN Auto'}
              />
              <img
                // style={{ cursor: 'pointer' }}
                // onClick={() => openDoc('3')}
                src={COMSYS} alt={'COMSYS'}
              />
              <img
                // style={{ cursor: 'pointer' }}
                // onClick={() => openDoc('4')}
                src={SIKA} alt={'SIKA'} />
              <img
                // style={{ cursor: 'pointer' }}
                // onClick={() => openDoc('6')}
                src={SIATI} alt={'SIATI'}
              />
            </div>
          </div>


        </Panel>
        {/* <Flex justify="center" mt={8}>
          <Button
            marginInline={2}
            width={'200px'}
            color={'#000080'}
            fontSize={'large'}
            marginBottom={'1rem'}
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
            onClick={() => navigate('/exhibitors')}
          >
            View All Exhibitors
          </Button>

          <Divider />
        </Flex> */}
      </>}
    </Box>
  );
};

export default Marquee;


