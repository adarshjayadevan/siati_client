import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'
import { MdEmojiEvents } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { FaRegNewspaper, FaFileAlt  } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { GiShop } from "react-icons/gi";
import NavItem from './NavItem';
import logo from '../../../assets/siati_footer.jpeg';
import './style.css';
import { useNavigate } from 'react-router-dom';

const LinkItems = [
  { name: 'Home', icon: FiHome, link:'/admin' },
  { name: 'Events', icon: MdEmojiEvents, link:'/admin/events' },
  { name: 'Gallery', icon: GrGallery, link:'/admin/gallery' },
  { name: 'Promotions', icon: FaRegNewspaper, link:'/admin/news' },
  { name: 'Exhibitors', icon: GiShop, link:'/admin/exhibitors' },//page not created
  { name: 'Memberships', icon: MdCardMembership, link:'/admin/members' },
  { name: 'Files', icon: FaFileAlt , link:'/admin/files' },
]

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text _hover={{cursor:'pointer'}} onClick={()=>navigate('/admin')} mt={2} className='logo-class' fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <img src={logo}/>
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((elem) => (
        <NavItem key={elem.name} icon={elem.icon} onClick={()=>navigate(elem.link)}>
          {elem.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent;