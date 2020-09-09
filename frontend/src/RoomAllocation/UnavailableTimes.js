import React,{Component} from "react";
import axios from "axios";
// import RoomAllocationMain from "./RoomAllocationMain";

class UnavailableTimes extends Component{
    constructor(props) {
        super(props);

        this.state={
            rooms:[{room:""}],
            room:"",
            times:[{day:"", time:""}],
            Newrooms:[],
            tags:[],
            roomData:[],
            selectedTag:"",

        }

        this.handleRoomsNameChange = this.handleRoomsNameChange.bind(this);
        this.handleAddTime = this.handleAddTime.bind(this);
        this.handleRemoveTimes = this.handleRemoveTimes.bind(this);
        this.onChangeRooms = this.onChangeRooms.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
        // this.GetID = this.GetID.bind(this);
        this.AddRoomAllocation = this.AddRoomAllocation.bind(this);
    }
    handleRoomsNameChange(e) {
        this.setState({
            room: e.target.value
        })
    }

    handleDayChange = idx => evt => {
        const newDay = this.state.times.map((day, ridx) => {
            if (idx !== ridx)
                return day;
            return { ...day, day: evt.target.value };
        });

        this.setState({ times: newDay });
    };

    handleTimeChange = idx => evt =>{
        const newTime = this.state.times.map((time, ridx) => {
            if (idx !== ridx)
                return time;
            return { ...time, time: evt.target.value };
        });

        this.setState({ times: newTime });
    }
    handleAddTime = () => {
        this.setState({
            times: this.state.times.concat([{day:" ", time:" " }])
        });
    };

    handleRemoveTimes = idx => () => {
        this.setState({
            times: this.state.times.filter((s, ridx) => idx !== ridx)
        });
    };

    onChangeRooms(e){
        this.setState({
            room: e.target.value
        })
    }
    onChangeTag(e){
        this.setState({
            selectedTag:e.target.value
        })
    }

    componentDidMount() {
        axios.get('/tag/')
            .then(response => {
                this.setState({
                    tags: response.data,
                })
            })
        axios.get('/room/')
            .then(response => {
                this.setState({
                    roomData: response.data,
                })
            })
    }

    // GetID(){
    //     let newRooms = [];
    //     this.state.room.map(room =>{
    //         newRooms.push(room.room);
    //     })
    //
    //     return newRooms;
    //
    // }

    AddRoomAllocation(e) {
        e.preventDefault();


        let roomId =  this.state.roomData.map(room=>{
            if(room.room === this.state.room){
                return room._id
            }
        })
        const Unavailable = {
            _id:roomId,
            Unavailable:  this.state.times
        }
        console.log(Unavailable);
        axios.post("/room/pushTimes/",Unavailable)
            .then(res => console.log(res.data));

        alert('Rooms Allocated!');
        this.setState({
        })

    }

    render() {
        return(
            <div>

                <form className="form-inline">

                    <h5 className='mt-3'>Room</h5> &nbsp;
                </form>


                    <div className="room">

                        <form className="form-inline">

                            <select className="form-control  w-25"
                                    style={{width: "50%"}}
                                    placeholder='Room'
                                    value={this.state.room}
                                    onChange={this.onChangeRooms}
                            >
                                <option selected style={{fontSize: "15px"}}>Choose room...</option>
                                {this.state.roomData.map(room =>{
                                    return(
                                        <option value={room.room}>{room.room}</option>
                                    )
                                })}

                            </select>
                        </form>

                        <form className='form-inline'>
                    <h5 className='mt-3'>Date and time</h5>
                            <button id="add_field_button" className="btn btn-success"
                                    type='button'
                                    style={{width: '30px',
                                        height: '30px',
                                        padding: '2px',
                                        borderRadius: '15px',
                                        textAlign: 'center',
                                        fontSize: '15px',
                                        // lineHeight: '1.42857',
                                        marginLeft:'5px',
                                    }}
                                    onClick={this.handleAddTime}
                            >+
                            </button>
                        </form>
                        {this.state.times.map((time, idx) => (
                            <div>
                        <form className='form-inline'>
                            <select className="form-control rooms w-25" id="room"
                                    style={{width: "50%"}}
                                    placeholder={`Day`}
                                    value={time.day}
                                    onChange={this.handleDayChange(idx)}
                            >
                                <option selected style={{fontSize: "15px"}}>Choose Day..</option>
                               <option>Monday</option>
                               <option>Tuesday</option>
                               <option>Wednesday</option>
                               <option>Thursday</option>
                               <option>Friday</option>
                               <option>Saturday</option>
                               <option>Sunday</option>

                            </select>
                            <input className='form-control-sm ml-2' type='time' onChange={this.handleTimeChange(idx)} value={time.time}/>
                            &nbsp;
                            <button
                                type="button"
                                onClick={this.handleRemoveTimes(idx)}
                                className="btn btn-danger btn-sm"
                            >
                                X
                            </button>
                        </form>
                            </div>
                            ))}



                <br/>
                <div className="form-group mx-sm-3 mb-2 text-center">
                    <button type="submit" className="btn my-1" onClick={this.AddRoomAllocation}>
                        Add Room Allocation
                    </button>
                </div>
            </div>
            </div>
        );
    }

}
export default UnavailableTimes
