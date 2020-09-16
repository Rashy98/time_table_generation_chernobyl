import React,{Component} from "react";
import axios from "axios";
import TagNav from "./timeNav"
// import RoomAllocationMain from "./RoomAllocationMain";
import location from "../assets/css/location.css"
import stat from "../assets/css/stats.css";

class ParallelSessions extends Component{
    constructor(props) {
        super(props);

        this.state={
            rooms:[{room:""}],
            Newrooms:[],
            tags:[],
            roomData:[],
            selectedTag:"",

        }

        this.handleRoomsNameChange = this.handleRoomsNameChange.bind(this);
        this.handleAddRooms = this.handleAddRooms.bind(this);
        this.handleRemoveRoom = this.handleRemoveRoom.bind(this);
        this.onChangeRooms = this.onChangeRooms.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
        this.GetID = this.GetID.bind(this);
        this.AddRoomAllocation = this.AddRoomAllocation.bind(this);
    }

    handleRoomsNameChange = idx => evt => {
        const newRooms = this.state.rooms.map((Nroom, ridx) => {
            if (idx !== ridx)
                return Nroom;
            return { ...Nroom, room: evt.target.value };
        });

        const newr = this.state.Newrooms.map((Nroom, ridx) => {
            if (idx !== ridx)
                return Nroom;
            return { ...Nroom, room: evt.target.value };
        });

        this.setState({ rooms: newRooms });
        this.setState({
            Newrooms:newr
        })
    };

    handleAddRooms = () => {
        this.setState({
            rooms: this.state.rooms.concat([{room:" " }])
        });
    };

    handleRemoveRoom = idx => () => {
        this.setState({
            rooms: this.state.rooms.filter((s, ridx) => idx !== ridx)
        });
    };

    onChangeRooms(e){
        this.setState({
            rooms: e.target.value
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

    GetID(){
        let newRooms = [];
        this.state.rooms.map(room =>{
            newRooms.push(room.room);
        })

        return newRooms;

    }

    AddRoomAllocation(e) {
        e.preventDefault();


        let tagId =  this.state.tags.map(tag=>{
            if(tag.tag === this.state.selectedTag){
                return tag._id
            }
        })
        const rooms = {
            _id:tagId,
            rooms:  this.GetID()
        }
        console.log(rooms);
        axios.post("/tag/pushRooms/",rooms)
            .then(res => console.log(res.data));

        alert('Rooms Allocated!');
        this.setState({
            selectedBuilding: '',
            room: '',
            capacity: 0,
            type: ''
        })

    }

    render() {
        return(
            <div className="main">
                <TagNav/>
                <h3> Parallel Sessions Allocation</h3>
                <div className="form">

                    <form className="form-inline">

                        <h5 className='mt-3'>Sellect a Session to Allocate</h5>
                        <button id="add_field_button" className="btn btn-success"
                                type='button'
                                style={{width: '30px',
                                    height: '30px',
                                    padding: '2px',
                                    borderRadius: '15px',
                                    textAlign: 'center',
                                    fontSize: '15px',
                                    // lineHeight: '1.42857',
                                    marginLeft:'20px',
                                    marginTop:'10px',

                                }}
                                onClick={this.handleAddRooms}
                        >+
                        </button>
                    </form>
                    {this.state.rooms.map((room, idx) => (

                        <div className="room">

                            <form className="form-inline">

                                <select className="form-control rooms " id="room"
                                        style={{width: "50%"}}
                                        placeholder={`Room #${idx+1}`}
                                        value={room.room}
                                        onChange={this.handleRoomsNameChange(idx)}
                                >
                                    <option selected style={{fontSize: "15px"}}>Choose room...</option>
                                    {this.state.roomData.map(room =>{
                                        return(
                                            <option value={room.room}>{room.room}</option>
                                        )
                                    })}

                                </select>

                                &nbsp;
                                <button
                                    type="button"
                                    onClick={this.handleRemoveRoom(idx)}
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
                            Allocate Sessions
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}
export default ParallelSessions
