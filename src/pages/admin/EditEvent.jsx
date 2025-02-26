import { useEffect, useState } from "react";
import {
  Button, Box
} from '@chakra-ui/react';
import { Form, ButtonToolbar, Input, DatePicker, Modal } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import adminAxios from '../../api/axios';
import moment from "moment/moment";
import { RotatingLines } from 'react-loader-spinner';

const EditEvent = ({ editModal, setEditModal, event, setEventFlag }) => {
  const [eventDetails, setEventDetails] = useState({});
  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [eventname, setEventName] = useState('')
  const [fileErr, setFileErr] = useState(false);
  const [loader, setLoader] = useState(false);

  const [eventErr, setEventErr] = useState({
    event: false,
    location: false,
    description: false,
    startDate: false,
    endDate: false,
    eventShort: false
  });

  const [eventErrorMessage, setEventErrorMessage] = useState({
    event: '',
    location: '',
    description: '',
    startDate: '',
    endDate: '',
    eventShort: ''
  });

  useEffect(() => {
    getEvent();
  }, [event]);

  async function getEvent() {
    setLoader(true);
    await adminAxios.get(`${import.meta.env.VITE_API_URL}/admin/event/${event}`)
      .then(res => {
        setEventDetails({
          event: res.data.data.event,
          location: res.data.data.location,
          description: res.data.data.description,
          startDate: res.data.data.startDate,
          endDate: res.data.data.endDate,
          eventShort: res.data.data.eventShort
        });
        setEventName(res.data.data.event)
        setSelectedFile(res.data.data.image);
        setLoader(false);
      })
      .catch(err => {
        debugger
        console.log(err);
        setLoader(false);
      });
  }

  function handleCancel() {
    setEventDetails({});
    setEventErrorMessage({
      event: '',
      location: '',
      description: '',
      startDate: '',
      endDate: '',
      eventShort: ''
    });
    setEventErr({
      event: false,
      location: false,
      description: false,
      startDate: false,
      endDate: false,
      eventShort: false
    });
    setFile(null);
    setEditModal(false);
  }

  async function handleSubmit() {
    if (eventDetails.event.trim() === '') {
      setEventErrorMessage(prev => ({ ...prev, event: 'Enter Event Name Here' }));
      setEventErr(prev => ({ ...prev, event: true }));
      return;
    }
    // all fields not validated, user clears field and tries to submit - > UNCHECKED

    const updatedEvent = {
      ...eventDetails,
      event: eventDetails.event.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      startDate: moment(eventDetails.startDate).format('DD-MM-YYYY'),
      endDate: moment(eventDetails.endDate).format('DD-MM-YYYY')
    };
    console.log(file);
    console.log(updatedEvent);
    const formData = new FormData();
    formData.append('event', updatedEvent.event);
    formData.append('startDate', updatedEvent.startDate);
    formData.append('endDate', updatedEvent.endDate);
    formData.append('location', updatedEvent.location);
    formData.append('description', updatedEvent.description);
    formData.append('eventShort', updatedEvent.eventShort);
    if (file) {
      formData.append('image', file);
    }

    await adminAxios.put(`${import.meta.env.VITE_API_URL}/admin/event/${event}`, formData).then(res => {
      debugger
      setEventFlag(prev => !prev)
      setEditModal(false);
    }).catch(err => {
      debugger
      // if (err.response.data.message == 'event already added') {
      //   setEventErrorMessage({
      //     ...eventErr,
      //     location: 'This Event was Added Earlier'
      //   })
      //   setEventErr({
      //     ...eventErr,
      //     location: true
      //   })
      //   return;
      // }
      console.log(err);
    })
  }

  return (
    <Modal size={"md"} open={editModal} onClose={() => handleCancel()}>

      {loader ? <Box minH="70vh" display="flex" justifyContent="center" alignItems="center">
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
      </Box> : <><Modal.Header>
        <Modal.Title>{eventname}</Modal.Title>
      </Modal.Header><Modal.Body>
          <Form fluid>
            <Form.Group controlId="event">
              <Form.ControlLabel>Event</Form.ControlLabel>
              <Form.Control
                name="event"
                value={eventDetails.event || ''}
                onChange={(e) => setEventDetails(prev => ({ ...prev, event: e }))}
              />
              {eventErr.event && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.event}</Form.HelpText>}
            </Form.Group>

            <Form.Group controlId="description">
              <Form.ControlLabel>Description</Form.ControlLabel>
              <Input
                as="textarea"
                rows={3}
                value={eventDetails.description || ''}
                onChange={(e) => setEventDetails(prev => ({ ...prev, description: e }))}
              />
              {eventErr.description && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.description}</Form.HelpText>}
            </Form.Group>

            <div style={{ display: 'flex' }}>
              <Form.Group controlId="startDate" style={{ marginRight: '2rem' }}>
                <Form.ControlLabel>Start Date</Form.ControlLabel>
                <DatePicker
                  format="MMM dd, yyyy"
                  value={new Date(eventDetails.startDate)}
                  onChange={(e) => setEventDetails(prev => ({ ...prev, startDate: e }))}
                />
                {eventErr.startDate && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.startDate}</Form.HelpText>}
              </Form.Group>

              <Form.Group controlId="endDate">
                <Form.ControlLabel>End Date</Form.ControlLabel>
                <DatePicker
                  format="MMM dd, yyyy"
                  value={new Date(eventDetails.endDate)}
                  onChange={(e) => setEventDetails(prev => ({ ...prev, endDate: e }))}
                />
                {eventErr.endDate && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.endDate}</Form.HelpText>}
              </Form.Group>
            </div>

            <Form.Group controlId="location">
              <Form.ControlLabel>Event Location</Form.ControlLabel>
              <Form.Control
                name="location"
                value={eventDetails.location || ''}
                onChange={(e) => setEventDetails(prev => ({ ...prev, location: e }))}
              />
              {eventErr.location && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.location}</Form.HelpText>}
            </Form.Group>

            <Form.Group controlId="eventShort">
              <Form.ControlLabel>Event Short</Form.ControlLabel>
              <Form.Control
                name="eventShort"
                value={eventDetails.eventShort || ''}
                onChange={(e) => setEventDetails(prev => ({ ...prev, eventShort: e }))}
              />
              {eventErr.eventShort && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.eventShort}</Form.HelpText>}
            </Form.Group>

            <div style={{ display: 'flex', marginBottom: '2rem' }}>
              <Form.Group controlId="image" style={{ marginRight: '2rem', marginTop: '1rem' }}>
                <Form.ControlLabel>Event Image</Form.ControlLabel>
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file && file.type.includes('image')) {
                      setFile(file);
                      setFileErr(false);
                      setSelectedFile(URL.createObjectURL(file));
                    } else {
                      setFileErr(true);
                    }
                  }}
                />
                {fileErr && <Form.HelpText style={{ color: 'red' }}>Select an image file</Form.HelpText>}
              </Form.Group>
              {selectedFile && <img src={selectedFile} style={{ height: '150px', width: '150px' }} alt="Event" />}
            </div>

            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                <Button appearance="default" onClick={handleCancel}>Cancel</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Modal.Body></>}
    </Modal>
  );
};

export default EditEvent;
