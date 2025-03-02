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
import { CgArrowLongRightC } from "react-icons/cg";

import { useState } from 'react';
import './About.css';
import { MdOutlineDoubleArrow } from 'react-icons/md';

export default function Objectives() {


    return (
        <>
            <Box p={5} position="relative">
                {/* <Text
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
                </Text> */}
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>

                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} >
                            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
                                <Text
                                    as={'span'}
                                    color={'#000080'}
                                >
                                    Create awareness among the members on the business opportunities, industry requirements and technology trends by
                                </Text>
                            </Heading>
                            <Box
                                height="100%"
                                overflow="hidden"
                                p={4}
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

            {/* <Box p={5} position="relative">
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
            </Box> */}

            <Box p={5} position="relative">
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>

                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} >
                            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
                                <Text
                                    as={'span'}
                                    color={'blue.400'}
                                >
                                    Showcase the collective strength in terms of capabilities, products and services of Indian Aerospace companies in the domestic and international forums by
                                </Text>
                            </Heading>
                            <Box
                                height="100%"
                                overflow="hidden"
                                p={4}
                            >
                                {[
                                    "Taking SIATI members as Indian delegation to international aerospace events like air shows, technology congress, conferences etc.",
                                    "Organizing India Pavilion in major domestic and international Air shows for SIATI members to display their products and capabilities at reasonable rates.",
                                    "Publishing SIATI Aerospace Directory which carries the details of SIATI member companies for agencies looking for products and services to find them easily.",
                                    "By giving necessary details of SIATI members in SIATI web site to get noticed by those who would like to do business with Indian Aerospace companies, source products and services or tie up with Indian companies etc.",
                                    "Facilitate International Co-operations.",
                                    "Publishing Aeromag - Bimonthly Journal dedicate to Aerospace address.",
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
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>

                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} >
                            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
                                <Text
                                    as={'span'}
                                    color={'#000080'}
                                >
                                    Effectively represent the Indian Aerospace Industry in all appropriate forums for its healthy growth by
                                </Text>
                            </Heading>
                            <Box
                                height="100%"
                                overflow="hidden"
                                p={4}
                            >
                                {[
                                    "Organizing interactions and deliberations between Government bodies, policy makers, regulatory authorities and controlling agencies for SIATI members to bring their concerns, problems & suggestions.",
                                    "Providing inputs to Ministry of Civil aviation, Ministry of Defence, DGCA, DGAQA, CEMILAC etc regarding policies on Procurement, Offset, R&D etc. and also by SIATI representation in Government constituted committees and expert bodies, as well as through SIATI’s Member Empowerment Committees.",
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
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>

                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} >
                            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
                                <Text
                                    as={'span'}
                                    color={'blue.400'}
                                >
                                    R&D, Academia – Industry Interaction, Training & Skill development
                                </Text>
                            </Heading>
                            <Box
                                height="100%"
                                overflow="hidden"
                                p={4}
                            >
                                {[
                                    "Organising Interactive seminars and workshops for SIATI members with R&D organizations and Educational / Training Institutes.",
                                    "Promote R&D for development of aerospace materials, components and systems with relevant technologies through member industries and their collaboration with R&D laboratories, academic institutions and Design and Production departments of DPSUs and other Customers.",
                                    "Conducting on a ‘need basis’ training & skill development programs in Materials, Processes, Design, Testing, Manufacture, Quality Assurance, Customer support, Maintenance, IT Tools and Technique etc., and Effective Management.",
                                    "Organizing workshops and training programs for Quality Certifications like ASA9100, DGAQA, and CEMILAC certifications.",
                                    "Encourage and support educational institutions and Universities to offer courses in Aerospace.",
                                    "Assist graduates in further training and skill development through Projects with Industries.",
                                    "Institute SIATI Awards and scholarship for students."
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
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>

                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} >
                            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
                                <Text
                                    as={'span'}
                                    color={'#000080'}
                                >
                                    Encouraging & Promoting Indigenous Development through SIATI AWARDS
                                </Text>
                            </Heading>
                            <Box
                                height="100%"
                                overflow="hidden"
                                p={4}
                            >
                                {[
                                    `SIATI has instituted the "SIATI Annual Awards" for ‘Excellence in Aerospace Indigenization’ to encourage & promote indigenization of aerospace components, equipment and systems.`,
                                    "SIATI recommend deserving individuals and Organizations for National Awards.",
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
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>

                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} >
                            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
                                <Text
                                    as={'span'}
                                    color={'blue.400'}
                                >
                                    Activities
                                </Text>
                            </Heading>
                            <Box
                                height="100%"
                                overflow="hidden"
                                p={4}
                            >
                                {[
                                    `Achieving greater ‘Self Reliance’ in technology, product and services in the aerospace sector through indigenous development and international cooperation’.`,
                                    `Organizing Industry , Academy and R&D interactions, MSMEs and PSU / DPSU and large Private sector interactions for effective networking of aerospace industries.`,
                                    `Encouraging R&D, innovations, product/ process development through “SIATI Awards for Excellence” in indigenous development of aerospace technology and manufacture of aerospace material, components, equipments and systems etc.`,
                                    `Conducting Seminars and Workshops for the development of aerospace materials, equipment, structures, etc and to have direct industry interaction.`,
                                    `Development of human resource through skill development and quality technical education, apprentice / graduate training and student scholarships.`,
                                    `Interacting with Global Aerospace Industries and industry Associations of different countries for international cooperation.`,
                                    `Participating in Air Shows and other international events along with member industries. showcasing the collective strength in terms of capabilities, products and services of Indian Aerospace companies in the domestic and international forums.`,
                                    `Conducting workshops and seminars on Indian and global sourcing requirements of aerospace products and services and catalyze development of sustainable supply chain management.`,
                                    `Providing inputs to Government committees, policy makers and regulatory authorities on policies, procedures and eco systems conducive for growth of aerospace industries in India.`,
                                    `Associate and support publications such as Aerospace Directory, Books, Journals / News letters etc in Aerospace and Aviation.`
                                ].map((item, index) => (
                                    <HStack key={index} spacing={2} mb={2} alignItems="center">
                                        <CgArrowLongRightC  fontSize={'lg'} />
                                        <Text fontStyle={'italic'} color={'gray.500'} fontSize="md">
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
