import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
    constructor() {
        super();
        this.handleMenuClick = this.handleMenuClick.bind(this);
    };
    handleMenuClick = (event) => {
        event.preventDefault();
        this.props.toggleMenu(!this.props.menuOpen);
    };
    render() {
        return (
            <header className="py-3 py-lg-4 mb-auto w-100 d-flex justify-content-start align-items-center">
                <a href="#" onClick={this.handleMenuClick} className="h5 mb-0 mr-3">
                    <i className="fas fa-bars"></i>
                </a>
                <span className="h2 m-0 text-truncate">{this.props.singleLocation[0].Name}, {this.props.country}.</span>
            </header>
        );
    }
}
Header.propTypes = {
    handleMenuClick: PropTypes.func
};
export default Header;