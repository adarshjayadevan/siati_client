import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [usernameError, setusernameError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setpasswordErr] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/admin');
    }
  }, [token])

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  async function loginUser() {

    if (credentials.username.length == 0) {
      setusernameError('Username Cannot be Empty');
      setUsernameErr(true);
    }
    if (credentials.password.length == 0) {
      setpasswordError('Password Cannot be Empty');
      setpasswordErr(true);
    }
    if (usernameErr || passwordErr) return;
    console.log(credentials);
    await axios.post(`${import.meta.env.VITE_API_URL}/admin/login`, credentials).then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', credentials.username);
      navigate('/admin/')
    }).catch(err => {
      console.log(err);
      if (err.response.data.message == "password incorrect") {
        setpasswordError('Password Incorrect');
        setpasswordErr(true);
      } else if (err.response.data.message == "user does not exist") {
        setusernameError('Username Incorrect');
        setUsernameErr(true);
      }
    })
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      loginUser();
    }
  };


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>SIATI-ADMIN</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input type="email" onChange={(e) => {
                setUsernameErr(false);
                setCredentials({
                  ...credentials,
                  username: e.target.value
                })
              }}
                onKeyPress={handleKeyPress}
              />
              {usernameErr && <p style={{ color: 'red' }}>{usernameError}</p>}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => {
                setpasswordErr(false);
                setCredentials({
                  ...credentials,
                  password: e.target.value
                })
              }}
                onKeyPress={handleKeyPress}
              />
              {passwordErr && <p style={{ color: 'red' }}>{passwordError}</p>}
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={() => loginUser()

                }
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}