import React, { Component } from 'react';
import location from "../assets/css/location.css"
import stat from "../assets/css/stats.css";
import LocNav from "./locationNav";
import axios from 'axios';


export default class AddLocationData extends Component{

    constructor(props) {
        super(props);

        this.state={
            building :"",
            selectedBuilding:"",
            room:"",
            capacity:0,
            lecture:false,
            lab:false,
            Buildings:[],
            buildingVal:"",
            roomBuild:"",

        }
        this.onChangeBuilding = this.onChangeBuilding.bind(this);
        this.AddBuilding = this.AddBuilding.bind(this);
    }
    onChangeBuilding(e){
        this.setState({
            building: e.target.value
        })
    }
    onChangeroomBuilding(e){
        this.setState({
            roomBuild: e.target.value
        })
    }

    handleValidation(){
        let valid = true;
        if(this.state.building !== '') {
            this.state.Buildings.map(building => {
                if (building.building === this.state.building) {
                    valid = false;
                    alert("Building already exists")
                    // this.setState({
                    //     buildingVal: "This Building already exists",
                    // })

                }
            })
        }
        return valid;
    }
    componentDidMount() {
        axios.get('/building/')
            .then(res => {
                this.setState({
                    Buildings: res.data,
                })
            });
    }

    AddBuilding(e){
        e.preventDefault();
        if(this.handleValidation()) {
            const building = {
                building: this.state.building
            }
            console.log(this.state.building);
            axios.post("/building/add", building)
                .then(res => console.log(res.data));

            this.setState({
                building: ""
            })
            alert("Building added!")
        }
        else{
            alert("Building NOT added!")
        }
    }

        render() {
        const buildings = this.state.Buildings;
            return (
                <div className="main">
                    <LocNav/>
                    <h3> Add Location Related Data</h3>
                    <div className="form">
                        <form className="form-inline" >
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="buildingInput" className="sr-only">Building</label>
                                <input type="text" className="form-control" id="buildingInput" placeholder="Building"
                                       onChange={this.onChangeBuilding}/>
                                       <br/>
                                <p className='text-danger small'>{this.state.buildingVal}</p>
                            </div>
                            <button className="btn mb-2" onClick={this.AddBuilding}>
                                Add Building
                            </button>
                        </form>
                        <br/>
                        <br/>
                        <form>

                            <div className="form-group mx-sm-3 mb-2">
                                <h5>Room</h5>
                                <label className="sr-only" htmlFor="inlineFormCustomSelectPref">Building</label>
                                <select className="form-control " id="inlineFormCustomSelectPref"
                                        value={this.state.roomBuild}
                                        onChange={this.onChangeroomBuilding}
                                >
                                    <option selected style={{fontSize: "15px;"}}>Choose Building...</option>
                                    {
                                        this.state.Buildings.map(building => {
                                            return (<option>{building.building}</option>);
                                        })
                                    }

                                </select>
                            </div>

                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="roomInput" className="sr-only">Room</label>
                                <input type="text" className="form-control" id="roomInput" placeholder="Room" />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="roomInput" className="sr-only">Capacity</label>
                                <input type="number" className="form-control" id="capacityInput" placeholder="Capacity" />
                            </div>

                            <div className="form-check form-check-inline mx-sm-3 mb-2">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Lecture_hall" />
                                    <label className="form-check-label" htmlFor="inlineRadio1"  style={{fontSize: "16px",color: "#312450"}}>Lecture Hall</label>

                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="lab" />
                                    <label className="form-check-label" htmlFor="inlineRadio2"
                                           style={{fontSize: "16px",color: "#312450"}}>Laboratory</label>

                            </div>
                            <div className="form-group mx-sm-3 mb-2" style={{textAlign: "center"}}>
                                <button type="submit" className="btn my-1 " >Add Room
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
          );
        }
}



