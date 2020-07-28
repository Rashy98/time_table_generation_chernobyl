import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import AddLocationData from "./location/AddLocationData";
import NavBar from "./Common/Navbar";
import StudentStats from "./Statistics/StudentStats";
import ViewLocation from "./location/ViewLocation";
import ViewRoomDetails from "./location/ViewRoomDetail";
import SubjectStat from "./Statistics/SubjectStat";
import LecturerStats from "./Statistics/LectureStats";
function App() {
  return (
      <Router>
        <NavBar/>
        <switch>

          {/*Admin*/}
          <Route path="/AddLocation" exact component={AddLocationData} />
          <Route path="/StuStats" component={StudentStats}/>
          <Route path="/LecturerStats" component={LecturerStats}/>
          <Route path="/SubjectStats" component={SubjectStat}/>
          <Route path="/ViewLocation" component={ViewLocation}/>
          <Route path="/ViewRoom" component={ViewRoomDetails}/>


        </switch>
      </Router>
  );
}

export default App;
