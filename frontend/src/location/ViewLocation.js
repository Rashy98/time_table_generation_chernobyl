import React, { Component } from 'react';
import location from "../assets/css/location.css"
import stat from "../assets/css/stats.css"
import common from "../assets/css/common.css"
import LocNav from "./locationNav";
import {Link} from 'react-router-dom';
import {Button, Container, Spinner, Table} from "react-bootstrap";
import axios from 'axios';
// import {connect} from "react-redux";


const Building = props => (

    <tr>
        <td>{props.building.building}</td>
        <td>
            <button className="btn my-1" ><Link style={{color:"lavender"}}
                // to={"/EditCategory/"+props.category._id}
            >Edit</Link></button>
            &nbsp;
        <button className="btn my-1">

            <a href="#" style={{color:"lavender"}}
               // onClick={() => {props.RemoveBuilding(props.building._id)}}
            >
                Delete</a></button>
        </td>
    </tr>
)


class ViewBuilding extends Component {
    constructor(props) {
        super(props);

        this.RemoveBuilding = this.RemoveBuilding.bind(this);

        this.state = {
            buildings: [],
            loading: true,
        };

    }

    componentDidMount() {
        axios.get('/building/')
            .then(response => {
                this.setState({
                    buildings: response.data,
                    loading:false
                })
                console.log(response.data);

            })
            .catch((error) => {
                console.log(error);
            })


    }

    RemoveBuilding(id) {
        axios.delete('/building/' + id)
            .then(res => console.log(res.data));

        this.setState({
            buildings: this.state.building.filter(el => el._id != id)
        })
    }

   BuildingList() {
        return this.state.buildings.map(building => {
            return <Building building={building} RemoveBuilding={this.RemoveBuilding}
                             key={building._id}/>;
        })
    }

    render() {

            return (
                <div id="page-container" className='main'>
                    <LocNav/>

                    <Container>
                            <h3>View Location</h3>
                        <Table responsive style={{bgColor:"lavender"}}>
                            <thead className="thead-light">
                            {this.state.loading ? <center><Spinner animation="border" /></center> :
                                <tr>
                                    <th>Building</th>
                                    <th>Action</th>
                                </tr>
                            }
                            </thead>
                            <tbody>
                            {this.BuildingList()}
                            </tbody>
                        </Table>
                    </Container>



                </div>
            );
    }
}
export default ViewBuilding;
