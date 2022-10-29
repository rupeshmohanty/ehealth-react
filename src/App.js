import AppointmentComponent from "./components/patient/Appointment/AppointmentComponent";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AddDiseaseComponent from "./components/doctor/diseases/AddDiseaseComponent";
import AllAppointmentComponent from "./components/patient/Appointment/AllAppointmentComponent";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path = "/book/appointment">
              <AppointmentComponent/>
            </Route>
            <Route path = "/add/disease">
              <AddDiseaseComponent/>
            </Route>
            <Route path = "/appointments">
              <AllAppointmentComponent/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
