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
import { Pagination, SelectPicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from "react-icons/fa";
import AddEvent from './AddEvent';
import EditEvent from './EditEvent';
import { RotatingLines } from 'react-loader-spinner';
import Swal from 'sweetalert2';

const AdminEvents = () => {
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
    // debugger
    setLoader(true);
    await adminAxios.get(`${import.meta.env.VITE_API_URL}/admin/events?pageNum=${activePage}&&perPage=${limit}`).then(res => {
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
              <Heading p={5}>Upcoming Events</Heading>
              <Button p={5} background={'teal'} onClick={() => setAddModal(true)}>Add Event</Button>
            </div>
              <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white" }}>
                <thead>
                  <tr>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Image</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Title</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Date</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Duration</th>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                      <td style={{ padding: "8px", textAlign: "center" }}>
                        <img src={item.image} alt="event" style={{ width: "100px", height: "50px", objectFit: "cover" }} />
                      </td>
                      <td style={{ padding: "8px", textAlign: "left" }}>{item.event}</td>
                      <td style={{ padding: "8px", textAlign: "center" }}>{item.startDate}</td>
                      <td style={{ padding: "8px", textAlign: "center" }}>{item.duration}</td>
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


        <AddEvent addModal={addModal} setAddModal={setAddModal} setEventFlag={setEventFlag} />
        <EditEvent editModal={editModal} setEditModal={setEditModal} event={selectedEvent} setEventFlag={setEventFlag} />
      </Box>
    </Box>
  )
}

export default AdminEvents
