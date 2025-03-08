import {
  Container,
  Header,
  Nav,
  Footer,
  Sidebar,
  Input,
  InputGroup,
  VStack
} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import 'rsuite/dist/rsuite.min.css';
import logo from '../../assets/siati.jpeg';
// import logo from '../../assets/fifa.jpeg';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Image,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initialViewToggle } from '../../redux/slice';

const Navbar = ({ active, onSelect, scrollToRef, ...props }) => {
  const pageLoad = useSelector(state => state.client.initialView)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleScrollToRef = (section) => {
    const ref = scrollToRef[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      dispatch(initialViewToggle({}));
    }
  };
  const handleSmoothScroll = section => {
    if(!pageLoad){
      navigate(`/${section}`)
    }else{
      handleScrollToRef(`${section}`)
    }
  }
  
  return (
    <Nav style={{marginTop:'10px'}} {...props} activeKey={active} onSelect={onSelect}>
      <Nav.Item className='navmenu' eventKey="home" onClick={()=>navigate('/')}>Home</Nav.Item>
      <Nav.Item className='navmenu' eventKey="about" onClick={()=>navigate('/about')}>About Us</Nav.Item>
      <Nav.Item className='navmenu' eventKey="managing" onClick={()=>navigate('/management')}>Governing Council</Nav.Item>
      <Nav.Item className='navmenu' eventKey="membership" onClick={()=>navigate('/membership')}>Membership</Nav.Item>
      {/* <Nav.Item className='navmenu' eventKey="events" onClick={()=>handleSmoothScroll('events')}>Events</Nav.Item> */}
      <Nav.Item className='navmenu' eventKey="events" onClick={()=>navigate('/events')}>Events</Nav.Item>
      <Nav.Item className='navmenu' eventKey="objectives" onClick={()=>navigate('/objectives')}>Objectives/Activities</Nav.Item>
      <Nav.Item className='navmenu' eventKey="achievements" onClick={()=>navigate('/achievements')}>Achievements</Nav.Item>
      <Nav.Item className='navmenu' eventKey="awards" onClick={()=>navigate('/awards')}>Awards</Nav.Item>
      <Nav.Item className='navmenu' eventKey="exhibitors" onClick={()=>navigate('/exhibitors')}>Promotions</Nav.Item>
      <Nav.Item className='navmenu' eventKey="gallery" onClick={()=>navigate('/gallery')}>Gallery</Nav.Item>
      {/* <Nav.Item className='navmenu' eventKey="contact" onClick={() => handleScrollToRef('contact')}>Contact</Nav.Item> */}
      <Nav.Item className='navmenu' eventKey="contact" onClick={()=>navigate('/contact')}>Contact</Nav.Item>
      {/* <Nav.Item className='navmenu' eventKey="services" onClick={()=>navigate('/services')}>Services</Nav.Item> */}
      {/* <Nav.Item eventKey={"search"} className='navsearch'>
        <InputGroup inside>
          <Input />
          <InputGroup.Button>
            <SearchIcon />
          </InputGroup.Button>
        </InputGroup>
      </Nav.Item> */}
    </Nav>
  );
};

const MobileNavbar = ({ active, onSelect, scrollToRef, ...props }) => {
  const pageLoad = useSelector(state => state.client.initialView)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleScrollToRef = (section) => {
    const ref = scrollToRef[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      dispatch(initialViewToggle({}));
    }
  };
  
  const handleSmoothScroll = section => {
    if(!pageLoad){
      navigate(`/${section}`)
    }else{
      handleScrollToRef(`${section}`)
    }
  }
  return (
    <VStack spacing={4} align="stretch">
      <Text className='mobile-heading'>GATEWAY TO INDIAN AEROSPACE INDUSTRIES</Text>
      <Nav {...props} activeKey={active} onSelect={onSelect} vertical>
        {/* <Nav.Item eventKey={"search"}>
          <InputGroup inside>
            <Input />
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </Nav.Item> */}
        <Nav.Item eventKey="home" onClick={()=>navigate('/')}>Home</Nav.Item>
        <Nav.Item eventKey="about" onClick={()=>navigate('/about')}>About Us</Nav.Item>
        <Nav.Item eventKey="managing" onClick={()=>navigate('/management')}>Governing Council</Nav.Item>
        <Nav.Item eventKey="membership" onClick={()=>navigate('/membership')}>Membership</Nav.Item>
        {/* <Nav.Item eventKey="events" onClick={()=>handleSmoothScroll('events')}>Events</Nav.Item> */}
        <Nav.Item eventKey="events" onClick={()=>navigate('/events')}>Events</Nav.Item>
        <Nav.Item eventKey="objectives" onClick={()=>navigate('/objectives')}>Objectives/Activities</Nav.Item>
        <Nav.Item eventKey="achievements" onClick={()=>navigate('/achievements')}>Achievements</Nav.Item>
        <Nav.Item eventKey="awards">Awards</Nav.Item>
        <Nav.Item eventKey="exhibitors" onClick={()=>navigate('/exhibitors')}>Promotions</Nav.Item>
        <Nav.Item eventKey="gallery" onClick={()=>navigate('/gallery')}>Gallery</Nav.Item>
        <Nav.Item eventKey="contact" onClick={()=>navigate('/contact')}>Contact</Nav.Item>
        {/* <Nav.Item eventKey="services" onClick={()=>navigate('/services')}>Services</Nav.Item> */}
      </Nav>
    </VStack>

  );
};

function HeaderComp({ scrollToRef }) {
  const [active, setActive] = useState('about');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActive('home');
    else if (path === '/about') setActive('about');
    else if (path === '/gallery') setActive('gallery');
    else if (path === '/events') setActive('events');
    else if (path === '/membership') setActive('membership');
    else if (path === '/management') setActive('managing');
    else if (path === '/trustees') setActive('managing');
    else if (path === '/contact') setActive('contact');
    else if (path === '/achievements') setActive('achievements');
    else if (path === '/awards') setActive('awards');
    else if (path === '/exhibitors') setActive('exhibitors');
    else if (path === '/services') setActive('services');
    else if (path === '/pastevents') setActive('events');
    else if (path === '/objectives') setActive('objectives');
    else if (path.includes('/event')) setActive('events'); 
    else setActive('');
  }, [location.pathname]);
  
  return (
    <>
      <Box display={{ base: 'block', md: 'none' }} p={4}>
        <Flex justify="space-between" align="center">
          <Image onClick={()=>navigate('/')} src={logo} boxSize="50px" />
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            onClick={onOpen}
            variant="outline"
          />
        </Flex>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <MobileNavbar active={active} onSelect={setActive} appearance="subtle" scrollToRef={scrollToRef} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      <Box display={{ base: 'none', md: 'block' }}>
        <Container>
          <Sidebar><img onClick={()=>navigate('/')} className='logo' style={{marginLeft:'2rem'}} src={logo} alt="Logo" /></Sidebar>
          <Container>
            <Header className='siati-heading'>Society of Indian Aerospace Technologies & Industries</Header>
            <Footer>
              <Navbar active={active} onSelect={setActive} appearance="subtle" scrollToRef={scrollToRef}/>
            </Footer>
          </Container>
        </Container>
      </Box>
    </>
  );
}

export default HeaderComp;
