import React,{Component} from "react";
import axios from "axios";
import RoomAllocationMain from "./RoomAllocationMain";

class TagAndSub extends Component{
    constructor(props) {
        super(props);

        this.state={
            rooms:[{tag:"",room:""}],
            Newrooms:[],
            subjects:[],
            tags:[],
            roomData:[],
            selectedTag:"",
            selectedSub:"",
            roomsInDB:[],

        }

        this.handleRoomsNameChange = this.handleRoomsNameChange.bind(this);
        this.handleAddRooms = this.handleAddRooms.bind(this);
        this.handleRemoveRoom = this.handleRemoveRoom.bind(this);
        this.onChangeRooms = this.onChangeRooms.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
        this.onChangeSub = this.onChangeSub.bind(this);
        this.GetID = this.GetID.bind(this);
        this.AddRoomAllocation = this.AddRoomAllocation.bind(this);
    }

    handleRoomsNameChange = idx => evt => {
        const newRooms = this.state.rooms.map((Nroom, ridx) => {
            if (idx !== ridx)
                return Nroom;
            return { ...Nroom, room: evt.target.value , tag: this.state.selectedTag};
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

        console.log(this.state.roomsInDB);


    };
    handleTagsChange = evt => {
        const newTags = this.state.rooms.map((Nroom, ridx) => {
            // if (idx !== ridx)
                return Nroom;
            return { ...Nroom, tag: evt.target.value };
        });

        this.setState({ rooms: newTags });

    };

    handleAddRooms = () => {
        this.setState({
            rooms: this.state.rooms.concat([{tag:"",room:" " }])
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
    onChangeSub(e){
        this.setState({
            selectedSub:e.target.value
        })

        this.state.subjects.map(sub =>{
            if(sub.subject === e.target.value) {
                sub.rooms.map(subT =>{
                    if(subT.tag === this.state.selectedTag){
                        console.log(subT.room);
                        this.setState(previousState => ({
                            roomsInDB: [...previousState.roomsInDB, subT.room]
                        }))

                    }
                })

            }
        })
    }

    Validation(){
        let valid = true;

        this.state.roomsInDB.map(room =>{
            this.state.rooms.map(r =>{
                if(room === r.room){
                    console.log(room,r);
                    valid = false;
                }
            })
        })

        return valid;
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
        axios.get('/subject/')
            .then(response => {
                this.setState({
                    subjects: response.data,
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


        if(this.Validation()) {
            let subID = this.state.subjects.map(sub => {
                if (sub.subject === this.state.selectedSub) {
                    return sub._id
                }
            })


            const Subs = {
                _id: subID,
                rooms: this.state.rooms
            }
            console.log(Subs);
            axios.post("/subject/pushRooms/", Subs)
                .then(res => console.log(res.data));

            alert('Rooms Allocated!');
            this.setState({
                rooms: [{tag: "", room: ""}],
                selectedTag: "",
                selectedSub: ""
            })
        }
        else{
            alert('One,some or all rooms are already allocated to '+this.state.selectedSub + "'s " +this.state.selectedTag);
        }

    }

    render() {
        return(
            <div >
                {/*{this.state.rooms.map((room, idx) => (*/}
                    <div>
                    <h5 className='mt-4'>Tag</h5>
                    <label className="sr-only" htmlFor="inlineFormCustomSelectPref">Tag</label>
                    <select className="form-control w-50" id="inlineFormCustomSelectPref"
                            value={this.state.selectedTag}
                            onChange={this.onChangeTag}>
                        <option selected style={{fontSize: '15px'}}>Choose Tag...</option>
                        {this.state.tags.map(tag =>{
                            return(
                                <option value={tag.tag}>{tag.tag}</option>
                            )

                        })}

                    </select>
                    </div>
                    {/*))}*/}

                    <h5 className='mt-3'>Subject</h5>
                    <label className="sr-only" htmlFor="inlineFormCustomSelectPref">Tag</label>
                    <select className="form-control w-50" id="inlineFormCustomSelectPref" value={this.state.selectedSub}
                            onChange={this.onChangeSub}>
                        <option selected style={{fontSize: '15px'}}>Choose Subject...</option>
                        {this.state.subjects.map(sub =>{
                            return(
                                <option value={sub.subject}>{sub.subject}</option>
                            )

                        })}

                    </select>
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
                            Add Room Allocation
                        </button>
                    </div>
                </div>
        );
    }

}
export default TagAndSub
