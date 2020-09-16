import React,{Component} from "react";
import axios from "axios";
import TagNav from "./timeNav"
// import RoomAllocationMain from "./RoomAllocationMain";
import location from "../assets/css/location.css"
import stat from "../assets/css/stats.css";

class ConsecutiveSessions extends Component{
    constructor(props) {
        super(props);

        this.state={
            rooms:[{room:""}],
            Newrooms:[],
            session:"",
            sessionss:[],
            ConSessions:[],
            selectedTag:"",

        }

        this.handleSessionNameChange = this.handleSessionNameChange.bind(this);
        this.handleAddRooms = this.handleAddRooms.bind(this);
        this.handleRemoveRoom = this.handleRemoveRoom.bind(this);
        this.onChangeSessions = this.onChangeSessions.bind(this);
        // this.onChangeTag = this.onChangeTag.bind(this);
        // this.GetID = this.GetID.bind(this);
        this.AddRoomAllocation = this.AddRoomAllocation.bind(this);
    }

    handleSessionNameChange = idx => evt => {
        const newSessions = this.state.sessions.map((Nsession, ridx) => {
            if (idx !== ridx)
                return Nsession;
            return { ...Nsession, session: evt.target.value };
        });

        const news = this.state.newSessions.map((Nsession, ridx) => {
            if (idx !== ridx)
                return Nsession;
            return { ...Nsession, room: evt.target.value };
        });

        this.setState({ sessions: newSessions });
        this.setState({
            Newsessions:news
        })
    };

    handleAddRooms = () => {
        this.setState({
            sessions: this.state.sessions.concat([{session:" " }])
        });
    };

    handleRemoveRoom = idx => () => {
        this.setState({
            sessions: this.state.sessions.filter((s, ridx) => idx !== ridx)
        });
    };

    onChangeSessions(e){
        this.setState({
            sessions: e.target.value
        })
    }


    componentDidMount() {
        axios.get('/session/viewSession')
            .then(response => {
                this.setState({
                    sessions: response.data,
                })
            })

    }

    // GetID(){
    //     let newRooms = [];
    //     this.state.rooms.map(room =>{
    //         newRooms.push(room.room);
    //     })
    //
    //     return newRooms;
    //
    // }

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
                <h3> Consecutive Sessions Allocation</h3>
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
                {/*{this.state.sessions.map((session, idx) => (*/}

                {/*    <div className="room">*/}

                {/*        <form className="form-inline">*/}

                {/*            <select className="form-control rooms " id="room"*/}
                {/*                    style={{width: "50%"}}*/}
                {/*                    placeholder={`Room #${idx+1}`}*/}
                {/*                    value={this.state.selectedSession}*/}
                {/*                    onChange={this.onChangeSessions}*/}
                {/*            >*/}
                {/*                <option selected style={{fontSize: "15px"}}>Choose Session...</option>*/}
                {/*                {this.state.groups.map(session =>{*/}
                {/*                    return(*/}
                {/*                        <option value={session.SubName}>{session.SubName}</option>*/}
                {/*                    )*/}
                {/*                })}*/}

                {/*            </select>*/}

                {/*            &nbsp;*/}
                {/*            <button*/}
                {/*                type="button"*/}
                {/*                onClick={this.handleRemoveRoom(idx)}*/}
                {/*                className="btn btn-danger btn-sm"*/}
                {/*            >*/}
                {/*                X*/}
                {/*            </button>*/}
                {/*        </form>*/}

                {/*    </div>*/}
                {/*))}*/}

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
export default ConsecutiveSessions
