import { useEffect, useState } from "react";
import {
    Button
} from '@chakra-ui/react'
import { Form, ButtonToolbar, Input, DatePicker, Modal, SelectPicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import adminAxios from '../../api/axios';
import moment from "moment/moment";

const AddExhibitorModal = ({ addModal, setAddModal, setEventFlag }) => {

    const [file, setFile] = useState(null);
    const [selectedfile, setselectedFile] = useState(null);
    const [files, setFiles] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileErr, setFileErr] = useState(false);

    const [events, setEvents] = useState([])

    const [exhibitorDetails, setexhibitorDetails] = useState({
        exhibitor: '',
        exhibitorType: '',
        event: ''
    })

    async function getEvents() {
        await adminAxios.get(`${import.meta.env.VITE_API_URL}/admin/listevents`).then(res => {
            setEvents(res.data.data.map(event => ({
                label: event.event,
                value: event._id
            })));
        }).catch(err => {
            debugger
            console.log(err);
        })
    }


    useEffect(() => {
        getEvents()
    }, [])

    async function handleSubmit() {
        console.log(exhibitorDetails);
        debugger


        function capitalizeEvent(sentence) {
            return sentence
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        const updatedExhibitor = capitalizeEvent(exhibitorDetails.exhibitor);

        const formData = new FormData();
        formData.append('exhibitor', updatedExhibitor);
        formData.append('event', exhibitorDetails.event);
        formData.append('exhibitorType', exhibitorDetails.exhibitorType);
        for (let file of files) {
            formData.append('image', file);
        }
        await adminAxios.post(`${import.meta.env.VITE_API_URL}/admin/exhibitor`, formData).then(res => {
            setexhibitorDetails({
                exhibitor: '',
                exhibitorType: '',
                event: ''
            })
            setEventFlag(prev => !prev)
            setAddModal(false)
        }).catch(err => {

            console.log(err);
        })

    }

    function handleCancel() {
        setexhibitorDetails({
            exhibitor: '',
            exhibitorType: '',
            event: ''
        })
        setFile(null);
        setAddModal(false)
    }

    const handleFileChange = (e) => {
        const selectedFilesArray = Array.from(e.target.files);
        const validFiles = selectedFilesArray.filter(file => file.type.includes('image'));

        if (validFiles.length === selectedFilesArray.length) {
            setFiles(validFiles);
            setSelectedFiles(validFiles.map(file => URL.createObjectURL(file)));
        } else {
            setFiles([]);
            setSelectedFiles([]);
        }
    };

    return (
        <Modal size={"md"} open={addModal} onClose={() => handleCancel()}>
            <Modal.Header>
                <Modal.Title>Add Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form fluid>
                    <Form.Group controlId="exhibitor">
                        <Form.ControlLabel>Exhibitor</Form.ControlLabel>
                        <Form.Control name="exhibitor" value={exhibitorDetails.exhibitor} onChange={(e) => {

                            setexhibitorDetails({
                                ...exhibitorDetails,
                                exhibitor: e,
                            })
                        }} />
                    </Form.Group>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <Form.Group controlId="event">
                            <Form.ControlLabel>Event</Form.ControlLabel>
                            <SelectPicker data={events} style={{ width: 224 }} onChange={(e) => {
                                setexhibitorDetails({
                                    ...exhibitorDetails,
                                    event: e,
                                })
                            }} />
                        </Form.Group>
                        <Form.Group controlId="event">
                            <Form.ControlLabel>Sponsor Type</Form.ControlLabel>
                            <SelectPicker data={[{ elem: 'Diamond', key: 1 }, { elem: 'Gold', key: 2 }, { elem: 'Silver', key: 3 }].map(
                                item => ({ label: item.elem, value: item.key })
                            )} style={{ width: 224 }} onChange={(e) => {
                                setexhibitorDetails({
                                    ...exhibitorDetails,
                                    exhibitorType: e,
                                })
                            }} />
                        </Form.Group>
                    </div>


                    <div style={{ display: 'flex', marginBottom: '2rem' }}>
                        <Form.Group controlId="name-1" style={{ marginRight: '2rem', marginTop: '1rem' }}>
                            <Form.ControlLabel>Exhibitor Images</Form.ControlLabel>
                            <input multiple type="file" onChange={handleFileChange} />
                        </Form.Group>
                        <div>
                            {fileErr && <p style={{ color: 'red' }}>Please select only image files.</p>}
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {selectedFiles.map((file, index) => (
                                    <img
                                        key={index}
                                        src={file}
                                        alt={`Preview ${index}`}
                                        style={{ height: '150px', width: '150px', marginRight: '10px', marginBottom: '10px' }}
                                    />
                                ))}
                            </div>
                        </div>
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

export default AddExhibitorModal;