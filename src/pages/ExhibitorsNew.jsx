import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Home/Header';
import {
    Box,
    Grid,
    Text,
    Heading,
} from '@chakra-ui/react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Modal } from 'rsuite';
import Footer from '../components/Home/Footer';
import '../components/style.css';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

function ExhibitorsNew({ scrollToRef }) {
    const [exhibitors, setExhibitors] = useState([]);
    const [loader, setLoader] = useState(false);
    const [gallery, setGallery] = useState([]); // Store current exhibitor's images
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        getExhibitors();
    }, []);

    async function getExhibitors() {
        setLoader(true);
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/exhibitors`);
            setExhibitors(res.data.data);
            setLoader(false);
        } catch (err) {
            console.log(err);
            setLoader(false);
        }
    }

    const handleOpen = (images, index) => {
        setGallery(images); // Set gallery to the clicked exhibitor's images array
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

                {loader ? (
                    <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
                        <Oval
                            visible={true}
                            height="40"
                            width="40"
                            color="#4c90dd"
                            secondaryColor='#000080'
                            ariaLabel="oval-loading"
                        />
                    </Box>
                ) : (
                    <Box mt={'100px'} p={5}
                    //  textAlign="center"
                    >
                        <Box borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={4}>
                            <Heading className='home_events_heading' mb={6}>Digital Exhibitors</Heading>
                        </Box>
                        {exhibitors.map((elem) => (
                            <Box key={elem._id} mt={5} id={elem._id}>
                                <Text className='_heading'>{elem.event}</Text>
                                <Grid
                                    templateColumns={{
                                        base: "1fr",
                                        sm: elem.exhibitors.length === 1 ? "1fr" : "repeat(2, 1fr)",
                                        md: `repeat(${Math.min(elem.exhibitors.length, 3)}, 1fr)`,
                                        lg: `repeat(${Math.min(elem.exhibitors.length, 4)}, 1fr)`,
                                    }}
                                    justifyContent="center"
                                    alignItems="center"
                                    gap={6}
                                >
                                    {elem.exhibitors.map((item, index) => (
                                        <Box
                                            key={index}
                                            marginInline={'auto'}
                                            position="relative"
                                            _hover={{
                                                cursor: 'pointer',
                                            }}
                                            boxShadow={'md'}
                                        >
                                            <Box
                                                as="img"
                                                src={item.images[0].image}
                                                style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                                                onClick={() => handleOpen(item.images, 0)}
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
                                                {item.exhibitor}
                                            </Text>
                                        </Box>
                                    ))}
                                </Grid>
                            </Box>
                        ))}
                    </Box>
                )}

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
                                    top="50%"
                                    left="0"
                                    transform="translateY(-50%)"
                                    onClick={handlePrevImage}
                                    cursor="pointer"
                                    p={3}
                                >
                                    <FaArrowAltCircleLeft className='toggle-arrow' size="2em" color="#070740" />
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
                                    <FaArrowAltCircleRight className='toggle-arrow' size="2em" color="#070740" />
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

export default ExhibitorsNew;
