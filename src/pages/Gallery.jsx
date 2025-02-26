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

function Gallery({ scrollToRef }) {
  const initialRender = useRef(true);
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

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

  const handleOpen = index => {
    setSelectedIndex(index);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handlePrevImage = () => {
    setSelectedIndex(prevIndex => (prevIndex - 1 + gallery.length) % gallery.length);
  };

  const handleNextImage = () => {
    setSelectedIndex(prevIndex => (prevIndex + 1) % gallery.length);
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

        <Box p={8}>
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
        </Modal>

        <Box mt="auto" w="100%">
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Gallery;
