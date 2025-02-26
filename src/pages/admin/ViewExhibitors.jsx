import {
    Box,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,
    Heading,
    Button
} from '@chakra-ui/react'

import Sidebar from './layout/Sidebar'
import MobileNav from './layout/MobileNav'
import { useEffect, useState } from 'react';
import adminAxios from '../../api/axios';
import { Pagination, SelectPicker, Toggle } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from "react-icons/fa";
import AddEvent from './AddEvent';
import EditEvent from './EditEvent';
import './TableStyles.css';
import { RotatingLines } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import AddExhibitorModal from './AddExhibitor';
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';
import EditExhibitorModal from './EditExhibitor';

const AdminExihibitors = () => {
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
        get_events()
    }, [eventFlag, activePage, limit])

    async function get_events() {
        setLoader(true);
        await adminAxios.get(`${import.meta.env.VITE_API_URL}/admin/exhibitors?pageNum=${activePage}&&perPage=${limit}`).then(res => {
            debugger
            // setTotal(res.data.pagination.totalPages * limit);
            // setActivePage(res.data.pagination.currentPage);
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
                debugger
                await adminAxios.delete(`${import.meta.env.VITE_API_URL}/admin/exhibitor/${eventId}`).then(res => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "The Exhibitor has been deleted.",
                        icon: "success"
                    });
                    setEventFlag(prev => !prev)
                }).catch(err => {
                    // debugger
                    console.log(err);

                })

            }
        });
    }

    async function toggleExhibitor(exhibitorId, exhibitorName) {
    
        await adminAxios.patch(`${import.meta.env.VITE_API_URL}/admin/exhibitor/${exhibitorId}`).then(res => {
            // Swal.fire({
            //     title: "Status Changed!",
            //     text: `The Exhibitor has been toggled.`,
            //     icon: "success"
            // });
            toast.success(`The Exhibitor ${exhibitorName} has been toggled`)
            setEventFlag(prev => !prev)
        }).catch(err => {
            debugger
            console.log(err);

        })
    }

    const toggleStyle = {
        backgroundColor: 'red',
        borderColor: 'red',
      };
    
      const toggleCheckedStyle = {
        backgroundColor: 'green',
        borderColor: 'green',
      };

      function sponsorType(val){
        if(val==1){
            return 'Diamond';
        }else if(val==2){
            return 'Gold';
        }else {
            return 'Silver';
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
                            <Heading p={5}>Exhibitors</Heading>
                            <Button p={5} background={'teal'} onClick={() => setAddModal(true)}>Add Exhibitor</Button>
                        </div>
                            <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white" }}>
                                <thead>
                                    <tr>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Image</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Exhibitor</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Exhibitor Type</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Added Date</th>
                                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => (
                                        <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                                            <td style={{ padding: "8px", textAlign: "center" }}>
                                                <img src={item.images[0].image} alt="event" style={{ width: "100px", height: "50px", objectFit: "cover" }} />
                                            </td>
                                            <td style={{ padding: "8px", textAlign: "left" }}>{item.exhibitor}</td>
                                            <td style={{ padding: "8px", textAlign: "center" }}> <Toggle 
                                            checked={item.isActive}
                                            onChange={()=>{
                                                toggleExhibitor(item._id, item.exhibitor)
                                            }}
                                            /></td>
                                            <td style={{ padding: "8px", textAlign: "center" }}>{sponsorType(item.exhibitorType)}</td>
                                            <td style={{ padding: "8px", textAlign: "center" }}>{moment(item.createdAt).format('LL')}</td>
                                            <td style={{ padding: "8px", textAlign: "center" }}>
                                                <div style={{ display: 'flex' }}>
                                                    <FaEdit  title='Edit' onClick={()=>handleEdit(item._id)} style={{ cursor: "pointer", marginRight: "10px", color: "blue" }} />
                                                    <FaTrash title='Delete' onClick={() => deleteEvent(item._id, item.exhibitor)} style={{ cursor: "pointer", color: "red" }} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div style={{ padding: 20, background: 'white', display: 'flex', justifyContent: 'space-between' }}>
                                {/* <div>
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
                  </div> */}

                                {/* <Pagination
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
                  /> */}
                            </div>
                        </>
                }


                <AddExhibitorModal addModal={addModal} setAddModal={setAddModal} setEventFlag={setEventFlag} />
                <EditExhibitorModal editModal={editModal} setEditModal={setEditModal} exhibitorId={selectedEvent} setEventFlag={setEventFlag} />
            </Box>
            <Toaster/>
        </Box>
    )
}

export default AdminExihibitors
