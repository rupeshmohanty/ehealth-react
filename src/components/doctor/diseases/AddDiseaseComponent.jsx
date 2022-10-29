import { useState } from "react";
import { Form, Input, Button, Container, Card, TextArea} from 'semantic-ui-react';
import axios from "axios";

const AddDiseaseComponent = () => {
    let [disease,setDisease] = useState({
        name: "",
        description: "",
        symptoms: "",
        causes: "",
        seriousCauses: "",
        diagnosis: ""
    })

    let [status,setStatus] = useState("");
    let [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/doctor/diseases", disease)
        .then((res) => {
            if(res.data.response.responseCode == 200) {
                setStatus("Success");
                setMessage("Disease information added");
                console.log(status);
                console.log(message);
            } else {
                setStatus("Failed");
                setMessage("Unable to add disease information")
            }
        })
        .catch((error) => console.log(error));
    }

    return(
        <Container>
            <Card style = {{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '50px', paddingBottom: '50px', width: '100%' }}>
                <Form onSubmit={handleSubmit} enctype="multipart/form-data">
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Disease Name'
                        placeholder='Disease Name'
                        name = "name"
                        value = { disease.name }
                        onChange = { (e) => setDisease({...disease, name: e.target.value}) }
                    />
                    <Form.Field
                        id='form-input-control-description'
                        control={TextArea}
                        label='Description'
                        placeholder='Description'
                        name = "description"
                        value = { disease.description }
                        onChange = { (e) => setDisease({...disease, description: e.target.value}) }
                    />
                    <Form.Field
                        id='form-input-control-symptoms'
                        control={TextArea}
                        label='Symptoms'
                        placeholder='Symptoms'
                        name = "symptoms"
                        value = { disease.symptoms }
                        onChange = { (e) => setDisease({...disease, symptoms: e.target.value}) }
                    />
                    <Form.Field
                    id='form-input-control-causes'
                    control={TextArea}
                    label='Causes'
                    placeholder='Causes'
                    name = "causes"
                    value = { disease.causes }
                    onChange = { (e) => setDisease({...disease, causes: e.target.value}) }
                    />
                    <Form.Field
                    id='form-input-control-serious-causes'
                    control={TextArea}
                    label='Serious Causes'
                    placeholder='Serious Causes'
                    name = "seriousCauses"
                    value = { disease.seriousCauses }
                    onChange = { (e) => setDisease({...disease, seriousCauses: e.target.value}) }
                    />
                    <Form.Field
                    id='form-input-diagnosis'
                    control={TextArea}
                    label='Diagnosis'
                    placeholder='Diagnosis'
                    name = "diagnosis"
                    value = { disease.diagnosis }
                    onChange = { (e) => setDisease({...disease, diagnosis: e.target.value}) }
                    />
                    <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Add disease'
                    />
                </Form>
            </Card>
        </Container>
    )
}

export default AddDiseaseComponent;