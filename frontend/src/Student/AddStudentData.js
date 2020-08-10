import React, { Component } from 'react';
import location from "../assets/css/location.css"
import stat from "../assets/css/stats.css";
//import TagNav from "./tagNav.js";
import axios from 'axios';


export default class AddTagDetails extends Component{

    constructor(props) {
        super(props);

        this.state={
            tag :"",
            selectedTag:"",
            Tags:[],

        }
        this.onChangeTag = this.onChangeTag.bind(this);
        this.AddTag = this.AddTag.bind(this);

    }
    onChangeTag(e){
        this.setState({
            tag: e.target.value
        })
    }

    handleValidation(){
        let valid = true;
        if(this.state.tag !== '') {
            this.state.Tags.map(tag => {
                if (tag.tag === this.state.tag) {
                    valid = false;
                    alert("Tag already exists")
                    // this.setState({
                    //     tagVal: "This Tag already exists",
                    // })

                }
            })
        }
        return valid;
    }
    componentDidMount() {
        axios.get('/tag/')
            .then(res => {
                this.setState({
                    Tags: res.data,
                })
            });
    }

    AddTag(e){
        e.preventDefault();
        if(this.handleValidation()) {
            const tag = {
                tag: this.state.tag
            }
            console.log(this.state.tag);
            axios.post("/tag/add", tag)
                .then(res => console.log(res.data));

            this.setState({
                tag: ""
            })
            alert("Tag added!")
        }
        else{
            alert("Tag NOT added!")
        }
    }

    render() {
        const tags = this.state.Tags;
        return (
            <div className="main">
                {/*<TagNav/>*/}
                <h3> Add Tag Details</h3>
                <div className="form">
                    <form className="form-inline" >
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="btagInput" className="sr-only">Tag</label>
                            <input type="text" className="form-control" id="tagInput" placeholder="Tag Name"
                                //    value={this.state.tag}
                                   onChange={this.onChangeTag}/>
                            <br/>
                            <p className='text-danger small'>{this.state.tagVal}</p>
                        </div>
                        <button className="btn mb-2" onClick={this.AddTag}>
                            Add Tag
                        </button>
                    </form>
                    <br/>
                    <br/>
                    {/* <form>

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

                        </form> */}

                </div>
            </div>
        );
    }
}



