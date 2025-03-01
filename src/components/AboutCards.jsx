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
    WrapItem
} from '@chakra-ui/react';
import formationImg from '../assets/formation.jpg';
import quoteImg from '../assets/Quote.jpg'
import mgkMenon from '../assets/mgkmenon.jpg';
import nairImg from '../assets/nair.jpg';
import mgkMenon2 from '../assets/menon_mgk.jpg';
import achievementImg from '../assets/about/achievements.jpg';

import { useState } from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

export default function AboutCards() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);
    const [isExpanded4, setIsExpanded4] = useState(false);
    const [isExpanded5, setIsExpanded5] = useState(false);
    const navigate = useNavigate()
    const [isExpanded6, setIsExpanded6] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleExpand2 = () => {
        setIsExpanded2(!isExpanded2);
    };

    const toggleExpand3 = () => {
        setIsExpanded3(!isExpanded3);
    };

    const toggleExpand4 = () => {
        setIsExpanded4(!isExpanded4);
    };

    const toggleExpand5 = () => {
        setIsExpanded5(!isExpanded5);
    };

    const toggleExpand6 = () => {
        setIsExpanded6(!isExpanded6);
    };
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
                    Formation
                </Text>
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>
                    <Flex flex={1} borderRadius="0">
                        <Image
                            p={5}
                            alt={'Formation Image'}
                            objectFit={'fit'}
                            src={formationImg}
                            width="100%"
                            height="100%"
                            borderRadius={0}
                        />
                    </Flex>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text
                                    as={'span'}
                                    color={'#000080'}
                                >
                                    Formation
                                </Text>
                            </Heading>
                            {/* <Text textAlign={'justify'} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                Formation of SIATI was on the initiative of Dr. C.G. Krishnadas Nair, then Managing Director of Hindustan Aeronautics Limited, Bangalore. SIATI was founded on 9th December 1991. On receiving the National Aeronautical Prize (constituted by Aeronautical Society of India, Aeronautics R&D Board, Ministry of Defence) for outstanding fundamental and applied work in Aeronautical Science & Technology, Dr Krishnadas Nair set apart the cash prize received for the promotion of SIATI. After discussion with a number of his colleagues in the Aerospace industry, and R&D, SIATI was founded complimentary to Aeronautical Society of India to give focused attention to the growth of aerospace industry through private industry participation, MSME networking with Large Private Industries & PSUs as well as Industry – R&D co-operation and International Co-operation.
                            </Text> */}
                            <Text textAlign="justify" fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                                Formation of SIATI was on the initiative of Dr. C.G. Krishnadas Nair, then Managing Director of Hindustan Aeronautics Limited, Bangalore. SIATI was founded on 9th December 1991.
                                {!isExpanded && (
                                    <>
                                        ...{' '}
                                        <Button onClick={toggleExpand} variant="link" color="blue.400" fontSize={{ base: 'md', lg: 'lg' }}>
                                            Read More
                                        </Button>
                                    </>
                                )}
                                {isExpanded && (
                                    <>
                                        &nbsp;On receiving the National Aeronautical
                                        Prize (constituted by Aeronautical Society of
                                        India, Aeronautics R&D Board, Ministry of
                                        Defence) for outstanding fundamental and
                                        applied work in Aeronautical Science &
                                        Technology, Dr Krishnadas Nair set apart the
                                        cash prize received for the promotion of SIATI.
                                        After discussion with a number of his colleagues
                                        in the Aerospace industry, and R&D, SIATI was
                                        founded complimentary to Aeronautical Society
                                        of India to give focused attention to the growth of aerospace industry through private industry participation, MSME networking with Large Private Industries & PSUs as well as Industry – R&D co-operation and International Co-
                                        operation.
                                        {' '}
                                        <Button onClick={toggleExpand} variant="link" color="blue.400" fontSize={{ base: 'md', lg: 'lg' }}>
                                            See less
                                        </Button>
                                    </>
                                )}
                            </Text>
                            {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                                <Button
                                    rounded={'full'}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Read More
                                </Button>
                            </Stack> */}
                        </Stack>
                    </Flex>
                </Stack>
            </Box>

            {/* Nair Image on Column 1 and Text on Column 2 */}

            {/* <Box p={5} position="relative">
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
                    Founder
                </Text>
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>
                    <Flex flex={4} borderRadius="0">
                        <Box height={'100%'} width={'100%'} paddingBlock={'2rem'}>
                            <Image
                                alt={'Formation Image'}
                                p={5}
                                objectFit={'fit'}
                                src={nairImg}
                                width="100%"
                                height="80%"
                                borderRadius={0}
                            />
                            <Box p={5}>
                                <Heading color={'#000080'} textAlign={'center'}>Dr.C.G.Krishnadas Nair</Heading>
                                <Text fontSize={'md'} color={'#000080'} textAlign={'center'}>Former Chairman of Hindustan Aeronautics Ltd</Text>
                                <Text fontSize={'md'} color={'#000080'} textAlign={'center'}>is the Founder President of SIATI</Text>
                                <Text fontSize={'md'} _hover={{cursor:'pointer',textDecoration:'underline'}} onClick={() => navigate('/presidentprofile')} color={'#000080'} textAlign={'center'}>[Click here to view profile]</Text>
                            </Box>
                        </Box>
                    </Flex>
                    <Flex p={8} flex={6} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} >
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text
                                    as={'span'}
                                    color={'#000080'}
                                >
                                    Founder President
                                </Text>{' '}
                            </Heading>
                            <Text textAlign="justify" fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                                Padma Shree awardee Dr.C.G.Krishnadas Nair, an eminent techno craft in the field of aerospace with national and international reputation is the founder of SIATI. He has made significant contributions in aerospace engineering, R&D, education, industry and management. He transformed Hindustan Aeronautics Limited into a globally competent aerospace industry with emphasis on research, design and development, collaborating with National Laboratories, Academia, Indian private industries and international aerospace organizations. He served also as Managing Director of Cochin International Airport Limited (CIAL), the first Non-Metro Private Airport. He served as the Vice Chancellor of MATS University and Chairman governing council of a number of engineering colleges and visiting professor including INAE – AICTE distinguished visiting professor of IIT Chennai. He is the Chancellor of Jain University and Chairman governing council of National Institute of Technology, Calicut. He established International Institute of Aerospace Engineering and Management (IIAEM) first of its kind in India as a collaborative venture between Jain University, SIATI, and leading Aerospace and aviation organizations. He is the Chairman of its Governing Council. He has made significant R&D contributions by indigenous development of high-quality aerospace alloys, composites materials and advanced process technologies and non-destructive testing and evaluation. He led the design and development of Advanced Light helicopters, jet trainer and fighter aircraft. He was actively associated with ISRO in developing advanced materials, structures and process tech for satellite and Launch vehicles and with DRDO for structures and engines for Prithvi and Agni Missiles. He has published over 200 technical / research papers and authored 21 books. He served as President of Aeronautical Society of India and President, Indian Institute of Metals. He served as member Board of several Public, Private and Joint venture companies and research and academic councils of R&D labs and academic institutions. He is founder President of Society of Indian Aerospace and Industries (SIATI) and founder Chairman of Society of Defence Technologies (SODET) and contributed to the growth of private sector participation in aerospace and Defense.
                                &nbsp;<br /><br />He has won many National and International Awards. Padma Shree, Scope Award for best Chief Executive, Birla Gold Medal, Indira Priyadarshini Award, National Aeronautical Prize, Vasvik Research Award, Omprakash Bhasin Award, Dr Ambedkar Bharat Shree Award, National Metallurgist Award, Life Time Achievement Award from Indian National Academy of Engineering (INAE) etc are but few of them.

                            </Text>
                        </Stack>
                    </Flex>
                </Stack>
            </Box> */}
                        
            {/* Nair Image only*/}

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
                    Founder
                </Text>

                <Box borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'}>
                    <Box justifyItems={'center'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text
                                as={'span'}
                                color={'#000080'}
                            >
                                Founder President
                            </Text>{' '}
                        </Heading>
                    </Box>
                    <Box borderRadius="0">
                        <Box justifyItems={'center'} height={'100%'} width={'100%'} paddingBlock={'2rem'}>
                            <Image

                                alt={'Formation Image'}
                                p={5}
                                objectFit={'fit'}
                                src={nairImg}
                                width="30%"
                                height="30%"
                                borderRadius={0}
                            />
                            <Box p={5}>
                                <Heading color={'#000080'} textAlign={'center'}>Dr.C.G.Krishnadas Nair</Heading>
                                <Text fontSize={'md'} color={'#000080'} textAlign={'center'}>Former Chairman of Hindustan Aeronautics Ltd</Text>
                                <Text fontSize={'md'} color={'#000080'} textAlign={'center'}>is the Founder President of SIATI</Text>
                                <Text fontSize={'md'} _hover={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => navigate('/presidentprofile')} color={'#000080'} textAlign={'center'}>[Click here to view profile]</Text>
                            </Box>
                        </Box>
                    </Box>

                </Box>
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
                    Identity
                </Text>
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text color={'blue.400'} as={'span'}>
                                    Identity
                                </Text>{' '}
                            </Heading>
                            <Text textAlign="justify" fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                                Society of Indian Aerospace Technologies and Industries (SIATI) facilitates and promotes the growth of Aerospace industries, technologies and education in India, academia – industry and R&D Industry interactions and international co-operation. SIATI also work closely with Aero Society, FICCI, CII and such other industry associations for Government policy, formulations / modifications for the growth of Aerospace Technology and business.
                                {!isExpanded2 && (
                                    <>
                                        ...{' '}
                                        <Button onClick={toggleExpand2} variant="link" color="blue.400" fontSize={{ base: 'md', lg: 'lg' }}>
                                            Read More
                                        </Button>
                                    </>
                                )}
                                {isExpanded2 && (
                                    <>
                                        Founded in 1991, SIATI is the major Industrial Association of Aerospace Companies in India with the patronage of major aerospace organizations such as Hindustan Aeronautics Ltd.(HAL), Indian Space Research Organisation (ISRO), DRDO Labs, Aeronautical Development Agency (ADA), National Aerospace Laboratories (NAL), Civil & Military Airworthiness Quality & Certification Agencies. Currently SIATI has membership of around 300 industries from both public and private sector. SIATI is a professionally managed non-profit, non-commercial organization.
                                        {' '}
                                        <Button onClick={toggleExpand2} variant="link" color="blue.400" fontSize={{ base: 'md', lg: 'lg' }}>
                                            See less
                                        </Button>
                                    </>
                                )}
                            </Text>
                        </Stack>
                    </Flex>
                    <Flex flex={1} borderRadius="0" direction="column"
                    >
                        <Box>
                            <p className='quoted_heading'>
                                "
                            </p>
                        </Box>
                        <Box textAlign="center">
                            <Text textAlign="justify" fontSize={{ base: 'md', lg: 'lg' }} color="gray.500" p={2}>
                                "SIATI was the vision of Dr.C.G.Krishnadas Nair, Chairman, Hindustan Aeronautics Limited, Bangalore. We have always talked about the need to bridge the gap between R&D and industry,
                                {!isExpanded6 && (
                                    <>
                                        ...{' '}
                                        <Button onClick={toggleExpand6} variant="link" color="blue.400" fontSize={{ base: 'md', lg: 'lg' }}>
                                            Read More
                                        </Button>
                                    </>
                                )}
                                {isExpanded6 && (
                                    <>
                                        and ensure large scale application of our technological capabilities. SIATI was a right step in this direction in the emerging frontier areas of aerospace. As we move increasingly to a knowledge-based society, with production and processes depending on the generation of new knowledge, our capabilities at the frontiers of current development will be seen to be even more important for what we need in the country, as well as to provide opportunities for significant exports. SIATI plays an important role in this convergence of people, ideas and capabilities in the important frontier and strategic area of aerospace. I wish to convey my congratulations to Dr.Krishnadas Nair on a visionary initiative, which is fructifying so well. " {' '}
                                        <Button onClick={toggleExpand6} variant="link" color="blue.400" fontSize={{ base: 'md', lg: 'lg' }}>
                                            See less
                                        </Button>

                                    </>
                                )}
                                <p className='quoted_heading_two'>
                                    "
                                </p>
                            </Text>
                        </Box>
                        <Box align="center" className={'identity_avatar'} marginBottom={'5px'}>
                            <Wrap>
                                <WrapItem>
                                    <Avatar size="xl" name="MGK Menon"
                                        // src={mgkMenon} 
                                        src={mgkMenon2}
                                    />
                                </WrapItem>
                            </Wrap>
                            <Text>MGK Menon</Text>
                            <Text>Former Chairman, ISRO</Text>
                        </Box>
                    </Flex>
                </Stack>
            </Box> */}



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
                    Awards
                </Text>
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text color={'blue.400'} as={'span'}>
                                    SIATI Awards
                                </Text>{' '}
                            </Heading>
                            <Text textAlign="justify" fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                                “SIATI AWARD FOR EXCELLENCE” : SIATI has constituted “SIATI Awards for Excellence” in indigenous development of aerospace technology and manufacture of aerospace material, components structures, equipment and systems etc. The Awards are given on the basis of recommendations received from the user organizations like DRDO, HAL, ISRO NAL, IAF etc and selected by Awards Committee and presented by dignitaries during SIATI Annual each year. So far about 160 industries are recipient of these awards.
                                {!isExpanded4 && (
                                    <>
                                        ...{' '}
                                        <Button onClick={toggleExpand4} variant="link" color="blue.400" fontSize={{ base: 'md', lg: 'lg' }}>
                                            Read More
                                        </Button>
                                    </>
                                )}
                                {isExpanded4 && (
                                    <>
                                        ,  "SIATI LIFETIME SERVICE AWARDS" : SIATI has also constituted “ Life Time service Award” from the year 2011 to honour eminent persons who have made great contribution in the aerospace, R&D, Industry and Education field. The Awardees are selected by the Award committee.{' '}
                                        <Button onClick={toggleExpand4} variant="link" color="blue.400" fontSize={{ base: 'md', lg: 'lg' }}>
                                            See less
                                        </Button>
                                    </>
                                )}
                            </Text>
                        </Stack>
                    </Flex>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                                <Text color={'blue.400'} as={'span'}>
                                    CGKN Endowment Awards
                                </Text>{' '}
                            </Heading>
                            <Text textAlign="justify" fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                                “CGKN Endowment Awards - To be updated.
                                {!isExpanded4 && (
                                    <>
                                        ...{' '}
                                        <Button onClick={toggleExpand4} variant="link" color="blue.400" fontSize={{ base: 'md', lg: 'lg' }}>
                                            Read More
                                        </Button>
                                    </>
                                )}
                                {isExpanded4 && (
                                    <>
                                        , .{' '}
                                        <Button onClick={toggleExpand4} variant="link" color="blue.400" fontSize={{ base: 'md', lg: 'lg' }}>
                                            See less
                                        </Button>
                                    </>
                                )}
                            </Text>
                        </Stack>
                    </Flex>
                </Stack>
            </Box> */}

            {/* <Box p={5} position="relative">
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
                    Achievements
                </Text>
                <Stack borderRadius={'10px 10px 10px 10px'} border={'2px solid #000080'} direction={{ base: 'column', md: 'row' }}>
                    <Flex flex={1} borderRadius="0">
                        <Image
                            alt={'Formation Image'}
                            p={5}
                            objectFit={'fit'}
                            src={achievementImg}
                            width="100%"
                            height="100%"
                            borderRadius={0}
                        />
                    </Flex>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text as={'span'}
                                    color={'#000080'}
                                >
                                    Achievements
                                </Text>{' '}
                            </Heading>
                            <Text textAlign="justify" fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                                Society of Indian Aerospace Technologies & Industries (SIATI) was established in the year 1991 with the support of major aerospace organisations such as HAL/ISRO/DRDO/NAL/DGCA/ CEMILAC and DGAQA with a mission to create useful interaction with Indian and International Aerospace companies, R&D organisations and Academic Institutions for growth through partnership
                                {!isExpanded5 && (
                                    <>
                                        ...{' '}
                                        <Button onClick={toggleExpand5} variant="link" color="blue.400" fontSize={{ base: 'md', lg: 'lg' }}>
                                            Read More
                                        </Button>
                                    </>
                                )}
                                {isExpanded5 && (
                                    <>
                                        , creating useful interaction among Indian and international Aerospace Industries, R&D, Academic Institutions, Quality & Regulatory agencies for development and production of aircraft, materials, components, structures, equipment, and systems, and enhancing participation of the Indian private industries with special focus on SMEs and growing global opportunities for synergizing private industries with aerospace and defense PSUs, R&D organisations including academic institutions.
                                        {' '}
                                        <Button onClick={toggleExpand5} variant="link" color="blue.400" fontSize={{ base: 'md', lg: 'lg' }}>
                                            See less
                                        </Button>
                                    </>
                                )}
                            </Text>
                        </Stack>
                    </Flex>
                </Stack>
            </Box> */}
        </>
    );
}
