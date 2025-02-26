import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Form, ButtonToolbar, Input, Modal, SelectPicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import adminAxios from "../../api/axios";

const EditExhibitorModal = ({ editModal, setEditModal, exhibitorId, setEventFlag }) => {
  const [exhibitorDetails, setExhibitorDetails] = useState({
    exhibitor: "",
    exhibitorType: "",
    event: "",
    images: [],
  });
  const [events, setEvents] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);

  async function fetchExhibitorDetails() {
    await adminAxios.get(`${import.meta.env.VITE_API_URL}/admin/exhibitor/${exhibitorId}`)
      .then((res) => {
        setExhibitorDetails(res.data.data);
        setExistingImages(res.data.data.images);
      })
      .catch((err) => console.error(err));
  }

  async function getEvents() {
    await adminAxios.get(`${import.meta.env.VITE_API_URL}/admin/listevents`)
      .then((res) => {
        setEvents(
          res.data.data.map((event) => ({
            label: event.event,
            value: event._id,
          }))
        );
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getEvents();
    fetchExhibitorDetails();
  }, [exhibitorId]);

  async function handleSubmit() {
    const formData = new FormData();
    formData.append("exhibitor", exhibitorDetails.exhibitor);
    formData.append("event", exhibitorDetails.event);
    formData.append("exhibitorType", exhibitorDetails.exhibitorType);
    removedImages.forEach((image) => formData.append("removedImages[]", image));
    files.forEach((file) => formData.append("newImages", file));

    await adminAxios
      .patch(`${import.meta.env.VITE_API_URL}/admin/exhibitor/${exhibitorId}`, formData)
      .then(() => {
        setEventFlag((prev) => !prev);
        setEditModal(false);
      })
      .catch((err) => console.error(err));
  }

  function handleCancel() {
    setEditModal(false);
  }

  function handleFileChange(e) {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  }

  function handleRemoveImage(image) {
    setRemovedImages((prev) => [...prev, image]);
    setExistingImages((prev) => prev.filter((img) => img !== image));
  }

  return (
    <Modal size="md" open={editModal} onClose={handleCancel}>
      <Modal.Header>
        <Modal.Title>Edit Exhibitor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form fluid>
          <Form.Group controlId="exhibitor">
            <Form.ControlLabel>Exhibitor</Form.ControlLabel>
            <Input
              value={exhibitorDetails.exhibitor}
              onChange={(value) => setExhibitorDetails({ ...exhibitorDetails, exhibitor: value })}
            />
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
            <Form.Group controlId="event">
              <Form.ControlLabel>Event</Form.ControlLabel>
              <SelectPicker
                data={events}
                value={exhibitorDetails.event}
                onChange={(value) => setExhibitorDetails({ ...exhibitorDetails, event: value })}
                style={{ width: 224 }}
              />
            </Form.Group>
            <Form.Group controlId="sponsorType">
              <Form.ControlLabel>Exhibitor Type</Form.ControlLabel>
              <SelectPicker
                data={[
                  { label: "Diamond", value: 1 },
                  { label: "Gold", value: 2 },
                  { label: "Silver", value: 3 },
                ]}
                value={exhibitorDetails.exhibitorType}
                onChange={(value) => setExhibitorDetails({ ...exhibitorDetails, exhibitorType: value })}
                style={{ width: 224 }}
              />
            </Form.Group>
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <Form.ControlLabel>Exhibitor Images</Form.ControlLabel>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {existingImages.map((img, index) => (
                <div key={index} style={{ position: "relative", marginRight: "10px" }}>
                  <img
                    src={img.image}
                    alt={`Exhibitor ${index}`}
                    style={{ height: "150px", width: "150px" }}
                  />
                  <Button
                    size="xs"
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-5px",
                      background: "red",
                      color: "white",
                    }}
                    onClick={() => handleRemoveImage(img)}
                  >
                    X
                  </Button>
                </div>
              ))}
            </div>
            <input type="file" multiple onChange={handleFileChange} />
          </div>
          <Form.Group>
            <ButtonToolbar>
              <Button appearance="primary" onClick={handleSubmit}>
                Submit
              </Button>
              <Button appearance="default" onClick={handleCancel}>
                Cancel
              </Button>
            </ButtonToolbar>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditExhibitorModal;
