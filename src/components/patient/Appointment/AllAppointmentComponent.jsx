import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react"

const AllAppointmentComponent = () => {
    let [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/doctor/allAppointments")
        .then((res) => {
            if(res.data.response.responseCode == 200) {
                setAppointments(res.data.appointments);
            }
        })
        .catch((error) => console.log(error));
    }, [])

    const listAppointment = appointments.map((appointment) => {
        return(
            <Grid.Column>
                { appointment.name }
            </Grid.Column>
        )
    })
    return(
        <Container>
            <Grid columns={3}>
                { listAppointment }
            </Grid>
        </Container>
    )
}

export default AllAppointmentComponent;