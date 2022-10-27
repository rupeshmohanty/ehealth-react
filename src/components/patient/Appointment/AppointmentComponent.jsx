import 'semantic-ui-css/semantic.min.css';
import { Form, Input, Button, Container, Card } from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';

const AppointmentComponent = () => {
    let [appointment, setAppointment] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        patientType: "",
        provider: "",
        prefferedTime: "",
        prefferedDay: "",
        reason: "",
        requests: ""
    })

    let [status, setStatus] = useState("");
    let [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(appointment)
        axios.post("http://localhost:8080/patient/bookAppointment", appointment)
        .then((res) => {
            if(res.data.response.responseCode == 200) {
                setStatus("Success");
                setMessage("Appointment booked");
            }
        })
        .catch((error) => console.log(error));

        console.log(status);
        console.log(message);
    }

    return(
        <Container style = {{ marginTop: '100px' }}>
            <Card style = {{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px', paddingBottom: '50px', width: '100%' }}>
                <Form onSubmit={handleSubmit} enctype="multipart/form-data">
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Name'
                            placeholder='Name'
                            name = "name"
                            value = { appointment.name }
                            onChange = { (e) => setAppointment({...appointment, name: e.target.value}) }
                        />
                        <Form.Field
                            id='form-input-control-email'
                            control={Input}
                            label='Email'
                            placeholder='Email'
                            name = " email"
                            value = { appointment.email }
                            onChange = { (e) => setAppointment({...appointment, email: e.target.value}) }
                        />
                        <Form.Field
                            id='form-input-control-phone-number'
                            control={Input}
                            label='Phone Number'
                            placeholder='Phone Number'
                            name = "phoneNumber"
                            value = { appointment.phone }
                            onChange = { (e) => setAppointment({...appointment, phoneNumber: e.target.value}) }
                        />
                    </Form.Group>
                        <Form.Field
                        id='form-input-control-patient-type'
                        control={Input}
                        label='Patient Type'
                        placeholder='Patient Type'
                        name = "patientType"
                        value = { appointment.patientType }
                        onChange = { (e) => setAppointment({...appointment, patientType: e.target.value}) }
                        />
                        <Form.Field
                        id='form-input-control-provider'
                        control={Input}
                        label='Provider'
                        placeholder='Provider'
                        name = "provider"
                        value = { appointment.provider }
                        onChange = { (e) => setAppointment({...appointment, provider: e.target.value}) }
                        />
                        <Form.Field
                        id='form-input-preferred-time'
                        control={Input}
                        label='Preferred Time'
                        placeholder='Preferred Time'
                        name = "prefferedTime"
                        value = { appointment.prefferedTime }
                        onChange = { (e) => setAppointment({...appointment, prefferedTime: e.target.value}) }
                        />
                        <Form.Field
                        id='form-input-preferred-day'
                        control={Input}
                        label='Preferred Day'
                        placeholder='Preferred Day'
                        name = "prefferedDay"
                        value = { appointment.prefferedDay }
                        onChange = { (e) => setAppointment({...appointment, prefferedDay: e.target.value}) }
                        />
                        <Form.Field
                        id='form-input-reason'
                        control={Input}
                        label='Reason'
                        placeholder='Reason'
                        name = "reason"
                        value = { appointment.reason }
                        onChange = { (e) => setAppointment({...appointment, reason: e.target.value}) }
                        />
                        <Form.Field
                        id='form-input-additional-requests'
                        control={Input}
                        label='Additional requests'
                        placeholder='Additional requests'
                        name = "requests"
                        value = { appointment.requests }
                        onChange = { (e) => setAppointment({...appointment, requests: e.target.value}) }
                        />
                        {/* <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        label='Email'
                        placeholder='joe@schmoe.com'
                        error={{
                            content: 'Please enter a valid email address',
                            pointing: 'below',
                        }}
                        /> */}
                        <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Book appointment'
                        />
                </Form>
            </Card>
        </Container>
    )
}

export default AppointmentComponent;