import { useEffect, useState } from "react";
import {
  Button, Box
} from '@chakra-ui/react';
import { Form, ButtonToolbar, Input, DatePicker, Modal } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import adminAxios from '../../api/axios';
import moment from "moment/moment";
import { RotatingLines } from 'react-loader-spinner';

const EditAlbum = ({ editModal, setEditModal, event, setEventFlag }) => {
  const [eventDetails, setEventDetails] = useState({});
  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [eventname, setEventName] = useState('')
  const [fileErr, setFileErr] = useState(false);
  const [loader, setLoader] = useState(false);

  const [eventErr, setEventErr] = useState({
    title: false,
    description: false,
    date: false
  });

  const [eventErrorMessage, setEventErrorMessage] = useState({
    title: '',
    description: '',
    date: ''
  });

  useEffect(() => {
    getEvent();
  }, [event]);

  async function getEvent() {
    setLoader(true);
    await adminAxios.get(`${import.meta.env.VITE_API_URL}/admin/gallery/${event}`)
      .then(res => {
        setEventDetails({
          title: res.data.data.title,
          description: res.data.data.description,
          date: res.data.data.date,
        });
        setEventName(res.data.data.title)
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
      title: '',
      description: '',
      date: ''
    });
    setEventErr({
      title: false,
      description: false,
      date: false
    });
    setFile(null);
    setEditModal(false);
  }

  async function handleSubmit() {
    if (eventDetails.title.trim() === '') {
      setEventErrorMessage(prev => ({ ...prev, title: 'Enter Event Name Here' }));
      setEventErr(prev => ({ ...prev, event: true }));
      return;
    }
    // all fields not validated, user clears field and tries to submit - > UNCHECKED

    const updatedEvent = {
      ...eventDetails,
      title: eventDetails.title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      date: moment(eventDetails.date).format('DD-MM-YYYY')
    };
    console.log(file);
    console.log(updatedEvent);
    const formData = new FormData();
    formData.append('title', updatedEvent.title);
    formData.append('date', updatedEvent.date);
    formData.append('description', updatedEvent.description);
    if (file) {
      formData.append('image', file);
    }

    await adminAxios.put(`${import.meta.env.VITE_API_URL}/admin/gallery/${event}`, formData).then(res => {
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
                value={eventDetails.title || ''}
                onChange={(e) => setEventDetails(prev => ({ ...prev, title: e }))}
              />
              {eventErr.title && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.title}</Form.HelpText>}
            </Form.Group>

            <Form.Group controlId="description">
              <Form.ControlLabel>Description</Form.ControlLabel>
              <Form.Control
                name="description"
                value={eventDetails.description || ''}
                onChange={(e) => setEventDetails(prev => ({ ...prev, description: e }))}
              />
              {eventErr.description && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.description}</Form.HelpText>}
            </Form.Group>

            <Form.Group controlId="startDate" style={{ marginRight: '2rem' }}>
              <Form.ControlLabel>Date</Form.ControlLabel>
              <DatePicker
                format="MMM dd, yyyy"
                value={new Date(eventDetails.date)}
                onChange={(e) => setEventDetails(prev => ({ ...prev, date: e }))}
              />
              {eventErr.date && <Form.HelpText style={{ color: 'red' }}>{eventErrorMessage.date}</Form.HelpText>}
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

export default EditAlbum;
