import {
    Box,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,
  } from '@chakra-ui/react'

import Sidebar from './layout/Sidebar'
import MobileNav from './layout/MobileNav'
  
  const Dashboard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <Sidebar onClose={onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
          <DrawerContent>
            <Sidebar onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          <h4>test</h4>
        </Box>
      </Box>
    )
  }
  
  export default Dashboard
  