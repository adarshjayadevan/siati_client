import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Home/Header';
import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Stack,
    Wrap,
    WrapItem,
    Progress,
    ButtonGroup,
    Button,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
} from '@chakra-ui/react';
import {
    Form,
    ButtonToolbar,
    // Button,
    // Input,
    // InputGroup,
    InputNumber,
    Row,
    Col,
    Radio,
    RadioGroup
} from 'rsuite';
import Footer from '../components/Home/Footer';
import formbg1 from '../assets/application_form1.jpg';
import 'rsuite/dist/rsuite.min.css';
import '../components/style.css'
import { useNavigate } from 'react-router-dom';
import './Form.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

function MembershipForm({ scrollToRef }) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getMembershipDoc()
    }, [])

    const callToActionRef = useRef(null);
    const anotherComponentRef = useRef(null);
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        name: '',
        address: '',
        contact: '',
        correspondence: '',
        city: '',
        state: '',
        pincode: '',
        fax: '',
        website: '',
        email: '',
        profile: '',
        products: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        address: '',
        contact: '',
        correspondence: '',
        city: '',
        state: '',
        pincode: '',
        fax: '',
        website: '',
        email: '',
    });

    const handleChange = (name, value) => {
        setFormValues(prevValues => ({ ...prevValues, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    };



    const [managementRows, setManagementRows] = useState([{ name: '', designation: '', email: '' }]);
    const [membershipDoc, setMembershipDoc] = useState({});

    async function getMembershipDoc() {
        await axios.get(`${import.meta.env.VITE_API_URL}/membershipDoc`).then(res => {
            setMembershipDoc(res.data.data)
        }).catch(err => {
            console.log(err);
        })
    }

    const handleManagementChange = (index, field, value) => {
        const newRows = [...managementRows];
        newRows[index][field] = value;
        setManagementRows(newRows);
    };

    const handleAddRow = () => {
        setManagementRows([...managementRows, { name: '', designation: '', email: '' }]);
    };

    const handleRemoveRow = (index) => {
        const newRows = managementRows.filter((_, i) => i !== index);
        setManagementRows(newRows);
    };

    const canAddRow = managementRows.every(row => row.name && row.designation && row.email);

    const [companyType, setCompanyType] = useState({
        type: 'public',
        details: ''
    })

    const [turnover, setTurnover] = useState([{
        'year': `${new Date().getFullYear() - 1}`,
        'turnover': ''
    }, {
        'year': `${new Date().getFullYear() - 2}`,
        'turnover': ''
    }, {
        'year': `${new Date().getFullYear() - 3}`,
        'turnover': ''
    }])

    const handleSubmit = async (event) => {
        if (!formValues.email.match(/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)) {
            setErrors({ ...errors, email: 'Enter a valid email' });
        }
        console.log(turnover, companyType, managementRows, formValues)

        axios.post(`${import.meta.env.VITE_API_URL}/addmembership`, {
            ...formValues,
            membershipTeam: managementRows,
            ...companyType,
            turnover
        }).then(async res => {
            debugger
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            await Toast.fire({
                icon: "success",
                title: "Membership Added"
            });
            setFormValues({
                name: '',
                address: '',
                contact: '',
                correspondence: '',
                city: '',
                state: '',
                pincode: '',
                fax: '',
                website: '',
                email: '',
                profile: '',
                products: ''
            })
            navigate('/')
        }).catch(err => {
            debugger
            toast.error('error')
        })
    };

    const [fee, setFee] = useState([{
        'turnover': `Below Rupees 10 crore`,
        'fee': 'Rs. 2.0 Lakhs',
        'highlight': false
    }, {
        'turnover': `Rupees 10 crore to 25 crore`,
        'fee': 'Rs. 3.0 Lakhs',
        'highlight': false
    }, {
        'turnover': `Rupees 25 crore to 50 crore`,
        'fee': 'Rs. 4.0 Lakhs',
        'highlight': false
    }, {
        'turnover': `Above 50 crore`,
        'fee': 'Rs. 5.0 Lakhs',
        'highlight': false
    }])

    const handleCancel = (event) => {
        // event.preventDefault();
        setFormValues({
            name: '',
            address: '',
            contact: '',
            correspondence: '',
            city: '',
            state: '',
            pincode: '',
            fax: '',
            website: '',
            email: '',
            profile: '',
            products: ''
        })
        setErrors({
            name: '',
            address: '',
            contact: '',
            correspondence: '',
            city: '',
            state: '',
            pincode: '',
            fax: '',
            website: '',
            email: '',
        })
    };

    useEffect(() => {
        const totalTurnover = turnover.reduce((sum, record) => {
            const value = parseFloat(record.turnover) || 0;
            return sum + value;
        }, 0);
        const averageTurnover = totalTurnover / turnover.length;

        const updatedFee = fee.map((f, index) => ({
            ...f,
            highlight: false
        }));

        if (averageTurnover < 100000000) {
            updatedFee[0].highlight = true;
        } else if (averageTurnover >= 100000000 && averageTurnover < 250000000) {
            updatedFee[1].highlight = true;
        } else if (averageTurnover >= 250000000 && averageTurnover < 500000000) {
            updatedFee[2].highlight = true;
        } else {
            updatedFee[3].highlight = true;
        }

        setFee(updatedFee);
    }, [turnover]);

    async function downloadForm() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/download/${membershipDoc["_id"]}`, {
            responseType: 'blob'
        })
        const blobUrl = URL.createObjectURL(response.data);

        const link = document.createElement('a');
        link.href = blobUrl;
        debugger
        const fileName = response.headers['content-disposition'];

        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
    }

    const Form1 = () => {
        return (
            <>
                <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                    Membership Form
                </Heading>
                <Flex>
                    <FormControl mr="5%">
                        <FormLabel htmlFor="name" fontWeight="normal">
                            Name of the Company
                        </FormLabel>
                        <Input
                            id="name"
                            name="name"
                            value={formValues.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Company name"
                        />
                        {errors.name && <FormHelperText color="red.500">{errors.name}</FormHelperText>}
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="address" fontWeight="normal">
                            Address
                        </FormLabel>
                        <Input
                            id="address"
                            name="address"
                            value={formValues.address}
                            onChange={(e) => handleChange('address', e.target.value)}
                            placeholder="Address"
                        />
                        {errors.address && <FormHelperText color="red.500">{errors.address}</FormHelperText>}
                    </FormControl>
                </Flex>

                <Flex mt="2%">
                    <FormControl mr="5%">
                        <FormLabel htmlFor="contact" fontWeight="normal">
                            Contact No.
                        </FormLabel>
                        <Input
                            id="contact"
                            name="contact"
                            value={formValues.contact}
                            onChange={(e) => handleChange('contact', e.target.value)}
                            placeholder="Contact number"
                        />
                        {errors.contact && <FormHelperText color="red.500">{errors.contact}</FormHelperText>}
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="city" fontWeight="normal">
                            City
                        </FormLabel>
                        <Input
                            id="city"
                            name="city"
                            value={formValues.city}
                            onChange={(e) => handleChange('city', e.target.value)}
                            placeholder="City"
                        />
                        {errors.city && <FormHelperText color="red.500">{errors.city}</FormHelperText>}
                    </FormControl>
                </Flex>

                <Flex mt="2%">
                    <FormControl mr="5%">
                        <FormLabel htmlFor="state" fontWeight="normal">
                            State
                        </FormLabel>
                        <Input
                            id="state"
                            name="state"
                            value={formValues.state}
                            onChange={(e) => handleChange('state', e.target.value)}
                            placeholder="State"
                        />
                        {errors.state && <FormHelperText color="red.500">{errors.state}</FormHelperText>}
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="pincode" fontWeight="normal">
                            Pin-Code
                        </FormLabel>
                        <Input
                            id="pincode"
                            name="pincode"
                            value={formValues.pincode}
                            onChange={(e) => handleChange('pincode', e.target.value)}
                            placeholder="Pin-Code"
                        />
                        {errors.pincode && <FormHelperText color="red.500">{errors.pincode}</FormHelperText>}
                    </FormControl>
                </Flex>

                <Flex mt="2%">
                    <FormControl mr="5%">
                        <FormLabel htmlFor="fax" fontWeight="normal">
                            Fax
                        </FormLabel>
                        <Input
                            id="fax"
                            name="fax"
                            value={formValues.fax}
                            onChange={(e) => handleChange('fax', e.target.value)}
                            placeholder="Fax"
                        />
                        {errors.fax && <FormHelperText color="red.500">{errors.fax}</FormHelperText>}
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="website" fontWeight="normal">
                            Website
                        </FormLabel>
                        <Input
                            id="website"
                            name="website"
                            value={formValues.website}
                            onChange={(e) => handleChange('website', e.target.value)}
                            placeholder="Website"
                        />
                        {errors.website && <FormHelperText color="red.500">{errors.website}</FormHelperText>}
                    </FormControl>
                </Flex>

                <FormControl mt="2%">
                    <FormLabel htmlFor="email" fontWeight="normal">
                        Email
                    </FormLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formValues.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="Email address"
                    />
                    {errors.email && <FormHelperText color="red.500">{errors.email}</FormHelperText>}
                </FormControl>



            </>
        )
    }

    const Form2 = () => {
        return (
            <>
                <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                    Membership Form
                </Heading>
                <Form.Group className='membership-input' controlId="profile">
                    <Form.ControlLabel>Company Profile</Form.ControlLabel>
                    <Input as="textarea" rows={3} placeholder="Enter Company Profile" />
                </Form.Group>

                <Form.Group className='membership-input' controlId="products">
                    <Form.ControlLabel>Products & Services</Form.ControlLabel>
                    <Input as="textarea" rows={3} placeholder="Products & Services" />
                </Form.Group>

                <Box mt="4">
                    <Form.ControlLabel>Management Team</Form.ControlLabel>
                    <Table variant="striped">
                        <Thead>
                            <Tr>
                                <Th color={'#070740'}>Name</Th>
                                <Th color={'#070740'}>Designation</Th>
                                <Th color={'#070740'}>Email</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {managementRows.map((row, index) => (
                                <Tr className='membership-input' key={index}>
                                    <Td>
                                        <Input value={row.name} onChange={value => handleManagementChange(index, 'name', value)} />
                                    </Td>
                                    <Td>
                                        <Input value={row.designation} onChange={value => handleManagementChange(index, 'designation', value)} />
                                    </Td>
                                    <Td>
                                        <Input value={row.email} onChange={value => handleManagementChange(index, 'email', value)} />
                                    </Td>
                                    {index === managementRows.length - 1 && canAddRow && (
                                        <Td>
                                            <Button onClick={handleAddRow} mt={4} colorScheme="teal">+</Button>
                                        </Td>
                                    )}
                                    {managementRows.length > 1 && index === managementRows.length - 1 && (
                                        <Td>
                                            <Button onClick={() => handleRemoveRow(index)} mt={4} ml={4} colorScheme="red">-</Button>
                                        </Td>
                                    )}
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>

                </Box>

                <Form.ControlLabel>Type of Company</Form.ControlLabel>

                <RadioGroup name="radio-group" defaultValue={companyType}>
                    <Flex p={3} className='membership-input'>
                        <Radio
                            value="public"
                            onChange={() => setCompanyType(prevState => ({ ...prevState, type: 'public', details: '' }))}
                        >Public Sector</Radio>
                        {companyType.type == 'public' && <Input className='radio-input' placeholder='Name of Department'
                            onChange={(e) => setCompanyType(prevState => ({ ...prevState, type: 'public', details: e }))}
                        />}
                    </Flex>
                    <Flex p={3} className='membership-input'>
                        <Radio
                            value="private"
                            onChange={() => setCompanyType(prevState => ({ ...prevState, type: 'private', details: '' }))}
                        >Private</Radio>
                    </Flex>
                    <Flex p={3} className='membership-input'>
                        <Radio
                            value="partnership"
                            onChange={() => setCompanyType(prevState => ({ ...prevState, type: 'partnership', details: '' }))}
                        >Partnership</Radio>
                    </Flex>
                    <Flex p={3} className='membership-input'>
                        <Radio
                            value="proprietorship"
                            onChange={() => setCompanyType(prevState => ({ ...prevState, type: 'proprietorship', details: '' }))}
                        >Proprietorship Owner</Radio>
                        {companyType.type == 'proprietorship' && <Input className='radio-input' placeholder='Enter Details'
                            onChange={(e) => setCompanyType(prevState => ({ ...prevState, type: 'proprietorship', details: e }))}
                        />}
                    </Flex>
                </RadioGroup>

                <Box mt="4">
                    <Form.ControlLabel>Turnover for last three years</Form.ControlLabel>
                    <Table variant="striped">
                        <Thead>
                            <Tr>
                                <Th color={'#070740'}>Year</Th>
                                <Th color={'#070740'}>Turnover</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {turnover.map((elem, idx) => (
                                <Tr className='membership-input' key={idx}>
                                    <Td>
                                        <Form.ControlLabel>{elem.year}</Form.ControlLabel>
                                    </Td>
                                    <Td>
                                        <Input
                                            value={elem.turnover}
                                            onChange={(e) => {
                                                const newTurnover = [...turnover];
                                                newTurnover[idx].turnover = e;
                                                setTurnover(newTurnover);
                                            }}
                                        />
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>

                </Box>
            </>
        )
    }

    const Form3 = () => {
        return (
            <>
                <Heading w="100%" textAlign={'center'} fontWeight="normal">
                    Membership Information
                </Heading>
                <Form>
                    {/* <Form.Group className='membership-input' controlId="correspondence">
                        <Form.ControlLabel>Address for Correspondence</Form.ControlLabel>
                        <Form.Control
                            name="correspondence"
                            value={formValues.correspondence}
                            onChange={value => handleChange('correspondence', value)}
                        />
                        {errors.correspondence && <Form.HelpText style={{ color: 'red' }}>{errors.correspondence}</Form.HelpText>}
                    </Form.Group>

                    <Form.Group className='membership-input' controlId="profile">
                        <Form.ControlLabel>Addition Information (If Any)</Form.ControlLabel>
                        <Input as="textarea" rows={3} placeholder="Enter Details" />
                    </Form.Group> */}

                    <Box mt="4">
                        {/* <Form.ControlLabel>Membership Fee</Form.ControlLabel> */}
                        <Table variant="striped">
                            <Thead>
                                <Tr >
                                    <Th color={'#070740'}>Annual Turn Over of the Company</Th>
                                    <Th color={'#070740'}>Lifetime Donor Membership </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Admission Fee </Td>
                                    <Td>Rs. 50,000.00 </Td>
                                </Tr>
                                {fee.map((f, index) => (
                                    <Tr key={index} style={{ backgroundColor: f.highlight ? '#6bdfff' : 'transparent' }}>
                                        <Td>{f.turnover}</Td>
                                        <Td>{f.fee}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>

                    </Box>

                    <div>
                        <Text mb={4}>
                            <strong>Payment Mode:</strong>
                        </Text>

                        <Text mb={2}>
                            <strong>Option 1:</strong> Bank transfer by NEFT/RTGS.
                            <strong>Bank details:</strong> SBI, HAL Branch, A/c No. 10917867729,
                            IFSC Code-SBIN0001114,
                            <strong>Beneficiary:</strong> Society of Indian Aerospace Technologies & Industries (SIATI)
                        </Text>

                        <Text mb={2}>
                            <strong>Option 2:</strong> DD / Cheque may be drawn in favour of ‘Society of Indian Aerospace Technologies & Industries (SIATI), Bangalore
                        </Text>

                        <Text mb={4}>
                            <strong>Details of Payment:</strong>
                        </Text>

                        <Flex mb={2} align="center">
                            <Box w="30%">
                                <Text><strong>DD/Cheque No.:</strong></Text>
                            </Box>
                            <Box w="70%">
                                <Input id="ddChequeNo" name="ddChequeNo" placeholder="Enter DD/Cheque No." />
                            </Box>
                        </Flex>

                        <Flex mb={2} align="center">
                            <Box w="30%">
                                <Text><strong>Date:</strong></Text>
                            </Box>
                            <Box w="70%">
                                <Input id="date" name="date" placeholder="Enter Date" />
                            </Box>
                        </Flex>

                        <Flex mb={2} align="center">
                            <Box w="30%">
                                <Text><strong>Bank Name & Branch:</strong></Text>
                            </Box>
                            <Box w="70%">
                                <Input id="bankName" name="bankName" placeholder="Enter Bank Name & Branch" />
                            </Box>
                        </Flex>

                        <Flex mb={2} align="center">
                            <Box w="30%">
                                <Text><strong>Amount Rs.:</strong></Text>
                            </Box>
                            <Box w="70%">
                                <Input id="amount" name="amount" placeholder="Enter Amount" />
                            </Box>
                        </Flex>

                        <Flex mb={2} align="center">
                            <Box w="30%">
                                <Text><strong>Signature:</strong></Text>
                            </Box>
                            <Box w="70%">
                                <Input id="signature" name="signature" placeholder="Enter Signature" />
                            </Box>
                        </Flex>

                        <Flex mb={2} align="center">
                            <Box w="30%">
                                <Text><strong>Name:</strong></Text>
                            </Box>
                            <Box w="70%">
                                <Input id="name" name="name" placeholder="Enter Name" />
                            </Box>
                        </Flex>

                        <Flex mb={2} align="center">
                            <Box w="30%">
                                <Text><strong>Designation:</strong></Text>
                            </Box>
                            <Box w="70%">
                                <Input id="designation" name="designation" placeholder="Enter Designation" />
                            </Box>
                        </Flex>

                        <Text mb={4}>
                            <strong>Please return completed forms and payment to:</strong>
                        </Text>

                        <Text mb={2}>
                            <strong>The Secretary General</strong>
                        </Text>

                        <Text mb={2}>
                            Society of Indian Aerospace Technologies & Industries (SIATI)
                            <br />
                            Aeronautical Society Building, Suranjandas Road (Off. Old Madras Road)
                            <br />
                            Bangalore – 560 075.
                        </Text>

                        <Text mb={2}>
                            <strong>Tel:</strong> 080-25275262 / 25219951
                        </Text>

                        <Text mb={2}>
                            <strong>Email ID:</strong> office@siati.org
                        </Text>

                        <Text mb={2}>
                            <strong>Web:</strong> www.siati.org
                        </Text>
                    </div>

                    {/* <Form.Group>
                        <ButtonToolbar>
                            <Button appearance="primary" type="submit">Submit</Button>
                            <Button appearance="default" onClick={() => handleCancel()}>Cancel</Button>
                        </ButtonToolbar>
                    </Form.Group> */}
                </Form>
            </>
        )
    }

    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(33.33)

    const [ButtonColumns, setButtonColumns] = useState([
        {
            name: "",
        },
        {
            name: "Download",
        },
        {
            name: "",
        },
        {
            name: "Online",
        },
        {
            name: "",
        },

    ]);

    return (
        <>
            <Box minH="100vh" display="flex" flexDirection="column">
                <Box
                    position="fixed" top="0" left="0" right="0" zIndex="10" bg="white" boxShadow="md"
                >
                    <Header
                        scrollToRef={{
                            about: callToActionRef,
                            contact: anotherComponentRef,
                        }}
                    />
                </Box>


                <Box mt={'60px'} backgroundImage={formbg1} backgroundSize={'cover'} minHeight="100vh">
                    <Box marginLeft={'5%'} borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={20}>
                        <Heading className='home_events_heading' mb={6}>Membership</Heading>
                    </Box>
                    <Flex justify="center"
                        gap={4}
                    >
                        <Box
                            w="50%"
                            mt={5}
                            mb={5}
                            borderRadius="md"
                            textAlign="center"
                        >
                            <Box paddingTop={5} >
                                <Box ml={'5%'} boxShadow={'lg'} height={'280px'} direction={{ base: 'column', md: 'row' }}>
                                    <Text fontSize={'large'} color={'#070740'} fontWeight={'bold'}>Indian Organisation</Text>
                                    <Text textAlign={'justify'} color={'#070740'} fontSize={'large'} p={3}>SIATI membership is open to Industry/Institution engaged in any or all fields of aerospace,
                                        such as Research, Design & Development, Manufacturing, Maintenance, Airline,
                                        Airport and Infrastructure Business & Management, Education and Training etc.
                                        Membership is restricted to industries / institutions and is not available
                                        in SIATI for individuals (Those who would like to take individual professional
                                        membership are recommended to Join Aeronautical Society of India).</Text>
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            w="50%"
                            mt={5}
                            mb={5}
                            borderRadius="md"
                            textAlign="center"
                        >
                            <Box paddingTop={5}>
                                <Box mr={'5%'} boxShadow={'lg'} height={'280px'} direction={{ base: 'column', md: 'row' }}>
                                    <Text fontSize={'large'} color={'#070740'} fontWeight={'bold'}>Overseas Organisation</Text>
                                    <Text textAlign={'justify'} color={'#070740'} fontSize={'large'} p={3}>Industries / Institutions engaged in the aerospace field
                                        in countries other than India are invited to join as International members. SIATI will be an important link
                                        between overseas and Indian Entrepreneurs / Industry / Institutions and various regulatory agencies and policy
                                        makers to establish collaborations and development of technology and business. There is considerable potential
                                        for collaboration in Research, Design, Technology development, Joint Venture, Co-production and partnership in
                                        Offset/Counter Trade Programs.</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                    <Box mb={5} display={'flex'} justifyContent="space-between"
                    >
                        <Box marginLeft={'5%'} borderTop="2px solid" borderColor="blue.500" width="fit-content" mt={4}>
                            <Heading className='home_events_heading' mb={2}>Membership Form</Heading>
                        </Box>
                        {/* <Button
                            width={'200px'}
                            color={'#070740'}
                            marginRight={'5%'}
                            _hover={{
                                _before: {
                                    content: '""',
                                    position: "absolute",
                                    width: "0%",
                                    height: "2px",
                                    bottom: 0,
                                    left: 0,
                                    backgroundColor: "currentColor",
                                    transition: "width 0.3s ease-in-out",
                                },
                                _after: {
                                    content: '""',
                                    position: "absolute",
                                    width: "100%",
                                    height: "2px",
                                    bottom: 0,
                                    left: 0,
                                    backgroundColor: "currentColor",
                                    transition: "width 0.3s ease-in-out",
                                },
                            }}
                            _before={{
                                content: '""',
                                position: "absolute",
                                width: "0%",
                                height: "2px",
                                bottom: 0,
                                left: 0,
                                backgroundColor: "currentColor",
                                transition: "width 0.3s ease-in-out",
                            }}
                            _after={{
                                content: '""',
                                position: "absolute",
                                width: "0%",
                                height: "2px",
                                bottom: 0,
                                left: 0,
                                backgroundColor: "currentColor",
                                transition: "width 0.3s ease-in-out",
                            }}
                            onClick={() => downloadForm()}
                        >
                            Download
                        </Button> */}
                    </Box>

                    <Button
                        width={'auto'}
                        minWidth={'200px'}
                        maxWidth={'100%'}
                        color={'#070740'}
                        marginLeft={'5%'}
                        mb={5}
                        padding={'10px'}
                        textAlign={'center'}
                        whiteSpace={'normal'}
                        wordBreak={'break-word'}
                        _hover={{
                            _before: {
                                content: '""',
                                position: "absolute",
                                width: "0%",
                                height: "2px",
                                bottom: 0,
                                left: 0,
                                backgroundColor: "currentColor",
                                transition: "width 0.3s ease-in-out",
                            },
                            _after: {
                                content: '""',
                                position: "absolute",
                                width: "100%",
                                height: "2px",
                                bottom: 0,
                                left: 0,
                                backgroundColor: "currentColor",
                                transition: "width 0.3s ease-in-out",
                            },
                        }}
                        _before={{
                            content: '""',
                            position: "absolute",
                            width: "0%",
                            height: "2px",
                            bottom: 0,
                            left: 0,
                            backgroundColor: "currentColor",
                            transition: "width 0.3s ease-in-out",
                        }}
                        _after={{
                            content: '""',
                            position: "absolute",
                            width: "0%",
                            height: "2px",
                            bottom: 0,
                            left: 0,
                            backgroundColor: "currentColor",
                            transition: "width 0.3s ease-in-out",
                        }}
                        onClick={() => downloadForm()}
                    >
                        Download Membership Form
                    </Button>


                    {/* <Table marginBottom={5}>
                        <Tr>
                            {ButtonColumns.map((elem, idx) => (
                                <Td key={idx}>
                                    <GridItem
                                        bg="white"
                                        className={elem.name ? "download-form-link" : ""}
                                        borderRadius='md'
                                        overflow="hidden"
                                        textAlign="center"
                                    >
                                        {elem.name && <Text _hover={{ cursor: 'pointer', textDecoration: 'underline' }} color={'#000080'} fontWeight={'bold'} fontSize={'x-large'}>{elem.name}</Text>}
                                    </GridItem>
                                </Td>
                            ))}
                        </Tr>
                    </Table> */}




                    {/* Form  */}

                    {/* <Box borderWidth="1px"
                        rounded="lg"
                        shadow="1px 1px 3px rgba(0,0,0,0.3)"
                        marginLeft={'5%'}
                        marginRight={'5%'}
                        marginBottom={'5%'}
                        backgroundColor="rgba(255, 255, 255, 0.8)"
                        p={6}
                        as="form">
                        {Form1()}
                        {Form2()}
                        {Form3()}
                    </Box> */}


                    {/* Single Form */}
                    {/* <Box
                        marginInline={'5%'}
                        mb={'5%'}
                        // backgroundColor="white"
                        color={'#070740'}
                        fontWeight={'bold'}
                        backgroundColor="rgba(255, 255, 255, 0.4)"
                        borderRadius="md"
                        boxShadow="md"
                    >
                        <Form fluid onSubmit={handleSubmit}>
                            <Row>
                                <Col className='membership-input form-column-cell'>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Name of the Company</Form.ControlLabel>
                                        <Form.Control
                                            name="name"
                                            value={formValues.name}
                                            onChange={value => handleChange('name', value)}
                                        />
                                        {errors.name && <Form.HelpText style={{ color: 'red' }}>{errors.name}</Form.HelpText>}
                                    </Form.Group>
                                </Col>
                                <Col className='membership-input form-column-cell'>
                                    <Form.Group controlId="address">
                                        <Form.ControlLabel>Address</Form.ControlLabel>
                                        <Form.Control
                                            name="address"
                                            value={formValues.address}
                                            onChange={value => handleChange('address', value)}
                                        />
                                        {errors.address && <Form.HelpText style={{ color: 'red' }}>{errors.address}</Form.HelpText>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='membership-input form-column-cell'>
                                    <Form.Group controlId="contact">
                                        <Form.ControlLabel>Contact No.</Form.ControlLabel>
                                        <Form.Control
                                            name="contact"
                                            value={formValues.contact}
                                            onChange={value => handleChange('contact', value)}
                                        />
                                        {errors.contact && <Form.HelpText style={{ color: 'red' }}>{errors.contact}</Form.HelpText>}
                                    </Form.Group>
                                </Col>
                                <Col className='membership-input form-column-cell'>
                                    <Form.Group controlId="city">
                                        <Form.ControlLabel>City</Form.ControlLabel>
                                        <Form.Control
                                            name="city"
                                            value={formValues.city}
                                            onChange={value => handleChange('city', value)}
                                        />
                                        {errors.city && <Form.HelpText style={{ color: 'red' }}>{errors.city}</Form.HelpText>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='membership-input form-column-cell'>
                                    <Form.Group controlId="state">
                                        <Form.ControlLabel>State</Form.ControlLabel>
                                        <Form.Control
                                            name="state"
                                            value={formValues.state}
                                            onChange={value => handleChange('state', value)}
                                        />
                                        {errors.state && <Form.HelpText style={{ color: 'red' }}>{errors.state}</Form.HelpText>}
                                    </Form.Group>
                                </Col>
                                <Col className='membership-input form-column-cell'>
                                    <Form.Group controlId="pincode">
                                        <Form.ControlLabel>Pin-Code</Form.ControlLabel>
                                        <Form.Control
                                            name="pincode"
                                            value={formValues.pincode}
                                            onChange={value => handleChange('pincode', value)}
                                        />
                                        {errors.pincode && <Form.HelpText style={{ color: 'red' }}>{errors.pincode}</Form.HelpText>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='membership-input form-column-cell'>
                                    <Form.Group controlId="fax">
                                        <Form.ControlLabel>Fax</Form.ControlLabel>
                                        <Form.Control
                                            name="fax"
                                            value={formValues.fax}
                                            onChange={value => handleChange('fax', value)}
                                        />
                                        {errors.fax && <Form.HelpText style={{ color: 'red' }}>{errors.fax}</Form.HelpText>}
                                    </Form.Group>
                                </Col>
                                <Col className='membership-input form-column-cell'>
                                    <Form.Group controlId="website">
                                        <Form.ControlLabel>Website</Form.ControlLabel>
                                        <Form.Control
                                            name="website"
                                            value={formValues.website}
                                            onChange={value => handleChange('website', value)}
                                        />
                                        {errors.website && <Form.HelpText style={{ color: 'red' }}>{errors.website}</Form.HelpText>}
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className='membership-input' controlId="email-1">
                                <Form.ControlLabel>Email</Form.ControlLabel>
                                <Form.Control
                                    name="email"
                                    value={formValues.email}
                                    onChange={value => handleChange('email', value)}
                                />
                                {errors.email && <Form.HelpText style={{ color: 'red' }}>{errors.email}</Form.HelpText>}
                            </Form.Group>

                            <Form.Group className='membership-input' controlId="profile">
                                <Form.ControlLabel>Company Profile</Form.ControlLabel>
                                <Input as="textarea" rows={3} placeholder="Enter Company Profile" />
                            </Form.Group>

                            <Form.Group className='membership-input' controlId="products">
                                <Form.ControlLabel>Products & Services</Form.ControlLabel>
                                <Input as="textarea" rows={3} placeholder="Products & Services" />
                            </Form.Group>

                            <Box mt="4">
                                <Form.ControlLabel>Management Team</Form.ControlLabel>
                                <Table variant="striped">
                                    <Thead>
                                        <Tr>
                                            <Th color={'#070740'}>Name</Th>
                                            <Th color={'#070740'}>Designation</Th>
                                            <Th color={'#070740'}>Email</Th>
                                            <Th></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {managementRows.map((row, index) => (
                                            <Tr className='membership-input' key={index}>
                                                <Td>
                                                    <Input value={row.name} onChange={value => handleManagementChange(index, 'name', value)} />
                                                </Td>
                                                <Td>
                                                    <Input value={row.designation} onChange={value => handleManagementChange(index, 'designation', value)} />
                                                </Td>
                                                <Td>
                                                    <Input value={row.email} onChange={value => handleManagementChange(index, 'email', value)} />
                                                </Td>
                                                {index === managementRows.length - 1 && canAddRow && ( 
                                                    <Td>
                                                        <Button onClick={handleAddRow} mt={4} colorScheme="teal">+</Button>
                                                    </Td>
                                                )}
                                                {managementRows.length > 1 && index === managementRows.length - 1 && ( 
                                                    <Td>
                                                        <Button onClick={() => handleRemoveRow(index)} mt={4} ml={4} colorScheme="red">-</Button>
                                                    </Td>
                                                )}
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>

                            </Box>

                            <Form.ControlLabel>Type of Company</Form.ControlLabel>

                            <RadioGroup name="radio-group" defaultValue={companyType}>
                                <Flex p={3} className='membership-input'>
                                    <Radio
                                        value="public"
                                        onChange={() => setCompanyType(prevState => ({ ...prevState, type: 'public', details: '' }))}
                                    >Public Sector</Radio>
                                    {companyType.type == 'public' && <Input className='radio-input' placeholder='Name of Department'
                                        onChange={(e) => setCompanyType(prevState => ({ ...prevState, type: 'public', details: e }))}
                                    />}
                                </Flex>
                                <Flex p={3} className='membership-input'>
                                    <Radio
                                        value="private"
                                        onChange={() => setCompanyType(prevState => ({ ...prevState, type: 'private', details: '' }))}
                                    >Private</Radio>
                                </Flex>
                                <Flex p={3} className='membership-input'>
                                    <Radio
                                        value="partnership"
                                        onChange={() => setCompanyType(prevState => ({ ...prevState, type: 'partnership', details: '' }))}
                                    >Partnership</Radio>
                                </Flex>
                                <Flex p={3} className='membership-input'>
                                    <Radio
                                        value="proprietorship"
                                        onChange={() => setCompanyType(prevState => ({ ...prevState, type: 'proprietorship', details: '' }))}
                                    >Proprietorship Owner</Radio>
                                    {companyType.type == 'proprietorship' && <Input className='radio-input' placeholder='Enter Details'
                                        onChange={(e) => setCompanyType(prevState => ({ ...prevState, type: 'proprietorship', details: e }))}
                                    />}
                                </Flex>
                            </RadioGroup>

                            <Box mt="4">
                                <Form.ControlLabel>Turnover for last three years</Form.ControlLabel>
                                <Table variant="striped">
                                    <Thead>
                                        <Tr>
                                            <Th color={'#070740'}>Year</Th>
                                            <Th color={'#070740'}>Turnover</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {turnover.map((elem, idx) => (
                                            <Tr className='membership-input' key={idx}>
                                                <Td>
                                                    <Form.ControlLabel>{elem.year}</Form.ControlLabel>
                                                </Td>
                                                <Td>
                                                    <Input
                                                        value={elem.turnover}
                                                        onChange={(e) => {
                                                            const newTurnover = [...turnover];
                                                            newTurnover[idx].turnover = e;
                                                            setTurnover(newTurnover);
                                                        }}
                                                    />
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>

                            </Box>

                            <Form.Group className='membership-input' controlId="correspondence">
                                <Form.ControlLabel>Address for Correspondence</Form.ControlLabel>
                                <Form.Control
                                    name="correspondence"
                                    value={formValues.correspondence}
                                    onChange={value => handleChange('correspondence', value)}
                                />
                                {errors.correspondence && <Form.HelpText style={{ color: 'red' }}>{errors.correspondence}</Form.HelpText>}
                            </Form.Group>

                            <Form.Group className='membership-input' controlId="profile">
                                <Form.ControlLabel>Addition Information (If Any)</Form.ControlLabel>
                                <Input as="textarea" rows={3} placeholder="Enter Details" />
                            </Form.Group>

                            <Box mt="4">
                                <Form.ControlLabel>Membership Fees</Form.ControlLabel>
                                <Table variant="striped">
                                    <Thead>
                                        <Tr >
                                            <Th color={'#070740'}>Annual Turn Over of the Company</Th>
                                            <Th color={'#070740'}>Lifetime Donor Membership </Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Admission Fee </Td>
                                            <Td>Rs. 50,000.00 </Td>
                                        </Tr>
                                        {fee.map((f, index) => (
                                            <Tr key={index} style={{ backgroundColor: f.highlight ? '#6bdfff' : 'transparent' }}>
                                                <Td>{f.turnover}</Td>
                                                <Td>{f.fee}</Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>

                            </Box>

                            <Form.Group>
                                <ButtonToolbar>
                                    <Button appearance="primary" type="submit">Submit</Button>
                                    <Button appearance="default" onClick={() => handleCancel()}>Cancel</Button>
                                </ButtonToolbar>
                            </Form.Group>
                        </Form>
                    </Box> */}
                    {/* Single Form */}

                    <Box
                        borderWidth="1px"
                        rounded="lg"
                        shadow="1px 1px 3px rgba(0,0,0,0.3)"
                        marginLeft={'5%'}
                        marginRight={'5%'}
                        marginBottom={'5%'}
                        backgroundColor="rgba(255, 255, 255, 0.8)"
                        p={6}
                        as="form">
                        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
                        {step === 1 ? <Form3 /> : step === 2 ? <Form1 /> : <Form2 />}
                        <ButtonGroup mt="5%" w="100%">
                            <Flex w="100%" justifyContent="space-between">
                                <Flex>
                                    <Button
                                        onClick={() => {
                                            setStep(step - 1)
                                            setProgress(progress - 33.33)
                                        }}
                                        isDisabled={step === 1}
                                        colorScheme="teal"
                                        variant="solid"
                                        w="7rem"
                                        mr="5%">
                                        Back
                                    </Button>
                                    <Button
                                        w="7rem"
                                        isDisabled={step === 3}
                                        onClick={() => {
                                            setStep(step + 1)
                                            if (step === 3) {
                                                setProgress(100)
                                            } else {
                                                setProgress(progress + 33.33)
                                            }
                                        }}
                                        colorScheme="teal"
                                        variant="outline">
                                        Next
                                    </Button>
                                </Flex>
                                {step === 3 ? (
                                    <Flex>
                                        <Button
                                            w="7rem"
                                            // colorScheme="red"
                                            // variant="solid"
                                            colorScheme="#070740"
                                            variant="outline"
                                            mr="5%"
                                            onClick={() => {
                                                toast({
                                                    title: 'Account created.',
                                                    description: "We've created your account for you.",
                                                    status: 'success',
                                                    duration: 3000,
                                                    isClosable: true,
                                                })
                                            }}>
                                            Cancel
                                        </Button>
                                        <Button
                                            w="7rem"
                                            // colorScheme="red"
                                            // variant="solid"
                                            background={'#070740'}
                                            color={'#fff'}
                                            _hover={{
                                                background: '#bee3f8',
                                                color: 'black'
                                            }}
                                            onClick={() => {
                                                toast({
                                                    title: 'Account created.',
                                                    description: "We've created your account for you.",
                                                    status: 'success',
                                                    duration: 3000,
                                                    isClosable: true,
                                                })
                                            }}>
                                            Submit
                                        </Button>
                                    </Flex>
                                ) : null}
                            </Flex>
                        </ButtonGroup>
                    </Box>

                </Box>

                <Box mt="auto" w="100%">
                    <Footer />
                </Box>
            </Box>
            <Toaster />
        </>
    );
}

export default MembershipForm;