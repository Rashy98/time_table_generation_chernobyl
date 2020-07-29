import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import AddLocationData from "./location/AddLocationData";
import NavBar from "./Common/Navbar";
import StudentStats from "./Statistics/StudentStats";
import ViewLocation from "./location/ViewLocation";
import ViewRoomDetails from "./location/ViewRoomDetail";
import SubjectStat from "./Statistics/SubjectStat";
import LecturerStats from "./Statistics/LectureStats";

//Working Days
import WorkingDaysMain from "./WorkingDays/WorkingDaysMain";
import AddWeekdayWorkingDays from "./WorkingDays/AddWeekdayWorkingDays";
import AddWeekendWorkingDays from "./WorkingDays/AddWeekendWorkingDays";
import ViewWeekdayWorkingDays from "./WorkingDays/ViewWeekdayWorkingDays";
import ViewWeekendWorkingDays from "./WorkingDays/ViewWeekendWorkingDays";


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

            {/*Working Days*/}
            <Route path="/WorkingDaysMain" component={WorkingDaysMain}/>
            <Route path="/AddWeekdayWorkingDays" component={AddWeekdayWorkingDays}/>
            <Route path="/AddWeekendWorkingDays" component={AddWeekendWorkingDays}/>
            <Route path="/ViewWeekdayWorkingDays" component={ViewWeekdayWorkingDays}/>
            <Route path="/ViewWeekendWorkingDays" component={ViewWeekendWorkingDays}/>
        </switch>
      </Router>
  );
}

export default App;
