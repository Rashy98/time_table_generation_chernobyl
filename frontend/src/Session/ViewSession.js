import React,{Component} from "react";
import axios from "axios";
import {Container, Spinner, Table} from "react-bootstrap";
import SessionNav from "./SessionNav";
const Session = props => (
    <tr>
        <td style={{fontSize: '15px'}}>{props.session.GeneratedSessionID}</td>
        <td style={{fontSize: '15px'}}>{props.session.GeneratedSession.split('\n').map( (it, i) => <div key={'x'+i}>{it}</div> )}</td>
    </tr>
)

class ViewSession extends Component{

        constructor(props) {
            super(props);

            this.state = {
                SessionDetails:[],
                loading: true,
            };
        }
    componentDidMount() {
        axios.get('/generatedSession/viewGeneratedSession')
            .then(res => {
                this.setState({
                    SessionDetails: res.data,
                    loading:false
                })
            });
    }

    SessionList() {
        return this.state.SessionDetails.map(sessionD => {
            return <Session session={sessionD} key={sessionD._id}/>;
        })
    }

    render() {
        return(
            <div id="page-container" className='main'>
                <SessionNav/><br/>

                <Container>
                    <h3> Session Details </h3><br/>
                    <div className="form-group mx-sm-3 mb-2 text-right">
                        <label style={{fontSize: '16px', color: "mediumslateblue"}} htmlFor="LecturerSelectForSearch">
                            <input
                                type="radio"
                                value="Lecturer"
                                checked={this.state.searchType === "Lecturer"}
                                // onChange={this.onRadioBtnValueChange}
                            />
                            Lecturer
                        </label> <t/>
                        <label style={{fontSize: '16px', color: "mediumslateblue"}} htmlFor="SubjectSelectForSearch">
                            <input
                                type="radio"
                                value="Subject"
                                checked={this.state.searchType === "Subject"}
                                // onChange={this.onRadioBtnValueChange}
                            />
                            Subject
                        </label> <t/>
                        <label style={{fontSize: '16px', color: "mediumslateblue"}} htmlFor="TagSelectForSearch">
                            <input
                                type="radio"
                                value="Tag"
                                checked={this.state.searchType === "Tag"}
                                // onChange={this.onRadioBtnValueChange}
                            />
                            Tag
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="searchOption"
                            placeholder="Enter Text"
                            // value={this.state.}
                            // onChange={this.onFilter}
                            required/>
                        <button
                            type="button"
                            onClick={this.onChangeLecName}
                            className="btn btn-info btn-s"
                        >
                            Search
                        </button>
                    </div>
                    <Table responsive>
                        <thead>
                        {this.state.loading ? <center><Spinner animation="border" /></center> :
                            <tr>
                                <th style={{fontSize: '15px'}}>Session ID</th>
                                <th style={{fontSize: '15px'}}>Session</th>
                            </tr>
                        }
                        </thead>
                        <tbody>
                        {this.SessionList()}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}
export default ViewSession;