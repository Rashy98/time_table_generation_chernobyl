import React,{Component} from "react";
import axios from "axios";
import mongoose from "mongoose"

import RoomAllocationMain from "./RoomAllocationMain";
import {any} from "prop-types";

class SessionRoomAll extends Component{
    constructor(props) {
        super(props);

        this.state={
            rooms:[{room:""}],
            Newrooms:[],
            lecturers:[],
            sessions:[],
            roomData:[],
            selectedSession:"",
            selectedID:any,
            S_session:any,
            selectedDSession:"",
            genSessions:[],
            sessData:[],



        }

        this.handleRoomsNameChange = this.handleRoomsNameChange.bind(this);
        this.handleAddRooms = this.handleAddRooms.bind(this);
        this.handleRemoveRoom = this.handleRemoveRoom.bind(this);
        this.onChangeRooms = this.onChangeRooms.bind(this);
        this.onChangeSession = this.onChangeSession.bind(this);
        this.onChangeLec = this.onChangeLec.bind(this);
        this.GetID = this.GetID.bind(this);
        this.AddRoomAllocation = this.AddRoomAllocation.bind(this);
        this.selectedID= this.selectedID.bind(this);
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
    onChangeLec(e){
        this.setState({
            selectedTag:e.target.value
        })
    }
    onChangeSession (e){
        let index = e.target.selectedIndex;
        let el = e.target.childNodes[index]
        let selectedId=  el.getAttribute('id');

        this.setState({
            selectedSession:e.target.value,
            S_session:e.target.value,
            selectedID:selectedId
        })

        console.log(selectedId,e.target.value)
    }
    selectedID(id){
        this.setState(
            {
                selectedID : id
            }
        )
    }

    componentDidMount() {
        axios.get('/generatedSession/viewGeneratedSession')
            .then(response => {
                this.setState({
                    sessions: response.data,


                })
                console.log(this.state.sessions[0].GeneratedSession);
            })
        axios.get('/session/viewSession')
            .then(response => {
               this.setState({ sessData:response.data})
                console.log(response.data);
            })


        console.log(this.state.sessions)
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


        let sessId =  this.state.sessions.map(session=>{
            console.log(session.GeneratedSession, this.state.selectedSession)
            if(session.GeneratedSession === this.state.selectedSession){

                return session.GeneratedSessionID
            }
        })

        console.log(this.state.selectedID);
        const rooms = {
            _id:this.state.selectedID,
            rooms:  this.GetID()
        }
        console.log(rooms);

        axios.post("/session/pushRooms/",rooms)
            .then(res => console.log(res.data));

        alert('Rooms Allocated!');
        this.setState({
            selectedSession:"",
            newRooms:[]
        })

    }

    render() {
        return(
            <div >

                <h5 className='mt-4'>Session</h5>
                <label className="sr-only" htmlFor="inlineFormCustomSelectPref">Session</label>

                        <select className="form-control w-50" id={this.state.selectedID}
                                value={this.state.selectedSession}
                                onChange={this.onChangeSession}>
                            <option selected style={{fontSize: '15px'}}>Choose Session...</option>
                            {this.state.sessions.map((sess,id) => {
                                return (
                                    <option value={sess.GeneratedSession} id={sess.GeneratedSessionID}>
                                        {sess.GeneratedSession}
                                    </option>
                                )
                            })}
                        </select>



                {/*{console.log(this.state.selectedSession)}*/}

                <input  className="form-control mt-1" style={{width:'50%', height:'10em'}} value={this.state.S_session}>
                    {/*{this.state.S_session.split('\n').map( (it, i) =>*/}
                    {/*    <div key={'x'+i}>{it}</div>*/}
                    {/*)}*/}
                </input>

                <form className="form-inline">
                    <h5 className='mt-3'>Room</h5>
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
                            onClick={this.handleAddRooms}
                    >+
                    </button>
                </form>
                {this.state.rooms.map((room, idx) => (

                    <div className="room">

                        <form className="form-inline">

                            <select className="form-control rooms w-25" id="room"
                                    style={{width: "50%"}}
                                    placeholder={`Room #${idx+1}`}
                                    value={room.room}
                                    onChange={this.handleRoomsNameChange(idx)}
                            >
                                <option selected style={{fontSize: "15px"}}>Choose room...</option>
                                {this.state.roomData.map(room =>{
                                    if(room.room !== room.room) {
                                        return (
                                            <option value={room.room}>{room.room}</option>
                                        )
                                    }
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
                        Add Room Allocation
                    </button>
                </div>
            </div>
        );
    }

}
export default SessionRoomAll;
