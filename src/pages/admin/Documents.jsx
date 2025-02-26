import {
    Box,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,
    Heading,
    Button,
    Text
} from '@chakra-ui/react'

import Sidebar from './layout/Sidebar'
import MobileNav from './layout/MobileNav'
import { useEffect, useState } from 'react';
import adminAxios from '../../api/axios';
import { Pagination, SelectPicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit, FaFilePdf, FaFileWord } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";
import AddEvent from './AddEvent';
import EditEvent from './EditEvent';
import { RotatingLines } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import axios from 'axios';
import AddDocument from './UploadFile';

const Documents = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [items, setItems] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState('');
    const [loader, setLoader] = useState(false);
    const [eventFlag, setEventFlag] = useState(false);

    const [activePage, setActivePage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(200);
    const limitOptions = [10, 20, 30, 50, 100];

    useEffect(() => {
        get_documents()
    }, [eventFlag, activePage, limit])

    async function get_documents() {
        // debugger
        setLoader(true);
        await adminAxios.get(`${import.meta.env.VITE_API_URL}/admin/documents?pageNum=${activePage}&&perPage=${limit}`).then(res => {
            setTotal(res.data.pagination.totalPages * limit);
            setActivePage(res.data.pagination.currentPage);
            setItems(res.data.data);
            setLoader(false);
        }).catch(err => {
            setLoader(false);
            if (err.response.data.message == "Authorization failed due to  jwt expired" || err.response.data.message == "Unauthorized") {
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                navigate('/admin/login');
            }
            console.log(err);

        })
    }

    function handleEdit(e) {
        setSelectedEvent(e)
        setEditModal(true);
    }

    async function deleteEvent(eventId, eventName) {
        Swal.fire({
            title: `Delete "${eventName}"?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await adminAxios.delete(`${import.meta.env.VITE_API_URL}/admin/event/${eventId}`).then(res => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "The Event has been deleted.",
                        icon: "success"
                    });
                    setEventFlag(prev => !prev)
                }).catch(err => {
                    debugger
                    console.log(err);

                })

            }
        });
    }

    async function downloadForm(docId) {
        debugger
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/download/${docId}`, {
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

        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
    }

    function renderCellOne(val) {
        if (val.contentType == 'application/pdf') {
            return <div style={{ display: 'flex',
              }}>
                <FaFilePdf onClick={() => downloadForm(val._id.toString())} style={{ fontSize: 'xx-large', color: 'red', cursor: 'pointer' }} />
                <Text paddingLeft={'2rem'} _hover={{ cursor: 'pointer',color:'blue' }} onClick={() => downloadForm(val._id.toString())}>{val.filename.split('.')[0]}</Text>
            </div>
        } else if (val.contentType.includes('spreadsheetml')) {
            return <div style={{ display: 'flex',
              }}>
                <SiMicrosoftexcel onClick={() => downloadForm(val._id.toString())} style={{ fontSize: 'xx-large', color: 'green', cursor: 'pointer' }} />
                <Text paddingLeft={'2rem'} _hover={{ cursor: 'pointer',color:'blue' }} onClick={() => downloadForm(val._id.toString())}>{val.filename.split('.')[0]}</Text>
            </div>
        } else {
            return <div style={{ display: 'flex',
              }}>
                <FaFileWord onClick={() => downloadForm(val._id.toString())} style={{ fontSize: 'xx-large', color: 'blue', cursor: 'pointer' }} />
                <Text paddingLeft={'2rem'} _hover={{ cursor: 'pointer',color:'blue' }} onClick={() => downloadForm(val._id.toString())}>{val.filename.split('.')[0]}</Text>
            </div>
        }
    }


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

                {
                    loader ? <Box minH="70vh" display="flex" justifyContent="center" alignItems="center">
                        <RotatingLines
                            visible={true}
                            height="48"
                            width="48"
                            color="#000080"
                            strokeColor='#000080'
                            strokeWidth="2"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </Box> :
                        <><div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Heading p={5}>Documents</Heading>
                            <Button p={5} background={'teal'} onClick={() => setAddModal(true)}>Add File</Button>
                        </div>
                            <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white" }}>
                                <thead>
                                    <tr>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>File</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Type</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Uploaded Date</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => (
                                        <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                                            <td style={{ padding: "8px", textAlign: "center" }}>
                                                {renderCellOne(item)}
                                            </td>
                                            <td style={{ padding: "8px", textAlign: "left" }}>{item.metadata.name}</td>
                                            <td style={{ padding: "8px", textAlign: "center" }}>{item.uploadDate}</td>
                                            <td style={{ padding: "8px", textAlign: "center" }}>
                                                <div style={{ display: 'flex' }}>
                                                    <FaEdit onClick={() => handleEdit(item._id)} title='Edit' style={{ cursor: "pointer", marginRight: "10px", color: "blue" }} />
                                                    <FaTrash title='Delete' onClick={() => deleteEvent(item._id, item.event)} style={{ cursor: "pointer", color: "red" }} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div style={{ padding: 20, background: 'white', display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <span style={{ marginRight: 20 }}>
                                        Entries per page:
                                        <SelectPicker
                                            value={limit}
                                            onChange={setLimit}
                                            cleanable={false}
                                            searchable={false}
                                            data={limitOptions.map(value => ({ value, label: value }))}
                                            style={{ width: 120, marginLeft: 10 }}
                                        />
                                    </span>
                                </div>

                                <Pagination
                                    total={total}
                                    limit={limit}
                                    activePage={activePage}
                                    onChangePage={setActivePage}
                                    // onChange={()=>get_events()}
                                    onChangeLimit={setLimit}
                                    maxButtons={5}
                                    prev
                                    next
                                    first
                                    last
                                />
                            </div>
                        </>
                }


                <AddDocument addModal={addModal} setAddModal={setAddModal} setEventFlag={setEventFlag} />
                <EditEvent editModal={editModal} setEditModal={setEditModal} event={selectedEvent} setEventFlag={setEventFlag} />
            </Box>
        </Box>
    )
}

export default Documents
