import React, {Component} from "react";
import SubNav from "./Common/SubNav";
import axios from 'axios';

export default class AddSubjectDetails extends Component{

    // constructor(props) {
    //     super(props);
    //     this.state={
    //         offYear :"",
    //         offSem:"",
    //         subject:"",
    //         subjectCode:"",
    //         lecHr:"",
    //         tutHr:"",
    //         labHr:"",
    //         eveHr:"",
    //     }
    //     this.AddSubject = this.AddSubject(this);
    // }
    // componentDidMount() {
    //     axios.get('/subject/viewSub')
    //         .then(res => {
    //             this.setState({
    //                 Subject: res.data
    //             })
    //         });
    // }
    //
    // AddSubject(e){
    //     e.preventDefault();
    //     if(this.handleValidation()) {
    //         const subject = {
    //             offYear: this.state.offYear,
    //             offSem: this.state.offSem,
    //             subject: this.state.subject,
    //             subjectCode: this.state.subjectCode,
    //             lecHr: this.state.lecHr,
    //             tutHr: this.state.tutHr,
    //             labHr: this.state.labHr,
    //             eveHr: this.state.eveHr
    //         }
    //         axios.post("/subject/addSub", subject)
    //             .then(res => console.log(res.data));
    //
    //         this.setState({
    //             offYear: "",
    //             offSem: "",
    //             subject: "",
    //             subjectCode: "",
    //             lecHr: "",
    //             tutHr: "",
    //             labHr: "",
    //             eveHr: "",
    //         })
    //         alert("Subject Details added!")
    //     }
    //     else{
    //         alert("Subject Details not added!")
    //     }
    // }
    render() {
        return(
          <div className="main">
              <SubNav/>
              <h3> Add Subject Details </h3>
              <div className="form">
                  <form action="/AddSub" method="POST">
                      <div className="form-group mx-sm-3 mb-2">
                          <label style={{fontSize: '16px', color: "mediumslateblue"}} htmlFor="YearInputSelect">Offered Year</label>
                          <select className="form-control " id="YearInputSelect">
                              <option selected style={{fontSize:'15px'}}>Choose Year...</option>
                              <option value="1">1st Year</option>
                              <option value="2">2nd Year</option>
                              <option value="3">3rd Year</option>
                              <option value="4">4th Year</option>
                          </select>
                      </div>
                      <div className="form-group mx-sm-3 mb-2">
                          <label style={{fontSize: '16px', color: "mediumslateblue"}} htmlFor="SemInputSelect">Offered Semester</label>
                          <select className="form-control " id="SemInputSelect">
                              <option selected style={{fontSize:'15px'}}>Choose Semester...</option>
                              <option value="1">1st Semester</option>
                              <option value="2">2nd Semester</option>
                          </select>
                      </div>
                      <div className="form-group mx-sm-3 mb-2">
                          <label htmlFor="NameInput" style={{fontSize: '16px', color: "mediumslateblue"}}>Subject Name</label>
                          <input type="text" className="form-control" id="NameInput" placeholder="Subject Name"/>
                      </div>
                      <div className="form-group mx-sm-3 mb-2">
                          <label htmlFor="CodeInput" style={{fontSize: '16px', color: "mediumslateblue"}}>Subject Code</label>
                          <input type="text" className="form-control" id="CodeInput" placeholder="Subject Code"/>
                      </div>
                      <div className="form-group mx-sm-3 mb-2">
                          <label htmlFor="lechoursInput" style={{fontSize: '16px', color: "mediumslateblue"}}>Number of lecture hours</label>
                          <input type="number" className="form-control" id="lechoursInput"
                                 placeholder="Number of lecture hours"/>
                      </div>
                      <div className="form-group mx-sm-3 mb-2">
                          <label htmlFor="tutehoursInput" style={{fontSize: '16px', color: "mediumslateblue"}}>Number of tutorial hours</label>
                          <input type="number" className="form-control" id="tutehoursInput"
                                 placeholder="Number of tutorial hours"/>
                      </div>
                      <div className="form-group mx-sm-3 mb-2">
                          <label htmlFor="LabhoursInput" style={{fontSize: '16px', color: "mediumslateblue"}}>Number of lab hours</label>
                          <input type="number" className="form-control" id="LabhoursInput"
                                 placeholder="Number of lab hours"/>
                      </div>
                      <div className="form-group mx-sm-3 mb-2">
                          <label htmlFor="EvahoursInput" style={{fontSize: '16px', color: "mediumslateblue"}}>Number of evaluation hours</label>
                          <input type="number" className="form-control" id="EvahoursInput"
                                 placeholder="Number of evaluation hours"/>
                      </div>
                      <div className="form-group mx-sm-3 mb-2">
                          <button type="submit" className="btn my-1"
                                  style={{backgroundColor: "#312450", color: "white", float: "right"}}> Save Subject Details
                          </button>
                      </div>
                  </form>
              </div>
          </div>
        );
    }
}