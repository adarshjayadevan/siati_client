import { useState } from "react";
import {
    Button
} from '@chakra-ui/react'
import { Form, ButtonToolbar, Input, DatePicker, Modal } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import adminAxios from '../../api/axios';
import moment from "moment/moment";

const AddAlbum = ({ addModal, setAddModal, setEventFlag }) => {

    const [file, setFile] = useState(null);
    const [selectedfile, setselectedFile] = useState(null);
    const [fileErr, setFileErr] = useState(false);

    const [eventDetails, setEventDetails] = useState({
        title: '',
        description: '',
        date: '',
    })

    const [eventErr, setEventErr] = useState({
        title: false,
        description: false,
        date: false,
    })

    const [eventErrorMessage, setEventErrorMessage] = useState({
        title: '',
        description: '',
        date: '',
    })

    async function handleSubmit() {
        console.log(eventDetails);
        // debugger

        if (eventDetails.title.trim() == '' || !eventDetails.title || eventDetails.title.length>100) {
            setEventErrorMessage({
                ...eventErr,
                title: 'Enter Galley Event Here '
            })
            setEventErr({
                ...eventErr,
                title: true
            })
            return;
        }

        function capitalizeEvent(sentence) {
            return sentence
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        const updatedEvent = capitalizeEvent(eventDetails.title);

        if (eventDetails.description.trim() == '' || !eventDetails.description || eventDetails.description.length>100) {
            setEventErrorMessage({
                ...eventErr,
                description: 'Enter Event Description'
            })
            setEventErr({
                ...eventErr,
                description: true
            })
            return;
        }
        if (!eventDetails.date) {
            setEventErrorMessage({
                ...eventErr,
                date: 'Enter Event Date'
            })
            setEventErr({
                ...eventErr,
                date: true
            })
            return;
        }

        if (!file) {
            return;
        }
        // console.log(eventDetails);
        // debugger
        const formData = new FormData();
        formData.append('title', updatedEvent);
        formData.append('description', eventDetails.description);
        formData.append('date', moment(eventDetails.date).format('DD-MM-YYYY'));
        formData.append('image', file);
        await adminAxios.post(`${import.meta.env.VITE_API_URL}/admin/galleryevent`, formData).then(res => {
            setEventDetails({
                title: '',
                description: '',
                date: '',
            })
            setEventFlag(prev => !prev)
            setAddModal(false)
        }).catch(err => {
            debugger
            // if (err.response.data.message == 'event already added') {
            //     setEventErrorMessage({
            //         ...eventErr,
            //         location: 'This Event was Added Earlier'
            //     })
            //     setEventErr({
            //         ...eventErr,
            //         location: true
            //     })
            //     return;
            // }
            console.log(err);
        })

    }

    function handleCancel() {
        setEventDetails({
            title: '',
            description: '',
            date: '',
        })
        setEventErrorMessage({
            title: '',
            description: '',
            date: '',
        })
        setEventErr({
            title: false,
            description: false,
            date: false,
        })
        setFile(null);
        setAddModal(false)
    }

    return (
        <Modal size={"md"} open={addModal} onClose={() => handleCancel()}>
            <Modal.Header>
                <Modal.Title>Add Gallery Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form fluid>
                    <Form.Group controlId="event">
                        <Form.ControlLabel>Title</Form.ControlLabel>
                        <Form.Control name="event" value={eventDetails.title} onChange={(e) => {
                            setEventErr({
                                ...eventErr,
                                title: false,
                            })
                            setEventErrorMessage({
                                ...eventErrorMessage,
                                title: '',
                            })
                            setEventDetails({
                                ...eventDetails,
                                title: e,
                            })
                        }} />
                        {eventErr.title && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.title}</Form.HelpText>}
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.ControlLabel>Description</Form.ControlLabel>
                        <Form.Control name="description" value={eventDetails.description} onChange={(e) => {
                            setEventErr({
                                ...eventErr,
                                description: false,
                            })
                            setEventErrorMessage({
                                ...eventErrorMessage,
                                description: '',
                            })
                            setEventDetails({
                                ...eventDetails,
                                description: e,
                            })
                        }} />
                        {eventErr.description && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.description}</Form.HelpText>}
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.ControlLabel>Date</Form.ControlLabel>
                        <DatePicker format="MMM dd, yyyy" onChange={(e) => {
                            setEventErr({
                                ...eventErr,
                                date: false,
                            })
                            setEventErrorMessage({
                                ...eventErrorMessage,
                                date: '',
                            })
                            setEventDetails({
                                ...eventDetails,
                                date: e,
                            })
                        }} />
                        {eventErr.date && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.date}</Form.HelpText>}
                    </Form.Group>
                    <div style={{ display: 'flex', marginBottom: '2rem' }}>
                        <Form.Group controlId="name-1" style={{ marginRight: '2rem', marginTop: '1rem' }}>
                            <Form.ControlLabel>Event Image</Form.ControlLabel>
                            <input type="file" onChange={(e) => {
                                if (!e.target.files[0].type.includes('image')) {
                                    setFile(null)
                                    setFileErr(true);
                                } else {
                                    setFile(e.target.files[0])
                                    setFileErr(false);
                                }
                                setselectedFile(URL.createObjectURL(e.target.files[0]))
                            }} />
                            {fileErr && <Form.HelpText style={{ color: 'red' }}>{'Select An Image File'}</Form.HelpText>}
                        </Form.Group>
                        {file && !fileErr && <img src={selectedfile} style={{ height: '150px', width: '150px' }} />}
                    </div>
                    <Form.Group>
                        <ButtonToolbar>
                            <Button appearance="primary" onClick={() => handleSubmit()}>Submit</Button>
                            <Button appearance="default" onClick={() => handleCancel()}>Cancel</Button>
                        </ButtonToolbar>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddAlbum;