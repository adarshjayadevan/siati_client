import { useState } from "react";
import {
    Button
} from '@chakra-ui/react'
import { Form, ButtonToolbar, Input, DatePicker, Modal } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import adminAxios from '../../api/axios';
import moment from "moment/moment";
import { FaBullseye } from "react-icons/fa";

const AddDocument = ({ addModal, setAddModal, setEventFlag }) => {

    const [file, setFile] = useState(null);
    const [selectedfile, setselectedFile] = useState(null);
    const [fileErr, setFileErr] = useState(false);

    const [eventDetails, setEventDetails] = useState({
        filename: '',
        detail: ''
    })

    const [eventErr, setEventErr] = useState({
        filename: false,
        detail: false
    })

    const [eventErrorMessage, setEventErrorMessage] = useState({
        filename: '',
        detail: ''
    })

    async function handleSubmit() {
        console.log(eventDetails);
        // debugger


        if (!file) {
            return;
        }
        // console.log(eventDetails);
        // debugger
        const formData = new FormData();
        formData.append('filename', eventDetails.filename);
        formData.append('detail', eventDetails.detail);
        formData.append('file', file);
        await adminAxios.post(`${import.meta.env.VITE_API_URL}/admin/upload`, formData).then(res => {
            setEventDetails({
                filename: '',
                detail: ''
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
            filename: '',
            detail: ''
        })
        setEventErrorMessage({
            filename: '',
            detail: ''
        })
        setEventErr({
            filename: false,
            detail: false
        })
        setFile(null);
        setAddModal(false)
    }

    return (
        <Modal size={"md"} open={addModal} onClose={() => handleCancel()}>
            <Modal.Header>
                <Modal.Title>Upload File</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form fluid>
                    <Form.Group controlId="event">
                        <Form.ControlLabel>File-Type</Form.ControlLabel>
                        <Form.Control name="event" value={eventDetails.filename} onChange={(e) => {
                            setEventErr({
                                ...eventErr,
                                filename: false,
                            })
                            setEventErrorMessage({
                                ...eventErrorMessage,
                                filename: '',
                            })
                            setEventDetails({
                                ...eventDetails,
                                filename: e,
                            })
                        }} />
                        {eventErr.filename && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.filename}</Form.HelpText>}
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.ControlLabel>Detail</Form.ControlLabel>
                        <Form.Control name="description" value={eventDetails.detail} onChange={(e) => {
                            setEventErr({
                                ...eventErr,
                                detail: false,
                            })
                            setEventErrorMessage({
                                ...eventErrorMessage,
                                detail: '',
                            })
                            setEventDetails({
                                ...eventDetails,
                                detail: e,
                            })
                        }} />
                        {eventErr.detail && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.detail}</Form.HelpText>}
                    </Form.Group>
                    <div style={{ display: 'flex', marginBottom: '2rem' }}>
                        <Form.Group controlId="name-1" style={{ marginRight: '2rem', marginTop: '1rem' }}>
                            <Form.ControlLabel>Document</Form.ControlLabel>
                            <input type="file" onChange={(e) => {
                                const file = e.target.files[0];
                                const acceptedFormats = [
                                    'image/png', 'image/jpeg', 'image/jpg', 'image/gif',
                                    'application/pdf',
                                    'application/msword',
                                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                                    'application/vnd.ms-excel',
                                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                                ];

                                if (file && acceptedFormats.includes(file.type.toLowerCase())) {
                                    setFile(file);
                                    setFileErr(false);
                                    setselectedFile(URL.createObjectURL(file));
                                } else {
                                    setFile(null);
                                    setFileErr(true);
                                }
                            }} />
                            {fileErr && <Form.HelpText style={{ color: 'red' }}>{'Select A Document File'}</Form.HelpText>}
                        </Form.Group>
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

export default AddDocument;