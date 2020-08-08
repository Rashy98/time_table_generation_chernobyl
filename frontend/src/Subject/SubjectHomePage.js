import React, {Component} from "react";
import SubNav from "./Common/SubNav";
import SubPic from "../Subject/Common/sub.jpg";

export default class SubjectHomePage extends Component{

    render() {
        return(
            <div className="main">
                <SubNav/>
                <h3> Subject Details </h3>
                <div className="form">
                    <form>
                        <div>
                            <img className="MainPic" src={SubPic} alt={"Main Pic"}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}