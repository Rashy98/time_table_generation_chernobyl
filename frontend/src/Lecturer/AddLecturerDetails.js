import React, {Component} from "react";
import LecNav from "./Common/LecNav";
import axios from 'axios';

export default class AddLecturerDetails extends Component{

    constructor(props) {
        super(props);

        this.onChangeEmpID = this.onChangeEmpID.bind(this);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeFaculty = this.onChangeFaculty.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeCenter = this.onChangeCenter.bind(this);
        this.onChangeBuilding = this.onChangeBuilding.bind(this);
        this.onChangeLevel = this.onChangeLevel.bind(this);
        this.onChangeRank = this.onChangeRank.bind(this);
        this.AddLecturer = this.AddLecturer.bind(this);
        this.handleLecValidation = this.handleLecValidation.bind(this);

        this.state={
            empID :"",
            fullName:"",
            faculty:"",
            department:"",
            center:"",
            building:"",
            level:"",
            rank:"",
            Buildings:[],
            Departments:[],
            selectedDpt:[],
            Lecturers:[]

        }
    }
    componentDidMount() {
        axios.get('/lecturer/viewLec')
            .then(res => {
                this.setState({
                    Lecturer: res.data
                })
            });
        axios.get('/building/')
            .then(res => {
                this.setState({
                    Buildings: res.data
                })
            });
        axios.get('/department/')
            .then(res => {
                this.setState({
                    Departments: res.data
                })
            })

    }

    onChangeEmpID(e) {
        this.setState({
            empID: e.target.value
        })
    }

    onChangeFullName(e) {
        this.setState({
            fullName: e.target.value
        })
    }

    onChangeFaculty(e) {
        this.setState({
            faculty: e.target.value
        })
        this.setDepartment(e.target.value)
    }

    onChangeDepartment(e) {
        this.setState({
            department: e.target.value
        })
    }

    onChangeCenter(e) {
        this.setState({
            center: e.target.value
        })
    }

    onChangeBuilding(e) {
        this.setState({
            building: e.target.value
        })
    }

    onChangeLevel(e) {
        this.setState({
            level: e.target.value
        })
        this.getRank(e.target.value, this.state.empID)
    }

    onChangeRank(e) {
        this.setState({
            rank: e.target.value
        })
    }

    setDepartment(faculty){
        this.state.Departments.map(dpt => {
            if(dpt.faculty === faculty){
                console.log(dpt.departments);

                this.setState({
                    selectedDpt: dpt.departments
                })
            }
        })
    }

    getRank(level, empID){
        this.setState({
            rank: level+'.'+empID
        })
    }
    handleLecValidation(){
        let valid = true;
        if(this.state.empID !== '') {
            this.state.Lecturers.map(lec => {
                if (lec.empID === this.state.empID) {
                    valid = false;
                    alert("Lecturer already exists")
                }
            })
        }
        return valid;
    }

    AddLecturer = (e) =>{

        e.preventDefault()
        if(this.handleLecValidation()) {
            const lecturer = {
                empID: this.state.empID,
                fullName: this.state.fullName,
                faculty: this.state.faculty,
                department: this.state.department,
                center: this.state.center,
                building: this.state.building,
                level: this.state.level,
                rank: this.state.rank
            }
            //console.log(this.state.lecture);
            axios.post("/lecturer/addLec", lecturer)
                 .then(res => console.log(res.data));

            this.setState({
                empID: "",
                fullName: "",
                faculty: "",
                department: "",
                selectedDpt:[],
                center: "",
                building: "",
                level: "",
                rank: ""
            })
            alert("Lecturer Details added!")
        }
        else{
            alert("Lecturer Details not added!")
        }
    }

    render() {
        return (
            <div className="main">
                <LecNav/><br/>
                <h3>Add Lecturer Details</h3>
                <div className="form">
                    <form onSubmit={this.AddLecturer}>
                        <div className="form-group mx-sm-3 mb-2">
                            <label
                                htmlFor="empID"
                                style={{fontSize: '16px', color: "mediumslateblue"}}>
                                Employee ID
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="empId"
                                placeholder="Employee ID"
                                value={this.state.empID}
                                onChange={this.onChangeEmpID}
                                required/>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label
                                htmlFor="fullName"
                                style={{fontSize: '16px', color: "mediumslateblue"}}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                placeholder="Full Name"
                                value={this.state.fullName}
                                onChange={this.onChangeFullName}
                                required/>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label
                                style={{fontSize: '16px', color: "mediumslateblue"}}
                                htmlFor="FacultySelect">
                                Faculty Name
                            </label>
                            <select
                                className="form-control "
                                id="faculty"
                                value={this.state.faculty}
                                onChange={this.onChangeFaculty}
                                required>
                                <option selected style={{fontSize:'15px'}}>Choose Faculty...</option>
                                <option value="Computing">Computing</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Business">Business</option>
                                <option value="Humanities & Sciences">Humanities & Sciences</option>
                                <option value="Graduate Studies & Research">Graduate Studies & Research</option>
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label
                                style={{fontSize: '16px', color: "mediumslateblue"}}
                                htmlFor="DepartmentSelect">
                                Department Name
                            </label>
                            <select
                                className="form-control "
                                id="department"
                                value={this.state.department}
                                onChange={this.onChangeDepartment}
                                required>
                                <option selected style={{fontSize: "15px;"}}>Choose Department...</option>
                                {
                                    this.state.selectedDpt.map(dpt => {
                                        return (<option key={dpt}
                                                        value={dpt}>
                                            {dpt}
                                        </option>);
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label
                                style={{fontSize: '16px', color: "mediumslateblue"}}
                                htmlFor="CenterSelect">
                                Center Name
                            </label>
                            <select
                                className="form-control "
                                id="center"
                                value={this.state.center}
                                onChange={this.onChangeCenter}
                                required>
                                <option selected style={{fontSize: '15px'}}>Choose Center...</option>
                                <option value="Malabe">Malabe</option>
                                <option value="Metro">Metro</option>
                                <option value="Matara">Matara</option>
                                <option value="Kandy">Kandy</option>
                                <option value="Kurunagala">Kurunagala</option>
                                <option value="Jaffna">Jaffna</option>
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label
                                style={{fontSize: '16px', color: "mediumslateblue"}}
                                htmlFor="BuildingSelect">
                                Building Name
                            </label>
                            <select
                                className="form-control "
                                id="BuildingSelect"
                                value={this.state.building}
                                onChange={this.onChangeBuilding}
                                required>
                                <option selected style={{fontSize: "15px;"}}>Choose Building...</option>
                                {
                                    this.state.Buildings.map(building => {
                                        return (<option key={building}
                                                        value={building.building}>
                                            {building.building}
                                        </option>);
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label
                                style={{fontSize: '16px', color: "mediumslateblue"}}
                                htmlFor="LevelSelect">
                                Level
                            </label>
                            <select
                                className="form-control "
                                id="LevelSelect"
                                value={this.state.level}
                                onChange={this.onChangeLevel}
                                required>
                                <option selected style={{fontSize: '15px'}}>Choose Level...</option>
                                <option value="1">Professor</option>
                                <option value="2">Assistant Professor</option>
                                <option value="3">Senior Lecturer(HG)</option>
                                <option value="4">Senior Lecturer</option>
                                <option value="5">Lecturer</option>
                                <option value="6">Assistant Lecturer</option>
                                <option value="7">Instructor</option>
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label
                                htmlFor="RankInput"
                                style={{fontSize: '16px', color: "mediumslateblue"}}>
                                Rank
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="RankInput"
                                placeholder="Rank"
                                value={this.state.rank}
                                onChange={this.onChangeRank}
                                disabled/>
                        </div><br/>
                        <div className="form-group mx-sm-3 mb-2">
                            <button type="submit" className="btn my-1" style={{backgroundColor: "#312450", color: "white", float: "right"}}>Save Details</button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}