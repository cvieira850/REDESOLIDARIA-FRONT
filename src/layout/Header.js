import React, { Component } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink
} from "mdbreact";
//import { connect } from "react-redux";
import { logout } from "../actions";
import "./header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: ""
        };
    }

    setNav = event => {
        this.setState({ activeItem: event.target.name });
    };

    logout = () => {
        this.props.logout();
        window.location = "/";
    };

    render() {
        const { activeItem } = this.state;

        return (
            <header className="header">
                <Navbar color="" dark expand="md" scrolling>
                    <NavbarBrand href="/welcome" onClick={this.resetActiveNav}>
                        <strong>Rede Solidária </strong>
                    </NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <NavbarNav left>
                            <NavItem
                                className="header__nav-item"
                                active={activeItem === "market"}
                                onClick={this.setNav}
                            >
                                <NavLink to="/market" name="market">
                                    Feira Orgânica
                                </NavLink>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <button
                                className="logout text-white waves-effect waves-light"
                                onClick={this.logout}
                            >
                                Sair
                            </button>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}

//export default connect(    null,    { logout })(Header);
export default Header;
