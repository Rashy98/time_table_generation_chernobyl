import React,{Component} from "react";
import {NavLink} from "react-router-dom";

export default class SubNav extends Component{
    render() {
        return (
            <div>
                <nav className="navbar">
                    <NavLink
                        exact
                        activeClassName="navbar__link--active"
                        className="navbar__link"
                        to="/AddSub"
                    >
                        Add Subject
                    </NavLink>

                    <NavLink
                        activeClassName="navbar__link--active"
                        className="navbar__link"
                        to="/ViewSub"
                    >
                        View Subject
                    </NavLink>
                </nav>
            </div>
        );
    }
}