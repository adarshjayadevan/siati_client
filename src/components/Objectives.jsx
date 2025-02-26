import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Avatar,
    Wrap,
    WrapItem,
    HStack
} from '@chakra-ui/react';
import formationImg from '../assets/formation.jpg';
import quoteImg from '../assets/Quote.jpg'
import mgkMenon from '../assets/mgkmenon.jpg';
import mgkMenon2 from '../assets/menon_mgk.jpg';

import { useState } from 'react';
import './About.css';
import { MdOutlineDoubleArrow } from 'react-icons/md';

export default function Objectives() {


    return (
        <>
            <Box p={5} position="relative">
                <Text
                    position="absolute"
                    top={0}
                    left="10%"
                    marginTop={'0.5%'}
                    backgroundColor={'white'}
                    cursor="pointer"
                    color="#686f8c"
                    fontSize="lg"
                >
                    Awareness Creation
                </Text>
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>
                    <Flex flex={1} borderRadius="0">
                        <Image
                            p={5}
                            alt={'Formation Image'}
                            objectFit={'fit'}
                            src={'https://preview.redd.it/fl6ax0n1o7961.jpg?auto=webp&s=0b1e463b674b13d8f4ea2876f29f51f883b9fc61'}
                            width="100%"
                            height="600px"
                            borderRadius={0}
                        />
                    </Flex>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
                                <Text
                                    as={'span'}
                                    color={'#000080'}
                                >
                                    Awareness Creation
                                </Text>
                            </Heading>
                            {/* <Text textAlign={'justify'} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                Formation of SIATI was on the initiative of Dr. C.G. Krishnadas Nair, then Managing Director of Hindustan Aeronautics Limited, Bangalore. SIATI was founded on 9th December 1991. On receiving the National Aeronautical Prize (constituted by Aeronautical Society of India, Aeronautics R&D Board, Ministry of Defence) for outstanding fundamental and applied work in Aeronautical Science & Technology, Dr Krishnadas Nair set apart the cash prize received for the promotion of SIATI. After discussion with a number of his colleagues in the Aerospace industry, and R&D, SIATI was founded complimentary to Aeronautical Society of India to give focused attention to the growth of aerospace industry through private industry participation, MSME networking with Large Private Industries & PSUs as well as Industry – R&D co-operation and International Co-operation.
                            </Text> */}
                            <Box
                                height="100%"
                                // borderWidth="1px"
                                // borderRadius="lg"
                                overflow="hidden"
                                p={4}
                            // boxShadow="md"
                            >
                                {[
                                    "Relevant conferences, seminars and conventions that SIATI conducts on a regular basis.",
                                    "Providing periodic networking opportunities to members to interact with their peers and experts in domestic and international aerospace business.",
                                    "Arranging interactions with visiting Aerospace business delegations from other countries.",
                                    "Offering guidance on necessary registrations, standards and certifications required in Aerospace equipment manufacturing business.",
                                    "Facilitating interactions between industry, R&D organizations, and Academia to promote technology and business development.",
                                    "Encourage and support Educational institutions and Universities to offer courses in Aerospace.",
                                    "Creating a platform for developing a consortium to share expertise and costly processing facilities to facilitate enhanced sourcing from India."
                                ].map((item, index) => (
                                    <HStack key={index} spacing={2} mb={2} alignItems="center">
                                        <MdOutlineDoubleArrow fontSize={'lg'} />
                                        <Text color={'gray.500'} fontSize="md">
                                            {item}
                                        </Text>
                                    </HStack>
                                ))}
                            </Box>
                        </Stack>
                    </Flex>
                </Stack>
            </Box>

            <Box p={5} position="relative">
                <Text
                    position="absolute"
                    top={0}
                    right="10%"
                    marginTop={'0.5%'}
                    backgroundColor={'white'}
                    cursor="pointer"
                    color="#686f8c"
                    fontSize="lg"
                >
                    Broadcast & Facilitation
                </Text>
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
                                <Text color={'blue.400'} as={'span'}>
                                    Broadcast & Facilitation
                                </Text>{' '}
                            </Heading>
                            {[
                                "Taking SIATI members as Indian delegation to international aerospace events like air shows, technology congress, conferences etc.",
                                "Organizing India Pavilion in major domestic and international Air shows for SIATI members to display their products and capabilities at reasonable rates.",
                               
                            ].map((item, index) => (
                                <HStack key={index} spacing={2} mb={2} alignItems="center">
                                    <MdOutlineDoubleArrow fontSize={'lg'} />
                                    <Text color={'gray.500'} fontSize="md">
                                        {item}
                                    </Text>
                                </HStack>
                            ))}
                        </Stack>
                    </Flex>
                    <Flex  flex={1} borderRadius="0" direction="column"
                    >
                        <Box mt={30} textAlign="center">
                            {[
                                "Facilitate International Co-operations.",
                                "Publishing Aeromag - Bimonthly Journal dedicate to Aerospace address.",
                                "Institute SIATI Awards and scholarship for students.",
                                "Assist graduates in skill development through Projects with Industries."
                            ].map((item, index) => (
                                <HStack key={index} spacing={2} mb={5} alignItems="center">
                                    <MdOutlineDoubleArrow fontSize={'lg'} color={'gray.500'}/>
                                    <Text color={'gray.500'} fontSize="md">
                                        {item}
                                    </Text>
                                </HStack>
                            ))}
                        </Box>

                    </Flex>
                </Stack>
            </Box>

            <Box p={5} position="relative">
                <Text
                    position="absolute"
                    top={0}
                    left="10%"
                    marginTop={'0.5%'}
                    backgroundColor={'white'}
                    cursor="pointer"
                    color="#686f8c"
                    fontSize="lg"
                >
                    Effective Representation
                </Text>
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>
                    <Flex flex={1} borderRadius="0">
                        <Image
                            alt={'Formation Image'}
                            p={5}
                            objectFit={'fit'}
                            src={'https://preview.redd.it/fl6ax0n1o7961.jpg?auto=webp&s=0b1e463b674b13d8f4ea2876f29f51f883b9fc61'}
                            width="100%"
                            height="100%"
                            borderRadius={0}
                        />
                    </Flex>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
                                <Text
                                    as={'span'}
                                    color={'#000080'}
                                >
                                    Effective Representation
                                </Text>{' '}
                            </Heading>
                            <Box
                                height="100%"
                                // borderWidth="1px"
                                // borderRadius="lg"
                                overflow="hidden"
                                p={4}
                            // boxShadow="md"
                            >
                                {[
                                    "Organizing interactions and deliberations between Government bodies, policy makers, regulatory authorities and controlling agencies for SIATI members to bring their concerns, problems & suggestions.",
                                    "Providing inputs to Ministry of Civil aviation, Ministry of Defence, DGCA, DGAQA, CEMILAC etc regarding policies on Procurement, Offset, R&D etc. and also by SIATI representation in Government constituted committees and expert bodies, as well as through SIATI’s Member Empowerment Committees."
                                ].map((item, index) => (
                                    <HStack key={index} spacing={2} mb={2} alignItems="center">
                                        <MdOutlineDoubleArrow fontSize={'lg'} color='gray.500'/>
                                        <Text color={'gray.500'} fontSize="md">
                                            {item}
                                        </Text>
                                    </HStack>
                                ))}
                            </Box>
                        </Stack>
                    </Flex>
                </Stack>
            </Box>

            <Box p={5} position="relative">
                <Text
                    position="absolute"
                    top={0}
                    right="10%"
                    marginTop={'0.5%'}
                    backgroundColor={'white'}
                    cursor="pointer"
                    color="#686f8c"
                    fontSize="lg"
                >
                    R&D, Academia, Training & Skill Development
                </Text>
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
                                <Text color={'blue.400'} as={'span'}>
                                    R&D, Academia, Training & Skill Development
                                </Text>{' '}
                            </Heading>
                            {[
                                "Organising Interactive seminars and workshops for SIATI members with R&D organizations and Educational / Training Institutes.",
                                "Promote R&D for development of aerospace materials, components and systems with relevant technologies through member industries and their collaboration with R&D laboratories, academic institutions and Design and Production departments of DPSUs and other Customers.",
                                "Conducting on a ‘need basis’ training & skill development programs in Materials, Processes, Design, Testing, Manufacture, Quality Assurance, Customer support, Maintenance, IT Tools and Technique etc., and Effective Management.",
                                "Organizing workshops and training programs for Quality Certifications like ASA9100, DGAQA, and CEMILAC certifications.",
                                "Encourage and support educational institutions and Universities to offer courses in Aerospace."
                               
                            ].map((item, index) => (
                                <HStack key={index} spacing={2} mb={2} alignItems="center">
                                    <MdOutlineDoubleArrow fontSize={'lg'} />
                                    <Text color={'gray.500'} fontSize="md">
                                        {item}
                                    </Text>
                                </HStack>
                            ))}
                        </Stack>
                    </Flex>
                    <Flex flex={1} borderRadius="0">
                        <Image
                            alt={'Formation Image'}
                            p={5}
                            objectFit={'fit'}
                            src={'https://preview.redd.it/fl6ax0n1o7961.jpg?auto=webp&s=0b1e463b674b13d8f4ea2876f29f51f883b9fc61'}
                            width="100%"
                            height="100%"
                            borderRadius={0}
                        />
                    </Flex>
                </Stack>
            </Box>

            <Box p={5} position="relative">
                <Text
                    position="absolute"
                    top={0}
                    left="10%"
                    marginTop={'0.5%'}
                    backgroundColor={'white'}
                    cursor="pointer"
                    color="#686f8c"
                    fontSize="lg"
                >
                    Encouragement and Recognition
                </Text>
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>
                    <Flex flex={1} borderRadius="0">
                        <Image
                            alt={'Formation Image'}
                            p={5}
                            objectFit={'fit'}
                            src={'https://preview.redd.it/fl6ax0n1o7961.jpg?auto=webp&s=0b1e463b674b13d8f4ea2876f29f51f883b9fc61'}
                            width="100%"
                            height="500px"
                            borderRadius={0}
                        />
                    </Flex>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
                                <Text as={'span'}
                                    color={'#000080'}
                                >
                                    Encouragement and Recognition
                                </Text>{' '}
                            </Heading>
                            <Box
                                height="100%"
                                // borderWidth="1px"
                                // borderRadius="lg"
                                overflow="hidden"
                                p={4}
                            // boxShadow="md"
                            >
                                {[
                                    "Organizing interactions and deliberations between Government bodies, policy makers, regulatory authorities and controlling agencies for SIATI members to bring their concerns, problems & suggestions.",
                                    "Providing inputs to Ministry of Civil aviation, Ministry of Defence, DGCA, DGAQA, CEMILAC etc regarding policies on Procurement, Offset, R&D etc. and also by SIATI representation in Government constituted committees and expert bodies, as well as through SIATI’s Member Empowerment Committees."
                                ].map((item, index) => (
                                    <HStack key={index} spacing={2} mb={2} alignItems="center">
                                        <MdOutlineDoubleArrow color={'gray.500'}  fontSize={50}/>
                                        <Text color={'gray.500'} fontSize="md">
                                            {item}
                                        </Text>
                                    </HStack>
                                ))}
                            </Box>
                        </Stack>
                    </Flex>
                </Stack>
            </Box>
        </>
    );
}
