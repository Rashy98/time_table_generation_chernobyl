import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import AddLocationData from "./location/AddLocationData";
import NavBar from "./Common/Navbar";
import StudentStats from "./Statistics/StudentStats";
import ViewLocation from "./location/ViewLocation";
import ViewRoomDetails from "./location/ViewRoomDetail";
import SubjectStat from "./Statistics/SubjectStat";
import LecturerStats from "./Statistics/LectureStats";

//Lecturer
import LecturerHomePage from "./Lecturer/LecturerHomePage";
import AddLecturerDetails from "./Lecturer/AddLecturerDetails";
import ViewLecturerDetails from "./Lecturer/ViewLecturerDetails";

//Subject
import SubjectHomePage from "./Subject/SubjectHomePage";
import AddSubjectDetails from "./Subject/AddSubjectDetails";
import ViewSubjectDetails from "./Subject/ViewSubjectDetails";

//Working days
import WorkingDaysMain from "./WorkingDays/WorkingDaysMain";
import AddWeekdayWorkingDays from "./WorkingDays/AddWeekdayWorkingDays";
import AddWeekendWorkingDays from "./WorkingDays/AddWeekendWorkingDays";
import ViewWeekdayWorkingDays from "./WorkingDays/ViewWeekdayWorkingDays";
import ViewWeekendWorkingDays from "./WorkingDays/ViewWeekendWorkingDays";

//Tags
import AddTag from "./tag/AddTagDetails";
import ViewTag from "./tag/ViewTag";

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

            {/*Lecturers & Subjects*/}
          <Route path="/LecHome" component={LecturerHomePage}/>
          <Route path="/AddLec" component={AddLecturerDetails}/>
          <Route path="/ViewLec" component={ViewLecturerDetails}/>
          <Route path="/SubHome" component={SubjectHomePage}/>
          <Route path="/AddSub" component={AddSubjectDetails}/>
          <Route path="/ViewSub" component={ViewSubjectDetails}/>

            {/*Working Days*/}
          <Route path="/WorkingDaysMain" component={WorkingDaysMain}/>
          <Route path="/AddWeekdayWorkingDays" component={AddWeekdayWorkingDays}/>
          <Route path="/AddWeekendWorkingDays" component={AddWeekendWorkingDays}/>
          <Route path="/ViewWeekdayWorkingDays" component={ViewWeekdayWorkingDays}/>
          <Route path="/ViewWeekendWorkingDays" component={ViewWeekendWorkingDays}/>




            {/*TagsAndStudents*/}
            <Route path="/AddTag" component={AddTag}/>
            <Route path="/ViewTag" component={ViewTag}/>
        </switch>
      </Router>
  );
}

export default App;
