
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

import brahmos from '../../assets/exhibitorLogos/brahmos.jpg';
import godrej from '../../assets/exhibitorLogos/godrej.png';
import isro from '../../assets/exhibitorLogos/isro.png';
import karnataka from '../../assets/exhibitorLogos/karnataka-government.png';
import dassaultsys from '../../assets/exhibitorLogos/dassaultsys.png';
import ABI from '../../assets/exhibitorLogos/ABI.jpg';
import ADI from '../../assets/exhibitorLogos/ADI.png';
import aequs2 from '../../assets/exhibitorLogos/aequs2.png';
import aerospaceengrs from '../../assets/exhibitorLogos/aerospaceengrs.png';
import alphatocol from '../../assets/exhibitorLogos/alpha-tocol-.png';
import AnanthTech from '../../assets/exhibitorLogos/Ananth-Technologies-.jpg';
import Ankit from '../../assets/exhibitorLogos/ankit.jpg';
import ArvindChemi from '../../assets/exhibitorLogos/arvind_chemi.png';
import avdel from '../../assets/exhibitorLogos/avdel.png';
import avioil from '../../assets/exhibitorLogos/avioil.jpg';
import beanalytics from '../../assets/exhibitorLogos/beanalytics.png';
import bevelgears from '../../assets/exhibitorLogos/bevel-gears-Logo.jpg';
import bliss from '../../assets/exhibitorLogos/bliss.png';
import chennaimetco from '../../assets/exhibitorLogos/chennai metco.jpg';
import dcxsys from '../../assets/exhibitorLogos/dcxsys.png';
import delopt from '../../assets/exhibitorLogos/delopt.png';
import dynamatics from '../../assets/exhibitorLogos/dynamatics.png';
import edstech from '../../assets/exhibitorLogos/edstech.jpg';
import expleo from '../../assets/exhibitorLogos/expleo.jpg';
import genser from '../../assets/exhibitorLogos/genser.jpg';
import gknaero from '../../assets/exhibitorLogos/gkn aero.png';
import gowra from '../../assets/exhibitorLogos/gowra.png';
import INDO_MIM from '../../assets/exhibitorLogos/INDO-MIM.png';
import kspace from '../../assets/exhibitorLogos/kspace.png';
import lmw from '../../assets/exhibitorLogos/lmw.png';
import mak from '../../assets/exhibitorLogos/mak.png';
import menonandmenon from '../../assets/exhibitorLogos/menon and menon.png';
import micronel from '../../assets/exhibitorLogos/micronel.jpg';
import msalogo from '../../assets/exhibitorLogos/MSA-LOGO.jpg';
import nandanlogo from '../../assets/exhibitorLogos/Nandanlogo.jpg';
import nauticalwings from '../../assets/exhibitorLogos/nautical_wings_logo.jpg';
import NIlogo from '../../assets/exhibitorLogos/NIlogo.png';
import pushpak from '../../assets/exhibitorLogos/pushpak-.png';
import slntech from '../../assets/exhibitorLogos/sln tech.jpg';
import TechEralogo1 from '../../assets/exhibitorLogos/Tech-Era-logo1.png';
import unimech from '../../assets/exhibitorLogos/unimech.jpg';

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
        <Panel style={{ width: '100%', overflow: 'hidden', height: '175px', marginBottom: '2rem' }}>
          <div className="marquee-row marquee-left-right">
            <div className="marquee-content">
              <img
                src={BEL} alt={'Bharat Electronics'}
              />
              <img
                src={BHARATDYNAMICS} alt={'Bharat Dynamics'}
              />
              <img
                src={SANAUTO} alt={'SAN Auto'}
              />
              <img
                src={COMSYS} alt={'COMSYS'}
              />
              <img
                src={SIKA} alt={'SIKA'}
              />

              <img
                src={SIATI} alt={'SIATI'}
              />

              <img
                src={brahmos} alt={'Brahmos'}
              />
              <img
                src={godrej} alt={'Godrej'}
              />
              <img
                src={isro} alt={'ISRO'}
              />
              <img
                src={karnataka} alt={'KARNATAKA GOVT.'}
              />
              <img
                src={dassaultsys} alt={'dassault systemes'} />
              <img
                src={ABI} alt={'ABI'}
              />
              <img
                src={ADI} alt={'ADI'}
              />
              <img
                src={aequs2} alt={'aequs2'}
              />
              <img
                src={aerospaceengrs} alt={'aerospaceengrs'}
              />
              <img
                src={alphatocol} alt={'alphatocol'}
              />
              <img
                src={AnanthTech} alt={'AnanthTech'}
              />
              <img
                src={Ankit} alt={'Ankit'}
              />
              <img
                src={ArvindChemi} alt={'ArvindChemi'}
              />
              <img
                src={avdel} alt={'avdel'}
              />
              <img
                src={avioil} alt={'avioil'}
              />
              <img
                src={beanalytics} alt={'beanalytics'}
              />
              <img
                src={bevelgears} alt={'bevelgears'}
              />
              <img
                src={bliss} alt={'bliss'}
              />
              <img
                src={chennaimetco} alt={'chennaimetco'}
              />
              <img
                src={dcxsys} alt={'dcxsys'}
              />
              <img
                src={delopt} alt={'delopt'}
              />
              <img
                src={dynamatics} alt={'dynamatics'}
              />
              <img
                src={edstech} alt={'edstech'}
              />
              <img
                src={expleo} alt={'expleo'}
              />
              <img
                src={genser} alt={'genser'}
              />
              <img
                src={gknaero} alt={'gknaero'}
              />
              <img
                src={gowra} alt={'gowra'}
              />
              <img
                src={INDO_MIM} alt={'INDO_MIM'}
              />
              <img
                src={kspace} alt={'kspace'}
              />
              <img
                src={lmw} alt={'lmw'}
              />
              <img
                src={mak} alt={'mak'}
              />
              <img
                src={menonandmenon} alt={'menonandmenon'}
              />
              <img
                src={micronel} alt={'micronel'}
              />
              <img
                src={msalogo} alt={'msalogo'}
              />
              <img
                src={nandanlogo} alt={'nandanlogo'}
              />
              <img
                src={nauticalwings} alt={'nauticalwings'}
              />
              <img
                src={NIlogo} alt={'NIlogo'}
              />
              <img
                src={pushpak} alt={'pushpak'}
              />
              <img
                src={slntech} alt={'slntech'}
              />
              <img
                src={TechEralogo1} alt={'TechEralogo1'}
              />
              <img
                src={unimech} alt={'unimech'}
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


