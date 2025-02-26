import { useState } from "react";
import {
    Button
} from '@chakra-ui/react'
import { Form, ButtonToolbar, Input, DatePicker, Modal } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import adminAxios from '../../api/axios';
import moment from "moment/moment";

const AddEvent = ({ addModal, setAddModal, setEventFlag }) => {

    const [file, setFile] = useState(null);
    const [selectedfile, setselectedFile] = useState(null);
    const [fileErr, setFileErr] = useState(false);

    const [eventDetails, setEventDetails] = useState({
        event: '',
        location: '',
        description: '',
        startDate: '',
        endDate: '',
        eventShort: ''
    })

    const [eventErr, setEventErr] = useState({
        event: false,
        location: false,
        description: false,
        startDate: false,
        endDate: false,
        eventShort: false
    })

    const [eventErrorMessage, setEventErrorMessage] = useState({
        event: '',
        location: '',
        description: '',
        startDate: '',
        endDate: '',
        eventShort: ''
    })

    async function handleSubmit() {
        console.log(eventDetails);
        // debugger

        if (eventDetails.event.trim() == '' || !eventDetails.event) {
            setEventErrorMessage({
                ...eventErr,
                event: 'Enter Event Name Here'
            })
            setEventErr({
                ...eventErr,
                event: true
            })
            return;
        }

        function capitalizeEvent(sentence) {
            return sentence
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        const updatedEvent = capitalizeEvent(eventDetails.event);

        if (eventDetails.location.trim() == '' || !eventDetails.location) {
            setEventErrorMessage({
                ...eventErr,
                location: 'Enter Event Location'
            })
            setEventErr({
                ...eventErr,
                location: true
            })
            return;
        }
        if (eventDetails.description.trim() == '' || !eventDetails.description) {
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
        if (!eventDetails.startDate) {
            setEventErrorMessage({
                ...eventErr,
                startDate: 'Enter Event Date'
            })
            setEventErr({
                ...eventErr,
                startDate: true
            })
            return;
        }
        if (!eventDetails.endDate) {
            setEventErrorMessage({
                ...eventErr,
                endDate: 'Enter Event End Date'
            })
            setEventErr({
                ...eventErr,
                endDate: true
            })
            return;
        }

        if (eventDetails.eventShort.length > 180) {
            setEventErrorMessage({
                ...eventErr,
                eventShort: 'Short Description should be lesser than 180 characters'
            })
            setEventErr({
                ...eventErr,
                eventShort: true
            })
            return;
        }
        if (!file) {
            return;
        }
        // console.log(eventDetails);
        // debugger
        const formData = new FormData();
        formData.append('event', updatedEvent);
        formData.append('description', eventDetails.description);
        formData.append('startDate', moment(eventDetails.startDate).format('DD-MM-YYYY'));
        formData.append('endDate', moment(eventDetails.endDate).format('DD-MM-YYYY'));
        formData.append('location', eventDetails.location);
        formData.append('eventShort', eventDetails.eventShort);
        formData.append('image', file);
        await adminAxios.post(`${import.meta.env.VITE_API_URL}/admin/event`, formData).then(res => {
            setItems(res.data.data);
            debugger
            setEventDetails({
                event: '',
                location: '',
                description: '',
                startDate: '',
                endDate: '',
                eventShort: ''
            })
            setEventFlag(prev => !prev)
            setAddModal(false)
        }).catch(err => {
            if (err.response.data.message == 'event already added') {
                setEventErrorMessage({
                    ...eventErr,
                    location: 'This Event was Added Earlier'
                })
                setEventErr({
                    ...eventErr,
                    location: true
                })
                return;
            }
            console.log(err);
        })

    }

    function handleCancel() {
        setEventDetails({
            event: '',
            location: '',
            description: '',
            startDate: '',
            endDate: '',
            eventShort: ''
        })
        setEventErrorMessage({
            event: '',
            location: '',
            description: '',
            startDate: '',
            endDate: '',
            eventShort: ''
        })
        setEventErr({
            event: false,
            location: false,
            description: false,
            startDate: false,
            endDate: false,
            eventShort: false
        })
        setFile(null);
        setAddModal(false)
    }

    return (
        <Modal size={"md"} open={addModal} onClose={() => handleCancel()}>
            <Modal.Header>
                <Modal.Title>Add Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form fluid>
                    <Form.Group controlId="event">
                        <Form.ControlLabel>Event</Form.ControlLabel>
                        <Form.Control name="event" value={eventDetails.event} onChange={(e) => {
                            setEventErr({
                                ...eventErr,
                                event: false,
                            })
                            setEventErrorMessage({
                                ...eventErrorMessage,
                                event: '',
                            })
                            setEventDetails({
                                ...eventDetails,
                                event: e,
                            })
                        }} />
                        {eventErr.event && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.event}</Form.HelpText>}
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.ControlLabel>Description</Form.ControlLabel>
                        <Input as="textarea" value={eventDetails.description} rows={3} placeholder="Enter Details" onChange={(e) => {
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
                    <div style={{ display: 'flex' }}>
                        <Form.Group controlId="email-1" style={{ marginRight: '2rem' }}>
                            <Form.ControlLabel>Start Date</Form.ControlLabel>
                            <DatePicker format="MMM dd, yyyy" onChange={(e) => {
                                setEventErr({
                                    ...eventErr,
                                    startDate: false,
                                })
                                setEventErrorMessage({
                                    ...eventErrorMessage,
                                    startDate: '',
                                })
                                setEventDetails({
                                    ...eventDetails,
                                    startDate: e,
                                })
                            }} />
                            {eventErr.startDate && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.startDate}</Form.HelpText>}
                        </Form.Group>
                        <Form.Group controlId="email-1">
                            <Form.ControlLabel>End Date</Form.ControlLabel>
                            <DatePicker format="MMM dd, yyyy"
                                onChange={(e) => {
                                    setEventErr({
                                        ...eventErr,
                                        endDate: false,
                                    })
                                    setEventErrorMessage({
                                        ...eventErrorMessage,
                                        endDate: '',
                                    })
                                    setEventDetails({
                                        ...eventDetails,
                                        endDate: e,
                                    })
                                }} />
                            {eventErr.endDate && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.endDate}</Form.HelpText>}
                        </Form.Group>
                    </div>
                    <Form.Group controlId="location">
                        <Form.ControlLabel>Event Location</Form.ControlLabel>
                        <Form.Control name="location" value={eventDetails.location} onChange={(e) => {
                            setEventErr({
                                ...eventErr,
                                location: false,
                            })
                            setEventErrorMessage({
                                ...eventErrorMessage,
                                location: '',
                            })
                            setEventDetails({
                                ...eventDetails,
                                location: e,
                            })
                        }} />
                        {eventErr.location && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.location}</Form.HelpText>}
                    </Form.Group>
                    <Form.Group controlId="eventshort">
                        <Form.ControlLabel>Event Short</Form.ControlLabel>
                        <Form.Control name="eventshort" value={eventDetails.eventShort} onChange={(e) => {
                            setEventErr({
                                ...eventErr,
                                eventShort: false,
                            })
                            setEventErrorMessage({
                                ...eventErrorMessage,
                                eventShort: '',
                            })
                            setEventDetails({
                                ...eventDetails,
                                eventShort: e
                            })
                        }} />
                        {eventErr.eventShort && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.eventShort}</Form.HelpText>}
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

export default AddEvent;