import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import {
  Button,
  Flex,
  Heading,
  Box,
  Grid,
  Text
} from '@chakra-ui/react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Modal } from 'rsuite';
import Footer from '../components/Home/Footer';
import '../components/style.css';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import moment from 'moment';
import Img1 from '../assets/gallery-permanant/1-inauguration-siati.jpg';
import Img2 from '../assets/gallery-permanant/2-Dec1993-Avia India.jpg';
import Img3 from '../assets/gallery-permanant/3-gifas conference.jpg';
import Img4 from '../assets/gallery-permanant/4-iiaem inauguration 1.jpg';
import Img5 from '../assets/gallery-permanant/5-IIAEM-inauguration 2.jpg';
import Img6 from '../assets/gallery-permanant/6-signing MOU with AAA.jpg';
import Img7 from '../assets/gallery-permanant/7-civil Aviation Centinery.jpg';
import Img8 from '../assets/gallery-permanant/8-eco friendly Airports.jpg';
import Img9 from '../assets/gallery-permanant/9-indigenisation-exhibition.jpg';
import Img10 from '../assets/gallery-permanant/10- indigenisation seminar.jpg';
import Img11 from '../assets/gallery-permanant/11- releasee of Vision 2020 journal.jpg';
import Img12 from '../assets/gallery-permanant/12- workshop 1994.jpg';
import Img13 from '../assets/gallery-permanant/13-Presenting SITI Award-2001.jpg';
import Img14 from '../assets/gallery-permanant/14-Presenting SIATI Award - Umesh Patel.jpg';
import Img15 from '../assets/gallery-permanant/15a-vision 2020.jpg';
import Img16 from '../assets/gallery-permanant/15-Seminar on Helicopters.jpg';
import Img17 from '../assets/gallery-permanant/16-UNIDO partnership.jpg';
import Img18 from '../assets/gallery-permanant/17- Seminar on Engine Technology.jpg';
import Img19 from '../assets/gallery-permanant/18-SIATI delegation Paris Airshow.jpg';
import Img20 from '../assets/gallery-permanant/19-siati delegation Singapore Airshow.jpg';
import Img21 from '../assets/gallery-permanant/20-Vision 2030-.jpg';
import Img22 from '../assets/gallery-permanant/2-Dec1993-Avia India.jpg';


function Gallery({ scrollToRef }) {
  const initialRender = useRef(true);
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [permanentImages, setPermanentImages] = useState([{
    event: `inauguration-siati`,
    image: Img1
  }, {
    event: `2-Dec1993-Avia India`,
    image: Img2
  }, {
    event: `3-gifas conference`,
    image: Img3
  }, {
    event: `4-iiaem inauguration 1`,
    image: Img4
  }, {
    event: `5-IIAEM-inauguration 2`,
    image: Img5
  }, {
    event: `6-signing MOU with AAA`,
    image: Img6
  }, {
    event: `7-civil Aviation Centinery`,
    image: Img7
  }, {
    event: `8-eco friendly Airports`,
    image: Img8
  }, {
    event: `9-indigenisation-exhibition`,
    image: Img9
  }, {
    event: `10- indigenisation seminar`,
    image: Img10
  }, {
    event: `11- releasee of Vision 2020 journal`,
    image: Img11
  }, {
    event: `12- workshop 1994`,
    image: Img12
  }, {
    event: `13-Presenting SITI Award-2001`,
    image: Img13
  }, {
    event: `14-Presenting SIATI Award - Umesh Patel`,
    image: Img14
  }, {
    event: `15a-vision 2020`,
    image: Img15
  }, {
    event: `15-Seminar on Helicopters`,
    image: Img16
  }, {
    event: `16-UNIDO partnership`,
    image: Img17
  }, {
    event: `17- Seminar on Engine Technology`,
    image: Img18
  }, {
    event: `18-SIATI delegation Paris Airshow`,
    image: Img19
  }, {
    event: `19-siati delegation Singapore Airshow`,
    image: Img20
  }, {
    event: `20-Vision 2030`,
    image: Img21
  }, {
    event: `21.CM speaking on annual`,
    image: Img22
  }])

  const callToActionRef = useRef(null);
  const anotherComponentRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  useEffect(() => {
    getGallery();
  }, []);


  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      getGallery();
    }
  }, [page]);

  const handleInfiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      if (!isLastPage) {
        setPage(prev => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, [handleInfiniteScroll]);

  async function getGallery() {
    setLoader(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/${page}/9`);
      setGallery(prev => [...prev, ...res.data.data]);
      initialRender.current = true;
      setIsLastPage(res.data.lastPage);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  }


  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // const handleOpen = index => {
  //   setSelectedIndex(index);
  //   setOpen(true);
  // };
  const handleOpen = (index, permanent = false) => {
    setSelectedIndex(index);
    setIsPermanent(permanent);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // const handlePrevImage = () => {
  //   setSelectedIndex(prevIndex => (prevIndex - 1 + gallery.length) % gallery.length);
  // };

  // const handleNextImage = () => {
  //   setSelectedIndex(prevIndex => (prevIndex + 1) % gallery.length);
  // };

  const handlePrevImage = () => {
    setSelectedIndex(prevIndex => (prevIndex - 1 + (isPermanent ? permanentImages.length : gallery.length)) % (isPermanent ? permanentImages.length : gallery.length));
  };

  const handleNextImage = () => {
    setSelectedIndex(prevIndex => (prevIndex + 1) % (isPermanent ? permanentImages.length : gallery.length));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (event.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrevImage, handleNextImage]);
  const [isPermanent, setIsPermanent] = useState(false);
  const [isPermanentView, setIsPermanentView] = useState(false);


  return (
    <>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Box
          position="fixed" top="0" left="0" right="0" zIndex="10" bg="white" boxShadow="md"
        >
          <Header scrollToRef={{
            about: callToActionRef,
            contact: anotherComponentRef,
          }} />
        </Box>
        <Flex
          mt={'100px'}
          w={'full'}
          h={'25vh'}
          opacity={0.5}
          backgroundImage={
            'url(https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600)'
          }
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
        >
          <Heading color={'black'} p={5} flex="1">
            Gallery
          </Heading>
        </Flex>

        {/* <Box p={8}>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={6}
          >
            {gallery.map((elem, index) => (
              <Box
                key={index}
                position="relative"
                _hover={{
                  cursor: 'pointer'
                }}
              >
                <Box
                  as="img"
                  src={elem.image}
                  style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                  onClick={() => handleOpen(index)}
                />
                <Text
                  position="absolute"
                  bottom={0}
                  width="100%"
                  textAlign="center"
                  color="white"
                  backgroundColor="rgba(0, 0, 0, 0.5)"
                  padding={2}
                >
                  {elem.title}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
        {loader &&
          <Box display="flex" justifyContent="center" alignItems="center">
            <Oval
              visible={true}
              height="40"
              width="40"
              color="#4c90dd"
              secondaryColor='#000080'
              ariaLabel="oval-loading"
            />
          </Box>}

        <Modal
          open={open}
          onClose={handleClose}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Modal.Header>
            <Modal.Title>{gallery[selectedIndex]?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ position: 'relative', padding: 0 }}>
            {selectedIndex !== null && (
              <Box position="relative">
                <img
                  src={gallery[selectedIndex].image}
                  style={{ width: '500px', height: '450px', display: 'block' }}
                  alt="Selected"
                />
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  backgroundColor="rgba(0, 0, 0, 0.5)"
                  color="white"
                  p={3}
                  textAlign="center"
                >
                  {moment(gallery[selectedIndex]?.date).format('LL')}
                </Box>
                <Box
                  position="absolute"
                  top="50%"
                  left="0"
                  transform="translateY(-50%)"
                  onClick={handlePrevImage}
                  cursor="pointer"
                  p={3}
                >
                  <FaArrowAltCircleLeft size="2em" color="white" />
                </Box>
                <Box
                  position="absolute"
                  top="50%"
                  right="0"
                  transform="translateY(-50%)"
                  onClick={handleNextImage}
                  cursor="pointer"
                  p={3}
                >
                  <FaArrowAltCircleRight size="2em" color="white" />
                </Box>
              </Box>
            )}
          </Modal.Body>
        </Modal> */}


        <Box minH="100vh" display="flex" flexDirection="column">
          <Box
            position="fixed" top="0" left="0" right="0" zIndex="10" bg="white" boxShadow="md"
          >
            <Header scrollToRef={{
              about: callToActionRef,
              contact: anotherComponentRef,
            }} />
          </Box>

          <Box p={5}>
            <Box borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={4}>
              <Heading className='home_events_heading'>Important Photos of Past Events</Heading>
            </Box>
          </Box>
          <Box p={8}>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
              {permanentImages.map((elem, index) => (
                <Box key={index} onClick={() => handleOpen(index, true)}>
                  <img src={elem.image} alt={elem.event} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                  <Text>{elem.event}</Text>
                </Box>
              ))}
            </Grid>
          </Box>

          <Box p={5}>
            <Box borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={4}>
              <Heading className='home_events_heading'>Photos of Latest Events</Heading>
            </Box>
          </Box>
          <Box p={8}>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
              {gallery.map((elem, index) => (
                <Box key={index} onClick={() => handleOpen(index, false)}>
                  <img src={elem.image} alt={elem.title} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                  <Text>{elem.title}</Text>
                </Box>
              ))}
            </Grid>
          </Box>

          {loader && <Box>Loading...</Box>}

          <Modal
            open={open}
            onClose={handleClose}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Modal.Header>
              {/* <Modal.Title>{gallery[selectedIndex]?.title}</Modal.Title> */}
            </Modal.Header>
            <Modal.Body style={{ position: 'relative', padding: 0 }}>
              {selectedIndex !== null && (
                <Box position="relative">
                  <img
                    src={(isPermanent ? permanentImages[selectedIndex].image : gallery[selectedIndex].image)}
                    style={{ width: '500px', height: '450px', display: 'block' }}
                    alt="Selected"
                  />
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    backgroundColor="rgba(0, 0, 0, 0.5)"
                    color="white"
                    p={3}
                    textAlign="center"
                  >
                    {/* {moment(gallery[selectedIndex]?.date).format('LL')} */}
                  </Box>
                  <Box
                    position="absolute"
                    top="50%"
                    left="0"
                    transform="translateY(-50%)"
                    onClick={handlePrevImage}
                    cursor="pointer"
                    p={3}
                  >
                    <FaArrowAltCircleLeft size="2em" color="white" />
                  </Box>
                  <Box
                    position="absolute"
                    top="50%"
                    right="0"
                    transform="translateY(-50%)"
                    onClick={handleNextImage}
                    cursor="pointer"
                    p={3}
                  >
                    <FaArrowAltCircleRight size="2em" color="white" />
                  </Box>
                </Box>
              )}
            </Modal.Body>
          </Modal>

        </Box>

        <Box mt="auto" w="100%">
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Gallery;
